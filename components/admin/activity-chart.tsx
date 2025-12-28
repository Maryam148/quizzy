'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AdminStats } from "@/types"

interface ActivityChartProps {
    stats: AdminStats | null
    loading: boolean
}

export function ActivityChart({ stats, loading }: ActivityChartProps) {
    if (loading || !stats) {
        return (
            <Card className="col-span-4 glass-card">
                <CardHeader>
                    <CardTitle>Assessment Velocity</CardTitle>
                    <CardDescription>Loading activity data...</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <div className="h-[200px] flex items-end justify-between gap-1 px-4 pt-4">
                        {Array(24).fill(0).map((_, i) => (
                            <div
                                key={i}
                                className="w-full bg-cyan-500/10 rounded-t-sm animate-pulse"
                                style={{ height: `${20 + Math.random() * 60}%` }}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        )
    }

    // Normalize hourly rates for display
    const maxRate = Math.max(...stats.hourlyRates, 1)
    const normalizedRates = stats.hourlyRates.map(rate =>
        Math.round((rate / maxRate) * 100)
    )

    return (
        <Card className="col-span-4 glass-card">
            <CardHeader>
                <CardTitle>Assessment Velocity</CardTitle>
                <CardDescription>
                    Submission rates over the last 24 hours ({stats.todaySubmissions} today)
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[200px] flex items-end justify-between gap-1 px-4 pt-4">
                    {normalizedRates.map((h, i) => (
                        <div
                            key={i}
                            style={{ height: `${Math.max(h, 5)}%` }}
                            className="w-full bg-cyan-500/20 hover:bg-cyan-400 transition-all duration-300 rounded-t-sm cursor-pointer hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                            title={`${i}:00 - ${stats.hourlyRates[i]} submissions`}
                        />
                    ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground px-4 mt-2 font-mono">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>23:00</span>
                </div>
            </CardContent>
        </Card>
    )
}

interface SkillDistributionProps {
    loading: boolean
}

export function SkillDistribution({ loading }: SkillDistributionProps) {
    // This would ideally come from API data about topic performance
    // For now, we'll show placeholder that can be enhanced later
    const skills = [
        { name: "JavaScript", percentage: 85, color: "cyan" },
        { name: "Python", percentage: 72, color: "blue" },
        { name: "React", percentage: 68, color: "purple" },
        { name: "SQL", percentage: 60, color: "orange" }
    ]

    const colorClasses: Record<string, string> = {
        cyan: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
        blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
        purple: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]",
        orange: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
    }

    const textColors: Record<string, string> = {
        cyan: "text-cyan-400",
        blue: "text-blue-400",
        purple: "text-purple-400",
        orange: "text-orange-400"
    }

    if (loading) {
        return (
            <Card className="col-span-3 glass-card">
                <CardHeader>
                    <CardTitle>Skill Distribution</CardTitle>
                    <CardDescription>Loading skill data...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between">
                                <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                                <div className="h-4 w-8 bg-white/10 rounded animate-pulse" />
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-white/10 animate-pulse" style={{ width: '60%' }} />
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="col-span-3 glass-card">
            <CardHeader>
                <CardTitle>Skill Distribution</CardTitle>
                <CardDescription>
                    Cohort performance by category
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-300">{skill.name}</span>
                            <span className={`font-bold ${textColors[skill.color]}`}>{skill.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${colorClasses[skill.color]} rounded-full transition-all duration-500`}
                                style={{ width: `${skill.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
