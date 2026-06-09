import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M14 8.5V6.7c0-.8.5-1 1-1h2V2.2C16.6 2.1 15.4 2 14.1 2 11.4 2 9.6 3.6 9.6 6.5v2H6.5V12h3.1v10H14V12h3.1l.5-3.5H14Z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M18.2 2h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.3L5.7 20H2.6l7.3-8.4L2.2 2h6.4l4.4 5.7L18.2 2Zm-1.1 16.2h1.7L7.7 3.7H5.8l11.3 14.5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M4.7 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM2.8 9.5h3.8V21H2.8V9.5Zm6 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v6h-3.8v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H8.8V9.5Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Image
              src="/logo/dalan-logo.png"
              alt="DALAN Builders"
              width={660}
              height={678}
              className="mb-4 h-28 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Building premium residential and commercial spaces that redefine modern living and working.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-gray-600 hover:border-[#F26522] hover:text-[#F26522] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-600 text-sm hover:text-[#F26522] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#F26522] rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Our Projects</h4>
            <ul className="space-y-3">
              {[
                'Residential Apartments',
                'Commercial Spaces',
                'Luxury Villas',
                'Office Complexes',
                'Retail Spaces',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/projects"
                    className="text-gray-600 text-sm hover:text-[#F26522] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#F26522] rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={16} className="text-[#F26522] mt-0.5 shrink-0" />
                <span>DALAN Builders Pvt. ltd. C/O - Brijesh Pandey 203, B - Block Sangam River Front Apartment, Varuna Vihar Colony, Kachahari (Near JP Mehata Inter College) Varanasi UP 221002</span>
              </li>
              <li>
                <a href="tel:+919838096190" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#F26522] transition-colors">
                  <Phone size={16} className="text-[#F26522]" />
                  +91 9838096190
                </a>
              </li>
              <li>
                <a href="tel:+916389088088" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#F26522] transition-colors">
                  <Phone size={16} className="text-[#F26522]" />
                  +91 6389088088
                </a>
              </li>
              <li>
                <a href="mailto:info@dalanbuilders.com" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#F26522] transition-colors">
                  <Mail size={16} className="text-[#F26522]" />
                  Info@dalanbuilders.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-auto text-center md:text-left text-gray-600 text-sm leading-relaxed">
            <p className="block">&copy; 2026 DALAN Builders. All rights reserved.</p>
            <p className="block mt-1">
              <span className="block sm:inline">Developed by{' '}
              <a
                href="https://www.nextgrow.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F26522] font-medium hover:underline"
              >
                NextGrow
              </a>
              </span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
              <Link
                key={item}
                href="/legal"
                className="text-gray-600 text-sm hover:text-[#F26522] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

