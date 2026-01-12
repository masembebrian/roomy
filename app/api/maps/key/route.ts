import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "Google Maps API key not configured" }, { status: 500 })
    }

    return NextResponse.json(
      { key: apiKey },
      {
        headers: {
          "Cache-Control": "public, max-age=3600", // Cache for 1 hour
        },
      },
    )
  } catch (error) {
    console.error("Error fetching maps API key:", error)
    return NextResponse.json({ error: "Failed to fetch maps API key" }, { status: 500 })
  }
}
