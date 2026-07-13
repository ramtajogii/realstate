import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Shield, Leaf, Users, CheckCircle2, ChevronLeft } from 'lucide-react'

export default function ShivdharaResidencyPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#1a2f29] pb-16">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Wording & About */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Title block */}
            <div className="flex flex-col items-start mb-6">
              <h1 className="font-serif text-5xl md:text-6xl font-extrabold tracking-tight text-[#091e44] leading-none">
                SHIVDHARA
              </h1>
              <div className="flex items-center gap-3 my-3 w-full">
                <div className="h-0.5 flex-grow max-w-[60px] bg-[#C9922A]" />
                <span className="text-xl uppercase font-black tracking-[0.25em] text-[#C9922A] leading-none">
                  Residency
                </span>
                <div className="h-0.5 flex-grow max-w-[60px] bg-[#C9922A]" />
              </div>
              <p className="text-lg md:text-xl font-bold text-[#091e44] tracking-wide mt-1">
                Peaceful Living. Perfectly Planned.
              </p>
            </div>

            {/* About Story Capsule & Content */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#091e44] text-white text-xs font-bold uppercase tracking-widest rounded-md mb-4">
                About / Story
              </span>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Step into <strong className="text-gray-800">Shivdhara Residency</strong> – a peaceful, secure, and thoughtfully planned residential community located right in front of St. Joseph&apos;s Convent School in Bharlai, Shivpur, Varanasi. Designed for families who value both convenience and tranquility, Shivdhara Residency offers spacious homes wrapped in greenery, with wide pitch roads and round-the-clock security ensuring complete peace of mind. Every home here is Vaastu compliant built not just with bricks and beams, but with the belief that a true home brings prosperity, harmony, and happiness to those who live in it.
              </p>
            </div>

            {/* School location card */}
            <div className="bg-[#FAF9F6] border border-[#C9922A]/30 rounded-2xl p-4 flex items-center gap-4 max-w-md">
              <div className="w-12 h-12 rounded-full bg-[#091e44]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#091e44]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V7m0 14h-4m4 0h4m-4-14h4m-4 0H8m4 0l-4-4m4 4l4-4M8 7v14M4 21v-4a2 2 0 012-2h2M20 21v-4a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <div>
                <strong className="text-[#091e44] text-sm md:text-base block font-bold leading-tight">
                  Right in front of St. Joseph&apos;s Convent School
                </strong>
                <span className="text-gray-500 text-xs md:text-sm mt-0.5 block">
                  Bharlai, Shivpur, Varanasi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Banner */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/Shivdhara/shivdhara.png"
                alt="Shivdhara Residency Exterior View"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Dark blue overlay footer banner */}
            <div className="absolute bottom-0 inset-x-0 bg-[#091e44]/95 backdrop-blur-sm text-white py-4 px-6 grid grid-cols-3 gap-2 text-center divide-x divide-white/10 z-10">
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold">
                <Shield size={16} className="text-[#C9922A] shrink-0" />
                <span>Secure Living</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold pl-2">
                <Leaf size={16} className="text-[#C9922A] shrink-0" />
                <span>Green Environment</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold pl-2">
                <Users size={16} className="text-[#C9922A] shrink-0" />
                <span>Perfect for Family</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Amenities Tab Card Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative border border-[#C9922A]/30 rounded-2xl p-6 md:p-8 bg-[#FAF9F6]/40">
          
          {/* Centered Tab Label */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#C9922A]/30 px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest text-[#091e44]">
            Amenities
          </div>

          {/* 7 Columns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4 text-center items-start pt-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C9922A]/10">
            {/* Item 1 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 22L10 2M20 22L14 2" strokeLinecap="round" />
                  <path d="M12 22v-3M12 16v-4M12 9V6" strokeDasharray="3 3" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Pitch road</span>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v8m-4 4h8M6 14v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
                  <circle cx="12" cy="18" r="1.5" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Drainage facility</span>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 22V6a4 4 0 014-4h2a4 4 0 014 4v16M11 6h2M12 2v2" strokeLinecap="round" />
                  <circle cx="12" cy="8" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Street lights</span>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">24x7 security system</span>
            </div>
            {/* Item 5 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 19a7 7 0 007-7c0-4.5-7-10-7-10S5 7.5 5 12a7 7 0 007 7z" />
                  <path d="M12 2v17M12 12c2 1 4-1 4-1M12 15c-2 .5-3-1.5-3-1.5" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Greenery all around</span>
            </div>
            {/* Item 6 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 10L14 7V4a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9l5 3v-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="7" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">CCTV at main gate</span>
            </div>
            {/* Item 7 */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 sm:pl-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#091e44] mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M16.2 7.8L12 12l-4.2 4.2" strokeLinecap="round" />
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Vaastu compliant</span>
            </div>
          </div>

        </div>
      </section>

      {/* Society Blueprints & Highlights Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Floor Plan */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative border border-gray-100 bg-[#FAF9F6]/20 rounded-2xl p-6 flex flex-col items-center h-full group">
              <span className="absolute -top-3 bg-[#091e44] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-md">
                Floor Plan
              </span>
              <div className="relative w-full aspect-[4/3] mt-4 overflow-hidden rounded-xl bg-white border border-gray-100 p-4 flex items-center justify-center">
                <Image
                  src="/Shivdhara/firstfloor.png"
                  alt="Shivdhara Residency Floor Plan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Project Highlights Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative border border-[#C9922A]/30 bg-[#FAF9F6] rounded-2xl p-6 flex flex-col items-center justify-between h-full">
              <span className="absolute -top-3 bg-[#091e44] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-md">
                Project Highlights
              </span>
              
              {/* Highlight list */}
              <ul className="w-full text-left space-y-3.5 mt-4 mb-6">
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Right in front of St. Joseph&apos;s Convent School</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Peaceful & Secure Environment</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Wide Pitch Roads</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Vaastu Compliant Homes</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Excellent Connectivity</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-800">
                  <CheckCircle2 size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                  <span>Ideal for Comfortable Living & Future Investment</span>
                </li>
              </ul>

              {/* Family Image illustration */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-gray-200/50 shadow-sm mb-4">
                <Image
                  src="/images/shivdhara_family.png"
                  alt="Family Walking in Green Park illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Quotation text badge */}
              <div className="w-full bg-[#091e44] text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-[#C9922A]/90 border border-white/5 tracking-wider leading-relaxed">
                A home built with belief.
                <br />
                <span className="text-white">A life filled with happiness.</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Call to action booking section */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-[#091e44] border border-white/10 rounded-2xl p-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-3 max-w-xl text-left">
            <MapPin size={22} className="text-[#C9922A] shrink-0 mt-1" />
            <div>
              <strong className="text-white text-sm md:text-base block">Contact for site visits & enquiry</strong>
              <span className="text-gray-300 text-xs md:text-sm mt-0.5 block">Our team will guide you on Vaastu compliancy and leading bank finance facilitation.</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#C9922A] hover:bg-[#a6741b] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/916389088088"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full-width Bottom Dark Blue Bar */}
      <footer className="w-full bg-[#091e44] text-white py-4 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.25em] flex flex-wrap items-center justify-center gap-y-2 gap-x-4 md:gap-x-8 text-[#FAF9F6]/80">
          <span>Spacious Homes</span>
          <span className="text-[#C9922A] hidden md:inline">|</span>
          <span>Surrounded by Greenery</span>
          <span className="text-[#C9922A] hidden md:inline">|</span>
          <span>Built for a Better Tomorrow</span>
        </div>
      </footer>

    </div>
  )
}
