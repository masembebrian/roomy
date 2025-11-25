"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { createClient } from "./supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface User {
  id: string
  name: string
  email?: string
  phone?: string
  image?: string
  signUpMethod: "email" | "google" | "phone"
  verified: boolean
  verificationStatus: "none" | "pending" | "verified"
  joinDate: string
  bio?: string
  location?: string
  languages?: string[]
  work?: string
  school?: string
  emergencyContact?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (credentials: { email?: string; phone?: string; password?: string; method: string }) => Promise<boolean>
  signUp: (userData: {
    name: string
    email?: string
    phone?: string
    password?: string
    method: "email" | "google" | "phone"
  }) => Promise<boolean>
  signInWithGoogle: () => Promise<boolean>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<boolean>
  requestVerification: () => Promise<boolean>
  verifyPhone: (phone: string, code: string) => Promise<boolean>
  forgotPassword: (email: string) => Promise<boolean>
  resetPassword: (password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadUserProfile(session.user)
      } else {
        setLoading(false)
      }
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await loadUserProfile(session.user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadUserProfile = async (authUser: SupabaseUser) => {
    const supabase = createClient()

    try {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", authUser.id).single()

      if (error) {
        // If profile doesn't exist, create it from auth user
        if (error.code === "PGRST116") {
          const newProfile = {
            id: authUser.id,
            name: authUser.user_metadata?.name || authUser.email?.split("@")[0] || "User",
            email: authUser.email || null,
            phone: authUser.phone || null,
            image: authUser.user_metadata?.avatar_url || null,
            sign_up_method: authUser.app_metadata?.provider === "google" ? "google" : "email",
            verified: false,
            verification_status: "none",
            join_date: new Date().toISOString(),
          }

          const { data: createdProfile, error: createError } = await supabase
            .from("profiles")
            .insert(newProfile)
            .select()
            .single()

          if (createError) throw createError

          setUser({
            id: createdProfile.id,
            name: createdProfile.name,
            email: createdProfile.email || undefined,
            phone: createdProfile.phone || undefined,
            image: createdProfile.image || undefined,
            signUpMethod: createdProfile.sign_up_method as "email" | "google" | "phone",
            verified: createdProfile.verified,
            verificationStatus: createdProfile.verification_status,
            joinDate: createdProfile.join_date,
          })
          return
        }
        throw error
      }

      if (data) {
        setUser({
          id: data.id,
          name: data.name,
          email: data.email || undefined,
          phone: data.phone || undefined,
          image: data.image || undefined,
          signUpMethod: data.sign_up_method as "email" | "google" | "phone",
          verified: data.verified,
          verificationStatus: data.verification_status,
          joinDate: data.join_date,
          bio: data.bio || undefined,
          location: data.location || undefined,
          languages: data.languages || undefined,
          work: data.work || undefined,
          school: data.school || undefined,
          emergencyContact: data.emergency_contact || undefined,
        })
      }
    } catch (error) {
      console.error("Error loading user profile:", error)
    }
  }

  const signIn = async (credentials: {
    email?: string
    phone?: string
    password?: string
    method: string
  }): Promise<boolean> => {
    const supabase = createClient()

    try {
      let result

      if (credentials.method === "email" && credentials.email && credentials.password) {
        result = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        })
      } else if (credentials.method === "phone" && credentials.phone && credentials.password) {
        result = await supabase.auth.signInWithPassword({
          phone: credentials.phone,
          password: credentials.password,
        })
      } else {
        console.error("[v0] Invalid credentials provided")
        return false
      }

      if (result.error) {
        console.error("[v0] Sign in error:", result.error.message)
        return false
      }

      if (result.data?.user) {
        console.log("[v0] Sign in successful, loading profile")
        await loadUserProfile(result.data.user)
        return true
      }

      return false
    } catch (error) {
      console.error("[v0] Sign in exception:", error)
      return false
    }
  }

  const signUp = async (userData: {
    name: string
    email?: string
    phone?: string
    password?: string
    method: "email" | "google" | "phone"
  }): Promise<boolean> => {
    const supabase = createClient()

    try {
      if (userData.method === "email" && userData.email && userData.password) {
        const { data, error } = await supabase.auth.signUp({
          email: userData.email,
          password: userData.password,
          options: {
            data: {
              name: userData.name,
            },
            emailRedirectTo:
              process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/auth/callback`,
          },
        })

        if (error) throw error

        if (data.user) {
          // Create profile
          await supabase.from("profiles").insert({
            id: data.user.id,
            name: userData.name,
            email: userData.email,
            sign_up_method: "email",
            verified: false,
            verification_status: "none",
            join_date: new Date().toISOString(),
          })
        }

        return !!data.user
      } else if (userData.method === "phone" && userData.phone && userData.password) {
        const { data, error } = await supabase.auth.signUp({
          phone: userData.phone,
          password: userData.password,
          options: {
            data: {
              name: userData.name,
            },
          },
        })

        if (error) throw error

        if (data.user) {
          await supabase.from("profiles").insert({
            id: data.user.id,
            name: userData.name,
            phone: userData.phone,
            sign_up_method: "phone",
            verified: false,
            verification_status: "none",
            join_date: new Date().toISOString(),
          })
        }

        return !!data.user
      }

      return false
    } catch (error) {
      console.error("Sign up error:", error)
      return false
    }
  }

  const signInWithGoogle = async (): Promise<boolean> => {
    const supabase = createClient()

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      })

      if (error) throw error
      return !!data
    } catch (error) {
      console.error("Google sign in error:", error)
      return false
    }
  }

  const signOut = async () => {
    const supabase = createClient()

    try {
      await supabase.auth.signOut()
      setUser(null)
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

  const updateProfile = async (updates: Partial<User>): Promise<boolean> => {
    const supabase = createClient()

    try {
      if (!user) return false

      const { error } = await supabase
        .from("profiles")
        .update({
          name: updates.name,
          bio: updates.bio,
          location: updates.location,
          languages: updates.languages,
          work: updates.work,
          school: updates.school,
          emergency_contact: updates.emergencyContact,
          image: updates.image,
        })
        .eq("id", user.id)

      if (error) throw error

      // Reload user with auth user object
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser()
      if (authUser) {
        await loadUserProfile(authUser)
      }
      return true
    } catch (error) {
      console.error("Update profile error:", error)
      return false
    }
  }

  const requestVerification = async (): Promise<boolean> => {
    const supabase = createClient()

    try {
      if (!user) return false

      const { error } = await supabase.from("profiles").update({ verification_status: "pending" }).eq("id", user.id)

      if (error) throw error

      const {
        data: { user: authUser },
      } = await supabase.auth.getUser()
      if (authUser) {
        await loadUserProfile(authUser)
      }
      return true
    } catch (error) {
      console.error("Verification request error:", error)
      return false
    }
  }

  const verifyPhone = async (phone: string, code: string): Promise<boolean> => {
    const supabase = createClient()

    try {
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: code,
        type: "sms",
      })

      if (error) throw error
      return true
    } catch (error) {
      console.error("Phone verification error:", error)
      return false
    }
  }

  const forgotPassword = async (email: string): Promise<boolean> => {
    const supabase = createClient()

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error
      return true
    } catch (error) {
      console.error("Forgot password error:", error)
      return false
    }
  }

  const resetPassword = async (password: string): Promise<boolean> => {
    const supabase = createClient()

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error
      return true
    } catch (error) {
      console.error("Reset password error:", error)
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        requestVerification,
        verifyPhone,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
