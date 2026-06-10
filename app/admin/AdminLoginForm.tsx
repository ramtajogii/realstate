'use client';

import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [resetForm, setResetForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'forgot' | 'reset'>('login');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

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

  const handleVerifyEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify-email', email: resetForm.email }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Email verification failed.');
      }

      setMode('reset');
      setMessage('Email verified. Enter your new password.');
    } catch (err: any) {
      setError(err.message || 'Email verification failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (resetForm.password !== resetForm.confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      const response = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reset-password',
          email: resetForm.email,
          password: resetForm.password,
          confirmPassword: resetForm.confirmPassword,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Password reset failed.');
      }

      setForm({ email: resetForm.email, password: '' });
      setResetForm({ email: '', password: '', confirmPassword: '' });
      setMode('login');
      setMessage('Password changed successfully. You can login now.');
    } catch (err: any) {
      setError(err.message || 'Password reset failed.');
    } finally {
      setLoading(false);
    }
  };

  const showLogin = () => {
    setMode('login');
    setError('');
    setMessage('');
  };

  const showForgotPassword = () => {
    setResetForm({ email: form.email, password: '', confirmPassword: '' });
    setMode('forgot');
    setError('');
    setMessage('');
  };

  const notice = (
    <>
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}
      {message && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}
    </>
  );

  if (mode === 'forgot') {
    return (
      <form onSubmit={handleVerifyEmail} className="space-y-5 rounded-2xl border border-black/10 bg-[#F7F7F7] p-6">
        {notice}

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Admin Email</span>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="email"
              required
              value={resetForm.email}
              onChange={(event) => setResetForm({ ...resetForm, email: event.target.value })}
              className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-4 text-sm text-black outline-none transition-colors focus:border-[#091e44]"
              placeholder="admin@example.com"
            />
          </div>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#091e44] py-4 font-medium text-white transition-colors hover:bg-[#061632] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Checking...' : 'Continue'}
        </button>

        <button type="button" onClick={showLogin} className="w-full text-sm font-medium text-gray-700 hover:text-[#091e44]">
          Back to login
        </button>
      </form>
    );
  }

  if (mode === 'reset') {
    return (
      <form onSubmit={handleResetPassword} className="space-y-5 rounded-2xl border border-black/10 bg-[#F7F7F7] p-6">
        {notice}

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">New Password</span>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type={showNewPassword ? 'text' : 'password'}
              required
              minLength={8}
              value={resetForm.password}
              onChange={(event) => setResetForm({ ...resetForm, password: event.target.value })}
              className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-12 text-sm text-black outline-none transition-colors focus:border-[#091e44]"
              placeholder="New password"
            />
            <button
              type="button"
              aria-label={showNewPassword ? 'Hide new password' : 'Show new password'}
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-[#091e44]"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Confirm Password</span>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              required
              minLength={8}
              value={resetForm.confirmPassword}
              onChange={(event) => setResetForm({ ...resetForm, confirmPassword: event.target.value })}
              className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-12 text-sm text-black outline-none transition-colors focus:border-[#091e44]"
              placeholder="Confirm password"
            />
            <button
              type="button"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-[#091e44]"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#091e44] py-4 font-medium text-white transition-colors hover:bg-[#061632] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Changing...' : 'Change Password'}
        </button>

        <button type="button" onClick={showLogin} className="w-full text-sm font-medium text-gray-700 hover:text-[#091e44]">
          Back to login
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-black/10 bg-[#F7F7F7] p-6">
      {notice}

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Email</span>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-4 text-sm text-black outline-none transition-colors focus:border-[#091e44]"
            placeholder="admin@example.com"
          />
        </div>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-wider text-gray-600">Password</span>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type={showLoginPassword ? 'text' : 'password'}
            required
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            className="w-full rounded-xl border border-black/20 bg-white py-3.5 pl-12 pr-12 text-sm text-black outline-none transition-colors focus:border-[#091e44]"
            placeholder="Password"
          />
          <button
            type="button"
            aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowLoginPassword(!showLoginPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-[#091e44]"
          >
            {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#091e44] py-4 font-medium text-white transition-colors hover:bg-[#061632] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Checking...' : 'Login to Dashboard'}
      </button>

      <button type="button" onClick={showForgotPassword} className="w-full text-sm font-medium text-gray-700 hover:text-[#091e44]">
        Forgot password?
      </button>
    </form>
  );
}
