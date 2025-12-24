'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#ffff00]/20 bg-black/80 backdrop-blur-xl shadow-lg shadow-[#ffff00]/5">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold text-gradient">
                        Quizzy Quizzy
                    </span>
                </Link>

                {/* Get Started Button */}
                <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-[#ffff00] to-[#f0ff00] text-black font-bold hover:from-[#f0ff00] hover:to-[#ccff00]">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}
