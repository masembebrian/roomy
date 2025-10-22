import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") ?? "/"

  if (code) {
    try {
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      console.error("Error exchanging code for session:", error)
      return NextResponse.redirect(new URL("/auth/signin?error=auth_callback_error", requestUrl.origin))
    }
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin))
}
