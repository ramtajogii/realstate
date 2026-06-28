import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ChevronLeft, ChevronRight, Inbox } from 'lucide-react';
import AdminLogoutButton from '@/components/AdminLogoutButton';
import AdminLimitSelect from '@/components/AdminLimitSelect';
import dbConnect from '@/lib/db';
import { ADMIN_COOKIE_NAME, verifyAdminToken } from '@/lib/adminAuth';
import Contact from '@/models/Contact';

type ContactRow = {
  _id: string;
  name: string;
  email?: string;
  city?: string;
  phone: string;
  subject?: string;
  message?: string;
  createdAt?: Date;
};

const PAGE_LIMITS = [10, 20, 40, 50];

function getPageUrl(page: number, limit: number) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  return `/admin/dashboard?${params.toString()}`;
}

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams?: { page?: string; limit?: string };
}) {
  const cookieStore = await cookies();
  const admin = await verifyAdminToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);

  if (!admin) {
    redirect('/admin');
  }

  await dbConnect();

  const requestedLimit = Number(searchParams?.limit);
  const limit = PAGE_LIMITS.includes(requestedLimit) ? requestedLimit : 10;
  const requestedPage = Number(searchParams?.page);
  const currentPage = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const totalContacts = await Contact.countDocuments({});
  const totalPages = Math.max(1, Math.ceil(totalContacts / limit));
  const page = Math.min(currentPage, totalPages);
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({})
    .select('name email city phone subject message createdAt')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean<ContactRow[]>();

  const firstItem = totalContacts === 0 ? 0 : skip + 1;
  const lastItem = Math.min(skip + contacts.length, totalContacts);

  return (
    <section className="min-h-[70vh] bg-[#ffffff] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#091e44]">Admin Dashboard</span>
            <h1 className="mt-3 font-display text-4xl font-bold text-black">Contact Inquiries</h1>
            <p className="mt-2 text-sm text-gray-600">Logged in as {admin.email}</p>
          </div>
          <AdminLogoutButton />
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#F7F7F7]">
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <div className="flex items-center gap-3 text-sm font-semibold text-black">
              <Inbox size={18} className="text-[#091e44]" />
              Total inquiries
            </div>
            <span className="rounded-full bg-[#091e44]/15 px-3 py-1 text-sm font-semibold text-[#061632]">
              {totalContacts}
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
                    {/* <th className="px-5 py-3 font-semibold">Email</th> */}
                    <th className="px-5 py-3 font-semibold">City</th>
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
                      <td className="px-5 py-4 text-gray-700">{contact.city || '-'}</td>
                      {/* <td className="px-5 py-4 text-gray-700">{contact.email || '-'}</td> */}
                      <td className="whitespace-nowrap px-5 py-4 text-gray-700">{contact.phone}</td>
                      <td className="px-5 py-4 text-gray-700">{contact.subject || '-'}</td>
                      <td className="max-w-sm px-5 py-4 text-gray-700">{contact.message || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-black/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-600">
              Showing {firstItem}-{lastItem} of {totalContacts}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <form action="/admin/dashboard" className="flex items-center gap-2">
                <input type="hidden" name="page" value="1" />
                <span className="text-sm text-gray-600">
                  Rows
                </span>
                <AdminLimitSelect defaultValue={limit} options={PAGE_LIMITS} />
                <button
                  type="submit"
                  className="rounded-lg bg-[#091e44] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#061632]"
                >
                  Apply
                </button>
              </form>

              <div className="flex items-center gap-2">
                <Link
                  href={getPageUrl(Math.max(1, page - 1), limit)}
                  aria-disabled={page === 1}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/20 bg-white text-black transition-colors ${
                    page === 1 ? 'pointer-events-none opacity-40' : 'hover:border-[#091e44] hover:text-[#091e44]'
                  }`}
                >
                  <ChevronLeft size={18} />
                </Link>
                <span className="min-w-24 text-center text-sm font-medium text-black">
                  Page {page} of {totalPages}
                </span>
                <Link
                  href={getPageUrl(Math.min(totalPages, page + 1), limit)}
                  aria-disabled={page === totalPages}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/20 bg-white text-black transition-colors ${
                    page === totalPages ? 'pointer-events-none opacity-40' : 'hover:border-[#091e44] hover:text-[#091e44]'
                  }`}
                >
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
