'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Calendar, Trophy, Target, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { InternDetail, QuizProgress } from "@/types"

interface Submission {
    id: string
    quiz_id: string
    score: number
    total_questions: number
    status: string
    started_at: string
    completed_at: string | null
}

interface InternDetailData {
    intern: InternDetail
    submissions: Submission[]
    progress: QuizProgress[]
    performanceHistory: { date: string; score: number; quizId: string }[]
}

export default function InternDetailPage() {
    const params = useParams()
    const internId = params.id as string
    const [data, setData] = useState<InternDetailData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchInternDetail() {
            try {
                const res = await fetch(`/api/admin/interns/${internId}`)
                if (res.ok) {
                    const internData = await res.json()
                    setData(internData)
                }
            } catch (error) {
                console.error('Error fetching intern details:', error)
            } finally {
                setLoading(false)
            }
        }

        if (internId) {
            fetchInternDetail()
        }
    }, [internId])

    function formatDate(dateString: string | null) {
        if (!dateString) return 'N/A'
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    function formatTime(seconds: number): string {
        if (!seconds) return 'N/A'
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}m ${secs}s`
    }

    function getScoreColor(score: number, total: number): string {
        const percentage = (score / total) * 100
        if (percentage >= 80) return 'text-emerald-400'
        if (percentage >= 60) return 'text-cyan-400'
        if (percentage >= 40) return 'text-yellow-400'
        return 'text-red-400'
    }

    if (loading) {
        return (
            <div className="space-y-6 animate-slide-up">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="glass-card">
                            <CardContent className="p-6">
                                <div className="h-20 bg-white/10 rounded animate-pulse" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground">Intern not found</p>
                <Link href="/admin/interns">
                    <Button variant="outline" className="mt-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Interns
                    </Button>
                </Link>
            </div>
        )
    }

    const { intern, submissions, progress, performanceHistory } = data

    return (
        <div className="space-y-6 animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/interns">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                            <ArrowLeft className="h-4 w-4 mr-1" />
                            Back
                        </Button>
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            {intern.full_name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">{intern.full_name}</h2>
                            <div className="flex items-center gap-4 text-muted-foreground text-sm">
                                <span className="flex items-center gap-1">
                                    <Mail className="h-3 w-3" />
                                    {intern.email}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    Joined {formatDate(intern.created_at || null)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card border-l-4 border-l-cyan-500">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-cyan-500/20 rounded-lg">
                                <Target className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Quizzes Completed</p>
                                <p className="text-2xl font-bold text-white">{intern.quizzesCompleted}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Average Score</p>
                                <p className="text-2xl font-bold text-white">{intern.averageScore}%</p>
                            </div>
                        </div>
                        <Progress value={intern.averageScore} className="mt-3 h-1" />
                    </CardContent>
                </Card>

                <Card className="glass-card border-l-4 border-l-emerald-500">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/20 rounded-lg">
                                <Trophy className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Highest Score</p>
                                <p className="text-2xl font-bold text-white">{intern.highestScore}%</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="glass-card border-l-4 border-l-amber-500">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                                <Clock className="h-5 w-5 text-amber-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">In Progress</p>
                                <p className="text-2xl font-bold text-white">{intern.quizzesInProgress}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* In-Progress Quizzes */}
            {progress.length > 0 && (
                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle className="text-lg">In-Progress Quizzes</CardTitle>
                        <CardDescription>Quizzes the intern has started but not completed</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {progress.map((quiz) => {
                                const progressPercent = Math.round((quiz.current_question_index / 10) * 100) // Assuming 10 questions
                                return (
                                    <div key={quiz.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                        <div>
                                            <p className="font-medium text-white">{quiz.quiz_id}</p>
                                            <p className="text-xs text-muted-foreground">
                                                Question {quiz.current_question_index + 1} • Last updated {formatDate(quiz.last_updated)}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-32">
                                                <Progress value={progressPercent} className="h-2" />
                                                <p className="text-xs text-muted-foreground mt-1 text-right">{progressPercent}%</p>
                                            </div>
                                            <Badge variant="outline" className="border-amber-500/50 text-amber-400">
                                                In Progress
                                            </Badge>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quiz History */}
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="text-lg">Quiz History</CardTitle>
                    <CardDescription>All quiz submissions by this intern</CardDescription>
                </CardHeader>
                <CardContent>
                    {submissions.length === 0 ? (
                        <p className="text-center text-muted-foreground py-8">
                            No quiz submissions yet
                        </p>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent border-white/5">
                                    <TableHead className="text-zinc-400">Quiz</TableHead>
                                    <TableHead className="text-zinc-400">Score</TableHead>
                                    <TableHead className="text-zinc-400">Percentage</TableHead>
                                    <TableHead className="text-zinc-400">Status</TableHead>
                                    <TableHead className="text-zinc-400">Started</TableHead>
                                    <TableHead className="text-zinc-400">Completed</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {submissions.map((submission) => {
                                    const percentage = Math.round((submission.score / submission.total_questions) * 100)
                                    return (
                                        <TableRow key={submission.id} className="hover:bg-white/5 border-white/5">
                                            <TableCell className="font-medium text-white">
                                                {submission.quiz_id}
                                            </TableCell>
                                            <TableCell className={getScoreColor(submission.score, submission.total_questions)}>
                                                {submission.score}/{submission.total_questions}
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`border-0 ${percentage >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                                                        percentage >= 60 ? 'bg-cyan-500/20 text-cyan-400' :
                                                            percentage >= 40 ? 'bg-yellow-500/20 text-yellow-400' :
                                                                'bg-red-500/20 text-red-400'
                                                    }`}>
                                                    {percentage}%
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={submission.status === 'completed'
                                                        ? 'bg-emerald-500/20 text-emerald-400 border-0'
                                                        : 'border-amber-500/50 text-amber-400'
                                                    }
                                                    variant={submission.status === 'completed' ? 'default' : 'outline'}
                                                >
                                                    {submission.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-zinc-400 text-sm">
                                                {formatDate(submission.started_at)}
                                            </TableCell>
                                            <TableCell className="text-zinc-400 text-sm">
                                                {formatDate(submission.completed_at)}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>

            {/* Performance Trend */}
            {performanceHistory.length > 0 && (
                <Card className="glass-card">
                    <CardHeader>
                        <CardTitle className="text-lg">Performance Trend</CardTitle>
                        <CardDescription>Score progression over recent quizzes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-end justify-between gap-2 h-40">
                            {performanceHistory.map((point, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                    <div
                                        className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all hover:from-cyan-400 hover:to-blue-400"
                                        style={{ height: `${point.score}%` }}
                                        title={`${point.score}%`}
                                    />
                                    <span className="text-xs text-muted-foreground">{point.score}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
