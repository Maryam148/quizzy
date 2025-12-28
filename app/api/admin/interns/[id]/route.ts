import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { verifyAdmin } from '@/lib/admin-auth'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Verify admin access
        const admin = await verifyAdmin()
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params
        const supabase = await createClient()

        // Get intern profile
        const { data: intern, error: internError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', id)
            .eq('role', 'intern')
            .single()

        if (internError || !intern) {
            return NextResponse.json(
                { error: 'Intern not found' },
                { status: 404 }
            )
        }

        // Get all submissions for this intern
        const { data: submissions, error: submissionsError } = await supabase
            .from('submissions')
            .select('*')
            .eq('user_id', id)
            .order('started_at', { ascending: false })

        if (submissionsError) throw submissionsError

        // Get quiz progress (in-progress quizzes)
        const { data: progress, error: progressError } = await supabase
            .from('quiz_progress')
            .select('*')
            .eq('user_id', id)
            .order('last_updated', { ascending: false })

        if (progressError) throw progressError

        // Get leaderboard entries for this intern
        const { data: leaderboardEntries, error: leaderboardError } = await supabase
            .from('leaderboard')
            .select('*')
            .eq('email', intern.email)
            .order('created_at', { ascending: false })

        if (leaderboardError) throw leaderboardError

        // Calculate statistics
        const completedSubmissions = submissions?.filter(s => s.status === 'completed') || []
        const quizzesCompleted = completedSubmissions.length
        const quizzesInProgress = progress?.length || 0

        let averageScore = 0
        let highestScore = 0
        let lowestScore = 100
        let totalTimeSpent = 0

        if (quizzesCompleted > 0) {
            completedSubmissions.forEach(s => {
                const percentage = (s.score / s.total_questions) * 100
                averageScore += percentage
                if (percentage > highestScore) highestScore = percentage
                if (percentage < lowestScore) lowestScore = percentage
            })
            averageScore = Math.round(averageScore / quizzesCompleted)
            highestScore = Math.round(highestScore)
            lowestScore = Math.round(lowestScore)
        } else {
            lowestScore = 0
        }

        // Calculate time spent from leaderboard entries
        leaderboardEntries?.forEach(entry => {
            totalTimeSpent += entry.time_taken_seconds || 0
        })

        // Performance over time (last 10 completed quizzes)
        const performanceHistory = completedSubmissions
            .slice(0, 10)
            .map(s => ({
                date: s.completed_at,
                score: Math.round((s.score / s.total_questions) * 100),
                quizId: s.quiz_id
            }))
            .reverse()

        // Get last active timestamp
        const lastActiveAt = submissions?.[0]?.started_at ||
            progress?.[0]?.last_updated ||
            intern.created_at

        return NextResponse.json({
            intern: {
                ...intern,
                quizzesCompleted,
                quizzesInProgress,
                averageScore,
                highestScore,
                lowestScore,
                totalTimeSpent,
                lastActiveAt
            },
            submissions: submissions || [],
            progress: progress || [],
            leaderboardEntries: leaderboardEntries || [],
            performanceHistory
        })
    } catch (error) {
        console.error('Error fetching intern details:', error)
        return NextResponse.json(
            { error: 'Failed to fetch intern details' },
            { status: 500 }
        )
    }
}
