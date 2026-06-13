'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users, Award, TrendingUp } from 'lucide-react'

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
    id: 'shivdhara-residency',
    title: 'Shivdhara Residency',
    location: 'Village Kanudih, near Chandmari, Varanasi',
    type: 'Row House',
    image: '/Shivdhara/main.png',
    status: 'Ready to Move',
  },
  {
    id: 'dalan-avenue',
    title: 'DALAN Avenue',
    location: 'Village Lodhan, near Om Villas, Chandmari, Varanasi',
    type: 'Duplex',
    image: '/avenue/home.jpg',
    status: 'New Launch',
  },
  {
    id: 'dalan-saubhagyam',
    title: 'DALAN Saubhagyam',
    location: 'Ring Road, Varanasi',
    type: 'Duplex',
    image: '/shaubhagyam/home.jpg',
    status: 'Under Construction',
  },
]

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, DALAN Builders Heights',
    text: 'DALAN Builders delivered exactly what they promised. The quality of construction and attention to detail is exceptional. We are absolutely delighted with our new home.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Priya Reddy',
    role: 'Business Owner, DALAN Builders Arcade',
    text: 'The commercial space exceeded all our expectations. Prime location, modern design, and excellent facilities. Best investment we have made for our business.',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b3bc?w=100&q=80',
  },
  {
    name: 'Anil Kumar',
    role: 'Investor',
    text: 'I have invested in three DALAN Builders projects. The returns and reliability are unmatched. They are truly the best developers in Varanasi.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* <span className="inline-block px-4 py-1.5 bg-[#091e44]/20 border border-[#091e44]/40 rounded-full text-[#091e44] text-xs uppercase tracking-widest mb-6 animate-fade-in">
              Premium
            </span> */}

            {/* <h1 className="font-display text-5xl md:text-7xl font-bold text-black leading-tight mb-6 animate-fade-up">
              Build Your{' '}
              <span className="text-[#091e44]">Dream</span>{' '}
              Space
            </h1> */}

            {/* <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              DALAN Builders delivers world-class residential and commercial properties
              built for the way you live and work today.
            </p> */}

            {/* <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 bg-[#091e44] text-white font-medium rounded-full hover:bg-[#061632] transition-all duration-300 hover:shadow-xl hover:shadow-[#091e44]/40 hover:gap-3"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>
            </div> */}
            {/* <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-black/5 backdrop-blur border border-black/30 text-black font-medium rounded-full hover:bg-black/10 transition-all duration-300"
              >
                <Play size={16} className="text-[#091e44]" /> Watch Story
              </Link> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-[#091e44]" />
        </div> */}
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
      <section className="py-20 bg-[#ffffff]">
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
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              What Our Clients Say
            </h2>
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
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover w-12 h-12"
                  />
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
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          alt="CTA"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Own a Legacy of{' '}
            <span className="text-[#091e44]">Comfort and Trust?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Your dream space in Varanasi is just a conversation away. Get in touch with our team today to explore layout plans, arrange site visits, or secure your future address.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#091e44] text-white font-medium rounded-full hover:bg-[#061632] transition-all duration-300 hover:shadow-xl hover:shadow-[#091e44]/40"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-black/5 backdrop-blur border border-black/30 text-black font-medium rounded-full hover:bg-black/10 transition-all duration-300"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

