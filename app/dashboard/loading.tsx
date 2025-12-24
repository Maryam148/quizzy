import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Navbar from '@/components/Navbar'

export default function DashboardLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Skeleton */}
                    <div className="mb-8">
                        <Skeleton className="h-9 w-64 mb-2 bg-slate-700/50" />
                        <Skeleton className="h-5 w-96 bg-slate-700/50" />
                    </div>

                    {/* Quiz Cards Skeleton */}
                    <div className="mb-6">
                        <Skeleton className="h-8 w-48 bg-slate-700/50" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Card
                                key={i}
                                className="border-slate-700 bg-slate-800/50 backdrop-blur-xl shadow-lg"
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <Skeleton className="h-6 w-3/4 bg-slate-700/50" />
                                        <Skeleton className="h-5 w-16 bg-slate-700/50" />
                                    </div>
                                    <Skeleton className="h-4 w-full bg-slate-700/50" />
                                    <Skeleton className="h-4 w-5/6 bg-slate-700/50" />
                                </CardHeader>

                                <CardContent className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Skeleton className="h-5 w-full bg-slate-700/50" />
                                        <Skeleton className="h-5 w-full bg-slate-700/50" />
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <Skeleton className="h-10 w-full bg-slate-700/50" />
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
