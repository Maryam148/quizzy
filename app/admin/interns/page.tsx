'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight, ArrowUpDown, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { InternWithStats } from "@/types"

interface PaginationInfo {
    page: number
    limit: number
    total: number
    totalPages: number
}

export default function InternsPage() {
    const [interns, setInterns] = useState<InternWithStats[]>([])
    const [pagination, setPagination] = useState<PaginationInfo>({
        page: 1,
        limit: 15,
        total: 0,
        totalPages: 0
    })
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('created_at')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchInterns()
    }, [pagination.page, sortBy, sortOrder])

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (pagination.page === 1) {
                fetchInterns()
            } else {
                setPagination(p => ({ ...p, page: 1 }))
            }
        }, 300)
        return () => clearTimeout(timer)
    }, [search])

    async function fetchInterns() {
        setLoading(true)
        try {
            const params = new URLSearchParams({
                page: pagination.page.toString(),
                limit: pagination.limit.toString(),
                sortBy,
                sortOrder,
                ...(search && { search })
            })

            const res = await fetch(`/api/admin/interns?${params}`)
            if (res.ok) {
                const data = await res.json()
                setInterns(data.interns || [])
                setPagination(p => ({
                    ...p,
                    total: data.pagination?.total || 0,
                    totalPages: data.pagination?.totalPages || 0
                }))
            }
        } catch (error) {
            console.error('Error fetching interns:', error)
        } finally {
            setLoading(false)
        }
    }

    function handleSort(column: string) {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(column)
            setSortOrder('desc')
        }
    }

    function formatDate(dateString: string | null) {
        if (!dateString) return 'Never'
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        })
    }

    function getScoreBadgeColor(score: number): string {
        if (score >= 80) return 'bg-emerald-500/20 text-emerald-400'
        if (score >= 60) return 'bg-cyan-500/20 text-cyan-400'
        if (score >= 40) return 'bg-yellow-500/20 text-yellow-400'
        return 'bg-red-500/20 text-red-400'
    }

    return (
        <div className="space-y-6 animate-slide-up">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Interns</h2>
                <p className="text-muted-foreground">
                    Manage and monitor all enrolled interns
                </p>
            </div>

            <Card className="glass-card">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <CardTitle>All Interns</CardTitle>
                            <CardDescription>
                                {pagination.total} total interns enrolled
                            </CardDescription>
                        </div>
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search by name or email..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-9 bg-black/20 border-white/10"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-3">
                                    <div className="h-10 w-10 rounded-full bg-white/10 animate-pulse" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 w-40 bg-white/10 rounded animate-pulse" />
                                        <div className="h-3 w-28 bg-white/10 rounded animate-pulse" />
                                    </div>
                                    <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                    ) : interns.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                                {search ? 'No interns found matching your search.' : 'No interns enrolled yet.'}
                            </p>
                        </div>
                    ) : (
                        <>
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent border-white/5">
                                        <TableHead className="text-zinc-400">Intern</TableHead>
                                        <TableHead
                                            className="text-zinc-400 cursor-pointer hover:text-white transition-colors"
                                            onClick={() => handleSort('quizzesCompleted')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Quizzes
                                                <ArrowUpDown className="h-3 w-3" />
                                            </div>
                                        </TableHead>
                                        <TableHead
                                            className="text-zinc-400 cursor-pointer hover:text-white transition-colors"
                                            onClick={() => handleSort('averageScore')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Avg Score
                                                <ArrowUpDown className="h-3 w-3" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="text-zinc-400">Progress</TableHead>
                                        <TableHead
                                            className="text-zinc-400 cursor-pointer hover:text-white transition-colors"
                                            onClick={() => handleSort('created_at')}
                                        >
                                            <div className="flex items-center gap-1">
                                                Joined
                                                <ArrowUpDown className="h-3 w-3" />
                                            </div>
                                        </TableHead>
                                        <TableHead className="text-zinc-400">Last Active</TableHead>
                                        <TableHead className="text-zinc-400 text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {interns.map((intern) => (
                                        <TableRow
                                            key={intern.id}
                                            className="hover:bg-white/5 border-white/5 transition-colors"
                                        >
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                                        {intern.full_name?.charAt(0).toUpperCase() || 'U'}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-white">{intern.full_name}</div>
                                                        <div className="text-xs text-muted-foreground">{intern.email}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-white">{intern.quizzesCompleted}</span>
                                                    <span className="text-muted-foreground text-xs">completed</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`${getScoreBadgeColor(intern.averageScore)} border-0`}>
                                                    {intern.averageScore}%
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {intern.quizzesInProgress > 0 ? (
                                                    <Badge variant="outline" className="border-amber-500/50 text-amber-400">
                                                        {intern.quizzesInProgress} in progress
                                                    </Badge>
                                                ) : (
                                                    <span className="text-muted-foreground text-sm">—</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-zinc-400 text-sm">
                                                {formatDate(intern.created_at || null)}
                                            </TableCell>
                                            <TableCell className="text-zinc-400 text-sm">
                                                {formatDate(intern.lastActiveAt)}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Link href={`/admin/interns/${intern.id}`}>
                                                    <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
                                                        <Eye className="h-4 w-4 mr-1" />
                                                        View
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            {/* Pagination */}
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                <p className="text-sm text-muted-foreground">
                                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} interns
                                </p>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
                                        disabled={pagination.page <= 1}
                                        className="border-white/10"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                        Previous
                                    </Button>
                                    <span className="text-sm text-muted-foreground px-2">
                                        Page {pagination.page} of {pagination.totalPages}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
                                        disabled={pagination.page >= pagination.totalPages}
                                        className="border-white/10"
                                    >
                                        Next
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
