import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: userProfile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (profileError || userProfile?.role !== "admin") {
      return NextResponse.json({ error: "Forbidden: Admin access required" }, { status: 403 })
    }

    const [usersData, propertiesData, bookingsData, paymentsData] = await Promise.all([
      supabase.from("profiles").select("count", { count: "exact" }),
      supabase.from("properties").select("count", { count: "exact" }),
      supabase.from("bookings").select("count", { count: "exact" }),
      supabase.from("payments").select("count, amount", { count: "exact" }),
    ])

    const totalRevenue = paymentsData.data?.reduce((sum: number, payment: any) => sum + payment.amount, 0) || 0

    return NextResponse.json({
      users: usersData.count || 0,
      properties: propertiesData.count || 0,
      bookings: bookingsData.count || 0,
      totalRevenue,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch dashboard data" },
      { status: 500 },
    )
  }
}
