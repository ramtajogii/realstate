import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

export default function DalanAvenuePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Full Image Section */}
      <section className="bg-white animate-fade-in">
        <Image
          src="/avenue/avenue.png"
          alt="DALAN Avenue Home"
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
            DALAN Avenue
          </h2>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#091e44] font-display">
            Find Your Perfect Home on the Avenue of Dreams
          </h3>
          <p className="mt-3 text-gray-600 text-sm flex items-center gap-1.5 font-medium">
            <MapPin size={16} className="text-[#091e44]" /> Village Lodhan, near Om Villas, Chandmari, Varanasi
          </p>
          <div className="w-14 h-1 bg-[#C9922A] my-6" />

          <div className="mt-8 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-body">
            <p>
              A new landmark of modern living rises in the heart of Varanasi — <strong className="text-black font-semibold">Welcome to DALAN Avenue</strong> — where every street tells a story of comfort, style, and belonging. Crafted by the trusted hands of Dalan Builders Pvt. Ltd., Dalan Avenue is more than just a residential community — it is a carefully designed world where thoughtful architecture meets the warmth of everyday life. Wide open roads, lush green surroundings, and a well-planned society create an environment where your family can truly breathe, grow, and thrive.
            </p>
            <p>
              Nestled in Village Lodhan, near Om Villas, Chandmari, Varanasi, Dalan Avenue places you at the heart of a city that is rapidly transforming while staying rooted in its timeless soul. Whether it is the ease of reaching Ring Road in just 300 metres, catching a flight from LBS International Airport in 15 minutes, or exploring the spiritual serenity of Sarnath just 10 minutes away — life at Dalan Avenue keeps you beautifully connected to everything that matters.
            </p>
            <p>
              With the assurance of an ISO 9001:2015 certified developer, flexible finance options through all leading banks, and a commitment to 100% transparent policies, owning your dream home here is not just a possibility — it is a promise.
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
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider">Layout & Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Society Map & Layout Overview</h2>
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
                  src="/avenue/avenueplan.png"
                  alt="DALAN Avenue Society Map"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Map Home */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Map Home Layout</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/avenue/avenuemap.png"
                  alt="DALAN Avenue Map Home Layout"
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
              src="/avenue/amenities.png"
              alt="DALAN Avenue Amenities"
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
