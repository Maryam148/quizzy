import { supabaseAdmin } from '@/lib/supabase'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const QUIZ_TOPICS = [
    {
        id: 'react',
        title: 'React',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'typescript',
        title: 'TypeScript',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'nextjs',
        title: 'Next.js',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'nodejs',
        title: 'Node.js',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'nestjs',
        title: 'NestJS',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        description: '3 difficulty levels: Basics, Intermediate, Advanced',
        questionCount: 60,
        estimatedTime: '75 min total'
    }
]

export default async function DashboardPage() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-[#ffff00] mb-4">
                            Choose Your Quiz Topic
                        </h1>
                        <p className="text-lg text-[#f0ff00]">
                            Select a topic to test your knowledge and improve your skills
                        </p>
                    </div>

                    {/* Quiz Topics Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {QUIZ_TOPICS.map((topic) => (
                            <Link key={topic.id} href={`/quiz/${topic.id}`}>
                                <Card className="border-[#ffff00]/20 bg-[#ffff00]/5 backdrop-blur-xl hover:shadow-2xl hover:shadow-[#ffff00]/20 transition-all hover:scale-105 cursor-pointer h-full">
                                    <CardHeader>
                                        <CardTitle className="text-[#ffff00] text-2xl">
                                            {topic.title}
                                        </CardTitle>
                                        <CardDescription className="text-[#f0ff00]">
                                            {topic.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between text-sm text-[#f0ff00]/60">
                                            <span>{topic.questionCount} questions</span>
                                            <span>{topic.estimatedTime}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
