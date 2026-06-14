import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const paragraphs = [
  'Welcome to Dalan Samridhi - a thoughtfully crafted residential community where the promise of a better life begins the moment you step through the gate. Built by the trusted name of Dalan Builders Pvt. Ltd., Dalan Samridhi is designed for families who believe that a home should not just shelter you, but inspire you. Set amidst wide open spaces, clean surroundings, and a warmly connected neighbourhood, every home here is a step towards the life you have always envisioned.',
  'Located in Village Kanudih, near Chandmari Market on Ring Road, Varanasi, Dalan Samridhi offers the rare combination of peaceful residential living and outstanding city connectivity. Ring Road is just 100 metres away, Chandmari Market is a short 700-metre walk, and LBS International Airport is only 15 minutes from your door. Whether you are a working professional, a growing family, or a smart investor - Dalan Samridhi puts you exactly where you need to be.',
  'With loan facility available, ISO 9001:2015 certified construction quality, and a commitment to 100% transparent policies, your journey to owning your dream home has never been this smooth, this trustworthy, or this close.',
]

export default function DalanSamridhiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Full Image Section */}
      <section className="bg-white animate-fade-in">
        <Image
          src="/samriddhi/samridhi.png"
          alt="Dalan Samridhi Hero"
          width={1920}
          height={1080}
          priority
          className="mx-auto h-auto max-h-[720px] w-full object-contain"
        />
      </section>

      {/* Main Copy Details Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="mb-5 inline-block rounded-full bg-[#091e44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
            Villa
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
            Dalan Samridhi
          </h2>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#091e44] font-display">
            Where Prosperity Finds Its Home
          </h3>
          <p className="mt-3 text-gray-600 text-sm flex items-center gap-1.5 font-medium">
            <MapPin size={16} className="text-[#091e44]" /> Village Kanudih, near Chandmari Market on Ring Road, Varanasi
          </p>
          <div className="w-14 h-1 bg-[#C9922A] my-6" />

          <div className="mt-8 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-body">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#091e44] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#061632] hover:shadow-lg hover:shadow-[#091e44]/30"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+919838096190"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#091e44] px-8 py-3.5 text-sm font-medium text-[#091e44] transition-all duration-300 hover:bg-[#091e44] hover:text-white hover:shadow-md"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/916389088088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Society Map & Layout Plans */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider">Layout & Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Society Map & Layout Overview</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Facility Plan */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Facility & Amenities Plan</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/samriddhi/facility.png"
                  alt="Dalan Samridhi Facility Plan"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Society Map */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Society Map & Layout Plan</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/samriddhi/samridhiplan.png"
                  alt="Dalan Samridhi Society Map & Layout"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Amenities Section */}
      <section className="bg-white py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider font-display">Experience Luxury</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Project Amenities</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-black/10 shadow-xl shadow-black/5 bg-white group">
            <Image
              src="/samriddhi/amenities.png"
              alt="Dalan Samridhi Amenities"
              width={1200}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
