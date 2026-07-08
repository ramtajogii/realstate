'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { ShieldCheck, Handshake, Users, ArrowRight } from 'lucide-react'

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
    <div className="bg-[#ffffff] min-h-screen text-[#333333] font-body pb-20">
      {/* 1. Hero Intro Section with Breadcrumbs */}
      <section className="max-w-[1280px] mx-auto px-6 pt-10 md:pt-16 reveal">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-8 font-nav">
          {/* <Link href="/" className="hover:text-[#091e44] transition-colors">HOME</Link> */}
          {/* <span className="text-gray-400 font-normal">&gt;</span> */}
          <span className="text-gold">OUR STORY</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Content (Text) */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-[#091e44]">
              Built on Trust.<br />
              Driven by <span className="text-gold">Purpose.</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg pt-2">
              Dalan Builders was founded with a simple vision — to create thoughtfully planned communities that families can trust. From residential plots to premium villas and commercial developments, every project reflects our commitment to quality, transparency, and long-term value.
            </p>
            <div className="pt-4">
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-3 bg-[#091e44] hover:bg-[#14315f] text-white px-7 py-4 rounded-md text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-1px]"
              >
                Explore Our Projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 relative w-full h-[320px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-lg shadow-xl border border-black/5 bg-gray-50">
            <Image
              src="/about/imageabout2.png"
              alt="Dalan Builders Hardhat and Blueprints"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-w-1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Varanasi Heritage Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-28 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="lg:col-span-6 relative w-full h-[320px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg order-2 lg:order-1 shadow-xl border border-black/5 bg-gray-50">
            <Image
              src="/about/imageabout.png"
              alt="Inspired by Varanasi Ghats"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Content (Text) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gold font-nav">INSPIRED BY VARANASI</span>
              <div className="w-12 h-[2px] bg-gold" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#091e44]">
              Rooted in the City<br />
              We Call Home<span className="text-gold">.</span>
            </h2>
            
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                Varanasi is a city where history, spirituality, and community have coexisted for centuries.
              </p>
              <p>
                Every neighbourhood tells a story, every street carries tradition, and every home becomes part of that legacy.
              </p>
              <p>
                Inspired by this timeless city, Dalan Builders develops spaces that respect heritage while embracing the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Cards Section */}
      <section className="bg-[#FCFBFA] py-20 border-t border-b border-black/5 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6 bg-white shadow-sm">
                <ShieldCheck size={28} className="text-gold" />
              </div>
              <h3 className="font-nav text-xs font-bold tracking-[0.15em] text-[#091e44] uppercase mb-4">
                QUALITY FIRST
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">
                Every project is built with trusted materials, skilled workmanship and strict quality standards.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6 bg-white shadow-sm">
                <Handshake size={28} className="text-gold" />
              </div>
              <h3 className="font-nav text-xs font-bold tracking-[0.15em] text-[#091e44] uppercase mb-4">
                TRANSPARENT RELATIONSHIPS
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">
                Clear pricing, legal compliance and honest communication from booking to possession.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-6 bg-white shadow-sm">
                <Users size={28} className="text-gold" />
              </div>
              <h3 className="font-nav text-xs font-bold tracking-[0.15em] text-[#091e44] uppercase mb-4">
                BUILDING COMMUNITIES
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">
                We don't just construct buildings—we create neighbourhoods where families thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Call To Action Section */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 reveal">
        <div className="max-w-4xl mx-auto border border-gold/30 bg-white rounded-lg p-10 md:p-14 text-center space-y-6 shadow-sm">
          <h2 className="font-display text-3xl md:text-[38px] font-bold text-[#091e44] leading-tight">
            Ready to Begin Your Journey Home?
          </h2>
          <div className="w-12 h-[2px] bg-gold mx-auto" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-[#091e44] hover:bg-[#14315f] text-white px-8 py-4 rounded-md text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto hover:translate-y-[-1px]"
            >
              Book A Site Visit
              <ArrowRight size={14} />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center gap-3 bg-white border border-[#091e44] hover:bg-gray-50 text-[#091e44] px-8 py-4 rounded-md text-xs uppercase tracking-[0.12em] font-bold transition-all duration-300 w-full sm:w-auto hover:translate-y-[-1px]"
            >
              Explore Projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
