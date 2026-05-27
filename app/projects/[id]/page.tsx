import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'

const projectData: Record<string, any> = {
  '1': {
    title: 'NextGrow Heights',
    location: 'Gachibowli, Hyderabad',
    type: 'Residential',
    status: 'Ready to Move',
    price: '₹65L - ₹1.2Cr',
    beds: '2 & 3 BHK',
    area: '1200 - 2100 sq ft',
    floors: 'G + 20 Floors',
    units: '280 Units',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    description: 'NextGrow Heights is a premium residential complex offering spacious 2 & 3 BHK apartments in the heart of Gachibowli. Designed for modern families, the project features world-class amenities and excellent connectivity.',
    amenities: ['Swimming Pool', 'Gymnasium', 'Clubhouse', 'Children Play Area', '24/7 Security', 'Power Backup', 'Landscaped Gardens', 'Indoor Games', 'Party Hall', 'Jogging Track'],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id] || projectData['1']

  return (
    <>
      {/* Back */}
      <div className="pt-24 pb-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#F26522] transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px]">
        <Image src={project.img} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-[#F26522] text-white text-xs rounded-full mb-3">{project.status}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
          <p className="text-gray-300 mt-2 flex items-center gap-2"><MapPin size={16} className="text-[#F26522]" />{project.location}</p>
        </div>
      </div>

      {/* Details */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Price', value: project.price },
                { label: 'Configuration', value: project.beds },
                { label: 'Area', value: project.area },
                { label: 'Floors', value: project.floors },
              ].map((item) => (
                <div key={item.label} className="bg-[#1A1A1A] rounded-xl p-4 text-center border border-white/10">
                  <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 className="font-display text-2xl font-bold text-white mb-4">About This Project</h2>
            <div className="w-10 h-1 bg-[#F26522] mb-5" />
            <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>

            {/* Amenities */}
            <h2 className="font-display text-2xl font-bold text-white mb-5">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.amenities.map((a: string) => (
                <div key={a} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle size={16} className="text-[#F26522] shrink-0" /> {a}
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Sidebar */}
          <div>
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-7 sticky top-24">
              <h3 className="font-display text-xl font-bold text-white mb-6">Enquire Now</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F26522] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F26522] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F26522] transition-colors" />
                <textarea rows={3} placeholder="Your Message" className="w-full bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#F26522] transition-colors resize-none" />
                <button type="submit" className="w-full py-3 bg-[#F26522] text-white font-medium rounded-xl hover:bg-[#D4521A] transition-all duration-300">
                  Send Enquiry
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F26522] transition-colors">
                  <Phone size={16} className="text-[#F26522]" /> +91 98765 43210
                </a>
                <a href="mailto:info@nextgrow.in" className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F26522] transition-colors">
                  <Mail size={16} className="text-[#F26522]" /> info@nextgrow.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
