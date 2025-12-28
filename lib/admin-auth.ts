import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Profile } from '@/types'

/**
 * Get current user's profile from the database
 * Must be called from server components or API routes
 */
export async function getCurrentUserProfile(): Promise<Profile | null> {
    try {
        const supabase = await createClient()

        const { data: { user }, error: authError } = await supabase.auth.getUser()

        if (authError || !user) {
            return null
        }

        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()

        if (profileError || !profile) {
            return null
        }

        return profile as Profile
    } catch (error) {
        console.error('Error getting user profile:', error)
        return null
    }
}

/**
 * Check if current user is an admin
 * Returns the profile if admin, null otherwise
 */
export async function verifyAdmin(): Promise<Profile | null> {
    const profile = await getCurrentUserProfile()

    if (!profile || profile.role !== 'admin') {
        return null
    }

    return profile
}

/**
 * Require admin access - redirects to login if not admin
 * Use in server components to protect admin pages
 */
export async function requireAdmin(): Promise<Profile> {
    try {
        const profile = await verifyAdmin()

        if (!profile) {
            redirect('/login?error=admin_required')
        }

        return profile
    } catch (error) {
        // If there's an error during verification, redirect to login
        console.error('Error in requireAdmin:', error)
        redirect('/login?error=admin_required')
    }
}
