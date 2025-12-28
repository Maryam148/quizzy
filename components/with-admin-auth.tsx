'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Profile } from '@/types'

interface AdminAuthState {
    isLoading: boolean
    isAdmin: boolean
    profile: Profile | null
}

/**
 * Hook to check if current user is an admin
 * Redirects to login if not authenticated or not admin
 */
export function useAdminAuth(redirectOnFail: boolean = true): AdminAuthState {
    const router = useRouter()
    const [state, setState] = useState<AdminAuthState>({
        isLoading: true,
        isAdmin: false,
        profile: null
    })

    useEffect(() => {
        async function checkAdminStatus() {
            try {
                const response = await fetch('/api/admin/verify')
                const data = await response.json()

                if (data.isAdmin) {
                    setState({
                        isLoading: false,
                        isAdmin: true,
                        profile: data.profile
                    })
                } else {
                    setState({
                        isLoading: false,
                        isAdmin: false,
                        profile: null
                    })

                    if (redirectOnFail) {
                        router.push('/login?error=admin_required')
                    }
                }
            } catch (error) {
                console.error('Error checking admin status:', error)
                setState({
                    isLoading: false,
                    isAdmin: false,
                    profile: null
                })

                if (redirectOnFail) {
                    router.push('/login?error=admin_required')
                }
            }
        }

        checkAdminStatus()
    }, [router, redirectOnFail])

    return state
}

/**
 * HOC to protect admin pages
 * Wraps a component and only renders it if user is admin
 */
export function withAdminAuth<P extends object>(
    WrappedComponent: React.ComponentType<P & { adminProfile: Profile }>
) {
    return function AdminProtectedComponent(props: P) {
        const { isLoading, isAdmin, profile } = useAdminAuth()

        if (isLoading) {
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            )
        }

        if (!isAdmin || !profile) {
            return null // Will redirect via useAdminAuth
        }

        return <WrappedComponent {...props} adminProfile={profile} />
    }
}
