'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TopPerformer, TopByAverage } from "@/types"

interface TopPerformersTableProps {
    performers: TopPerformer[]
    topByAverage?: TopByAverage[]
    loading: boolean
}

function TableSkeleton() {
    return (
        <div className="space-y-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                    <div className="h-8 w-8 rounded-full bg-white/10 animate-pulse" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                        <div className="h-3 w-20 bg-white/10 rounded animate-pulse" />
                    </div>
                    <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
                </div>
            ))}
        </div>
    )
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs.toString().padStart(2, '0')}s`
}

export function TopPerformersTable({ performers, topByAverage, loading }: TopPerformersTableProps) {
    if (loading) {
        return (
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                    <CardDescription>Loading performance data...</CardDescription>
                </CardHeader>
                <CardContent>
                    <TableSkeleton />
                </CardContent>
            </Card>
        )
    }

    if (performers.length === 0) {
        return (
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                    <CardDescription>No quiz submissions yet</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm text-center py-8">
                        When interns complete quizzes, top performers will appear here.
                    </p>
                </CardContent>
            </Card>
        )
    }

    const gradients = [
        "from-yellow-500 to-amber-500",
        "from-gray-300 to-gray-400",
        "from-orange-400 to-amber-600",
        "from-cyan-500 to-blue-500",
        "from-sky-500 to-blue-600"
    ]

    return (
        <Card className="glass-card animate-slide-up" style={{ animationFillMode: 'backwards' }}>
            <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>
                    Best quiz performances by score and time
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent border-white/5">
                            <TableHead className="text-zinc-400">Rank</TableHead>
                            <TableHead className="text-zinc-400">Intern</TableHead>
                            <TableHead className="text-zinc-400">Quiz</TableHead>
                            <TableHead className="text-zinc-400">Score</TableHead>
                            <TableHead className="text-zinc-400">Time</TableHead>
                            <TableHead className="text-zinc-400">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {performers.slice(0, 5).map((performer, index) => (
                            <TableRow
                                key={performer.id}
                                className="hover:bg-white/5 border-white/5 transition-colors"
                            >
                                <TableCell>
                                    <span className={`text-lg font-bold ${index === 0 ? 'text-yellow-400' :
                                            index === 1 ? 'text-gray-300' :
                                                index === 2 ? 'text-orange-400' : 'text-zinc-400'
                                        }`}>
                                        #{performer.rank}
                                    </span>
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${gradients[index] || gradients[3]} shadow-lg flex items-center justify-center text-white text-xs font-bold`}>
                                            {performer.username?.charAt(0).toUpperCase() || 'U'}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{performer.username}</div>
                                            <div className="text-xs text-muted-foreground">{performer.email || 'N/A'}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-zinc-300">
                                    <span className="capitalize">{performer.topic}</span>
                                    <span className="text-muted-foreground"> ({performer.difficulty})</span>
                                </TableCell>
                                <TableCell className={`font-bold ${performer.percentage >= 90 ? 'text-green-400' :
                                        performer.percentage >= 70 ? 'text-cyan-400' :
                                            performer.percentage >= 50 ? 'text-yellow-400' : 'text-red-400'
                                    }`}>
                                    {performer.score}/{performer.totalQuestions}
                                </TableCell>
                                <TableCell className="font-mono text-zinc-400">
                                    {formatTime(performer.timeTakenSeconds)}
                                </TableCell>
                                <TableCell>
                                    <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">
                                        Completed
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {topByAverage && topByAverage.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                            Top by Overall Average
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {topByAverage.slice(0, 5).map((intern, index) => (
                                <Badge
                                    key={intern.id}
                                    variant="outline"
                                    className="border-cyan-500/30 text-cyan-400"
                                >
                                    #{index + 1} {intern.fullName} ({intern.averageScore}% avg, {intern.quizzesCompleted} quizzes)
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
