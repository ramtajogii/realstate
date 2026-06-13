import dbConnect from '@/lib/db';
import Admin from '@/models/Admin';
import { hashPassword } from '@/lib/password';

export async function ensureDefaultAdmin() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return;
  }

  await dbConnect();

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    return;
  }

  await Admin.create({
    email,
    passwordHash: hashPassword(password),
    role: 'admin',
  });
}
