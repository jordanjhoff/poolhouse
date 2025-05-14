import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/lib/session'
import { cookies } from 'next/headers'
 
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/register', '/']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  const cookie = (await cookies()).get('session')?.value
  console.log('Cookie:', cookie)
  const session = await decrypt(cookie)
  console.log('sess:', session)

  if (path.startsWith('/api') && !path.startsWith('/api/auth')) {
    if (!session?.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
 
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  }

  if (session?.userId) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('userId', session.userId);
  
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
}