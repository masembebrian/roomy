"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { createClient } from "@/lib/supabase/client"
import { ArrowLeft } from "lucide-react"

export default function ResetPassword() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const supabase = createClient()

        // Check if we have an active session from the recovery link
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (user) {
          console.log("[v0] User session found, reset allowed")
          setIsValid(true)
          return
        }

        // Check URL hash for recovery token
        const hash = window.location.hash
        console.log("[v0] Checking hash for recovery token:", hash.substring(0, 20) + "...")

        if (hash.includes("type=recovery") && hash.includes("access_token")) {
          console.log("[v0] Recovery token found in URL hash")
          setIsValid(true)
        } else {
          console.log("[v0] No valid recovery token found")
          setIsValid(false)
        }
      } catch (error) {
        console.error("[v0] Token validation error:", error)
        setIsValid(false)
      } finally {
        setIsChecking(false)
      }
    }

    checkTokenValidity()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      })
      return
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const supabase = createClient()

      console.log("[v0] Attempting to update password")

      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) {
        console.error("[v0] Password update error:", error.message)
        throw error
      }

      console.log("[v0] Password updated successfully")

      toast({
        title: "Success",
        description: "Your password has been reset. Redirecting to sign in...",
      })

      setTimeout(() => {
        router.push("/auth/signin")
      }, 2000)
    } catch (error: any) {
      console.error("[v0] Reset password exception:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to reset password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Verifying reset link...</p>
        </div>
      </div>
    )
  }

  if (!isValid) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Invalid Reset Link</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm md:text-base text-muted-foreground">
                  This password reset link is invalid or has expired. Please request a new one.
                </p>
                <Link href="/auth/forgot-password">
                  <Button className="w-full text-sm md:text-base">Request New Reset Link</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-md mx-auto">
          <Link
            href="/auth/signin"
            className="inline-flex items-center text-xs md:text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to sign in
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Create new password</CardTitle>
              <CardDescription className="text-xs md:text-sm">Enter your new password below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm md:text-base">
                    New Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="text-sm md:text-base h-10 md:h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm md:text-base">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="text-sm md:text-base h-10 md:h-12"
                  />
                </div>
                <Button type="submit" className="w-full text-sm md:text-base h-10 md:h-12" disabled={isLoading}>
                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
