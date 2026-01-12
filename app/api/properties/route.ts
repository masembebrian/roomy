import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)

    const location = searchParams.get("location")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const bedrooms = searchParams.get("bedrooms")
    const guests = searchParams.get("guests")
    const amenities = searchParams.getAll("amenities")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    let query = supabase.from("properties").select("*", { count: "exact" })

    if (location) {
      query = query.ilike("location", `%${location}%`)
    }
    if (minPrice) {
      query = query.gte("price", Number.parseFloat(minPrice))
    }
    if (maxPrice) {
      query = query.lte("price", Number.parseFloat(maxPrice))
    }
    if (bedrooms) {
      query = query.gte("bedrooms", Number.parseInt(bedrooms))
    }
    if (guests) {
      query = query.gte("guests", Number.parseInt(guests))
    }

    const { data, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Properties query error:", error)
      return NextResponse.json(
        {
          error: error.message || "Failed to fetch properties",
          data: [],
          pagination: { page: 1, limit: 12, total: 0, pages: 0 },
        },
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    return NextResponse.json(
      {
        data: data || [],
        pagination: {
          page,
          limit,
          total: count || 0,
          pages: Math.ceil((count || 0) / limit),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      },
    )
  } catch (error) {
    console.error("[v0] Properties API error:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch properties"
    return NextResponse.json(
      {
        error: errorMessage,
        data: [],
        pagination: { page: 1, limit: 12, total: 0, pages: 0 },
      },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

// ... existing POST code ...
