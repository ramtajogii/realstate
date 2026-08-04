import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'

const projectData: Record<string, any> = {
  '1': {
    title: 'DALAN Builders Heights',
    location: 'Sigra, Varanasi',
    type: 'Residential',
    status: 'Ready to Move',
    price: 'Rs 65L - Rs 1.2Cr',
    beds: '2 & 3 BHK',
    area: '1200 - 2100 sq ft',
    floors: 'G + 20 Floors',
    units: '280 Units',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    description: 'DALAN Builders Heights is a premium residential complex offering spacious 2 & 3 BHK apartments in the heart of Sigra. Designed for modern families, the project features world-class amenities and excellent connectivity.',
    amenities: ['Swimming Pool', 'Gymnasium', 'Clubhouse', 'Children Play Area', '24/7 Security', 'Power Backup', 'Landscaped Gardens', 'Indoor Games', 'Party Hall', 'Jogging Track'],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id] || projectData['1']

  return (
    <>
      <div className="pt-24 pb-6 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#091e44] transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>

      <div className="relative h-96 md:h-[500px]">
        <Image src={project.img} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-[#091e44] text-white text-xs rounded-full mb-3">{project.status}</span>
          <h1 className="text-black">{project.title}</h1>
          <p className="text-gray-700 mt-2 flex items-center gap-2"><MapPin size={16} className="text-[#091e44]" />{project.location}</p>
        </div>
      </div>

      <section className="bg-[#ffffff] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Price', value: project.price },
                { label: 'Configuration', value: project.beds },
                { label: 'Area', value: project.area },
                { label: 'Floors', value: project.floors },
              ].map((item) => (
                <div key={item.label} className="bg-[#F7F7F7] rounded-xl p-4 text-center border border-black/10">
                  <div className="text-gray-600 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-black font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <h2 className="text-black mb-4">About This Project</h2>
            <div className="w-10 h-1 bg-[#091e44] mb-5" />
            <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>

            <h2 className="text-black mb-5">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.amenities.map((a: string) => (
                <div key={a} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle size={16} className="text-[#091e44] shrink-0" /> {a}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-7 sticky top-24">
              <h3 className="text-black mb-6">Enquire Now</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-black/20 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-black/20 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-black/20 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors" />
                <textarea rows={3} placeholder="Your Message" className="w-full bg-white border border-black/20 rounded-xl px-4 py-3 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors resize-none" />
                <button type="submit" className="w-full py-3 bg-[#091e44] text-white font-medium rounded-xl hover:bg-[#061632] transition-all duration-300">
                  Send Enquiry
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-black/10 space-y-3">
                <a href="https://wa.me/916389088088" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#091e44] transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#091e44] shrink-0" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <span>+91 63890 88088</span>
                </a>
                <a href="mailto:info@dalanbuilders.in" className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#091e44] transition-colors">
                  <Mail size={16} className="text-[#091e44]" /> info@dalanbuilders.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
