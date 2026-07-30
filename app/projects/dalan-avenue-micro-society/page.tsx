import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin } from 'lucide-react'
import ProjectStatusTag from '@/components/ProjectStatusTag'

export default function DalanAvenueMicroSocietyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Copy Details Section */}
      <section className="bg-white pb-16 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-[#091e44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
              Residential Plots
            </span>
            <ProjectStatusTag stage="Delivered" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
            DALAN Avenue Micro Society
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

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-start items-stretch sm:items-center w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#091e44] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#061632] hover:shadow-lg hover:shadow-[#091e44]/30 w-full sm:w-auto whitespace-nowrap"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/916389088088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-green-500/30 gap-2 w-full sm:w-auto whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
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
