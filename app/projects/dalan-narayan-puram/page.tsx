import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle2, ChevronLeft, Gift } from 'lucide-react'
import ProjectStatusTag from '@/components/ProjectStatusTag'

export default function DalanNarayanPuramPage() {
  const highlights = [
    'Book your Plot with just 10% Of Plot Value',
    'Special Discount 2% to Armed Forces',
    'Lowest Down Payment',
    'Maximum EMI',
    'Immediate Sale Deed Registration',
    '100% Transparent Policies',
    'Easy EMI Scheme',
    'Prime & Strategic Location',
    'Just at the entrance of special investment region'
  ]

  return (
    <div className="bg-[#ffffff] min-h-screen font-sans antialiased text-gray-800 pb-16">

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Details, Highlights & Amenities */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Title Block */}
            <div className="mb-6 text-left">
              <h1 className="text-[#091e44] mb-2">
                DALAN
              </h1>
              <h2 className="text-[#C9922A]">
                Narayan Puram
              </h2>
              <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm md:text-base font-semibold">
                <MapPin size={18} className="text-[#091e44] shrink-0" />
                <span>Harahua Market, Airport Road, Varanasi UP</span>
              </div>
            </div>

            {/* Special Offer Box */}
            <div className="bg-[#091e44] rounded-2xl p-5 mb-8 flex items-center justify-between shadow-lg text-white max-w-md">
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-gray-300 font-bold">Book Now</span>
                <strong className="block text-xl md:text-2xl font-bold text-[#C9922A] mt-0.5">Get More Offers</strong>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#C9922A]">
                <Gift size={24} />
              </div>
            </div>

            {/* Highlights List */}
            <div className="mb-8 text-left">
              <ul className="space-y-3.5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-gray-700">
                    <CheckCircle2 size={18} className="text-[#C9922A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities Section */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="hidden sm:block h-px w-10 md:w-16 bg-[#C9922A]/40" />
                <span className="rounded-full bg-[#091e44] px-6 py-2 text-white text-sm font-semibold tracking-widest">
                  AMENITIES
                </span>
                <span className="hidden sm:block h-px w-10 md:w-16 bg-[#C9922A]/40" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* 1. Gate */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 20V4a1 1 0 011-1h16a1 1 0 011 1v16" strokeLinecap="round" />
                    <path d="M8 7h8v13H8zM12 7v13" strokeLinecap="round" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Well Entrance Society Gate</span>
                </div>
                {/* 2. Greenery */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 19a7 7 0 007-7c0-4.5-7-10-7-10S5 7.5 5 12a7 7 0 007 7z" />
                    <path d="M12 2v17" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Greenery</span>
                </div>
                {/* 3. Electricity */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Electricity</span>
                </div>
                {/* 4. Road */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 22L10 2M20 22L14 2" />
                    <path d="M12 22v-3M12 16v-4" strokeDasharray="2 2" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">18&apos; Wide Road</span>
                </div>
                {/* 5. Sewer */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Sewer</span>
                </div>
                {/* 6. Street Lights */}
                <div className="flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 22V6a4 4 0 014-4h2a4 4 0 014 4v16" strokeLinecap="round" />
                    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Street Lights</span>
                </div>
                {/* 7. CCTV */}
                <div className="col-span-3 sm:col-span-1 flex flex-col items-center text-center gap-2.5 rounded-xl border border-black/10 bg-white px-3 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20">
                  <svg className="w-7 h-7 text-[#091e44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 10L14 7V4a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9l5 3v-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="6" cy="7" r="1" fill="currentColor" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">CCTV Camera 24*7</span>
                </div>
              </div>
            </div>

            <div className="bg-[#091e44] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
              <div className="text-center md:text-left w-full md:w-auto">
                <strong className="text-base md:text-lg block mt-0.5">For Booking</strong>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch sm:items-center justify-center shrink-0">
                <Link
                  href="/contact"
                  className="bg-[#C9922A] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/10 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/20 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
                >
                  Enquire Now
                </Link>
                <a
                  href="https://wa.me/916389088088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-green-500/30 gap-2 w-full sm:w-auto whitespace-nowrap"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Images (Gate & Layout Map) */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* Gate Rendering Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/narayan_puram_gate_v3.png"
                  alt="Dalan Narayan Puram Entrance Gate Layout"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                />
              </div>
              <ProjectStatusTag stage="New Launch" className="absolute top-5 right-5 md:top-6 md:right-6" />
            </div>

            {/* Layout Plot Plan Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-4 group">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/narayan_puram_map.png"
                  alt="Dalan Narayan Puram Layout Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  )
}
