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

        const supabase = await createClient()

        // Get total interns count
        const { count: totalInterns, error: internsError } = await supabase
            .from('profiles')
            .select('*', { count: 'exact', head: true })
            .eq('role', 'intern')

        if (internsError) throw internsError

        // Get all submissions for stats
        const { data: submissions, error: submissionsError } = await supabase
            .from('submissions')
            .select('score, total_questions, status, user_id')

        if (submissionsError) throw submissionsError

        // Get quiz progress (active quizzes)
        const { data: activeProgress, error: progressError } = await supabase
            .from('quiz_progress')
            .select('user_id')

        if (progressError) throw progressError

        // Calculate stats
        const totalSubmissions = submissions?.length || 0
        const completedSubmissions = submissions?.filter(s => s.status === 'completed') || []
        const totalCompleted = completedSubmissions.length

        // Average score calculation
        let averageScore = 0
        if (totalCompleted > 0) {
            const totalScorePercentage = completedSubmissions.reduce((acc, s) => {
                return acc + (s.score / s.total_questions) * 100
            }, 0)
            averageScore = Math.round(totalScorePercentage / totalCompleted)
        }

        // Get unique active interns (those with quiz in progress)
        const activeInternIds = new Set(activeProgress?.map(p => p.user_id) || [])
        const activeInterns = activeInternIds.size

        // Completion rate (completed / total attempts)
        const completionRate = totalSubmissions > 0
            ? Math.round((totalCompleted / totalSubmissions) * 100)
            : 0

        // Get today's submissions for trend
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const { count: todaySubmissions } = await supabase
            .from('submissions')
            .select('*', { count: 'exact', head: true })
            .gte('started_at', today.toISOString())

        // Get recent activity (last 24 hours)
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
        const { data: recentActivity } = await supabase
            .from('submissions')
            .select('started_at')
            .gte('started_at', yesterday.toISOString())
            .order('started_at', { ascending: true })

        // Calculate hourly submission rates for chart
        const hourlyRates: number[] = Array(24).fill(0)
        recentActivity?.forEach(submission => {
            const hour = new Date(submission.started_at).getHours()
            hourlyRates[hour]++
        })

        return NextResponse.json({
            totalInterns: totalInterns || 0,
            activeInterns,
            totalSubmissions,
            completedSubmissions: totalCompleted,
            averageScore,
            completionRate,
            todaySubmissions: todaySubmissions || 0,
            hourlyRates
        })
    } catch (error) {
        console.error('Error fetching admin stats:', error)
        return NextResponse.json(
            { error: 'Failed to fetch stats' },
            { status: 500 }
        )
    }
}
