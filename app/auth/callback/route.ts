import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data.user) {
      // Check if profile exists
      const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

      // If no profile exists, create one
      if (!profile) {
        await supabase.from("profiles").insert({
          id: data.user.id,
          name: data.user.user_metadata?.name || data.user.email?.split("@")[0] || "User",
          email: data.user.email || null,
          phone: data.user.phone || null,
          image: data.user.user_metadata?.avatar_url || null,
          sign_up_method: "google",
          verified: false,
          verification_status: "none",
          join_date: new Date().toISOString(),
        })
      }
    }
  }

  return NextResponse.redirect(new URL("/", requestUrl.origin))
}
