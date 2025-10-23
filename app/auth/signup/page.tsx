"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Phone, Chrome, AlertCircle, Loader2, CheckCircle } from "lucide-react"

export default function SignUpPage() {
  const { signUp, signInWithGoogle, verifyPhone } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [phoneStep, setPhoneStep] = useState<"details" | "verify">("details")
  const [verificationCode, setVerificationCode] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  // Email sign-up form
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  // Phone sign-up form
  const [phoneForm, setPhoneForm] = useState({
    name: "",
    phone: "",
  })

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Validation
    if (emailForm.password !== emailForm.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (emailForm.password.length < 8) {
      setError("Password must be at least 8 characters long")
      setLoading(false)
      return
    }

    if (!agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      setLoading(false)
      return
    }

    try {
      const success = await signUp({
        name: emailForm.name,
        email: emailForm.email,
        password: emailForm.password,
        method: "email",
      })

      if (success) {
        setSuccess("Account created successfully! Redirecting...")
        setTimeout(() => router.push("/"), 2000)
      } else {
        setError("An account with this email already exists")
      }
    } catch (err) {
      setError("An error occurred during sign up. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true)
    setError("")
    setSuccess("")

    if (!agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      setGoogleLoading(false)
      return
    }

    try {
      const success = await signInWithGoogle()
      if (success) {
        setSuccess("Account created successfully! Redirecting...")
        setTimeout(() => router.push("/"), 2000)
      } else {
        setError("Google sign up failed. Please try again.")
      }
    } catch (err) {
      setError("An error occurred during Google sign up. Please try again.")
    } finally {
      setGoogleLoading(false)
    }
  }

  const handlePhoneSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    if (!agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      setLoading(false)
      return
    }

    if (phoneStep === "details") {
      // Simulate sending SMS
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPhoneStep("verify")
      setLoading(false)
    } else {
      // Verify code and create account
      try {
        const codeValid = await verifyPhone(phoneForm.phone, verificationCode)
        if (codeValid) {
          const success = await signUp({
            name: phoneForm.name,
            phone: phoneForm.phone,
            method: "phone",
          })

          if (success) {
            setSuccess("Account created successfully! Redirecting...")
            setTimeout(() => router.push("/"), 2000)
          } else {
            setError("An account with this phone number already exists")
          }
        } else {
          setError("Invalid verification code. Please try again.")
        }
      } catch (err) {
        setError("Verification failed. Please try again.")
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Image src="/images/roomy-logo.png" alt="Roomy" width={60} height={60} className="rounded-lg" />
          </div>
          <h1 className="text-3xl font-bold">Join Roomy</h1>
          <p className="text-muted-foreground">Create your account to get started</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Choose your preferred registration method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">{success}</AlertDescription>
              </Alert>
            )}

            {/* Google Sign Up */}
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={handleGoogleSignUp}
              disabled={googleLoading || loading}
            >
              {googleLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Chrome className="w-4 h-4 mr-2" />}
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
              </div>
            </div>

            {/* Email/Phone Tabs */}
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={emailForm.password}
                        onChange={(e) => setEmailForm({ ...emailForm, password: e.target.value })}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={emailForm.confirmPassword}
                        onChange={(e) => setEmailForm({ ...emailForm, confirmPassword: e.target.value })}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    Create Account
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <form onSubmit={handlePhoneSignUp} className="space-y-4">
                  {phoneStep === "details" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="phoneName">Full Name</Label>
                        <Input
                          id="phoneName"
                          type="text"
                          placeholder="John Doe"
                          value={phoneForm.name}
                          onChange={(e) => setPhoneForm({ ...phoneForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          placeholder="+256 700 123 456"
                          value={phoneForm.phone}
                          onChange={(e) => setPhoneForm({ ...phoneForm, phone: e.target.value })}
                          required
                        />
                        <p className="text-xs text-muted-foreground">We'll send you a verification code via SMS</p>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="phoneCode">Verification Code</Label>
                      <Input
                        id="phoneCode"
                        type="text"
                        placeholder="Enter 6-digit code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        maxLength={6}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Code sent to {phoneForm.phone}. Use "123456" for demo.
                      </p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setPhoneStep("details")}
                        className="text-xs"
                      >
                        Change details
                      </Button>
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    {phoneStep === "details" ? "Send Code" : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={setAgreeToTerms} />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <Card className="mt-6 bg-muted/50">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sm mb-2">Join Roomy and enjoy:</h3>
            <div className="text-xs space-y-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span>Book amazing properties and experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span>Get personalized recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-600" />
                <span>Follow your favorite hosts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
