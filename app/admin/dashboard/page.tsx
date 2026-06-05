import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Inbox } from 'lucide-react';
import AdminLogoutButton from '@/components/AdminLogoutButton';
import dbConnect from '@/lib/db';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/adminAuth';
import Contact from '@/models/Contact';

type ContactRow = {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message?: string;
  createdAt?: Date;
};

export default async function AdminDashboardPage() {
  const admin = await verifyAdminToken(cookies().get(ADMIN_COOKIE_NAME)?.value);

  if (!admin) {
    redirect('/admin');
  }

  await dbConnect();

  const contacts = await Contact.find({})
    .select('name email phone subject message createdAt')
    .sort({ createdAt: -1 })
    .lean<ContactRow[]>();

  return (
    <section className="min-h-[70vh] bg-[#ffffff] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F26522]">Admin Dashboard</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-black">Contact Inquiries</h1>
            <p className="mt-2 text-sm text-gray-600">Logged in as {admin.email}</p>
          </div>
          <AdminLogoutButton />
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#F7F7F7]">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-black">
              <Inbox size={18} className="text-[#F26522]" />
              Total inquiries
            </div>
            <span className="rounded-full bg-[#F26522]/15 px-3 py-1 text-sm font-semibold text-[#D4521A]">
              {contacts.length}
            </span>
          </div>

          {contacts.length === 0 ? (
            <div className="px-5 py-12 text-center text-gray-600">No contact inquiries found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] text-left text-sm">
                <thead className="bg-white text-xs uppercase tracking-wider text-gray-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Created</th>
                    <th className="px-5 py-3 font-semibold">Name</th>
                    <th className="px-5 py-3 font-semibold">Email</th>
                    <th className="px-5 py-3 font-semibold">Phone</th>
                    <th className="px-5 py-3 font-semibold">Subject</th>
                    <th className="px-5 py-3 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {contacts.map((contact) => (
                    <tr key={contact._id.toString()} className="align-top">
                      <td className="whitespace-nowrap px-5 py-4 text-gray-600">
                        {contact.createdAt ? new Date(contact.createdAt).toLocaleString('en-IN') : '-'}
                      </td>
                      <td className="px-5 py-4 font-medium text-black">{contact.name}</td>
                      <td className="px-5 py-4 text-gray-700">{contact.email || '-'}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-gray-700">{contact.phone}</td>
                      <td className="px-5 py-4 text-gray-700">{contact.subject || '-'}</td>
                      <td className="max-w-sm px-5 py-4 text-gray-700">{contact.message || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
