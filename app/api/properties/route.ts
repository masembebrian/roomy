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
    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
    const limit = Math.max(1, Number.parseInt(searchParams.get("limit") || "12"))

    let query = supabase
      .from("properties")
      .select(
        `
        id,
        title,
        location,
        price,
        rating,
        review_count,
        images,
        amenities,
        guests,
        bedrooms,
        bathrooms,
        instant_book,
        profiles:host_id (
          id,
          name,
          image,
          verified
        )
      `,
        { count: "exact" },
      )

    if (location) {
      query = query.ilike("location", `%${location}%`)
    }
    if (minPrice) {
      const price = Number.parseFloat(minPrice)
      if (!Number.isNaN(price)) {
        query = query.gte("price", price)
      }
    }
    if (maxPrice) {
      const price = Number.parseFloat(maxPrice)
      if (!Number.isNaN(price)) {
        query = query.lte("price", price)
      }
    }
    if (bedrooms) {
      const bd = Number.parseInt(bedrooms)
      if (!Number.isNaN(bd)) {
        query = query.gte("bedrooms", bd)
      }
    }
    if (guests) {
      const g = Number.parseInt(guests)
      if (!Number.isNaN(g)) {
        query = query.gte("guests", g)
      }
    }

    const { data, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Properties query error:", error.message)
      return NextResponse.json(
        {
          data: [],
          pagination: { page, limit, total: 0, pages: 0 },
          error: error.message,
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const safeData = Array.isArray(data)
      ? data
          .filter((item) => item && typeof item === "object")
          .map((item) => ({
            ...item,
            profiles: item.profiles || null,
          }))
      : []

    return NextResponse.json(
      {
        data: safeData,
        pagination: {
          page,
          limit,
          total: count || 0,
          pages: Math.ceil((count || 0) / limit),
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    )
  } catch (error) {
    console.error("[v0] Properties API error:", error instanceof Error ? error.message : String(error))
    return NextResponse.json(
      {
        data: [],
        pagination: { page: 1, limit: 12, total: 0, pages: 0 },
        error: "Failed to fetch properties",
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
