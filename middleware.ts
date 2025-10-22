import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/auth/signin") ||
    req.nextUrl.pathname.startsWith("/auth/signup") ||
    req.nextUrl.pathname.startsWith("/auth/welcome")

  // If user is logged in and tries to access auth pages, redirect to home
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // If user is not logged in and tries to access non-auth pages, redirect to welcome
  if (!session && !isAuthPage && req.nextUrl.pathname !== "/auth/callback") {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/auth/welcome"
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api).*)"],
}
