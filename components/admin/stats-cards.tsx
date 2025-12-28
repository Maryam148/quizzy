'use client'

import { Activity, Users, FileText, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AdminStats } from "@/types"

interface StatsCardsProps {
    stats: AdminStats | null
    loading: boolean
}

function StatCardSkeleton() {
    return (
        <Card className="glass-card border-l-4 border-l-cyan-500/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                <div className="h-4 w-4 bg-white/10 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
                <div className="h-8 w-16 bg-white/10 rounded animate-pulse mb-2" />
                <div className="h-3 w-32 bg-white/10 rounded animate-pulse" />
            </CardContent>
        </Card>
    )
}

export function StatsCards({ stats, loading }: StatsCardsProps) {
    if (loading || !stats) {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
            </div>
        )
    }

    const cards = [
        {
            title: "Total Interns",
            value: stats.totalInterns,
            icon: Users,
            color: "cyan",
            change: stats.activeInterns,
            changeLabel: "currently active",
            showProgress: false
        },
        {
            title: "Avg. Score",
            value: `${stats.averageScore}%`,
            icon: Activity,
            color: "blue",
            change: stats.completionRate,
            changeLabel: "completion rate",
            showProgress: true,
            progressValue: stats.averageScore
        },
        {
            title: "Quiz Submissions",
            value: stats.completedSubmissions,
            icon: FileText,
            color: "sky",
            change: stats.todaySubmissions,
            changeLabel: "today",
            showProgress: false
        },
        {
            title: "In Progress",
            value: stats.activeInterns,
            icon: AlertTriangle,
            color: "amber",
            change: stats.totalSubmissions - stats.completedSubmissions,
            changeLabel: "pending",
            showProgress: false
        }
    ]

    const colorMap: Record<string, { border: string, icon: string, text: string }> = {
        cyan: { border: "border-l-cyan-500", icon: "text-cyan-400", text: "text-cyan-400" },
        blue: { border: "border-l-blue-500", icon: "text-blue-400", text: "text-blue-400" },
        sky: { border: "border-l-sky-500", icon: "text-sky-400", text: "text-sky-400" },
        amber: { border: "border-l-amber-500", icon: "text-amber-400", text: "text-amber-400" }
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => {
                const colors = colorMap[card.color]
                return (
                    <Card
                        key={card.title}
                        className={`glass-card border-l-4 ${colors.border} hover:scale-105 transition-transform duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {card.title}
                            </CardTitle>
                            <card.icon className={`h-4 w-4 ${colors.icon}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">{card.value}</div>
                            <p className="text-xs text-muted-foreground flex items-center mt-1">
                                <span className={`${colors.text} flex items-center mr-1`}>
                                    <ArrowUpRight className="h-3 w-3" /> {card.change}
                                </span>
                                {card.changeLabel}
                            </p>
                            {card.showProgress && card.progressValue !== undefined && (
                                <Progress value={card.progressValue} className="mt-3 h-1 bg-blue-900/50" />
                            )}
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
