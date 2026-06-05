import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/adminAuth';

export async function GET(req: NextRequest) {
  const admin = await verifyAdminToken(req.cookies.get(ADMIN_COOKIE_NAME)?.value);

  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  const contacts = await Contact.find({})
    .select('name email phone subject message createdAt')
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({ contacts });
}
