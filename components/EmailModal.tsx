"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EmailModalProps {
    open: boolean
    onClose: () => void
    onSubmit: (email: string) => void
    quizTopic: string
}

export default function EmailModal({ open, onClose, onSubmit, quizTopic }: EmailModalProps) {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const validateEmail = (email: string) => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
        return gmailRegex.test(email)
    }

    const handleSubmit = () => {
        if (!email) {
            setError("Email is required")
            return
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid Gmail address")
            return
        }

        onSubmit(email)
        setEmail("")
        setError("")
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="border-[#ffff00]/30 bg-black">
                <DialogHeader>
                    <DialogTitle className="text-[#ffff00] text-2xl">
                        Ready to start {quizTopic} Quiz?
                    </DialogTitle>
                    <DialogDescription className="text-[#f0ff00]">
                        We'll send your results to your email
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#ffff00]">
                            Gmail Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your.email@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError("")
                            }}
                            className="border-[#ffff00]/30 bg-[#ffff00]/5 text-[#ffff00] placeholder:text-[#f0ff00]/50"
                            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                        />
                        {error && <p className="text-sm text-red-400">{error}</p>}
                    </div>

                    <div className="space-y-2 text-sm text-[#f0ff00]">
                        <p className="flex items-center gap-2">
                            <span className="text-[#ffff00]">✓</span> Get instant results
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-[#ffff00]">✓</span> Receive detailed breakdown
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-[#ffff00]">✓</span> Access helping resources
                        </p>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="border-[#ffff00]/30 text-[#f0ff00] hover:bg-[#ffff00]/10"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-[#ffff00] to-[#f0ff00] text-black font-bold hover:from-[#f0ff00] hover:to-[#ccff00]"
                    >
                        Start Quiz
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
