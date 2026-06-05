import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/adminAuth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isHomePage = pathname === '/';
  const isAdminDashboard = pathname.startsWith('/admin/dashboard');
  const isAdminApi = pathname.startsWith('/api/admin/contacts');
  const isAdminLogin = pathname === '/admin';

  if (isHomePage) {
    const response = NextResponse.next();

    response.cookies.set(ADMIN_COOKIE_NAME, '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 0,
    });

    return response;
  }

  if (!isAdminDashboard && !isAdminApi && !isAdminLogin) {
    return NextResponse.next();
  }

  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const admin = await verifyAdminToken(token);

  if (isAdminLogin && admin) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  if (!admin && isAdminApi) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!admin && isAdminDashboard) {
    const loginUrl = new URL('/admin', req.url);
    loginUrl.searchParams.set('from', pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/admin', '/admin/dashboard/:path*', '/api/admin/contacts/:path*'],
};
