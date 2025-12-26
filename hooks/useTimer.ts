import { useState, useEffect, useRef } from 'react'

interface UseTimerProps {
    durationMinutes: number
    onTimeout: () => void
    quizId: string
}

/**
 * Custom hook for quiz countdown timer
 * Persists remaining time in localStorage
 */
export function useTimer({ durationMinutes, onTimeout, quizId }: UseTimerProps) {
    const storageKey = `quiz_timer_${quizId}`
    const [timeRemaining, setTimeRemaining] = useState<number>(() => {
        if (typeof window === 'undefined' || quizId.includes('undefined') || durationMinutes <= 0) {
            return durationMinutes * 60
        }

        try {
            const stored = localStorage.getItem(storageKey)
            if (stored) {
                const { secondsLeft } = JSON.parse(stored)
                return typeof secondsLeft === 'number' ? secondsLeft : durationMinutes * 60
            }
        } catch (error) {
            console.error('Error restoring timer:', error)
        }

        return durationMinutes * 60
    })

    const [isRunning, setIsRunning] = useState(true)
    const hasTimedOut = useRef(false)

    // Sync timeRemaining to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined' && !quizId.includes('undefined') && timeRemaining > 0) {
            localStorage.setItem(storageKey, JSON.stringify({ secondsLeft: timeRemaining }))
        }
    }, [timeRemaining, storageKey, quizId])

    // Countdown effect
    useEffect(() => {
        if (!isRunning || timeRemaining <= 0) return

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                const newTime = Math.max(0, prev - 1)

                // Check if time is up
                if (newTime === 0 && !hasTimedOut.current) {
                    hasTimedOut.current = true
                    clearInterval(interval)
                    localStorage.removeItem(storageKey)
                    // Defer callback to avoid setState during render
                    setTimeout(() => onTimeout(), 0)
                    return 0
                }

                return newTime
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [isRunning, onTimeout, timeRemaining, storageKey])

    const clearTimer = () => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem(storageKey)
            }
        } catch (error) {
            console.error('Error clearing timer:', error)
        }
    }

    const pauseTimer = () => setIsRunning(false)
    const resumeTimer = () => setIsRunning(true)

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const isLowTime = timeRemaining <= 300 // 5 minutes
    const isVeryLowTime = timeRemaining <= 60 // 1 minute

    return {
        timeRemaining,
        formattedTime: formatTime(timeRemaining),
        isRunning,
        isLowTime,
        isVeryLowTime,
        pauseTimer,
        resumeTimer,
        clearTimer,
    }
}
