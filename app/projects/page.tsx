'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

const projects = [
  { id: 'shivdhara-residency', title: 'Shivdhara Residency', location: 'Bharlai, Shivpur, Varanasi', type: 'Residential', status: 'Delivered', beds: '3 BHK Row House', price: 'Contact for Price', img: '/Shivdhara/shivdhara.png' },
  { id: 'dalan-residency', title: 'Dalan Residency', location: 'Ganeshpur, Near BHEL, Airport Road, Varanasi', type: 'Residential', status: 'Upcoming Project', beds: '2 BHK Row House', price: 'Contact for Price', img: '/images/residency1.jpg' },
  { id: 'dalan-paradise', title: 'Dalan Paradise', location: 'Ganeshpur, Near BHEL, Airport Road, Varanasi', type: 'Residential', status: 'Upcoming Project', beds: '2 BHK Flats', price: 'Contact for Price', img: '/apartments/dalanparadise.png' },
  { id: 'dalan-greens', title: 'Dalan Greens', location: 'Mau, Lucknow - UP', type: 'Plots', status: 'Ready to Register', beds: '1000 - 1500 Sq.ft. Plots', price: 'Contact for Price', img: '/images/greens_hero.png' },
  { id: 'dalan-avenue', title: 'Dalan Avenue', location: 'Village Lodhan, near Om Villas, Chandmari, Varanasi', type: 'Residential', status: 'New Launch', beds: '3 BHK Duplex', price: 'Contact for Price', img: '/avenue/avenue.png' },
  { id: 'dalan-saubhagyam', title: 'Dalan Saubhagyam', location: 'Ring Road, Varanasi', type: 'Residential', status: 'Under Construction', beds: '3 BHK Duplex', price: 'Contact for Price', img: '/shaubhagyam/shubhagyam.png' },
  { id: 'dalan-samridhi', title: 'Dalan Samridhi', location: 'Village Kanudih, near Chandmari, Varanasi', type: 'Residential', status: 'Phase - 1 (Delivered)', beds: '3 BHK Villa', price: 'Contact for Price', img: '/samriddhi/samridhi.png' },
  { id: 'dalan-avenue-micro-society', title: 'Dalan Avenue Micro Society', location: 'Village Lodhan, near Om Villas, Chandmari, Varanasi', type: 'Plots', status: 'Delivered', beds: 'Residential Plots', price: 'Contact for Price', img: '/microsociety/microplots.png' },
  { id: 'dalan-narayan-puram', title: 'Dalan Narayan Puram', location: 'Harhuan Market, Airport Road, Varanasi UP', type: 'Plots', status: 'New Launch', beds: 'Residential Plots', price: 'Contact for Price', img: '/images/narayan_puram_gate_v3.png' },
]

const filters = ['All', 'Residential', 'Plots']
const statusColors: Record<string, string> = {
  'Under Construction': 'bg-yellow-500 text-black',
  'New Launch': 'bg-[#091e44] text-white',
  'Phase - 1 (Delivered)': 'bg-green-500 text-black',
  'Delivered': 'bg-green-500 text-black',
  'Upcoming Project': 'bg-blue-600 text-white',
  'Ready to Register': 'bg-emerald-600 text-white',
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
        {/* <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80" alt="Projects" fill className="object-cover" /> */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              <div
                key={project.id}
                className="project-card group bg-[#F7F7F7] rounded-2xl overflow-hidden border border-black/10 hover:border-[#091e44]/40 transition-all duration-300 reveal flex flex-col justify-between"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div>
                  {/* Image */}
                  <Link href={`/projects/${project.id}`} className="relative block h-56 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className={`absolute top-4 left-4 ${statusColors[project.status] || 'bg-gray-500 text-white'} text-xs px-3 py-1 rounded-full font-medium`}>
                      {project.status}
                    </span>
                    <span className="absolute top-4 right-4 bg-white/80 backdrop-blur text-black text-xs px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                  </Link>

                  {/* Info */}
                  <div className="p-6 pb-4">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="font-display text-xl font-bold text-black group-hover:text-[#091e44] transition-colors duration-300 mb-2">
                        {project.title}
                      </h3>
                    </Link>
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
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-black/5 flex items-center justify-between gap-3">
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-1 text-[#091e44] text-sm font-semibold hover:underline">
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/916389088088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-semibold transition-all duration-300 hover:shadow-md hover:shadow-green-500/20"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
