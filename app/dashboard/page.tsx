"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import ActiveQuizCard from '@/components/active-quiz-card'
import { createClient } from '@/lib/supabase/client'
import { QUIZ_DATA } from "@/lib/quiz-data"

const QUIZ_TOPICS = [
    {
        id: 'react',
        title: 'React',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'typescript',
        title: 'TypeScript',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'nextjs',
        title: 'Next.js',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'nodejs',
        title: 'Node.js',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'nestjs',
        title: 'NestJS',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    },
    {
        id: 'express',
        title: 'Express.js',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '45 min total (15 min each)'
    }
]

export default function DashboardPage() {
    const [activeQuizzes, setActiveQuizzes] = useState<any[]>([])
    const [loading, setLoading] = useState(false) // Start as false for faster initial render
    const [hasFetched, setHasFetched] = useState(false)

    useEffect(() => {
        // Only fetch if we haven't fetched yet
        if (hasFetched) return

        const fetchActiveQuizzes = async () => {
            setLoading(true)
            try {
                const supabase = createClient()
                const { data: { user } } = await supabase.auth.getUser()

                if (user) {
                    const { data } = await supabase
                        .from('quiz_progress')
                        .select('*')
                        .eq('user_id', user.id)
                        .order('last_updated', { ascending: false })

                    setActiveQuizzes(data || [])
                    setHasFetched(true)
                }
            } catch (error) {
                console.error('Error fetching active quizzes:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchActiveQuizzes()
    }, [hasFetched])

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <main className="px-4 py-8 md:py-12 pt-20 w-auto">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8 md:mb-12 text-center">
                        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-2 md:mb-4 drop-shadow-sm">
                            Choose Your Quiz Topic
                        </h1>
                        <p className="text-sm md:text-lg text-muted-foreground">
                            Select a topic to test your knowledge and improve your skills
                        </p>
                    </div>

                    {/* Active Quizzes Section - Always show, use skeleton when loading */}
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-8 w-1 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">
                                In Progress
                            </h2>
                        </div>

                        {loading ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="glass-card border-l-4 border-l-primary p-6 animate-pulse">
                                        <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                                        <div className="h-4 bg-muted rounded w-1/2 mb-6"></div>
                                        <div className="h-10 bg-muted rounded"></div>
                                    </div>
                                ))}
                            </div>
                        ) : activeQuizzes.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {activeQuizzes.map((quiz) => {
                                    const [topic, difficulty] = quiz.quiz_id.split('_')
                                    const answeredCount = quiz.answers ? Object.keys(quiz.answers).length : 0
                                    const totalQuestions = (QUIZ_DATA as any)[topic]?.[difficulty]?.length || 20

                                    return (
                                        <ActiveQuizCard
                                            key={quiz.id}
                                            quizId={quiz.quiz_id}
                                            topic={topic}
                                            difficulty={difficulty}
                                            progress={(answeredCount / totalQuestions) * 100}
                                            totalQuestions={totalQuestions}
                                            answeredCount={answeredCount}
                                            onReset={(id) => {
                                                setActiveQuizzes(prev => prev.filter(q => q.quiz_id !== id))
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-12 glass-card rounded-xl border border-dashed border-muted-foreground/20">
                                <p className="text-muted-foreground text-lg italic">Nothing in progress</p>
                                <p className="text-xs text-muted-foreground/60 mt-2">Start a new quiz below to track your progress</p>
                            </div>
                        )}
                    </div>

                    {/* Quiz Topics Grid */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="h-8 w-1 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                        <h2 className="text-2xl font-bold text-foreground tracking-tight">
                            Start New Quiz
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8">
                        {QUIZ_TOPICS.map((topic) => (
                            <Link key={topic.id} href={`/quiz/${topic.id}`}>
                                <Card className="glass-card hover:scale-105 cursor-pointer h-full group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="text-primary text-2xl group-hover:text-primary transition-colors">
                                            {topic.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                            {topic.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <div className="flex justify-between text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                            <span>{topic.questionCount} questions</span>
                                            <span>{topic.estimatedTime}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div >
            </main >
        </div >
    )
}
