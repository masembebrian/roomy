import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const metric = await request.json()

    // Log metrics for monitoring
    console.log("[Metrics]", {
      name: metric.name,
      value: metric.value,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing metric:", error)
    return NextResponse.json({ error: "Failed to process metric" }, { status: 500 })
  }
}
