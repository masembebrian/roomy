import { createClient } from "@supabase/supabase-js"

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tbzandmtoflteqffueii.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiemFuZG10b2ZsdGVxZmZ1ZWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzOTgxNDAsImV4cCI6MjA3NTk3NDE0MH0.zKdLAUWG941B0YLhIC3TIgmf0NIy2EfrAW4GJdP96Fg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
  },
})

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabaseUrl !== "https://placeholder.supabase.co"
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          email: string | null
          phone: string | null
          image: string | null
          sign_up_method: "email" | "google" | "phone" | null
          verified: boolean
          verification_status: "none" | "pending" | "verified"
          join_date: string
          bio: string | null
          location: string | null
          languages: string[] | null
          work: string | null
          school: string | null
          emergency_contact: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          email?: string | null
          phone?: string | null
          image?: string | null
          sign_up_method?: "email" | "google" | "phone" | null
          verified?: boolean
          verification_status?: "none" | "pending" | "verified"
          join_date?: string
          bio?: string | null
          location?: string | null
          languages?: string[] | null
          work?: string | null
          school?: string | null
          emergency_contact?: string | null
        }
        Update: {
          name?: string
          email?: string | null
          phone?: string | null
          image?: string | null
          verified?: boolean
          verification_status?: "none" | "pending" | "verified"
          bio?: string | null
          location?: string | null
          languages?: string[] | null
          work?: string | null
          school?: string | null
          emergency_contact?: string | null
        }
      }
      properties: {
        Row: {
          id: string
          host_id: string
          title: string
          description: string | null
          price: number
          location: string
          coordinates: any
          bedrooms: number | null
          bathrooms: number | null
          guests: number | null
          amenities: string[] | null
          images: string[] | null
          rating: number
          review_count: number
          instant_book: boolean
          house_rules: string[] | null
          cancellation_policy: string | null
          created_at: string
          updated_at: string
        }
      }
      bookings: {
        Row: {
          id: string
          property_id: string
          guest_id: string
          check_in: string
          check_out: string
          guests: number
          total_price: number
          status: "pending" | "confirmed" | "cancelled" | "completed"
          special_requests: string | null
          arrival_time: string | null
          purpose: string | null
          confirmation_code: string
          created_at: string
          updated_at: string
        }
        Insert: {
          property_id: string
          guest_id: string
          check_in: string
          check_out: string
          guests: number
          total_price: number
          status?: "pending" | "confirmed" | "cancelled" | "completed"
          special_requests?: string | null
          arrival_time?: string | null
          purpose?: string | null
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: string
          title: string
          message: string
          details: any
          read: boolean
          category: string | null
          created_at: string
        }
      }
    }
  }
}
