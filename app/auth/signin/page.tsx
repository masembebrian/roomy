"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Chrome, ArrowLeft } from "lucide-react"

export default function SignIn() {
  const router = useRouter()
  const { signIn, signInWithGoogle } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [emailData, setEmailData] = useState({ email: "", password: "" })
  const [phoneData, setPhoneData] = useState({ phone: "", password: "" })

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await signIn({
        email: emailData.email,
        password: emailData.password,
        method: "email",
      })

      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        })
        router.push("/")
      } else {
        toast({
          title: "Sign in failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during sign in. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await signIn({
        phone: phoneData.phone,
        password: phoneData.password,
        method: "phone",
      })

      if (success) {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        })
        router.push("/")
      } else {
        toast({
          title: "Sign in failed",
          description: "Invalid phone number or password. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during sign in. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in with Google. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-md mx-auto w-full">
          <Link
            href="/"
            className="inline-flex items-center text-xs md:text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Welcome back</CardTitle>
              <CardDescription className="text-xs md:text-sm">Sign in to your Roomy account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full bg-transparent text-sm md:text-base h-10 md:h-12"
                disabled={isLoading}
              >
                <Chrome className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 text-xs md:text-sm">
                  <TabsTrigger value="email" className="flex items-center gap-1 md:gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">Email</span>
                  </TabsTrigger>
                  <TabsTrigger value="phone" className="flex items-center gap-1 md:gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Phone</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="email">
                  <form onSubmit={handleEmailSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={emailData.email}
                        onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                        required
                        className="text-sm md:text-base h-10 md:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm md:text-base">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={emailData.password}
                        onChange={(e) => setEmailData({ ...emailData, password: e.target.value })}
                        required
                        className="text-sm md:text-base h-10 md:h-12"
                      />
                      <Link
                        href="/auth/forgot-password"
                        className="text-xs md:text-sm text-primary hover:underline inline-block mt-1"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full text-sm md:text-base h-10 md:h-12" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="phone">
                  <form onSubmit={handlePhoneSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+256 700 123 456"
                        value={phoneData.phone}
                        onChange={(e) => setPhoneData({ ...phoneData, phone: e.target.value })}
                        required
                        className="text-sm md:text-base h-10 md:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-password" className="text-sm md:text-base">
                        Password
                      </Label>
                      <Input
                        id="phone-password"
                        type="password"
                        value={phoneData.password}
                        onChange={(e) => setPhoneData({ ...phoneData, password: e.target.value })}
                        required
                        className="text-sm md:text-base h-10 md:h-12"
                      />
                    </div>
                    <Button type="submit" className="w-full text-sm md:text-base h-10 md:h-12" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center text-xs md:text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link href="/auth/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
