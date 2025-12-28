'use client'

import Link from "next/link"
import { ShieldAlert, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AccessDenied() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4 animate-in fade-in zoom-in duration-300">
            <Card className="w-full max-w-md border-red-500/20 bg-card shadow-2xl">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-red-500/10 p-4 rounded-full mb-4 w-fit">
                        <ShieldAlert className="h-10 w-10 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">Access Denied</CardTitle>
                    <CardDescription>
                        You need administrator privileges to view this area.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-3 text-sm text-red-400 bg-red-950/20 border border-red-900/50 rounded-md text-center">
                        Verification failed or session expired.
                    </div>

                    <div className="grid gap-3">
                        <Link href="/login?error=admin_required">
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                Login as Admin
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button variant="outline" className="w-full">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Return to Intern Portal
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
