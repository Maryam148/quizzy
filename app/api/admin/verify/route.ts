import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient()

        // Get current user
        const { data: { user }, error: authError } = await supabase.auth.getUser()

        if (authError || !user) {
            return NextResponse.json(
                { error: 'Not authenticated', isAdmin: false },
                { status: 401 }
            )
        }

        // Get user profile to check role
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('id, email, role, full_name')
            .eq('id', user.id)
            .single()

        if (profileError || !profile) {
            return NextResponse.json(
                { error: 'Profile not found', isAdmin: false },
                { status: 404 }
            )
        }

        const isAdmin = profile.role === 'admin'

        return NextResponse.json({
            isAdmin,
            profile: isAdmin ? profile : null
        })
    } catch (error) {
        console.error('Error checking admin status:', error)
        return NextResponse.json(
            { error: 'Internal server error', isAdmin: false },
            { status: 500 }
        )
    }
}
