'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

type NavLink = {
  label: string
  href: string
  dropdown?: NavLink[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
    dropdown: [
      {
        label: 'Residential',
        href: '/projects?type=residential',
        dropdown: [
          {
            label: 'Row House',
            href: '/projects?type=residential&category=row-house',
            dropdown: [
              { label: 'Shivdhara Residency', href: '/projects/shivdhara-residency' },
              { label: 'DALAN Residency', href: '/projects?type=residential&category=row-house&project=dalan-residency' },
            ],
          },
          {
            label: 'Duplex',
            href: '/projects?type=residential&category=duplex',
            dropdown: [
              { label: 'DALAN Avenue', href: '/projects/dalan-avenue' },
              { label: 'DALAN Saubhagyam', href: '/projects/dalan-saubhagyam' },
            ],
          },
          {
            label: 'Villa',
            href: '/projects?type=residential&category=villa',
            dropdown: [
              { label: 'DALAN Samriddhi', href: '/projects?type=residential&category=villa&project=dalan-samriddhi' },
            ],
          },
          {
            label: 'Plots',
            href: '/projects?type=residential&category=plots',
            dropdown: [
              { label: 'DALAN Avenue Micro Society', href: '/projects?type=residential&category=plots&project=dalan-avenue-micro-society' },
              { label: 'DALAN Greens', href: '/projects?type=residential&category=plots&project=dalan-greens' },
            ],
          },
        ],
      },
      { label: 'Commercial', href: '/projects?type=commercial' },
      { label: 'Farm House', href: '/projects?type=farmhouse' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const renderDesktopDropdown = (items: NavLink[], level = 0) => (
    <div
      className={`absolute ${
        level === 0 ? 'top-full left-1/2 -translate-x-1/2' : 'left-full top-0'
      } ${
        level === 0
          ? 'before:absolute before:-top-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:bg-white'
          : 'invisible opacity-0 transition-all duration-200'
      } w-56 bg-white border border-black/10 rounded-none shadow-xl`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative [&:hover>div]:visible [&:hover>div]:opacity-100"
        >
          <Link
            href={item.href}
            className="flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4 text-base text-gray-700 transition-all duration-200 last:border-b-0 hover:bg-[#091e44] hover:text-white"
          >
            <span>{item.label}</span>
            {item.dropdown && <ChevronRight size={14} />}
          </Link>
          {item.dropdown && renderDesktopDropdown(item.dropdown, level + 1)}
        </div>
      ))}
    </div>
  )

  const renderMobileLinks = (items: NavLink[], level = 0) => (
    <div
      className={`min-w-0 overflow-x-hidden ${
        level === 0 ? 'pl-3' : 'ml-3 border-l border-black/10 pl-3'
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <Link
            href={item.href}
            className={`block min-w-0 break-words py-2 text-sm leading-snug transition-colors ${
              level === 0
                ? 'text-gray-600 hover:text-[#091e44]'
                : 'text-gray-500 hover:text-[#091e44]'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
          {item.dropdown && renderMobileLinks(item.dropdown, level + 1)}
        </div>
      ))}
    </div>
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#ffffff] shadow-lg shadow-black/10 py-2'
          : 'bg-[#ffffff] shadow-sm shadow-black/5 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex h-15 w-22 items-center justify-center">
          <Image
            src="/logo/dalan-logo.png"
            alt="DALAN Builders"
            width={128}
            height={70}
            priority
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group py-8 -my-8"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#091e44] transition-colors duration-200 font-body tracking-wide"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown */}
              {link.dropdown && openDropdown === link.label && (
                renderDesktopDropdown(link.dropdown)
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2 bg-[#091e44] text-white text-sm font-medium rounded-full hover:bg-[#061632] transition-all duration-300 hover:shadow-lg hover:shadow-[#091e44]/30"
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
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-84px)] w-full overflow-y-auto overflow-x-hidden overscroll-contain border-t border-black/10 bg-[#F7F7F7] px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <div key={link.label} className="min-w-0">
              <Link
                href={link.href}
                className="block min-w-0 border-b border-black/5 py-3 font-medium text-gray-700 transition-colors hover:text-[#091e44]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                renderMobileLinks(link.dropdown)
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center px-5 py-2 bg-[#091e44] text-white rounded-full text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  )
}
