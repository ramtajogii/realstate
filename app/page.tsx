'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users, Award, TrendingUp, Phone } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '120+', label: 'Projects Delivered', icon: Building2 },
  { value: '5000+', label: 'Happy Families', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
]

const heroSlides = [
  { src: '/images/samridhi.jpg', alt: 'DALAN Builders' },
  { src: '/images/residency.jpg', alt: 'DALAN Builders banner' },
]

const loopingHeroSlides = [...heroSlides, heroSlides[0]]

const featuredProjects = [
  {
    id: 'dalan-samridhi',
    title: 'Dalan Samridhi',
    location: 'Village Kanudih, near Chandmari, Varanasi',
    type: 'Villa',
    image: '/samriddhi/samridhi.png',
    status: 'Ready to Move',
  },
  {
    id: 'dalan-avenue',
    title: 'Dalan Avenue',
    location: 'Village Lodhan, near Om Villas, Chandmari, Varanasi',
    type: 'Duplex',
    image: '/avenue/avenue.png',
    status: 'New Launch',
  },
  {
    id: 'dalan-saubhagyam',
    title: 'Dalan Saubhagyam',
    location: 'Ring Road, Varanasi',
    type: 'Duplex',
    image: '/shaubhagyam/shubhagyam.png',
    status: 'Under Construction',
  },
]

const testimonials = [
  {
    name: 'Rajesh Tiwari',
    role: 'Homeowner, Dalan Saubhagyam',
    text: 'We were looking for a home near Ring Road for years, but everything was either too expensive or too far from the city. Dalan Saubhagyam gave us both — a beautiful duplex and a location we could only dream of. The EMI process was so smooth, our family moved in within months',
  },
  {
    name: 'Sunita Gupta',
    role: 'Homeowner, Dalan Avenue',
    text: 'What impressed us most was the transparency. No hidden charges, no last-minute surprises — exactly what they promised on paper is what we got. Our sale deed was registered immediately, just as Dalan had assured us.',
  },
  {
    name: 'Amit Srivastava',
    role: 'Investor, Dalan Avenue Micro Society',
    text: `I bought a plot in Dalan Avenue Micro Society as an investment two years ago, and the value has grown significantly since then. The location near Om Villas and the well-planned roads make it one of the smartest decisions I've made.`,
  },
  {
    name: 'Pooja Mishra',
    role: 'Homeowner, Dalan Samridhi',
    text: `Being close to LBS Airport and Sarnath was important for our family, and Dalan Samridhi checked every box. The construction quality is excellent, and the ISO certification really shows in the finishing work`,
  },
  {
    name: 'Vikas Singh',
    role: 'Homeowner, Shivdhara Residency',
    text: `My children study at St. Joseph's Convent School, so when we found Shivdhara Residency right in front of it, it felt like fate. The 24x7 security and CCTV give us so much peace of mind every single day.`,
  },
  {
    name: 'Neha & Rohit Verma',
    role: 'Homeowners, Dalan Saubhagyam',
    text: `From the first visit to the final registration, the entire Dalan Builders team was honest and supportive. We didn't feel like customers — we felt like family. Highly recommend them to anyone looking in Varanasi`,
  }
]

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideTransition, setSlideTransition] = useState(true)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideTransition(true)
      setCurrentSlide((slide) => slide + 1)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden bg-white">
        {/* Background Image (replace with video if available) */}
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-white">
          <div
            className={`flex h-full ${slideTransition ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTransitionEnd={() => {
              if (currentSlide === heroSlides.length) {
                setSlideTransition(false)
                setCurrentSlide(0)
              }
            }}
          >
            {loopingHeroSlides.map((slide, index) => (
              <Image
                key={`${slide.src}-${index}`}
                src={slide.src}
                alt={slide.alt}
                width={5544}
                height={2772}
                className="block h-full w-full shrink-0 object-contain"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#091e44] to-[#061632] py-16">
        {/* Background decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9922A] rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center reveal transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-4 shadow-inner text-[#C9922A] transition-colors duration-300 hover:bg-[#C9922A]/20">
                  <stat.icon size={26} />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-semibold uppercase tracking-widest leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-6 leading-tight">
              Building More Than Homes
            </h2>
            <div className="w-14 h-1 bg-[#091e44] mx-auto mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              DALAN Builders was founded with a single vision: to create spaces that enhance the quality of life.
              For over 15 years, we have delivered residential communities and commercial destinations that stand
              the test of time.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#091e44] text-[#091e44] font-medium rounded-full hover:bg-[#091e44] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#091e44]/20"
            >
              Know More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="py-18 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Our Projects</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              Featured Projects
            </h2>
            <div className="w-14 h-1 bg-[#091e44] mx-auto" />
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-card group relative overflow-hidden rounded-2xl reveal cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#091e44] text-white text-xs rounded-full font-medium">
                    {project.status}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[#C9922A] text-xs font-semibold uppercase tracking-wider">{project.type}</span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">{project.title}</h3>
                    <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                      📍 {project.location}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[#C9922A] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#091e44] text-white font-medium rounded-full hover:bg-[#061632] transition-all duration-300"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#64748b] text-lg">Real stories from real families across Dalan Builders' projects</p>
            <div className="w-14 h-1 bg-[#091e44] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-8 reveal hover:border-[#091e44]/30 transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Quote Mark */}
                <div className="text-[#091e44] text-5xl font-display leading-none mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-4 border-t border-black/10 pt-5">
                  <div>
                    <div className="text-black font-semibold text-sm">{t.name}</div>
                    <div className="text-[#091e44] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#FAF9F6] py-20 px-6">
        <div className="max-w-6xl mx-auto relative bg-[#18181b] rounded-[32px] overflow-hidden shadow-2xl reveal">
          {/* Subtle house background vectors */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Left house outline */}
            <svg
              className="absolute left-[8%] bottom-0 h-4/5 w-auto text-white/[0.04]"
              viewBox="0 0 200 300"
              fill="currentColor"
            >
              <path d="M10,120 L100,30 L190,120 L190,300 L10,300 Z" />
              <path d="M80,300 L80,210 L120,210 L120,300 Z" fill="#18181b" />
              <rect x="35" y="155" width="35" height="45" fill="#18181b" rx="2" />
              <rect x="130" y="155" width="35" height="45" fill="#18181b" rx="2" />
            </svg>
            {/* Right house outline */}
            <svg
              className="absolute right-[8%] bottom-0 h-[85%] w-auto text-white/[0.04]"
              viewBox="0 0 250 350"
              fill="currentColor"
            >
              <path d="M20,100 L125,10 L230,100 L230,350 L20,350 Z" />
              <rect x="55" y="140" width="40" height="50" fill="#18181b" rx="2" />
              <rect x="155" y="140" width="40" height="50" fill="#18181b" rx="2" />
              <rect x="55" y="235" width="40" height="50" fill="#18181b" rx="2" />
              <rect x="155" y="235" width="40" height="50" fill="#18181b" rx="2" />
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-16 md:py-24">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Find Your Dream Home <br /> in Varanasi?
            </h2>
            <p className="text-[#e25c5c] font-display text-2xl md:text-3xl font-bold mt-4 mb-6">
              Let's Build It Together.
            </p>
            <p className="text-zinc-400 text-sm md:text-base md:leading-relaxed max-w-2xl mx-auto mb-10">
              From plots to premium villas, your perfect address in Kashi is just a call away. Explore floor plans, book a free site visit, or get in touch with our team today.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/919838096190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#e25c5c] hover:bg-[#d44d4d] text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#e25c5c]/20 hover:-translate-y-0.5"
              >
                <Phone size={18} className="shrink-0" />
                <span>Call / WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

