import { NextRequest } from 'next/server';
import { handleContactSubmit } from '@/controllers/contactController';

export async function POST(req: NextRequest) {
  return handleContactSubmit(req);
}
