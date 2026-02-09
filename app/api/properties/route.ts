import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { searchParams } = new URL(request.url)

    const page = Math.max(1, Number.parseInt(searchParams.get("page") || "1"))
    const limit = Math.max(1, Number.parseInt(searchParams.get("limit") || "12"))

    // First try without the foreign key join
    let query = supabase
      .from("properties")
      .select(
        "id, title, location, price, rating, review_count, images, amenities, guests, bedrooms, bathrooms, instant_book, host_id",
        { count: "exact" },
      )

    // Apply filters
    const location = searchParams.get("location")
    if (location) {
      query = query.ilike("location", `%${location}%`)
    }

    const minPrice = searchParams.get("minPrice")
    if (minPrice) {
      const price = Number.parseFloat(minPrice)
      if (!Number.isNaN(price)) {
        query = query.gte("price", price)
      }
    }

    const maxPrice = searchParams.get("maxPrice")
    if (maxPrice) {
      const price = Number.parseFloat(maxPrice)
      if (!Number.isNaN(price)) {
        query = query.lte("price", price)
      }
    }

    const bedrooms = searchParams.get("bedrooms")
    if (bedrooms) {
      const bd = Number.parseInt(bedrooms)
      if (!Number.isNaN(bd)) {
        query = query.gte("bedrooms", bd)
      }
    }

    const guests = searchParams.get("guests")
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
      const errorMessage = String(error?.message || "Database query failed")
      console.error("[v0] Properties query failed:", errorMessage)
      return NextResponse.json(
        {
          data: [],
          pagination: { page, limit, total: 0, pages: 0 },
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Fetch host profiles separately to avoid join issues
    const hostIds = Array.isArray(data) ? [...new Set(data.map((item: any) => item?.host_id).filter(Boolean))] : []
    let hostProfiles: Record<string, any> = {}

    if (hostIds.length > 0) {
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, name, image, verified")
        .in("id", hostIds)

      if (profiles && Array.isArray(profiles)) {
        hostProfiles = profiles.reduce(
          (acc, profile) => {
            acc[profile.id] = profile
            return acc
          },
          {} as Record<string, any>,
        )
      }
    }

    const safeData = Array.isArray(data)
      ? data
          .filter((item) => item && typeof item === "object" && item.id)
          .map((item) => ({
            id: item.id,
            title: item.title || "Untitled",
            location: item.location || "Unknown",
            price: item.price || 0,
            rating: item.rating || 0,
            review_count: item.review_count || 0,
            images: Array.isArray(item.images) ? item.images : [],
            amenities: Array.isArray(item.amenities) ? item.amenities : [],
            guests: item.guests || 0,
            bedrooms: item.bedrooms || 0,
            bathrooms: item.bathrooms || 0,
            instant_book: Boolean(item.instant_book),
            host_id: item.host_id,
            profiles: hostProfiles[item.host_id] || null,
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
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Properties API error:", errorMessage)

    return NextResponse.json(
      {
        data: [],
        pagination: { page: 1, limit: 12, total: 0, pages: 0 },
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
