import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const transactionId = `${body.paymentMethod.toUpperCase()}-${Date.now()}`

    const { data, error } = await supabase
      .from("payments")
      .insert({
        user_id: user.id,
        transaction_id: transactionId,
        ...body,
        status: "completed",
      })
      .select()
      .single()

    if (error) throw error

    // Update booking status
    if (body.booking_id) {
      await supabase.from("bookings").update({ status: "confirmed" }).eq("id", body.booking_id)
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to process payment" },
      { status: 500 },
    )
  }
}
