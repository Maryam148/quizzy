"use client"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import EmailModal from "@/components/EmailModal"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface QuizStartPageProps {
    params: Promise<{ topic: string; difficulty: string }>
}

const TOPIC_INFO: Record<string, string> = {
    react: "React",
    javascript: "JavaScript",
    typescript: "TypeScript",
    nextjs: "Next.js",
    nodejs: "Node.js",
  nestjs: "NestJS",
  mongodb: "MongoDB"
}

const DIFFICULTY_INFO: Record<string, { title: string; description: string }> = {
    basics: {
        title: "Basics",
        description: "Fundamental concepts and core principles"
    },
    intermediate: {
        title: "Intermediate",
        description: "Applied knowledge and practical scenarios"
    },
    advanced: {
        title: "Advanced",
        description: "Expert-level concepts and best practices"
    }
}

export default function QuizStartPage({ params }: QuizStartPageProps) {
    const router = useRouter()
    const [showEmailModal, setShowEmailModal] = useState(false)

    const { topic, difficulty } = use(params)
    const topicTitle = TOPIC_INFO[topic]
    const difficultyInfo = DIFFICULTY_INFO[difficulty]

    useEffect(() => {
        if (!topicTitle || !difficultyInfo) {
            router.push("/dashboard")
        }
    }, [topicTitle, difficultyInfo, router])

    if (!topicTitle || !difficultyInfo) {
        return null
    }

    const handleEmailSubmit = (email: string) => {
        sessionStorage.setItem("quiz_email", email)
        sessionStorage.setItem("quiz_topic", topic)
        sessionStorage.setItem("quiz_difficulty", difficulty)

        router.push(`/quiz/${topic}/${difficulty}/play`)
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link href={`/quiz/${topic}`}>
                        <Button
                            variant="ghost"
                            className="mb-6 border border-[#ffff00]/20 text-[#f0ff00] hover:bg-[#ffff00]/10"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Difficulty Selection
                        </Button>
                    </Link>

                    <Card className="border-[#ffff00]/30 bg-[#ffff00]/5 backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle className="text-[#ffff00] text-3xl">
                                {topicTitle} - {difficultyInfo.title}
                            </CardTitle>
                            <CardDescription className="text-[#f0ff00] text-lg">
                                {difficultyInfo.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            {/* Quiz Details */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                    <p className="text-sm text-[#f0ff00]/60">Questions</p>
                                    <p className="text-2xl font-bold text-[#ffff00]">20</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm text-[#f0ff00]/60">Estimated Time</p>
                                    <p className="text-2xl font-bold text-[#ffff00]">25 min</p>
                                </div>
                            </div>

                            {/* Integrity Notice */}
                            <div className="rounded-lg border border-[#ffff00]/20 bg-[#ffff00]/5 p-4 space-y-2">
                                <h3 className="font-semibold text-[#ffff00]">📋 Quiz Integrity</h3>
                                <p className="text-sm text-[#f0ff00]">
                                    This quiz uses integrity protections including copy prevention and tab-switching detection.
                                    Complete the quiz independently for accurate self-assessment.
                                </p>
                            </div>

                            {/* Start Button */}
                            <Button
                                onClick={() => setShowEmailModal(true)}
                                className="w-full bg-gradient-to-r from-[#ffff00] to-[#f0ff00] text-black font-bold text-lg py-6 hover:from-[#f0ff00] hover:to-[#ccff00]"
                            >
                                Start Quiz
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <EmailModal
                open={showEmailModal}
                onClose={() => setShowEmailModal(false)}
                onSubmit={handleEmailSubmit}
                quizTopic={`${topicTitle} - ${difficultyInfo.title}`}
            />
        </div>
    )
}
