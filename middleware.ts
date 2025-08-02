import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Handle www redirect
  if (hostname?.startsWith('www.')) {
    const nonWwwHostname = hostname.replace('www.', '')
    const url = request.nextUrl.clone()
    url.hostname = nonWwwHostname
    url.protocol = 'https:'
    
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // Force HTTPS
  if (request.nextUrl.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    return NextResponse.redirect(url, { status: 301 })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
