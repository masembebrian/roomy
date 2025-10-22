"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Mail, Phone, Chrome, AlertCircle, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { signIn, signInWithGoogle } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/"

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn({ email, password, method: "email" })

    if (result.success) {
      router.push(redirectTo)
    } else {
      setError(result.error || "Invalid credentials. Please check your email and password.")
    }

    setLoading(false)
  }

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn({ phone, password, method: "phone" })

    if (result.success) {
      router.push(redirectTo)
    } else {
      setError(result.error || "Invalid credentials. Please check your phone number and password.")
    }

    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError("")

    const result = await signInWithGoogle()

    if (!result.success) {
      setError(result.error || "Unable to sign in with Google. Please try email or phone sign-in, or contact support.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md">
        <Link
          href="/auth/welcome"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <Card className="border-none shadow-xl">
          <CardHeader className="space-y-1 text-center pb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl mb-4 mx-auto shadow-lg">
              <span className="text-3xl font-bold text-white">R</span>
            </div>
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Sign in to continue to Roomy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="button"
              variant="outline"
              className="w-full h-11 bg-white hover:bg-gray-50"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Chrome className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or sign in with</span>
              </div>
            </div>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-11">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Phone</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4 mt-4">
                <form onSubmit={handleEmailSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                      className="h-11"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4 mt-4">
                <form onSubmit={handlePhoneSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+256 700 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      disabled={loading}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-password">Password</Label>
                    <Input
                      id="phone-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                      className="h-11"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm pt-2">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link
                href={`/auth/signup${redirectTo !== "/" ? `?redirect=${redirectTo}` : ""}`}
                className="text-pink-600 hover:text-pink-700 font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
