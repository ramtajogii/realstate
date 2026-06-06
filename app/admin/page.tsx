import AdminLoginForm from './AdminLoginForm';
import { ensureDefaultAdmin } from '@/lib/adminSeed';

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  await ensureDefaultAdmin();

  return (
    <section className="min-h-[70vh] bg-[#ffffff] px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F26522]">Admin Access</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-black">Login</h1>
          <p className="mt-3 text-sm text-gray-600">Enter admin email and password to view contact inquiries.</p>
        </div>

        <AdminLoginForm />
      </div>
    </section>
  );
}
