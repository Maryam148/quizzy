'use server'

import { auth } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Zod schema for question validation
const questionSchema = z.object({
    question_text: z.string().min(5, 'Question must be at least 5 characters'),
    options: z.array(z.string().min(1, 'Option cannot be empty')).length(4, 'Must have exactly 4 options'),
    correct_option_index: z.number().min(0).max(3, 'Correct answer must be between 0 and 3'),
})

// Zod schema for quiz validation
export const quizSchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    duration_minutes: z.number().min(1).optional(),
    passing_score: z.number().min(1).optional(),
    questions: z.array(questionSchema).min(1, 'Quiz must have at least 1 question'),
})

export type QuizFormData = z.infer<typeof quizSchema>

/**
 * Server action to create a new quiz with questions
 */
export async function createQuiz(data: QuizFormData) {
    try {
        const { userId } = await auth()

        if (!userId) {
            return { error: 'You must be logged in to create a quiz' }
        }

        // Verify user is admin
        const { data: profile } = await supabaseAdmin
            .from('profiles')
            .select('role')
            .eq('clerk_user_id', userId)
            .single()

        if (profile?.role !== 'admin') {
            return { error: 'Only admins can create quizzes' }
        }

        // Validate data
        const validatedData = quizSchema.parse(data)

        // Insert quiz
        const { data: quiz, error: quizError } = await supabaseAdmin
            .from('quizzes')
            .insert({
                title: validatedData.title,
                description: validatedData.description,
                created_by: userId,
                duration_minutes: validatedData.duration_minutes,
                passing_score: validatedData.passing_score,
                total_questions: validatedData.questions.length,
                is_active: true,
            })
            .select()
            .single()

        if (quizError) {
            console.error('Quiz creation error:', quizError)
            return { error: 'Failed to create quiz: ' + quizError.message }
        }

        // Prepare questions for batch insert
        const questionsToInsert = validatedData.questions.map((q, index) => ({
            quiz_id: quiz.id,
            question_text: q.question_text,
            options: q.options,
            correct_option_index: q.correct_option_index,
            order_index: index,
        }))

        // Batch insert questions
        const { error: questionsError } = await supabaseAdmin
            .from('questions')
            .insert(questionsToInsert)

        if (questionsError) {
            console.error('Questions insertion error:', questionsError)
            // Try to delete the quiz if questions failed
            await supabaseAdmin.from('quizzes').delete().eq('id', quiz.id)
            return { error: 'Failed to create questions: ' + questionsError.message }
        }

        // Revalidate admin pages
        revalidatePath('/admin')
        revalidatePath('/admin/quizzes')

        return {
            success: true,
            quizId: quiz.id,
            message: `Quiz "${quiz.title}" created successfully with ${validatedData.questions.length} questions!`
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { error: 'Validation error: ' + error.issues[0].message }
        }
        console.error('Unexpected error:', error)
        return { error: 'An unexpected error occurred' }
    }
}

/**
 * Server action to get all quizzes
 */
export async function getQuizzes() {
    const { data: quizzes, error } = await supabaseAdmin
        .from('quizzes')
        .select(`
      *,
      profiles:created_by (full_name, email)
    `)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching quizzes:', error)
        return { error: error.message }
    }

    return { quizzes }
}
