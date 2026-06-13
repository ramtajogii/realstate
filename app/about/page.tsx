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
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80" alt="About" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#091e44] text-xs uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-5xl font-bold text-black mt-3">Our Story</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Who We Are</span>
            <h2 className="font-display text-4xl font-bold text-black mt-3 mb-5">Dalan Avenue Micro Society</h2>
            <div className="w-14 h-1 bg-[#091e44] mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">Welcome to Dalan Avenue Micro Society a close-knit, beautifully planned residential community where every plot tells a story of smart living and thoughtful design. Nestled in Village Lodhan, near Om Villas, Chandmari, Varanasi, this intimate society is built for those who believe that the best neighbourhoods are the ones where everyone knows each other by name.</p>
            <p className="text-gray-600 leading-relaxed mb-4">With wide internal roads, a park, lush greenery, and all essential amenities in place, Dalan Avenue Micro Society gives you the warmth of a community and the freedom of your own land — all in one perfectly connected address. Whether you are building your first home or making your smartest investment, this is where your story begins.</p>
            <p className="text-gray-600 leading-relaxed">Our team of seasoned architects, engineers, and professionals work tirelessly to ensure that every DALAN Builders project sets a new benchmark in the industry.</p>
          </div>
          <div className="relative reveal">
            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" alt="About" width={700} height={500} className="rounded-2xl object-cover w-full h-96" />
            <div className="absolute -bottom-6 left-2 md:-left-6 bg-[#091e44] rounded-2xl p-6 text-white">
              <div className="text-3xl font-outfit font-bold">120+</div>
              <div className="text-xs uppercase tracking-wide text-white/80">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider font-display">Experience Smart Living</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Project Amenities</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-black/10 shadow-xl shadow-black/5 bg-white group reveal">
            <Image
              src="/about/amenities.png"
              alt="Dalan Avenue Micro Society amenities"
              width={1200}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="reveal">
              <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">What Drives Us</span>
              <h2 className="font-display text-4xl font-bold text-black mt-3 mb-5">Mission, Vision & Values</h2>
              <div className="w-14 h-1 bg-[#C9922A] mb-6" />
              <p className="text-gray-600 leading-relaxed font-body text-lg">
                Our mission, vision, and values come together in one promise: to create thoughtfully planned communities with quality construction, transparent policies, innovative design, and lasting trust for every family and investor we serve.
              </p>
            </div>

            {/* Right Column: Image styled similar to Avenue cards */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300 group reveal">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Society Overview</h3>
              </div>
              <div className="flex-grow bg-white overflow-hidden">
                <Image
                  src="/about/microplots.png"
                  alt="Dalan Avenue Micro Society Values"
                  width={814}
                  height={1500}
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

