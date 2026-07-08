'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users, Award, TrendingUp, Phone, ChevronLeft, ChevronRight } from 'lucide-react'

const stats = [
  { value: '19+', label: 'Years of Excellence', icon: Award },
  { value: '10+', label: 'Projects Delivered', icon: Building2 },
  { value: '2000+', label: 'Happy Families', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
]

const heroSlides = [
  { 
    desktop: '/images/residencymobile.jpg', 
    mobile: '/images/residency.jpg', 
    alt: 'DALAN Builders' 
  },
  { 
    desktop: '/images/samridhimobile.jpg', 
    mobile: '/images/samridhi.jpg', 
    alt: 'DALAN Builders banner' 
  },
]

const extendedHeroSlides = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
]




const featuredProjects = [
  {
    id: 'shivdhara-residency',
    title: 'Shivdhara Residency',
    location: 'Bharlai, Shivpur, Varanasi',
    type: 'Row House',
    image: '/Shivdhara/shivdhara.png',
    status: 'Delivered',
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

const statusColors: Record<string, string> = {
  'Under Construction': 'bg-yellow-500 text-black',
  'New Launch': 'bg-[#091e44] text-white',
  'Phase - 1 (Delivered)': 'bg-green-500 text-black',
  'Delivered': 'bg-green-500 text-black',
}


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

const extendedTestimonials = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
]

const welcomeImages = [
  '/welcome/image1.jpeg',
  '/welcome/image2.jpeg',
  '/welcome/image3.jpeg',
  '/welcome/image4.jpeg',
  '/welcome/image5.jpeg',
  '/welcome/image6.jpeg',
  '/welcome/image7.jpeg',
  '/welcome/image8.jpeg',
  '/welcome/image9.jpeg',
  '/welcome/image10.jpeg',
  '/welcome/image11.jpeg',
  '/welcome/image12.jpeg',
  '/welcome/image13.jpeg',
  '/welcome/image14.jpeg',
]

export default function HomePage() {
  const revealRefs = useRef<HTMLElement[]>([])
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isHeroTransitioning, setIsHeroTransitioning] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(1)
  const [isTestimonialTransitioning, setIsTestimonialTransitioning] = useState(true)
  const [activeWelcome, setActiveWelcome] = useState(6)

  const handlePrevWelcome = () => {
    setActiveWelcome((prev) => (prev === 0 ? welcomeImages.length - 1 : prev - 1))
  }

  const handleNextWelcome = () => {
    setActiveWelcome((prev) => (prev === welcomeImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsHeroTransitioning(true)
      setCurrentSlide((prev) => prev + 1)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [currentSlide])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTestimonialTransitioning(true)
      setCurrentTestimonial((prev) => prev + 1)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [currentTestimonial])

  const handleHeroTransitionEnd = () => {
    if (currentSlide === extendedHeroSlides.length - 1) {
      setIsHeroTransitioning(false)
      setCurrentSlide(1)
    } else if (currentSlide === 0) {
      setIsHeroTransitioning(false)
      setCurrentSlide(extendedHeroSlides.length - 2)
    }
  }

  const handleTestimonialTransitionEnd = () => {
    if (currentTestimonial === extendedTestimonials.length - 1) {
      setIsTestimonialTransitioning(false)
      setCurrentTestimonial(1)
    } else if (currentTestimonial === 0) {
      setIsTestimonialTransitioning(false)
      setCurrentTestimonial(extendedTestimonials.length - 2)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide === 0 || currentSlide === extendedHeroSlides.length - 1) return
    setIsHeroTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  const handleNextSlide = () => {
    if (currentSlide === 0 || currentSlide === extendedHeroSlides.length - 1) return
    setIsHeroTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const handlePrevTestimonial = () => {
    if (currentTestimonial === 0 || currentTestimonial === extendedTestimonials.length - 1) return
    setIsTestimonialTransitioning(true)
    setCurrentTestimonial((prev) => prev - 1)
  }

  const handleNextTestimonial = () => {
    if (currentTestimonial === 0 || currentTestimonial === extendedTestimonials.length - 1) return
    setIsTestimonialTransitioning(true)
    setCurrentTestimonial((prev) => prev + 1)
  }

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
      <section className="relative w-full overflow-hidden bg-white group">
        {/* Background Image (replace with video if available) */}
        <div className="relative aspect-[16/10] md:aspect-[5/2] w-full overflow-hidden bg-white">
          <div
            className={`flex h-full w-full ${isHeroTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTransitionEnd={handleHeroTransitionEnd}
          >
            {extendedHeroSlides.map((slide, index) => (
              <div key={`${slide.desktop}-${index}`} className="relative w-full h-full shrink-0">
                {/* Mobile Image (2:1 ratio) */}
                <div className="block md:hidden relative w-full h-full">
                  <Image
                    src={slide.mobile}
                    alt={slide.alt}
                    fill
                    className="object-fill"
                    priority={index === 1}
                  />
                </div>
                {/* Desktop Image (5:2 ratio) */}
                <div className="hidden md:block relative w-full h-full">
                  <Image
                    src={slide.desktop}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white transition-all duration-300 backdrop-blur-sm focus:outline-none hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white transition-all duration-300 backdrop-blur-sm focus:outline-none hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#091e44] to-[#061632] py-8 md:py-10">
        {/* Background decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9922A] rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-4 gap-1 sm:gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center reveal transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 mb-2 md:mb-4 shadow-inner text-[#C9922A] transition-colors duration-300 hover:bg-[#C9922A]/20">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="text-base sm:text-3xl md:text-5xl font-outfit font-bold text-white mb-0.5 md:mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[7px] sm:text-xs md:text-sm font-semibold uppercase tracking-normal sm:tracking-widest leading-snug">{stat.label}</div>
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
              For over 19+ years, we have delivered residential communities and commercial destinations that stand
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
                  <span className={`absolute top-4 left-4 px-3 py-1 ${statusColors[project.status] || 'bg-[#091e44] text-white'} text-xs rounded-full font-medium`}>
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
      <section className="py-20 bg-[#ffffff] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#64748b] text-lg">Real stories from real families across Dalan Builders' projects</p>
            <div className="w-14 h-1 bg-[#091e44] mx-auto" />
          </div>

          {/* Testimonial Slider Container */}
          <div className="relative reveal px-2 md:px-12">
            {/* Slider window */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#F7F7F7] hover:border-[#091e44]/30 transition-all duration-300 shadow-sm">
              <div
                className={`flex w-full ${isTestimonialTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                onTransitionEnd={handleTestimonialTransitionEnd}
              >
                {extendedTestimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 p-8 md:p-12">
                    {/* Quote Mark */}
                    <div className="text-[#091e44] text-5xl md:text-6xl font-display leading-none mb-4 md:mb-6">"</div>
                    <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base italic">
                      {t.text}
                    </p>
                    <div className="flex items-center gap-4 border-t border-black/10 pt-5">
                      <div>
                        <div className="text-black font-semibold text-sm md:text-base">{t.name}</div>
                        <div className="text-[#091e44] text-xs md:text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left and Right Arrows */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-1 md:left-[-24px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-black/10 hover:border-[#091e44]/30 text-[#091e44] hover:bg-[#091e44] hover:text-white transition-all duration-300 shadow-md focus:outline-none hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="absolute right-1 md:right-[-24px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-black/10 hover:border-[#091e44]/30 text-[#091e44] hover:bg-[#091e44] hover:text-white transition-all duration-300 shadow-md focus:outline-none hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => {
              const isActive = currentTestimonial === index + 1 ||
                (currentTestimonial === 0 && index === testimonials.length - 1) ||
                (currentTestimonial === extendedTestimonials.length - 1 && index === 0);
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsTestimonialTransitioning(true)
                    setCurrentTestimonial(index + 1)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#091e44] w-6' : 'bg-black/20 hover:bg-black/40'
                    }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== WELCOME IMAGE SLIDER SECTION (Large Image with Thumbnails) ===== */}
      <section className="bg-[#ffffff] py-6 md:py-8 px-6 overflow-hidden border-t border-black/5">
        <div className="max-w-7xl mx-auto text-center">
          {/* <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold tracking-wider font-display">Welcome to Dalan</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-black mt-2 mb-4">Our Sites & Corporate Office</h2> */}
          {/* <div className="w-14 h-1 bg-[#C9922A] mx-auto mb-10" /> */}

          {/* Large Image Showcase */}
          <div className="relative w-full max-w-4xl mx-auto h-[260px] md:h-[420px] rounded-3xl overflow-hidden bg-white group mb-6">
            <Image
              src={welcomeImages[activeWelcome]}
              alt={`Dalan Site Image ${activeWelcome + 1}`}
              fill
              priority
              sizes="(max-w-1024px) 100vw, 1024px"
              className="object-contain transition-all duration-500 ease-in-out"
            />

            {/* Arrow Overlay Controls (visible on hover) */}
            <button
              onClick={handlePrevWelcome}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextWelcome}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Thumbnails Scrollable Strip */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="flex gap-3 overflow-x-auto py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center w-full">
              {welcomeImages.map((src, index) => {
                const isActive = activeWelcome === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveWelcome(index)}
                    className={`relative w-20 h-14 md:w-28 md:h-18 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-300 border-2 ${isActive
                        ? 'border-[#C9922A] scale-[1.03] shadow-lg ring-2 ring-[#C9922A]/20'
                        : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="(max-w-768px) 80px, 112px"
                      className="object-cover"
                    />
                  </button>
                )
              })}
            </div>
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
                href="https://wa.me/916389088088"
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

