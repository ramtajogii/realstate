import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Next<span className="text-[#F26522]">Grow</span>
            </h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Real Estate</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building premium residential and commercial spaces that redefine modern living and working.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#F26522] hover:text-[#F26522] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 text-sm hover:text-[#F26522] transition-colors duration-200 flex items-center gap-2"
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
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Projects</h4>
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
                    className="text-gray-400 text-sm hover:text-[#F26522] transition-colors duration-200 flex items-center gap-2"
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
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#F26522] mt-0.5 shrink-0" />
                <span>123 Business Hub, Hyderabad, Telangana - 500001</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F26522] transition-colors">
                  <Phone size={16} className="text-[#F26522]" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@nextgrow.in" className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F26522] transition-colors">
                  <Mail size={16} className="text-[#F26522]" />
                  info@nextgrow.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 NextGrow Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
              <Link
                key={item}
                href="/legal"
                className="text-gray-500 text-sm hover:text-[#F26522] transition-colors"
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
