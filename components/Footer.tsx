'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


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
  const [showContactOptions, setShowContactOptions] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactOptions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <footer className="bg-[#ffffff] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Image
              src="/logo/dalan.png"
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
                { name: 'Shivdhara Residency', href: '/projects/shivdhara-residency' },
                { name: 'Dalan Avenue Micro Society', href: '/projects/dalan-avenue-micro-society' },
                { name: 'Dalan Saubhagyam', href: '/projects/dalan-saubhagyam' },
                { name: 'Dalan Samridhi', href: '/projects/dalan-samridhi' },
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
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowContactOptions(!showContactOptions)}
                  className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#091e44] transition-colors focus:outline-none"
                  aria-expanded={showContactOptions}
                  aria-haspopup="true"
                >
                  <Phone size={16} className="text-[#091e44]" />
                  <span>+91 6389088088</span>
                </button>
                <AnimatePresence>
                  {showContactOptions && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-black/10 py-1.5 z-50 origin-top-left"
                    >
                      <a
                        href="tel:+916389088088"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#091e44] transition-colors"
                        onClick={() => setShowContactOptions(false)}
                      >
                        <Phone size={14} className="text-[#091e44]" />
                        <span>Call Us</span>
                      </a>
                      <a
                        href="https://wa.me/916389088088"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#25D366] transition-colors"
                        onClick={() => setShowContactOptions(false)}
                      >
                        <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.026-5.114-2.893-6.983-1.867-1.868-4.35-2.899-6.983-2.9-5.443 0-9.863 4.42-9.865 9.861a9.79 9.79 0 001.503 5.176l-1.018 3.715 3.805-.998zM17.18 14.8c-.284-.143-1.68-.829-1.94-.924-.26-.096-.45-.143-.64.143-.19.285-.736.924-.9 1.114-.165.19-.328.214-.61.072-1.393-.697-2.28-1.253-3.205-2.836-.242-.415.242-.385.693-1.282.076-.153.038-.287-.019-.401-.057-.114-.45-1.082-.616-1.481-.162-.389-.326-.336-.45-.342l-.384-.007c-.13 0-.342.049-.52.247-.18.197-.686.671-.686 1.637 0 .966.7 1.9 1.002 2.302.302.4 2.85 4.35 6.903 6.1 1.258.543 2.115.753 2.84.982 1.272.404 2.43.348 3.344.211 1.02-.153 2.13-.87 2.43-1.717.3-.847.3-1.572.21-1.717-.09-.145-.33-.23-.61-.373z" />
                        </svg>
                        <span>WhatsApp Us</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
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

