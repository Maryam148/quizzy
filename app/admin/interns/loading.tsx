'use client'

export default function InternsLoading() {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin"></div>
                <p className="text-muted-foreground text-sm animate-pulse">Loading interns...</p>
            </div>
        </div>
    )
}
