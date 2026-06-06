import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/adminAuth';

const PAGE_LIMITS = [10, 20, 40, 50];

export async function GET(req: NextRequest) {
  const admin = await verifyAdminToken(req.cookies.get(ADMIN_COOKIE_NAME)?.value);

  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  const requestedLimit = Number(req.nextUrl.searchParams.get('limit'));
  const limit = PAGE_LIMITS.includes(requestedLimit) ? requestedLimit : 10;
  const requestedPage = Number(req.nextUrl.searchParams.get('page'));
  const page = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const total = await Contact.countDocuments({});
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(page, totalPages);

  const contacts = await Contact.find({})
    .select('name email phone subject message createdAt')
    .sort({ createdAt: -1 })
    .skip((safePage - 1) * limit)
    .limit(limit)
    .lean();

  return NextResponse.json({
    contacts,
    pagination: {
      page: safePage,
      limit,
      total,
      totalPages,
    },
  });
}
