import { createClient } from "@supabase/supabase-js"

// Use placeholder values if environment variables are not set (for build time)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
  },
})

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co"
  )
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
