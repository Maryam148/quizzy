'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { useNavbar } from '@/context/navbar-context'
import { cn } from '@/lib/utils'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const { isVisible } = useNavbar()

    // Routes where the Navbar should be hidden entirely
    const hideNavbarRoutes = ['/login', '/signup', '/forgot-password', '/reset-password', '/test-env']
    const isAuthRoute = hideNavbarRoutes.includes(pathname)

    // Check if Navbar should be visible based on context and route
    const shouldShowNavbar = isVisible && !isAuthRoute

    return (
        <>
            {shouldShowNavbar && <Navbar />}
            <div className={cn(
                "min-h-screen transition-all duration-300",
                shouldShowNavbar ? "md:ml-64" : ""
            )}>
                {children}
            </div>
        </>
    )
}
