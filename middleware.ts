// Middleware function to check if the user is authenticated
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const cookie = cookies()
  const isLoggedIn = cookie.get('isLoggedIn')
  if (isLoggedIn) return
  else return NextResponse.redirect(new URL('/auth/login', req.url))
}

export const config = {
  matcher: '/user/:path*'
}
