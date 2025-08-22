"use client"
import { useState, useEffect, createContext, useContext, type ReactNode } from "react"

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
  signIn: (credentials: { email?: string; phone?: string; password?: string; method: string }) => Promise<boolean>
  signUp: (userData: {
    name: string
    email?: string
    phone?: string
    password?: string
    method: "email" | "google" | "phone"
  }) => Promise<boolean>
  signInWithGoogle: () => Promise<boolean>
  signOut: () => void
  updateProfile: (updates: Partial<User>) => void
  requestVerification: () => Promise<boolean>
  verifyPhone: (phone: string, code: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database
const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "/images/host-john.png",
    signUpMethod: "email",
    verified: false,
    verificationStatus: "none",
    joinDate: "2024-01-15",
    bio: "Travel enthusiast and digital nomad",
    location: "Kampala, Uganda",
    languages: ["English", "Luganda"],
    work: "Software Developer",
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah@gmail.com",
    image: "/images/host-sarah.png",
    signUpMethod: "google",
    verified: true,
    verificationStatus: "verified",
    joinDate: "2023-11-20",
    bio: "Host and local guide",
    location: "Entebbe, Uganda",
    languages: ["English", "Swahili"],
    work: "Tourism Guide",
  },
  {
    id: "3",
    name: "David Kim",
    phone: "+256700123456",
    image: "/images/host-david.png",
    signUpMethod: "phone",
    verified: false,
    verificationStatus: "pending",
    joinDate: "2024-02-01",
    bio: "Business traveler",
    location: "Jinja, Uganda",
    languages: ["English"],
    work: "Business Consultant",
  },
]

// Mock passwords (in real app, these would be hashed)
const mockPasswords: Record<string, string> = {
  "john@example.com": "password123",
  "sarah@gmail.com": "google_auth", // Google users don't have passwords
  "+256700123456": "phone_auth", // Phone users don't have passwords
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("roomy_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (credentials: {
    email?: string
    phone?: string
    password?: string
    method: string
  }): Promise<boolean> => {
    try {
      const identifier = credentials.email || credentials.phone
      if (!identifier) return false

      // Find user by email or phone
      const foundUser = mockUsers.find((u) => u.email === identifier || u.phone === identifier)

      if (!foundUser) {
        throw new Error("User not found")
      }

      // Check password for email users
      if (credentials.method === "email" && foundUser.signUpMethod === "email") {
        const storedPassword = mockPasswords[identifier]
        if (storedPassword !== credentials.password) {
          throw new Error("Invalid password")
        }
      }

      // For phone users, password check is skipped (they use SMS verification)
      if (credentials.method === "phone" && foundUser.signUpMethod === "phone") {
        // In real app, this would verify SMS code
      }

      setUser(foundUser)
      localStorage.setItem("roomy_user", JSON.stringify(foundUser))
      return true
    } catch (error) {
      console.error("Sign in error:", error)
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
    try {
      const identifier = userData.email || userData.phone
      if (!identifier) return false

      // Check if user already exists
      const existingUser = mockUsers.find((u) => u.email === identifier || u.phone === identifier)
      if (existingUser) {
        throw new Error("User already exists")
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        image: "/images/default-avatar.png",
        signUpMethod: userData.method,
        verified: userData.method === "google", // Google users are auto-verified
        verificationStatus: userData.method === "google" ? "verified" : "none",
        joinDate: new Date().toISOString().split("T")[0],
      }

      // Add to mock database
      mockUsers.push(newUser)
      if (userData.password && userData.email) {
        mockPasswords[userData.email] = userData.password
      }

      setUser(newUser)
      localStorage.setItem("roomy_user", JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error("Sign up error:", error)
      return false
    }
  }

  const signInWithGoogle = async (): Promise<boolean> => {
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if Google user exists, if not create one
      let googleUser = mockUsers.find((u) => u.email === "google.user@gmail.com")

      if (!googleUser) {
        googleUser = {
          id: Date.now().toString(),
          name: "Google User",
          email: "google.user@gmail.com",
          image: "/images/host-emily.png",
          signUpMethod: "google",
          verified: true,
          verificationStatus: "verified",
          joinDate: new Date().toISOString().split("T")[0],
        }
        mockUsers.push(googleUser)
      }

      setUser(googleUser)
      localStorage.setItem("roomy_user", JSON.stringify(googleUser))
      return true
    } catch (error) {
      console.error("Google sign in error:", error)
      return false
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("roomy_user")
  }

  const updateProfile = (updates: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem("roomy_user", JSON.stringify(updatedUser))

    // Update in mock database
    const userIndex = mockUsers.findIndex((u) => u.id === user.id)
    if (userIndex !== -1) {
      mockUsers[userIndex] = updatedUser
    }
  }

  const requestVerification = async (): Promise<boolean> => {
    try {
      if (!user) return false

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const updatedUser = { ...user, verificationStatus: "pending" as const }
      setUser(updatedUser)
      localStorage.setItem("roomy_user", JSON.stringify(updatedUser))

      // Update in mock database
      const userIndex = mockUsers.findIndex((u) => u.id === user.id)
      if (userIndex !== -1) {
        mockUsers[userIndex] = updatedUser
      }

      return true
    } catch (error) {
      console.error("Verification request error:", error)
      return false
    }
  }

  const verifyPhone = async (phone: string, code: string): Promise<boolean> => {
    try {
      // Mock SMS verification - accept "123456" as valid code
      if (code === "123456") {
        return true
      }
      return false
    } catch (error) {
      console.error("Phone verification error:", error)
      return false
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        requestVerification,
        verifyPhone,
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
