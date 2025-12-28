'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isAdminLogin, setIsAdminLogin] = useState(false)

  // Show error message if redirected from admin page
  useEffect(() => {
    const error = searchParams.get('error')
    if (error === 'admin_required') {
      toast.error('Admin access required. Please login with admin credentials.')
      setIsAdminLogin(true)
    }
  }, [searchParams])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const supabase = createClient()
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        toast.error(error.message)
        return
      }

      // If admin login mode, verify admin role
      if (isAdminLogin) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', authData.user.id)
          .single()

        if (profileError || !profile) {
          toast.error('Unable to verify admin status')
          await supabase.auth.signOut()
          return
        }

        if (profile.role !== 'admin') {
          toast.error('Access denied. This account does not have admin privileges.')
          await supabase.auth.signOut()
          return
        }

        toast.success('Admin login successful!')
        router.push('/admin')
        router.refresh()
        return
      }

      // Regular user login
      toast.success('Logged in successfully!')
      const redirectedFrom = searchParams.get('redirectedFrom')
      router.push(redirectedFrom || '/dashboard')
      router.refresh()
    } catch (error) {
      toast.error('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-border bg-card shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          {isAdminLogin && (
            <button
              onClick={() => setIsAdminLogin(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            {isAdminLogin && <Shield className="h-6 w-6 text-primary" />}
            {isAdminLogin ? 'Admin Login' : 'Login'}
          </CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">
          {isAdminLogin
            ? 'Enter your admin credentials to access the control panel'
            : 'Enter your credentials to access your account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              {isAdminLogin ? 'Admin Email' : 'Email'}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-card border-border text-foreground focus:ring-0 focus:ring-offset-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-card border-border text-foreground pr-10 focus:ring-0 focus:ring-offset-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full font-medium ${isAdminLogin
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
          >
            {loading
              ? (isAdminLogin ? 'Verifying Admin...' : 'Logging in...')
              : (isAdminLogin ? 'Access Admin Panel' : 'Login')}
          </Button>
        </form>

        {!isAdminLogin && (
          <>
            <div className="mt-4 text-center text-sm text-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAdminLogin(true)}
                className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400/50"
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin Login
              </Button>
            </div>
          </>
        )}

        {isAdminLogin && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <button
              onClick={() => setIsAdminLogin(false)}
              className="text-primary hover:underline font-medium"
            >
              ← Back to regular login
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Suspense fallback={<div className="text-foreground">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}
