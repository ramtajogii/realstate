'use client';

import { Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed.');
      }

      const from = new URLSearchParams(window.location.search).get('from');

      router.replace(from || '/admin/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] bg-[#ffffff] px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F26522]">Admin Access</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-black">Login</h1>
          <p className="mt-3 text-sm text-gray-600">Enter admin email and password to view contact inquiries.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-black/10 bg-[#F7F7F7] p-6">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Email</span>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-4 text-sm text-black outline-none transition-colors focus:border-[#F26522]"
                placeholder="admin@example.com"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Password</span>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                required
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-4 text-sm text-black outline-none transition-colors focus:border-[#F26522]"
                placeholder="Password"
              />
            </div>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#F26522] py-4 font-medium text-black transition-colors hover:bg-[#D4521A] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Checking...' : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </section>
  );
}
