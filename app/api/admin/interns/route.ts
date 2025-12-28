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
        const search = searchParams.get('search') || ''
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '20')
        const sortBy = searchParams.get('sortBy') || 'created_at'
        const sortOrder = searchParams.get('sortOrder') || 'desc'

        const offset = (page - 1) * limit
        const supabase = await createClient()

        // Get all interns
        let query = supabase
            .from('profiles')
            .select('*', { count: 'exact' })
            .eq('role', 'intern')

        // Apply search filter
        if (search) {
            query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`)
        }

        // Apply sorting
        query = query.order(sortBy, { ascending: sortOrder === 'asc' })

        // Apply pagination
        query = query.range(offset, offset + limit - 1)

        const { data: interns, count, error: internsError } = await query

        if (internsError) throw internsError

        // Get stats for each intern
        const internsWithStats = await Promise.all(
            (interns || []).map(async (intern) => {
                // Get completed submissions
                const { data: submissions } = await supabase
                    .from('submissions')
                    .select('score, total_questions, status, completed_at')
                    .eq('user_id', intern.id)

                // Get in-progress quizzes
                const { data: progress } = await supabase
                    .from('quiz_progress')
                    .select('quiz_id, last_updated')
                    .eq('user_id', intern.id)

                const completedSubmissions = submissions?.filter(s => s.status === 'completed') || []
                const quizzesCompleted = completedSubmissions.length
                const quizzesInProgress = progress?.length || 0

                // Calculate average score
                let averageScore = 0
                if (quizzesCompleted > 0) {
                    const totalScore = completedSubmissions.reduce((acc, s) => {
                        return acc + (s.score / s.total_questions) * 100
                    }, 0)
                    averageScore = Math.round(totalScore / quizzesCompleted)
                }

                // Get last active timestamp
                const lastSubmission = submissions?.sort((a, b) =>
                    new Date(b.completed_at || 0).getTime() - new Date(a.completed_at || 0).getTime()
                )[0]

                const lastProgress = progress?.sort((a, b) =>
                    new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime()
                )[0]

                const lastActiveAt = lastSubmission?.completed_at || lastProgress?.last_updated || null

                return {
                    ...intern,
                    quizzesCompleted,
                    quizzesInProgress,
                    averageScore,
                    lastActiveAt
                }
            })
        )

        return NextResponse.json({
            interns: internsWithStats,
            pagination: {
                page,
                limit,
                total: count || 0,
                totalPages: Math.ceil((count || 0) / limit)
            }
        })
    } catch (error) {
        console.error('Error fetching interns:', error)
        return NextResponse.json(
            { error: 'Failed to fetch interns' },
            { status: 500 }
        )
    }
}
