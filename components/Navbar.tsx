'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'About DALAN Builders', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/about#careers' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    dropdown: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Residential', href: '/projects?type=residential' },
      { label: 'Commercial', href: '/projects?type=commercial' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#ffffff] shadow-lg shadow-black/10 py-2' : 'bg-[#ffffff] py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
          <Image
            src="/logo/dalan-logo.png"
            alt="DALAN Builders"
            width={50}
            height={50}
            priority
            // className="h-20 w-20 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#F26522] transition-colors duration-200 font-body tracking-wide"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-[#F7F7F7] border border-black/10 rounded-lg overflow-hidden shadow-2xl">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F26522] hover:text-black transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2 bg-[#F26522] text-black text-sm font-medium rounded-full hover:bg-[#D4521A] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F7F7F7] border-t border-black/10 px-6 py-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-gray-700 hover:text-[#F26522] border-b border-black/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-sm text-gray-600 hover:text-[#F26522] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center px-5 py-2 bg-[#F26522] text-black rounded-full text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  )
}

