import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        console.log('[Test API] Testing Supabase connection...')

        const supabase = await createClient()

        // Test 1: Check if we can get user
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        console.log('[Test API] User check:', user?.id || 'Not authenticated', userError)

        if (!user) {
            return NextResponse.json({
                success: false,
                error: 'Not authenticated',
                message: 'Please log in first'
            })
        }

        // Test 2: Try to query quiz_progress table
        const { data, error } = await supabase
            .from('quiz_progress')
            .select('*')
            .eq('user_id', user.id)

        console.log('[Test API] Query result:', {
            rowCount: data?.length || 0,
            error: error?.message
        })

        if (error) {
            return NextResponse.json({
                success: false,
                error: error.message,
                code: error.code,
                details: error.details,
                hint: error.hint
            })
        }

        return NextResponse.json({
            success: true,
            user: { id: user.id, email: user.email },
            progressCount: data?.length || 0,
            progress: data
        })
    } catch (error: any) {
        console.error('[Test API] Error:', error)
        return NextResponse.json({
            success: false,
            error: error.message
        })
    }
}
