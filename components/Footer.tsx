'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'


const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dalan_builders?igsh=cXZsN3Q3cjF3Z2cw&utm_source=qr',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/194yMhrgLS/?mibextid=wwXIfr',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M14 8.5V6.7c0-.8.5-1 1-1h2V2.2C16.6 2.1 15.4 2 14.1 2 11.4 2 9.6 3.6 9.6 6.5v2H6.5V12h3.1v10H14V12h3.1l.5-3.5H14Z" />
      </svg>
    ),
  }
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {

  return (
    <footer className="bg-[#ffffff] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Image
              src="/logo/dalan2.png"
              alt="DALAN Builders"
              width={150}
              height={114}
              className="mb-4 h-16 w-auto object-contain"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Building premium residential and commercial spaces that redefine modern living and working.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-gray-600 hover:border-[#091e44] hover:text-[#091e44] transition-all duration-300"
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
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-[#091e44] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#091e44] rounded-full"></span>
                    {item.label}
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
                { name: 'SHIVDHARA RESIDENCY', href: '/projects/shivdhara-residency' },
                { name: 'DALAN AVENUE MICRO SOCIETY', href: '/projects/dalan-avenue-micro-society' },
                { name: 'DALAN AVENUE', href: '/projects/dalan-saubhagyam' },
                { name: 'DALAN SAMRIDHI', href: '/projects/dalan-samridhi' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-[#091e44] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#091e44] rounded-full"></span>
                    {item.name}
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
                <MapPin size={16} className="text-[#091e44] mt-0.5 shrink-0" />
                <span>203, B - Block Sangam River Front Apartment, Varuna Vihar Colony, Kachahari (Near JP Mehata Inter College) Varanasi UP 221002</span>
              </li>
              <li>
                <a
                  href="https://wa.me/916389088088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-600 text-sm hover:text-[#25D366] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-[#091e44] group-hover:text-[#25D366] transition-colors shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <span>+91 6389088088</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dalanbuilders.in" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#091e44] transition-colors">
                  <Mail size={16} className="text-[#091e44]" />
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
                className="text-[#091e44] font-medium hover:underline"
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
                className="text-gray-600 text-sm hover:text-[#091e44] transition-colors"
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

