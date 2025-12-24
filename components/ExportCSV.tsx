'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface Submission {
    id: string
    score: number
    total_questions: number
    completed_at: string
    user_name: string
    user_email: string
    quiz_title: string
}

export function ExportCSV({ submissions }: { submissions: Submission[] }) {
    const [isExporting, setIsExporting] = useState(false)

    const handleExport = () => {
        setIsExporting(true)

        try {
            // Create CSV content
            const headers = ['Intern Name', 'Email', 'Quiz Title', 'Score', 'Total Questions', '% Score', 'Completed At']
            const rows = submissions.map((sub) => [
                sub.user_name,
                sub.user_email,
                sub.quiz_title,
                sub.score.toString(),
                sub.total_questions.toString(),
                `${Math.round((sub.score / sub.total_questions) * 100)}%`,
                new Date(sub.completed_at).toLocaleString(),
            ])

            const csvContent = [
                headers.join(','),
                ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
            ].join('\n')

            // Create blob and download
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
            const link = document.createElement('a')
            const url = URL.createObjectURL(blob)

            link.setAttribute('href', url)
            link.setAttribute('download', `quiz_results_${new Date().toISOString().split('T')[0]}.csv`)
            link.style.visibility = 'hidden'

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            toast.success('CSV Downloaded', {
                description: `Exported ${submissions.length} submissions`,
            })
        } catch (error) {
            toast.error('Export Failed', {
                description: 'Could not export CSV file',
            })
        } finally {
            setIsExporting(false)
        }
    }

    return (
        <Button
            onClick={handleExport}
            disabled={isExporting || submissions.length === 0}
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-700"
        >
            <Download className="w-4 h-4 mr-2" />
            {isExporting ? 'Exporting...' : 'Download CSV'}
        </Button>
    )
}
