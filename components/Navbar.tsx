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
  // { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Residential',
    href: '/projects?type=residential',
    dropdown: [
      {
        label: 'Plots',
        href: '/projects?type=residential&category=plots',
        dropdown: [
          { label: 'Anand Van Kashi Pratappatti', href: '/projects?type=residential&category=plots&project=anand-van-kashi-pratappatti' },
          { label: 'Anand Van Kashi 1', href: '/projects?type=residential&category=plots&project=anand-van-kashi-murdaha' },
          { label: 'Anand Van Kashi 2', href: '/projects?type=residential&category=plots&project=anand-van-kashi-domari' },
          { label: 'Anand Van Kashi 3', href: '/projects?type=residential&category=plots&project=anand-van-kashi-chandauli' },
          { label: 'Dalan Avenue Micro Society', href: '/projects/dalan-avenue-micro-society' },
          { label: 'Dalan Greens', href: '/projects/dalan-greens' },
          { label: 'Dalan Nature Valley', href: '/projects?type=residential&category=plots&project=dalan-nature-valley' },
          { label: 'Dalan Narayan Puram', href: '/projects/dalan-narayan-puram' },
        ],
      },
      {
        label: 'Simplex',
        href: '/projects?type=residential&category=simplex',
        // dropdown: [
        //   { label: 'Dalan Avenue', href: '/projects/dalan-avenue' },
        //   { label: 'Dalan Saubhagyam', href: '/projects/dalan-saubhagyam' },
        // ],
      },
      {
        label: 'Duplex',
        href: '/projects?type=residential&category=duplex',
        dropdown: [
          { label: 'Dalan Avenue', href: '/projects/dalan-avenue' },
          { label: 'Dalan Saubhagyam', href: '/projects/dalan-saubhagyam' },
        ],
      },
      {
        label: 'Row House',
        href: '/projects?type=residential&category=row-house',
        dropdown: [
          { label: 'Shivdhara Residency', href: '/projects/shivdhara-residency' },
          { label: 'Dalan Residency', href: '/projects/dalan-residency' },
        ],
      },
      {
        label: 'Villa',
        href: '/projects?type=residential&category=villa',
        dropdown: [
          { label: 'Dalan Samriddhi', href: '/projects/dalan-samridhi' },
        ],
      },
      {
        label: 'Apartments',
        href: '/projects?type=residential&category=apartments',
        dropdown: [
          { label: 'Dalan Paradise', href: '/projects/dalan-paradise' },
        ],
      },
    ],
  },
  { label: 'Commercial', href: '/projects?type=commercial' },
  { label: 'Farm House', href: '/projects?type=farmhouse' },
  { label: 'Blogs', href: '/blogs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleExpand = (label: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedItems((prev) => {
      const isExpanding = !prev[label]
      const nextState = { ...prev, [label]: isExpanding }
      
      const residentialSubmenus = ['Plots', 'Simplex', 'Duplex', 'Row House', 'Villa', 'Apartments']
      if (isExpanding && residentialSubmenus.includes(label)) {
        residentialSubmenus.forEach((submenu) => {
          if (submenu !== label) {
            nextState[submenu] = false
          }
        })
      }
      
      return nextState
    })
  }

  const renderDesktopDropdown = (items: NavLink[], level = 0) => (
    <div
      className={`absolute ${level === 0 ? 'top-[calc(100%-11px)] left-[calc(50%-112px)]' : 'left-full top-0'
        } ${level === 0
          ? 'before:absolute before:-top-2 before:left-[calc(50%-8px)] before:h-4 before:w-4 before:rotate-45 before:bg-white before:border-t before:border-l before:border-black/10'
          : 'invisible opacity-0 transition-all duration-200'
        } w-56 bg-white border border-black/10 rounded-none shadow-xl`}
    >
      {items.map((item) => (
        <div
          key={`${item.label}-${item.href}`}
          className="relative [&:hover>div]:visible [&:hover>div]:opacity-100"
        >
          <Link
            href={item.href}
            className="flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4 text-[13px] font-medium text-[#333333] transition-all duration-200 last:border-b-0 hover:bg-[#091e44] hover:text-white font-nav uppercase tracking-[0.08em]"
          >
            <span>{item.label}</span>
            {item.dropdown && <ChevronRight size={14} />}
          </Link>
          {item.dropdown && renderDesktopDropdown(item.dropdown, level + 1)}
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
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileOpen
          ? 'bg-[#ffffff] shadow-lg shadow-black/10 py-2'
          : 'bg-[#ffffff] shadow-sm shadow-black/5 py-2'
        }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center shrink-0 mr-4 lg:mr-8">
          <Image
            src="/logo/dalan2.png"
            alt="DALAN Builders"
            width={150}
            height={114}
            priority
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li
              key={`${link.label}-${link.href}`}
              className="relative group py-8 -my-8"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[15px] font-semibold text-[#333333] hover:text-[#091e44] uppercase transition-colors duration-200 font-nav tracking-[0.08em] whitespace-nowrap"
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

        <div className="hidden md:flex items-center gap-2 lg:gap-3 ml-4 lg:ml-8 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-2 bg-[#091e44] text-white text-sm font-semibold rounded-full hover:bg-[#061632] transition-all duration-300 hover:shadow-lg hover:shadow-[#091e44]/30 whitespace-nowrap"
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
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-84px)] w-full overflow-y-auto overflow-x-hidden overscroll-contain border-t border-gray-100 bg-white/95 backdrop-blur-md px-6 py-6 md:hidden shadow-2xl transition-all duration-300 ease-in-out">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={`${link.label}-${link.href}`} className="min-w-0">
                <div className="flex items-center justify-between py-2.5 px-1.5 hover:bg-[#091e44]/5 rounded-xl transition-all duration-200">
                  <Link
                    href={link.href}
                    className="text-[15px] font-semibold text-gray-800 hover:text-[#091e44] uppercase font-nav tracking-[0.05em] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={(e) => toggleExpand(link.label, e)}
                      className="p-1.5 text-gray-500 hover:text-[#091e44] hover:bg-[#091e44]/10 rounded-lg transition-colors"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          expandedItems[link.label] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && expandedItems[link.label] && (
                  <div className="mt-2 ml-2 p-3 bg-slate-50/70 border border-slate-100 rounded-2xl space-y-2 animate-fade-in">
                    {link.dropdown.map((subLink) => (
                      <div key={`${subLink.label}-${subLink.href}`} className="min-w-0">
                        <div className="flex items-center justify-between py-1.5 px-2 hover:bg-[#091e44]/5 rounded-xl transition-all">
                          <Link
                            href={subLink.href}
                            className="text-[13px] font-medium text-gray-700 hover:text-[#091e44] uppercase font-nav tracking-[0.05em] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                          {subLink.dropdown && (
                            <button
                              onClick={(e) => toggleExpand(subLink.label, e)}
                              className="p-1 text-gray-400 hover:text-[#091e44] hover:bg-[#091e44]/10 rounded-lg transition-colors"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                  expandedItems[subLink.label] ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {subLink.dropdown && expandedItems[subLink.label] && (
                          <div className="mt-1 ml-3 p-2.5 bg-white border border-gray-100 rounded-xl space-y-1">
                            {subLink.dropdown.map((nestedLink) => (
                              <div key={`${nestedLink.label}-${nestedLink.href}`} className="min-w-0">
                                <div className="flex items-center justify-between py-1 px-2 hover:bg-[#091e44]/5 rounded-lg transition-all">
                                  <Link
                                    href={nestedLink.href}
                                    className="text-[12px] font-normal text-gray-600 hover:text-[#091e44] uppercase font-nav tracking-[0.05em] transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {nestedLink.label}
                                  </Link>
                                  {nestedLink.dropdown && (
                                    <button
                                      onClick={(e) => toggleExpand(nestedLink.label, e)}
                                      className="p-0.5 text-gray-400 hover:text-[#091e44] hover:bg-[#091e44]/10 rounded-md transition-colors"
                                    >
                                      <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-300 ${
                                          expandedItems[nestedLink.label] ? 'rotate-180' : ''
                                        }`}
                                      />
                                    </button>
                                  )}
                                </div>

                                {nestedLink.dropdown && expandedItems[nestedLink.label] && (
                                  <div className="mt-1 ml-4 pl-2 space-y-1 border-l border-slate-200">
                                    {nestedLink.dropdown.map((deepLink) => (
                                      <Link
                                        key={`${deepLink.label}-${deepLink.href}`}
                                        href={deepLink.href}
                                        className="block py-1.5 px-2 text-[11px] font-medium text-gray-500 hover:text-[#091e44] hover:bg-[#091e44]/5 uppercase font-nav tracking-[0.05em] rounded-md transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        • {deepLink.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Link
                href="/contact"
                className="block text-center py-3 bg-[#091e44] text-white rounded-full text-sm font-semibold hover:bg-[#061632] transition-colors shadow-lg shadow-[#091e44]/20"
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
