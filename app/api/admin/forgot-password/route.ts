import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { hashPassword } from '@/lib/password';
import Admin from '@/models/Admin';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { action, email, password, confirmPassword } = await req.json();
    const normalizedEmail = String(email || '').toLowerCase().trim();

    if (!normalizedEmail) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const admin = await Admin.findOne({ email: normalizedEmail });

    if (!admin || admin.role !== 'admin') {
      return NextResponse.json({ error: 'Admin email was not found.' }, { status: 404 });
    }

    if (action === 'verify-email') {
      return NextResponse.json({ message: 'Email verified.' });
    }

    if (action !== 'reset-password') {
      return NextResponse.json({ error: 'Invalid reset request.' }, { status: 400 });
    }

    if (!password || !confirmPassword) {
      return NextResponse.json({ error: 'New password and confirm password are required.' }, { status: 400 });
    }

    if (String(password).length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match.' }, { status: 400 });
    }

    admin.passwordHash = hashPassword(String(password));
    await admin.save();

    return NextResponse.json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Forgot password error:', error);

    return NextResponse.json({ error: 'Unable to reset password right now.' }, { status: 500 });
  }
}
