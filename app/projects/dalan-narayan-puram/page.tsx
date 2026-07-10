import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle2, ChevronLeft, Gift } from 'lucide-react'

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
              <h1 className="font-serif text-5xl font-extrabold text-[#091e44] tracking-tight leading-none mb-2">
                DALAN
              </h1>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#C9922A] leading-tight">
                Narayan Puram
              </h2>
              <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm md:text-base font-semibold">
                <MapPin size={18} className="text-[#091e44] shrink-0" />
                <span>Harhuan Market, Airport Road, Varanasi UP</span>
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
            <div className="relative border border-[#C9922A]/30 rounded-3xl p-6 md:p-8 bg-[#FAF9F6] text-center mb-8">
              {/* Floating Label */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-6 py-1 border border-[#C9922A]/30 rounded-full text-xs font-black uppercase tracking-widest text-[#091e44]">
                Amenities
              </div>

              {/* 2-Row Grid for Amenities */}
              <div className="grid grid-cols-3 gap-6 pt-4 items-start divide-x divide-[#C9922A]/15">
                {/* 1. Gate */}
                <div className="flex flex-col items-center">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 20V4a1 1 0 011-1h16a1 1 0 011 1v16" strokeLinecap="round" />
                      <path d="M8 7h8v13H8zM12 7v13" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Well Entrance Society Gate</span>
                </div>
                {/* 2. Greenery */}
                <div className="flex flex-col items-center pl-2">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 19a7 7 0 007-7c0-4.5-7-10-7-10S5 7.5 5 12a7 7 0 007 7z" />
                      <path d="M12 2v17" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Greenery</span>
                </div>
                {/* 3. Electricity */}
                <div className="flex flex-col items-center pl-2">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Electricity</span>
                </div>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-[#C9922A]/20 my-6" />

              <div className="grid grid-cols-3 gap-6 items-start divide-x divide-[#C9922A]/15">
                {/* 4. Road */}
                <div className="flex flex-col items-center">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 22L10 2M20 22L14 2" />
                      <path d="M12 22v-3M12 16v-4" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">18&apos; Wide Road</span>
                </div>
                {/* 5. Sewer */}
                <div className="flex flex-col items-center pl-2">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Sewer</span>
                </div>
                {/* 6. Street Lights */}
                <div className="flex flex-col items-center pl-2">
                  <div className="text-[#091e44] mb-2.5">
                    <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 22V6a4 4 0 014-4h2a4 4 0 014 4v16" strokeLinecap="round" />
                      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">Street Lights</span>
                </div>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-[#C9922A]/20 my-6" />

              {/* 7. CCTV (stretched) */}
              <div className="flex items-center justify-center gap-3 text-[#091e44]">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 10L14 7V4a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9l5 3v-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="7" r="1" fill="currentColor" />
                </svg>
                <span className="text-[10px] md:text-xs font-black uppercase text-gray-800 tracking-wider">CCTV Camera 24*7</span>
              </div>
            </div>

            {/* Booking Banner */}
            <div className="bg-[#091e44] rounded-3xl p-6 text-white flex flex-wrap md:flex-nowrap items-center justify-between gap-6 shadow-xl border border-white/5">
              <div className="text-left max-w-xs">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#C9922A] block">For Booking</span>
                <strong className="text-base md:text-lg block mt-0.5">Call or Whatsapp Us</strong>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C9922A] shrink-0">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+916389088088"
                  className="text-2xl md:text-3xl font-outfit font-black text-[#C9922A] hover:underline whitespace-nowrap"
                >
                  63890 88088
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
            </div>

            {/* Layout Plot Plan Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-4 group">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/narayan_puram_map_v3.png"
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
