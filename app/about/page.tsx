'use client'
import Image from 'next/image'
import { useEffect } from 'react'

const team = [
  { name: 'Ravi Sharma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Priya Mehta', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b3bc?w=300&q=80' },
  { name: 'Arjun Reddy', role: 'Project Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Neha Singh', role: 'Sales Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

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
      {/* Company Story */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold font-display">ABOUT US</span>
            <h2 className="font-display text-4xl font-bold text-black mt-3 mb-5">Build Your Trust, Build Your Future</h2>
            <div className="w-14 h-1 bg-[#C9922A] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-black font-semibold">Dalan Builders</strong>Pvt. Ltd. was founded with a simple yet powerful belief — that every family deserves a home they can be proud of. What started as a vision to bring quality housing to the people of Varanasi has today grown into a trusted name across the city, known for honest dealings, timely delivery, and construction that truly lasts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From affordable plots and simplex homes to elegant duplexes, spacious row houses, premium villas, apartments, farm houses, and commercial spaces — our portfolio is built to serve every kind of dream, every kind of family, and every kind of budget. Each project we undertake — whether it's Dalan Saubhagyam, Dalan Avenue, Dalan Samridhi, or Shivdhara Residency — carries forward our promise of quality, transparency, and care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As an ISO 9001:2015 certified company, we don't just follow construction standards — we set them. Every home we build goes through careful planning, quality material selection, and skilled craftsmanship, ensuring that what you invest in today becomes a legacy for generations to come.
            </p>
          </div>
          <div className="relative reveal">
            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" alt="About DALAN Builders" width={700} height={500} className="rounded-2xl object-cover w-full h-96" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F7F7F7] border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider font-display">WHY CHOOSE US</span>
            <h2 className="font-display text-4xl font-bold text-black mt-2">Why Families Choose Dalan Builders</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal">
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To build thoughtfully planned communities and spaces that enhance the quality of life, offering superior craftsmanship, transparent practices, and lasting value for every family and investor we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the most trusted and preferred real estate developer in the region, recognized for innovation, integrity, and building customer-centric landmarks that stand the test of time.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 reveal" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display text-xl font-bold text-[#091e44] mb-4">Core Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uncompromising quality in construction, absolute transparency in all business dealings, customer trust above all, and innovative architecture that harmonizes with modern lifestyle needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



