import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
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
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-gray-600 hover:border-[#F26522] hover:text-[#F26522] transition-all duration-300"
                >
                  <Icon size={16} />
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

