import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

export default function DalanSaubhagyamPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Full Image Section */}
      <section className="bg-white animate-fade-in">
        <Image
          src="/shaubhagyam/shubhagyam.png"
          alt="DALAN Saubhagyam Home"
          width={1920}
          height={1080}
          priority
          className="mx-auto h-auto max-h-[calc(100vh-84px)] w-full object-contain"
        />
      </section>

      {/* Main Copy Details Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="mb-5 inline-block rounded-full bg-[#091e44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
            Duplex
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
            DALAN Saubhagyam
          </h2>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#091e44] font-display">
            Find Your Dream Home in the Heart of Changing Kashi
          </h3>
          <p className="mt-3 text-gray-600 text-sm flex items-center gap-1.5 font-medium">
            <MapPin size={16} className="text-[#091e44]" /> Ring Road, Varanasi
          </p>
          <div className="w-14 h-1 bg-[#C9922A] my-6" />

          <div className="mt-8 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-body">
            <p>
              A life of comfort, pride, and belonging awaits you at <strong className="text-black font-semibold">Dalan Saubhagyam</strong> — nestled in the heart of the ever-evolving city of Varanasi. Our vision is to bring together the warmth of a close-knit community and the strength of quality construction, delivering homes that are not just built with bricks, but with trust.
            </p>
            <p>
              There is something deeply soulful about waking up in a city as timeless as Kashi, and at Dalan Saubhagyam, we ensure that every sunrise feels like a new beginning. Wide open roads, lush greenery, and a well-planned society welcome you every time you come home.
            </p>
            <p>
              With seamless connectivity to Ring Road, the airport, railway station, and the city's key landmarks, you are never far from where life takes you — yet always close to the peace you deserve.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#091e44] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#061632] hover:shadow-lg hover:shadow-[#091e44]/30"
            >
              Enquire Now
            </Link>
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

      {/* Society Map and Amenities Side-by-Side Section */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider">Layout & Features</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Society Map & Project Amenities</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Map */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Society Map & Layout Plan</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/shaubhagyam/shubhagyamplan.png"
                  alt="Dalan Saubhagyam Society Map"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Amenities */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Amenities</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src="/shaubhagyam/amenities.png"
                  alt="Dalan Saubhagyam Amenities"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
