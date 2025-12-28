import Link from "next/link"
import { AdminSidebar } from "@/components/admin-sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { verifyAdmin } from "@/lib/admin-auth"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
import { AccessDenied } from "@/components/admin/access-denied"

export const dynamic = 'force-dynamic'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Server-side admin verification
    // We use verifyAdmin instead of requireAdmin to prevent auto-redirect loops
    const adminProfile = await verifyAdmin()

    if (!adminProfile) {
        return <AccessDenied />
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <AdminSidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="flex h-14 items-center gap-4 border-b border-border/40 glass-nav px-6 lg:h-[60px] sticky top-0 z-40 shrink-0">
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold text-white drop-shadow-md">Command Center</h1>
                        <p className="text-xs text-muted-foreground">Welcome, {adminProfile.full_name}</p>
                    </div>
                    <Link href="/dashboard">
                        <Button variant="outline" size="sm" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300">
                            <UserCircle className="h-4 w-4 mr-2" />
                            Intern Portal
                        </Button>
                    </Link>
                    <ModeToggle />
                </header>
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
