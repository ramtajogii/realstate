import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';
import { ADMIN_COOKIE_NAME, createAdminToken } from '@/lib/adminAuth';
import { ensureDefaultAdmin } from '@/lib/adminSeed';
import { verifyPassword } from '@/lib/password';

const COOKIE_MAX_AGE = 60 * 60 * 8;

export async function POST(req: NextRequest) {
  try {
    await ensureDefaultAdmin();
    await dbConnect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const admin = await Admin.findOne({ email: String(email).toLowerCase().trim() }).select('+passwordHash');

    if (!admin || admin.role !== 'admin' || !verifyPassword(String(password), admin.passwordHash)) {
      return NextResponse.json({ error: 'Invalid admin credentials.' }, { status: 401 });
    }

    const token = await createAdminToken(
      {
        adminId: admin._id.toString(),
        email: admin.email,
        role: 'admin',
      },
      COOKIE_MAX_AGE
    );

    const response = NextResponse.json({ message: 'Logged in successfully.' });

    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: COOKIE_MAX_AGE,
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);

    return NextResponse.json({ error: 'Unable to login right now.' }, { status: 500 });
  }
}
