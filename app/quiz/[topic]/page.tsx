"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface DifficultySelectionProps {
    params: Promise<{ topic: string }>
}

const TOPIC_INFO: Record<string, { title: string; description: string }> = {
    react: {
        title: "React",
        description: "Component-based UI library for building interactive interfaces"
    },
    javascript: {
        title: "JavaScript",
        description: "The programming language of the web"
    },
    typescript: {
        title: "TypeScript",
        description: "Typed superset of JavaScript for scalable applications"
    },
    nextjs: {
        title: "Next.js",
        description: "React framework for production-ready applications"
    },
    nodejs: {
    title: "Node.js",
    description: "JavaScript runtime for server-side development"
  },
  nestjs: {
    title: "NestJS",
    description: "Progressive Node.js framework for building efficient applications"
  },
  mongodb: {
        title: "Backend Development",
        description: "Server-side programming and API design"
    }
}

const DIFFICULTY_LEVELS = [
    {
        id: "basics",
        title: "Basics",
        description: "Fundamental concepts and core principles",
        icon: "📚",
        color: "from-[#ccff00] to-[#ffff00]"
    },
    {
        id: "intermediate",
        title: "Intermediate",
        description: "Applied knowledge and practical scenarios",
        icon: "⚡",
        color: "from-[#ffff00] to-[#f0ff00]"
    },
    {
        id: "advanced",
        title: "Advanced",
        description: "Expert-level concepts and best practices",
        icon: "🚀",
        color: "from-[#f0ff00] to-[#ccff00]"
    }
]

export default function DifficultySelection({ params }: DifficultySelectionProps) {
    const router = useRouter()
    const { topic } = use(params)
    const topicInfo = TOPIC_INFO[topic]

    if (!topicInfo) {
        return null
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <Link href="/dashboard">
                        <Button
                            variant="ghost"
                            className="mb-6 border border-[#ffff00]/20 text-[#f0ff00] hover:bg-[#ffff00]/10"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Dashboard
                        </Button>
                    </Link>

                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-[#ffff00] mb-4">
                            {topicInfo.title} Quiz
                        </h1>
                        <p className="text-lg text-[#f0ff00]">
                            {topicInfo.description}
                        </p>
                        <p className="text-sm text-[#f0ff00]/60 mt-2">
                            Choose your difficulty level
                        </p>
                    </div>

                    {/* Difficulty Cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {DIFFICULTY_LEVELS.map((level) => (
                            <Card
                                key={level.id}
                                className="border-[#ffff00]/20 bg-[#ffff00]/5 backdrop-blur-xl hover:shadow-2xl hover:shadow-[#ffff00]/20 transition-all hover:scale-105 cursor-pointer group"
                                onClick={() => router.push(`/quiz/${topic}/${level.id}`)}
                            >
                                <CardHeader className="text-center">
                                    <div className="text-6xl mb-4">{level.icon}</div>
                                    <CardTitle className="text-[#ffff00] text-2xl">
                                        {level.title}
                                    </CardTitle>
                                    <CardDescription className="text-[#f0ff00]">
                                        {level.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="space-y-2 mb-4">
                                        <p className="text-sm text-[#f0ff00]/60">20 Questions</p>
                                        <p className="text-sm text-[#f0ff00]/60">≈ 25 minutes</p>
                                    </div>
                                    <Button
                                        className={`w-full bg-gradient-to-r ${level.color} text-black font-bold hover:scale-105 transition-all`}
                                    >
                                        Start {level.title} Quiz
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
