import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export async function GET(request: NextRequest) {
    try {
        // Verify admin access
        const admin = await verifyAdmin()
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const limit = parseInt(searchParams.get('limit') || '10')

        const supabase = await createClient()

        // Get top performers from leaderboard
        const { data: leaderboardEntries, error: leaderboardError } = await supabase
            .from('leaderboard')
            .select('*')
            .order('score', { ascending: false })
            .order('time_taken_seconds', { ascending: true })
            .limit(limit * 2) // Get extra to ensure we have enough after deduplication

        if (leaderboardError) throw leaderboardError

        // Get unique performers (best score per user)
        const userBestScores = new Map<string, any>()

        leaderboardEntries?.forEach(entry => {
            const existingEntry = userBestScores.get(entry.email || entry.username)
            if (!existingEntry ||
                entry.score > existingEntry.score ||
                (entry.score === existingEntry.score && entry.time_taken_seconds < existingEntry.time_taken_seconds)) {
                userBestScores.set(entry.email || entry.username, entry)
            }
        })

        const topPerformers = Array.from(userBestScores.values())
            .sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score
                return a.time_taken_seconds - b.time_taken_seconds
            })
            .slice(0, limit)
            .map((entry, index) => ({
                rank: index + 1,
                id: entry.id,
                username: entry.username,
                email: entry.email,
                topic: entry.topic,
                difficulty: entry.difficulty,
                score: entry.score,
                totalQuestions: entry.total_questions,
                percentage: Math.round((entry.score / entry.total_questions) * 100),
                timeTakenSeconds: entry.time_taken_seconds,
                createdAt: entry.created_at
            }))

        // Also get aggregated stats by intern
        const { data: profiles } = await supabase
            .from('profiles')
            .select('id, email, full_name')
            .eq('role', 'intern')

        // Get submission stats for ranking by overall performance
        const internStats = await Promise.all(
            (profiles || []).map(async (profile) => {
                const { data: submissions } = await supabase
                    .from('submissions')
                    .select('score, total_questions, status')
                    .eq('user_id', profile.id)
                    .eq('status', 'completed')

                if (!submissions || submissions.length === 0) {
                    return null
                }

                const totalScore = submissions.reduce((acc, s) => acc + (s.score / s.total_questions) * 100, 0)
                const averageScore = Math.round(totalScore / submissions.length)
                const quizzesCompleted = submissions.length

                return {
                    id: profile.id,
                    email: profile.email,
                    fullName: profile.full_name,
                    averageScore,
                    quizzesCompleted,
                    // Weighted score: avg * sqrt(completed) to reward consistency
                    weightedScore: averageScore * Math.sqrt(quizzesCompleted)
                }
            })
        )

        // Filter out null entries and sort by weighted score
        const topByAverage = internStats
            .filter(Boolean)
            .sort((a, b) => (b?.weightedScore || 0) - (a?.weightedScore || 0))
            .slice(0, limit)
            .map((intern, index) => ({
                rank: index + 1,
                ...intern
            }))

        return NextResponse.json({
            topPerformers,        // Best single quiz performances
            topByAverage         // Best overall performers
        })
    } catch (error) {
        console.error('Error fetching top performers:', error)
        return NextResponse.json(
            { error: 'Failed to fetch top performers' },
            { status: 500 }
        )
    }
}
