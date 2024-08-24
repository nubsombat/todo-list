import { NextRequest, NextResponse } from 'next/server'
import { getTokenCookie } from './utils/tokenStorge'

const protectedRoutes = ['/to-do-list']
const publicRoutes = ['/login', '/register', '/']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const token = await getTokenCookie()

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (
        isPublicRoute &&
        token &&
        !req.nextUrl.pathname.startsWith('/to-do-list')
    ) {
        return NextResponse.redirect(new URL('/to-do-list', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}