'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { Target, Eye, Heart, Users, Building2, Award } from 'lucide-react'

const team = [
  { name: 'Ravi Sharma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Priya Mehta', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b3bc?w=300&q=80' },
  { name: 'Arjun Reddy', role: 'Project Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Neha Singh', role: 'Sales Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
]

const values = [
  { icon: Target, title: 'Our Mission', text: 'To deliver premium real estate solutions that enhance quality of life through innovative design and superior construction.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted real estate developer in India, known for integrity, quality, and transforming communities.' },
  { icon: Heart, title: 'Our Values', text: 'Quality, transparency, innovation, and customer satisfaction are the pillars on which every DALAN Builders project is built.' },
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#F26522] text-xs uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-5xl font-bold text-white mt-3">Our Story</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Who We Are</span>
            <h2 className="font-display text-4xl font-bold text-white mt-3 mb-5">15 Years of Building Excellence</h2>
            <div className="w-14 h-1 bg-[#F26522] mb-6" />
            <p className="text-gray-400 leading-relaxed mb-4">Founded in 2009, DALAN Builders Real Estate has grown from a small development firm into one of Varanasi's most respected real estate companies. Our journey has been defined by a commitment to quality, innovation, and customer satisfaction.</p>
            <p className="text-gray-400 leading-relaxed mb-4">We have successfully delivered over 120 projects spanning luxury apartments, commercial complexes, retail spaces, and gated communities. Every property we develop carries our promise of superior construction and timely delivery.</p>
            <p className="text-gray-400 leading-relaxed">Our team of seasoned architects, engineers, and real estate professionals work tirelessly to ensure that every DALAN Builders project sets a new benchmark in the industry.</p>
          </div>
          <div className="relative reveal">
            <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" alt="About" width={700} height={500} className="rounded-2xl object-cover w-full h-96" />
            <div className="absolute -bottom-6 -left-6 bg-[#F26522] rounded-2xl p-6 text-white">
              <div className="text-3xl font-display font-bold">120+</div>
              <div className="text-xs uppercase tracking-wide text-white/80">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">What Drives Us</span>
            <h2 className="font-display text-4xl font-bold text-white mt-3">Mission, Vision & Values</h2>
            <div className="w-14 h-1 bg-[#F26522] mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 reveal hover:border-[#F26522]/40 transition-all duration-300">
                <div className="w-14 h-14 bg-[#F26522]/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon size={24} className="text-[#F26522]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Leadership</span>
            <h2 className="font-display text-4xl font-bold text-white mt-3">Meet Our Team</h2>
            <div className="w-14 h-1 bg-[#F26522] mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center reveal">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <Image src={member.img} alt={member.name} width={300} height={300} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                <p className="text-[#F26522] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
