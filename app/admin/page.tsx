'use client'

import { useEffect, useState } from "react"
import { StatsCards } from "@/components/admin/stats-cards"
import { TopPerformersTable } from "@/components/admin/top-performers-table"
import { ActivityChart, SkillDistribution } from "@/components/admin/activity-chart"
import { AdminStats, TopPerformer, TopByAverage } from "@/types"

export default function AdminDashboard() {
    const [stats, setStats] = useState<AdminStats | null>(null)
    const [performers, setPerformers] = useState<TopPerformer[]>([])
    const [topByAverage, setTopByAverage] = useState<TopByAverage[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                // Fetch stats and top performers in parallel
                const [statsRes, performersRes] = await Promise.all([
                    fetch('/api/admin/stats'),
                    fetch('/api/admin/top-performers?limit=10')
                ])

                if (statsRes.ok) {
                    const statsData = await statsRes.json()
                    setStats(statsData)
                }

                if (performersRes.ok) {
                    const performersData = await performersRes.json()
                    setPerformers(performersData.topPerformers || [])
                    setTopByAverage(performersData.topByAverage || [])
                }
            } catch (error) {
                console.error('Error fetching dashboard data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDashboardData()
    }, [])

    return (
        <div className="space-y-8 animate-slide-up">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Real-time Overview</h2>
                    <p className="text-muted-foreground">
                        Live monitoring of intern quiz activity
                    </p>
                </div>
                <div className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                    <span className="flex items-center text-sm font-medium text-emerald-400">
                        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow"></span>
                        SYSTEM ONLINE
                    </span>
                </div>
            </div>

            {/* Stats Cards */}
            <StatsCards stats={stats} loading={loading} />

            {/* Charts Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 delay-200 animate-slide-up" style={{ animationFillMode: 'backwards' }}>
                <ActivityChart stats={stats} loading={loading} />
                <SkillDistribution loading={loading} />
            </div>

            {/* Top Performers */}
            <TopPerformersTable
                performers={performers}
                topByAverage={topByAverage}
                loading={loading}
            />
        </div>
    )
}
