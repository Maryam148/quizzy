import { createClient } from '@supabase/supabase-js'

/**
 * Supabase client for database operations only (not auth)
 * Auth is handled by Clerk
 */
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/**
 * Get Supabase client with service role for admin operations
 * Use sparingly and only on the server
 * 
 * TODO: Add SUPABASE_SERVICE_ROLE_KEY to .env.local
 */
export const supabaseAdmin = process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    : null as any // Temporary fallback until key is added
