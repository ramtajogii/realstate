'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users, Award, TrendingUp, Phone, ChevronLeft, ChevronRight, Shield, MapPin, Handshake, Calendar, BarChart3, X } from 'lucide-react'

const stats = [
  { value: '19+', label: 'Years of Excellence', icon: Award },
  { value: '14+', label: 'Projects Delivered', icon: Building2 },
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
  const [isHovered, setIsHovered] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [communityIndex, setCommunityIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isHovered) return

    const interval = window.setInterval(() => {
      setCommunityIndex((prev) => {
        const maxIndex = welcomeImages.length - visibleItems
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 3000)
    return () => window.clearInterval(interval)
  }, [visibleItems, isHovered])

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
        {/* Pagination Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => {
            const isActive =
              currentSlide === index + 1 ||
              (currentSlide === 0 && index === heroSlides.length - 1) ||
              (currentSlide === extendedHeroSlides.length - 1 && index === 0);
            return (
              <button
                key={index}
                onClick={() => {
                  setIsHeroTransitioning(true)
                  setCurrentSlide(index + 1)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          })}
        </div>
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
      <section className="pt-18 pb-28 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Our Projects</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-3 mb-4">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
      {/* ===== WHY CHOOSE DALAN SECTION ===== */}
      <section className="bg-[#091e44] text-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <span className="text-[#C9922A] text-xs uppercase tracking-widest font-black">Why Choose Dalan</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mt-3 leading-tight">
              Built on Trust. Focused on You.
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 text-center divide-y divide-white/10 md:divide-y-0 lg:divide-x lg:divide-white/10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Trusted Legacy</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                15+ years of building trust and delivering value.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Prime Locations</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Carefully selected locations with excellent connectivity.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Superior Quality</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                High quality materials and modern construction practices.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <Handshake size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Transparent Process</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Clear communication and transparency at every step.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Timely Delivery</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                On-time possession because we value your time.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="flex flex-col items-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-4 text-[#C9922A]">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Investment Growth</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Projects designed to offer high returns in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#C9922A] text-xs uppercase tracking-widest font-black">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#091e44] mt-3">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-16 h-0.5 bg-[#C9922A]/30" />
              <div className="w-2.5 h-2.5 bg-[#C9922A] rotate-45" />
              <div className="w-16 h-0.5 bg-[#C9922A]/30" />
            </div>
          </div>

          {/* Testimonial Slider Container */}
          <div className="relative reveal px-2 md:px-12">
            {/* Slider window */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#F7F7F7] shadow-sm">
              <div
                className={`flex w-full ${isTestimonialTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                onTransitionEnd={handleTestimonialTransitionEnd}
              >
                {extendedTestimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 p-8 md:p-12 text-center flex flex-col items-center">
                    {/* Gold Double Quote mark */}
                    <span className="text-[#C9922A] text-6xl font-serif leading-none h-6 select-none opacity-80 mb-4">“</span>
                    
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic max-w-2xl">
                      {t.text}
                    </p>

                    {/* 5 Stars gold indicator */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5 text-[#C9922A] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.84-.2-1.54-1.118l1.288-3.97a1 1 0 00-.364-1.118L2.24 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                      ))}
                    </div>

                    <div className="text-[#091e44] font-bold text-base md:text-lg">{t.name}</div>
                    <div className="text-[#C9922A] text-xs md:text-sm font-semibold mt-1">{t.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left and Right Arrows */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 text-[#091e44] hover:bg-[#091e44] hover:text-white transition-all duration-300 shadow-md focus:outline-none hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 text-[#091e44] hover:bg-[#091e44] hover:text-white transition-all duration-300 shadow-md focus:outline-none hover:scale-105"
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

      {/* ===== COMMUNITY & EVENTS SECTION ===== */}
      <section className="bg-white py-16 md:py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#C9922A] text-xs uppercase tracking-widest font-black">Community & Events</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#091e44] mt-3 mb-4">
            Building Relationships, Not Just Buildings
          </h2>
          <div className="w-14 h-1 bg-[#C9922A] mx-auto mb-12" />

          {/* Automatic Sliding Carousel of 12 images (showing 3 at a time on desktop, 2 on mobile) */}
          <div 
            className="overflow-hidden w-full relative mb-10 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${communityIndex} * (100% / ${visibleItems} + 16px / ${visibleItems})))`
              }}
            >
              {welcomeImages.map((src, index) => (
                <div 
                  key={index}
                  className="relative shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
                  style={{
                    width: `calc((100% - ${(visibleItems - 1) * 16}px) / ${visibleItems})`
                  }}
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="aspect-[4/3] relative w-full">
                    <Image
                      src={src}
                      alt={`Dalan Community Event ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== READY TO FIND YOUR DREAM HOME SECTION ===== */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto bg-[#091e44] rounded-3xl overflow-hidden shadow-xl relative">
          
          {/* Subtle house background vectors */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            {/* Left house outline */}
            <svg className="absolute left-[8%] bottom-0 h-4/5 w-auto text-white/[0.08]" viewBox="0 0 200 300" fill="currentColor">
              <path d="M10,120 L100,30 L190,120 L190,300 L10,300 Z" />
            </svg>
            {/* Right house outline */}
            <svg className="absolute right-[8%] bottom-0 h-[85%] w-auto text-white/[0.08]" viewBox="0 0 250 350" fill="currentColor">
              <path d="M20,100 L125,10 L230,100 L230,350 L20,350 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-16 px-8 md:px-16">
            <div className="max-w-2xl text-left border-l-4 border-[#C9922A] pl-6">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready to Find Your <br className="hidden md:block" />
                <span className="text-[#C9922A]">Dream Home?</span>
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-4">
                from plots to premium villas, your perfect address in Varanasi is just a call away. Explore floor plans, book a site visit, or get in touch with our team today.
              </p>
            </div>
            
            {/* Action Buttons on the right */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 shrink-0 w-full lg:w-auto">
              <a
                href="tel:+916389088088"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 bg-[#C9922A] hover:bg-[#b07d1f] text-black font-bold px-6 py-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#C9922A]/10 hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                <span>Book Site Visit</span>
              </a>
              <a
                href="tel:+916389088088"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-bold px-6 py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-bold px-6 py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.588 1.973 14.113.95 11.49.95c-5.437 0-9.862 4.371-9.866 9.8.001 1.838.5 3.633 1.449 5.2l-.997 3.64 3.738-.971c1.52.83 3.203 1.267 4.833 1.269zM17.84 15.01c-.328-.164-1.942-.958-2.241-1.067-.3-.11-.518-.165-.736.164-.219.329-.848 1.067-1.039 1.286-.192.219-.383.246-.711.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.192-.329-.02-.507.144-.67.147-.146.328-.384.492-.575.164-.192.219-.328.328-.548.11-.219.055-.411-.027-.575-.082-.164-.736-1.777-1.008-2.434-.265-.636-.53-.55-.736-.56-.189-.01-.41-.01-.628-.01-.218 0-.573.082-.873.411-.3.329-1.147 1.122-1.147 2.734 0 1.612 1.174 3.172 1.338 3.391.164.22 2.313 3.53 5.6 4.947.781.337 1.39.539 1.86.688.784.248 1.497.213 2.06.129.628-.094 1.942-.794 2.215-1.56.273-.767.273-1.423.191-1.56-.081-.137-.299-.219-.627-.383z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Community Moment Large View"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

