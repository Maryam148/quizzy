import { NextResponse } from 'next/server'
import { sendQuizResults } from '@/lib/email'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { topic, score, totalQuestions, userEmail } = body

        if (!topic || score === undefined || !totalQuestions || !userEmail) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const percentage = Math.round((score / totalQuestions) * 100)

        const result = await sendQuizResults({
            topic,
            score,
            totalQuestions,
            percentage,
            userEmail,
        })

        if (result.success) {
            return NextResponse.json({ success: true })
        } else {
            return NextResponse.json(
                { error: 'Failed to send emails' },
                { status: 500 }
            )
        }
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
