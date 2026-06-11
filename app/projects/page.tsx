'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const projects = [
  { id: 1, title: 'DALAN Builders Heights', location: 'Sigra, Varanasi', type: 'Residential', status: 'Ready to Move', beds: '2 & 3 BHK', price: '₹65L - ₹1.2Cr', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80' },
  { id: 2, title: 'DALAN Builders Business Park', location: 'Sarnath, Varanasi', type: 'Commercial', status: 'Under Construction', beds: 'Office Spaces', price: '₹1.5Cr - ₹5Cr', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
  { id: 3, title: 'DALAN Builders Villas', location: 'Lanka, Varanasi', type: 'Residential', status: 'New Launch', beds: '4 & 5 BHK', price: '₹2Cr - ₹4Cr', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80' },
  { id: 4, title: 'DALAN Builders Arcade', location: 'Cantonment, Varanasi', type: 'Commercial', status: 'Ready to Move', beds: 'Retail & Office', price: '₹80L - ₹3Cr', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
  { id: 5, title: 'DALAN Builders Serene', location: 'Pandeypur, Varanasi', type: 'Residential', status: 'Under Construction', beds: '2 & 3 BHK', price: '₹45L - ₹90L', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80' },
  { id: 6, title: 'DALAN Builders Plaza', location: 'Luxa', type: 'Commercial', status: 'Ready to Move', beds: 'Mixed Use', price: '₹1Cr - ₹6Cr', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80' },
]

const filters = ['All', 'Residential', 'Commercial']
const statusColors: Record<string, string> = {
  'Ready to Move': 'bg-green-500',
  'Under Construction': 'bg-yellow-500',
  'New Launch': 'bg-[#091e44]',
}

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.type === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [active])

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80" alt="Projects" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#091e44] text-xs uppercase tracking-widest">Our Portfolio</span>
          <h1 className="font-display text-5xl font-bold text-black mt-3">All Projects</h1>
        </div>
      </section>

      {/* Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? 'bg-[#091e44] text-white shadow-lg shadow-[#091e44]/30'
                    : 'bg-[#F7F7F7] text-gray-600 border border-black/10 hover:border-[#091e44]/40 hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card group bg-[#F7F7F7] rounded-2xl overflow-hidden border border-black/10 hover:border-[#091e44]/40 transition-all duration-300 reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700" />
                  <span className={`absolute top-4 left-4 ${statusColors[project.status]} text-black text-xs px-3 py-1 rounded-full font-medium`}>
                    {project.status}
                  </span>
                  <span className="absolute top-4 right-4 bg-white/80 backdrop-blur text-black text-xs px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-black group-hover:text-[#091e44] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center gap-1 mb-3">
                    <MapPin size={14} className="text-[#091e44]" /> {project.location}
                  </p>
                  <div className="flex items-center justify-between border-t border-black/10 pt-4">
                    <div>
                      <div className="text-gray-600 text-xs">Configuration</div>
                      <div className="text-black text-sm font-medium">{project.beds}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-600 text-xs">Price Range</div>
                      <div className="text-[#091e44] text-sm font-semibold">{project.price}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[#091e44] text-sm font-medium">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
