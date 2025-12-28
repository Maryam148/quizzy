'use client'

export default function AdminLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 animate-pulse"></div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-white font-medium">Loading Admin Panel</p>
                    <p className="text-muted-foreground text-sm animate-pulse">Verifying access...</p>
                </div>
            </div>
        </div>
    )
}
