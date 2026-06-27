import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'

export default function DalanAvenueMicroSocietyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Copy Details Section */}
      <section className="bg-white pb-16 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="mb-5 inline-block rounded-full bg-[#091e44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
            Residential Plots
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
            Dalan Avenue Micro Society
          </h2>
          <p className="mt-3 text-gray-600 text-sm flex items-center gap-1.5 font-medium">
            <MapPin size={16} className="text-[#091e44]" /> Village Lodhan, near Om Villas, Chandmari, Varanasi
          </p>
          <div className="w-14 h-1 bg-[#C9922A] my-6" />

          <div className="mt-8 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-body">
            <p>
              Welcome to <strong className="text-black font-semibold">Dalan Avenue Micro Society</strong>, a close-knit, beautifully planned residential community where every plot tells a story of smart living and thoughtful design. Nestled in Village Lodhan, near Om Villas, Chandmari, Varanasi, this intimate society is built for those who believe that the best neighbourhoods are the ones where everyone knows each other by name.
            </p>
            <p>
              With wide internal roads, a park, lush greenery, and all essential amenities in place, Dalan Avenue Micro Society gives you the warmth of a community and the freedom of your own land — all in one perfectly connected address. Whether you are building your first home or making your smartest investment, this is where your story begins.
            </p>
            <p>
              Our team of seasoned architects, engineers, and professionals work tirelessly to ensure that every DALAN Builders project sets a new benchmark in the industry.
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
              href="tel:+916389088088"
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

      {/* Society Map and Amenities Layout Section */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider">Layout & Amenities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Society Layout & Overview</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column: Map */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Society Overview & Plots Map</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src="/microsociety/microplots.png"
                  alt="Dalan Avenue Micro Society Layout Plan"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] rounded-lg"
                />
              </div>
            </div>

            {/* Right Column: Amenities */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Amenities Map</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src="/microsociety/amenities.png"
                  alt="Dalan Avenue Micro Society Amenities Map"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
