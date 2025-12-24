"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface QuizResultsPageProps {
    params: Promise<{ topic: string; difficulty: string }>
}

const TOPIC_TITLES: Record<string, string> = {
    react: "React",
    javascript: "JavaScript",
    typescript: "TypeScript",
    nextjs: "Next.js",
    nodejs: "Node.js",
  nestjs: "NestJS",
  mongodb: "MongoDB"
}

const DIFFICULTY_TITLES: Record<string, string> = {
    basics: "Basics",
    intermediate: "Intermediate",
    advanced: "Advanced"
}

export default function QuizResultsPage({ params }: QuizResultsPageProps) {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [score, setScore] = useState(0)
    const [total, setTotal] = useState(0)
    const [percentage, setPercentage] = useState(0)

    const { topic, difficulty } = use(params)

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("quiz_email")
        const storedScore = sessionStorage.getItem("quiz_score")
        const storedTotal = sessionStorage.getItem("quiz_total")
        const storedTopic = sessionStorage.getItem("quiz_topic")
        const storedDifficulty = sessionStorage.getItem("quiz_difficulty")

        if (!storedEmail || !storedScore || !storedTotal || !storedTopic || !storedDifficulty) {
            router.push(`/quiz/${topic}/${difficulty}`)
            return
        }

        const scoreNum = parseInt(storedScore)
        const totalNum = parseInt(storedTotal)

        setEmail(storedEmail)
        setScore(scoreNum)
        setTotal(totalNum)
        setPercentage(Math.round((scoreNum / totalNum) * 100))

        const sendEmails = async () => {
            try {
                const response = await fetch('/api/send-results', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        topic: `${TOPIC_TITLES[storedTopic]} - ${DIFFICULTY_TITLES[storedDifficulty]}`,
                        score: scoreNum,
                        totalQuestions: totalNum,
                        userEmail: storedEmail,
                    }),
                })

                if (!response.ok) {
                    console.error('Failed to send emails')
                }
            } catch (error) {
                console.error('Error sending emails:', error)
            }
        }

        sendEmails()
    }, [topic, difficulty, router])

    const getScoreColor = (percentage: number) => {
        if (percentage >= 80) return "text-[#ccff00]"
        if (percentage >= 60) return "text-[#ffff00]"
        return "text-[#f0ff00]"
    }

    const getScoreMessage = (percentage: number) => {
        if (percentage >= 80) return "Excellent work! 🎉"
        if (percentage >= 60) return "Good job! 👍"
        return "Keep practicing! 💪"
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-[#ffff00]/30 bg-[#ffff00]/5 backdrop-blur-xl">
                        <CardHeader className="text-center">
                            <div className="mb-4 text-6xl">{percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "💪"}</div>
                            <CardTitle className="text-[#ffff00] text-3xl mb-2">
                                Quiz Complete!
                            </CardTitle>
                            <CardDescription className="text-[#f0ff00] text-lg">
                                {getScoreMessage(percentage)}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            {/* Score Display */}
                            <div className="text-center space-y-4">
                                <div>
                                    <p className="text-sm text-[#f0ff00]/60 mb-2">Your Score</p>
                                    <p className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
                                        {score}/{total}
                                    </p>
                                    <p className="text-2xl text-[#f0ff00] mt-2">{percentage}%</p>
                                </div>
                            </div>

                            {/* Breakdown */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-lg border border-[#ccff00]/30 bg-[#ccff00]/5 p-4 text-center">
                                    <p className="text-sm text-[#f0ff00]/60 mb-1">Correct</p>
                                    <p className="text-3xl font-bold text-[#ccff00]">✓ {score}</p>
                                </div>
                                <div className="rounded-lg border border-[#f0ff00]/30 bg-[#f0ff00]/5 p-4 text-center">
                                    <p className="text-sm text-[#f0ff00]/60 mb-1">Incorrect</p>
                                    <p className="text-3xl font-bold text-[#f0ff00]">✗ {total - score}</p>
                                </div>
                            </div>

                            {/* Email Confirmation */}
                            <div className="rounded-lg border border-[#ffff00]/20 bg-[#ffff00]/5 p-4">
                                <p className="text-sm text-[#f0ff00] text-center">
                                    📧 Results sent to: <span className="font-semibold text-[#ffff00]">{email}</span>
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={`/quiz/${topic}`} className="flex-1">
                                    <Button
                                        variant="outline"
                                        className="w-full border-[#ffff00]/30 text-[#f0ff00] hover:bg-[#ffff00]/10"
                                    >
                                        Try Different Difficulty
                                    </Button>
                                </Link>
                                <Link href="/dashboard" className="flex-1">
                                    <Button className="w-full bg-gradient-to-r from-[#ffff00] to-[#f0ff00] text-black font-bold hover:from-[#f0ff00] hover:to-[#ccff00]">
                                        Back to Dashboard
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
