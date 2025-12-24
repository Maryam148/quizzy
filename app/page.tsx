import Link from "next/link";
import { Button } from "@/components/ui/button";
import LampDemo from "@/components/lamp-demo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Navigation - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#ffff00]/20 glass-effect">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gradient">Quizzy Quizzy</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-[#ffff00] to-[#f0ff00] hover:from-[#f0ff00] hover:to-[#ccff00] text-black font-bold shadow-lg hover:shadow-[#ffff00]/50 transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Lamp Effect */}
      <LampDemo />
    </div>
  );
}
