import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const paragraphs = [
  `Step into Shivdhara Residency — a peaceful, secure, and thoughtfully planned residential community located right in front of St. Joseph's Convent School in Bharlai, Shivpur, Varanasi. Designed for families who value both convenience and tranquility, Shivdhara Residency offers spacious homes wrapped in greenery, with wide pitch roads and round-the-clock security ensuring complete peace of mind. Every home here is Vaastu compliant built not just with bricks and beams, but with the belief that a true home brings prosperity, harmony, and happiness to those who live in it.`,
  `With proximity to one of the area's most trusted schools and the assurance of finance facilities with all leading banks, Shivdhara Residency is where convenience for your children and comfort for your family come together under one roof, on one address.`,
]

export default function ShivdharaResidencyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Full Image Section */}
      <section className="bg-white animate-fade-in">
        <Image
          src="/Shivdhara/shivdhara.png"
          alt="Shivdhara Residency Hero"
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
            Row House
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
            Shivdhara Residency
          </h2>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#091e44] font-display">
            A Peaceful, Secure, and Vaastu Compliant Community
          </h3>
          <p className="mt-3 text-gray-600 text-sm flex items-center gap-1.5 font-medium">
            <MapPin size={16} className="text-[#091e44]" /> In front of St. Joseph's Convent School, Bharlai, Shivpur, Varanasi
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

      {/* Society Map and Floor Plan Overview */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider">Layout & Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Society Map & Floor Plan Overview</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Map */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Society Map & Floor Planning</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/Shivdhara/firstfloor.png"
                  alt="Shivdhara Residency Society Map"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Unit Plan */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Amenities</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src="/Shivdhara/amenities.png"
                  alt="Shivdhara Residency Amenities"
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
