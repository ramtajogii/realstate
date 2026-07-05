'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Banner Section (Minimal Full-Width Banner style) */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-white">
        <img
          src="/about/varansi.jpeg"
          alt="About Varanasi"
          className="block"
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: 'calc(100% - 60px)',
            height: 'calc(100% - 60px)',
            color: 'transparent',
            objectFit: 'fill',
          }}
        />
      </section>

      {/* Company Story */}
      <section className="py-18 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold font-display">ABOUT US</span>
            <h2 className="font-display text-4xl font-bold text-black mt-3 mb-5">Build Your Trust, Build Your Future</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-black font-semibold">Dalan Builders </strong>Pvt. Ltd. was founded with a simple yet powerful belief that every family deserves a home they can be proud of. What started as a vision to bring quality housing to the people of Varanasi has today grown into a trusted name across the city, known for honest dealings, timely delivery, and construction that truly lasts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From affordable plots and simplex homes to elegant duplexes, spacious row houses, premium villas, apartments, farm houses, and commercial spaces our portfolio is built to serve every kind of dream, every kind of family, and every kind of budget. Each project we undertake whether it's Dalan Saubhagyam, Dalan Avenue, Dalan Samridhi, or Shivdhara Residency carries forward our promise of quality, transparency, and care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As an ISO 9001:2015 certified company, we don't just follow construction standards we set them. Every home we build goes through careful planning, quality material selection, and skilled craftsmanship, ensuring that what you invest in today becomes a legacy for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F7F7] border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider font-display">WHY CHOOSE US</span>
            <h2 className="font-display text-4xl font-bold text-black mt-2">Why Families Choose Dalan Builders</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal">
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">🏆 ISO 9001:2015 Certified Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every project we build follows internationally recognized quality standards — so you get a home that's not just beautiful, but structurally sound and built to last.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">💰 Transparent & Affordable Pricing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No hidden charges, no last-minute surprises. With 100% transparent policies, lowest down payments, and easy EMI schemes, owning your dream home has never been this stress-free.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">🏦 Finance Facility with All Leading Banks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We've partnered with major banks to make home loans simple and quick, so your dream home is just a few steps away from becoming reality.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">📍 Prime & Strategic Locations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All our projects are located in fast-developing areas of Varanasi with excellent connectivity to Ring Road, markets, schools, railway stations, and the airport — ensuring your investment grows in value over time.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">📜 Ready-to-Register Plots</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Own your plot without unnecessary delays. Our reday-to-register plots come with clear legal documentation, ensuring a smooth, secure, and hassel-free registration process.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">🌿 Thoughtfully Planned Communities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From wide pitch roads and greenery to 24x7 security and CCTV surveillance, every Dalan project is designed as a complete living ecosystem — not just a house.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14">
            {/* Project View Card */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300 reveal">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Construction Quality</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image 
                  src="/about/image.png" 
                  alt="Dalan Builders project view" 
                  width={650} 
                  height={420} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>
            </div>

            {/* Community View Card */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300 reveal" style={{ animationDelay: '0.1s' }}>
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Residential Community View</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image 
                  src="/about/image2.png" 
                  alt="Dalan Builders community view" 
                  width={650} 
                  height={420} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
