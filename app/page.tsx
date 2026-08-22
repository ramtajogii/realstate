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
    desktop: '/images/residency-desktop.png',
    mobile: '/images/residency.jpg',
    alt: 'DALAN Builders'
  },
  {
    desktop: '/images/samridhi-desktop.png',
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
    id: 'dalan-paradise',
    title: 'DALAN PARADISE',
    location: 'Ganeshpur, Near BHEL, Airport Road, Varanasi',
    type: 'Flats',
    image: '/apartments/dalanparadise.png',
    status: 'New Launch',
  },
  {
    id: 'dalan-samridhi',
    title: 'DALAN SAMRIDDHI',
    location: 'Village Kanudih, near Chandmari, Varanasi',
    type: 'Villa',
    image: '/samriddhi/samridhi.png',
    status: 'Under Construction',
  },
  {
    id: 'shivdhara-residency',
    title: 'SHIVDHARA RESIDENCY',
    location: 'Bharlai, Shivpur, Varanasi',
    type: 'Row House',
    image: '/Shivdhara/shivdhara.png',
    status: 'Delivered',
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
    name: 'Maya Mishra',
    role: 'Homeowner, Dalan Residency',
    text: 'We were looking for a home near Ring Road for years, but everything was either too expensive or too far from the city. Dalan Residency gave us both — a beautiful duplex and a location we could only dream of. The EMI process was so smooth, our family moved in within months',
  },
  {
    name: 'Jitendra Singh',
    role: 'Homeowner, Dalan Avenue',
    text: 'What impressed us most was the transparency. No hidden charges, no last-minute surprises — exactly what they promised on paper is what we got. Our sale deed was registered immediately, just as Dalan had assured us.',
  },
  {
    name: 'Anoop Rai',
    role: 'Investor, Dalan Avenue',
    text: `I bought a plot in Dalan Avenue as an investment two years ago, and the value has grown significantly since then. The location near Om Villas and the well-planned roads make it one of the smartest decisions I've made.`,
  },
  {
    name: 'Vikas Shukla',
    role: 'Homeowner, Dalan Samridhi',
    text: `Being close to LBS Airport and Sarnath was important for our family, and Dalan Samridhi checked every box. The construction quality is excellent, and the ISO certification really shows in the finishing work`,
  },
  {
    name: 'Ajay Yadav',
    role: 'Homeowner, Shivdhara Residency',
    text: `My children study at St. Joseph's Convent School, so when we found Shivdhara Residency right in front of it, it felt like fate. The 24x7 security and CCTV give us so much peace of mind every single day.`,
  },
  {
    name: 'Abhishek',
    role: 'Homeowners, Dalan Residency',
    text: `From the first visit to the final registration, the entire Dalan Builders team was honest and supportive. We didn't feel like customers — we felt like family. Highly recommend them to anyone looking in Varanasi`,
  },
  {
    name: 'Anand Jaiswal',
    role: 'Homeowner, Dalan Samridhi',
    text: 'We compared villa projects around Chandmari for months. What settled it for us was how openly the team answered every question about the plan and the paperwork — nothing was brushed aside or left vague.',
  },
  {
    name: 'Anand Singh',
    role: 'Homeowner, Dalan Avenue',
    text: 'We shifted into our duplex at Dalan Avenue and settled in quickly. The internal roads are wide, the water supply is steady, and the neighbourhood has a genuinely calm feel to it.',
  },
  {
    name: 'Saurabh Rai',
    role: 'Homeowner, Dalan Samridhi',
    text: 'I visit the site every few weeks and the work has never felt rushed. Watching the structure come up the way it was described to us at booking is what gives me confidence about the handover.',
  },
  {
    name: 'Avanish Kumar Singh',
    role: 'Investor, Dalan Avenue',
    text: 'I took two units in Dalan Avenue and both have held their value well. The location near Om Villas keeps demand steady in this pocket, which is exactly what I was counting on.',
  },
  {
    name: 'Jhumma Brahmachari',
    role: 'Homeowner, Dalan Samridhi',
    text: 'The villa layout is what won me over — proper ventilation, sensible room sizes, and a plan that suits how a family actually lives rather than one that only looks good on paper.',
  },
  {
    name: 'Pramod Rai',
    role: 'Investor, Dalan Avenue',
    text: 'Dalan Avenue was a considered investment rather than an impulse. Clear titles and prompt registration made the purchase itself completely painless.',
  },
  {
    name: 'Neelam Singh',
    role: 'Homeowner, Dalan Samridhi',
    text: 'Booking a home while it is still under construction takes trust, so the regular updates from the Dalan team have meant a great deal. I always know what stage my villa is at.',
  },
  {
    name: 'Sunita Pandey',
    role: 'Homeowner, Dalan Avenue',
    text: 'Our duplex has been comfortable through every season. Power backup and the water arrangement are things you only notice when they are missing, and here they simply work.',
  },
  {
    name: 'Durgesh & Roli Singh',
    role: 'Homeowners, Dalan Samridhi',
    text: 'We saw several projects before choosing Samridhi. The location near Chandmari works for both our workplaces, and at no point did the team pressure us while we were deciding.',
  },
  {
    name: 'Babita Kumari',
    role: 'Homeowner, Dalan Avenue',
    text: 'The handover came on the terms we were promised, with nothing added to the cost at the last moment. That alone set Dalan apart from what we had seen elsewhere.',
  },
  {
    name: 'Dr. Dipt Kumar',
    role: 'Homeowner, Dalan Samridhi',
    text: 'Between the hospital and my family I had very little time to chase paperwork. The documentation was handled clearly and I was kept informed, which made the whole process manageable.',
  },
  {
    name: 'Dinesh Singh',
    role: 'Homeowner, Shivdhara Residency',
    text: 'Shivpur has developed a great deal in recent years and Shivdhara sits right in the middle of it. The row house has been easy to live in and low on maintenance.',
  },
  {
    name: 'Sunny Sonkar',
    role: 'Homeowner, Dalan Samridhi',
    text: 'What I appreciate most is the honesty about timelines. We were told what stage the project was at and what to expect next, without any exaggeration in either direction.',
  },
  {
    name: 'Paras Nath Singh',
    role: 'Homeowner, Dalan Avenue',
    text: 'After retirement I wanted somewhere quiet and well kept, but still close enough to the city. Dalan Avenue has given me that, and the common areas are looked after consistently.',
  },
  {
    name: 'Praveen Singh',
    role: 'Homeowner, Dalan Samridhi',
    text: 'The approach road and the planning of the site impressed me as much as the villa itself. It is clear the layout was thought through properly before construction began.',
  },
  {
    name: 'Amit Tripathi',
    role: 'Homeowner, Dalan Residency',
    text: 'The connectivity from Dalan Residency out to the Ring Road makes daily travel straightforward. Our duplex has been comfortable and the construction has held up well.',
  },
  {
    name: 'Amit & Tanya Tiwari',
    role: 'Homeowners, Dalan Samridhi',
    text: 'This is our first home, so we arrived with endless questions. The team sat with us patiently through all of them and explained every clause before we signed anything.',
  },
  {
    name: 'Sailendra Pandey',
    role: 'Homeowner, Shivdhara Residency',
    text: 'Having the school directly in front means the children walk across rather than being dropped off. That one small thing has changed our mornings completely.',
  },
  {
    name: 'Sunita Singh',
    role: 'Homeowner, Dalan Samridhi',
    text: 'Being within easy reach of Sarnath and the airport road was a practical consideration for our family, and Samridhi sits well for both. The build quality has matched what we were shown.',
  },
  {
    name: 'Rituraj Shrivastva',
    role: 'Investor, Dalan Avenue',
    text: 'I bought here on the strength of the location and the layout. Both units were registered without delay and the paperwork was in order from the first day.',
  },
  {
    name: 'Ankita Raj',
    role: 'Homeowner, Dalan Samridhi',
    text: 'I wanted a home in a planned development rather than a standalone house, and the villa layout at Samridhi gave me exactly that without stretching my budget beyond what was sensible.',
  },
  {
    name: 'Sujeet Maurya',
    role: 'Homeowner, Dalan Residency',
    text: 'We moved in with our parents and our children together, and the row house layout suits a joint family well — room enough for everyone without anything going to waste.',
  },
  {
    name: 'Lal Mani Mishra',
    role: 'Homeowner, Dalan Samridhi',
    text: 'At my age I did not want any complications with documents. Everything was explained in plain terms and each step was completed in the order they said it would be.',
  },
  {
    name: 'Shobhit Srivastva',
    role: 'Homeowner, Shivdhara Residency',
    text: 'The CCTV at the main gate and the round-the-clock security were what convinced my family, and we have had no reason to doubt that decision since.',
  },
  {
    name: 'Chanchala Mishra',
    role: 'Homeowner, Dalan Samridhi',
    text: 'We booked for the family together and the team accommodated our requirements without any fuss. The coordination through the entire process has been steady and unhurried.',
  },
  {
    name: 'Pawan Pandey',
    role: 'Homeowner, Dalan Avenue',
    text: 'The green spaces and the park are what our children enjoy most. It is a safe layout for them to move around in, which mattered more to us than anything else.',
  },
  {
    name: 'Hariom Mishra',
    role: 'Homeowner, Dalan Samridhi',
    text: 'I have followed the site from the ground up. The materials and the finishing standards have stayed consistent with what was committed at the very beginning.',
  },
  {
    name: 'Akhilesh Singh',
    role: 'Homeowner, Dalan Residency',
    text: 'The buying process was refreshingly direct. The cost we discussed was the cost we paid, and the registration happened when they said it would.',
  },
  {
    name: 'Jay Singh',
    role: 'Homeowner, Dalan Samridhi',
    text: 'The gated layout and the planning of the internal roads were the deciding factors for me. It feels like a community that has been designed, not one that simply grew.',
  },
  {
    name: 'Vishvendu Dubey',
    role: 'Homeowner, Shivdhara Residency',
    text: 'The construction is solid and the finishing was done properly rather than hurriedly. Small details, but they are the ones that show over time.',
  },
  {
    name: 'Rekha Gupta',
    role: 'Homeowner, Dalan Samridhi',
    text: 'As a woman buying on her own, I was treated with complete respect throughout. Every question about the plan and the payment schedule was answered directly, without condescension.',
  },
  {
    name: 'Abhishek Verma',
    role: 'Homeowner, Dalan Avenue',
    text: 'Every commitment made at the time of booking was met at handover. In this market that counts for more than anything printed in a brochure.',
  },
  {
    name: 'Manisha Pandey',
    role: 'Homeowner, Dalan Residency',
    text: 'What I value most is the sense of security. The gate is manned, the neighbours look out for one another, and I never feel uneasy when I am at home alone.',
  },
  {
    name: 'Anand Pandey',
    role: 'Homeowner, Shivdhara Residency',
    text: 'From the first site visit to collecting the keys, the team was reachable whenever we called. That kind of responsiveness is rare and we noticed it throughout.',
  },
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
  const [isPageVisible, setIsPageVisible] = useState(true)

  useEffect(() => {
    const handleVisibility = () => setIsPageVisible(!document.hidden)
    handleVisibility()
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

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

  // Autoplay pauses while the tab is hidden: transitions don't complete in a
  // background tab, so advancing the index there would leave it stranded past
  // the last clone with no transitionend to snap it back.
  useEffect(() => {
    if (!isPageVisible) return

    const interval = window.setInterval(() => {
      setIsHeroTransitioning(true)
      setCurrentSlide((prev) => prev + 1)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [currentSlide, isPageVisible])

  useEffect(() => {
    if (!isPageVisible) return

    const interval = window.setInterval(() => {
      setIsTestimonialTransitioning(true)
      setCurrentTestimonial((prev) => prev + 1)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [currentTestimonial, isPageVisible])

  // Both snaps compare with >= / <= rather than ===, so an index that already
  // overshot the clone still gets pulled back instead of latching forever.
  const handleHeroTransitionEnd = () => {
    if (currentSlide >= extendedHeroSlides.length - 1) {
      setIsHeroTransitioning(false)
      setCurrentSlide(1)
    } else if (currentSlide <= 0) {
      setIsHeroTransitioning(false)
      setCurrentSlide(extendedHeroSlides.length - 2)
    }
  }

  const handleTestimonialTransitionEnd = () => {
    if (currentTestimonial >= extendedTestimonials.length - 1) {
      setIsTestimonialTransitioning(false)
      setCurrentTestimonial(1)
    } else if (currentTestimonial <= 0) {
      setIsTestimonialTransitioning(false)
      setCurrentTestimonial(extendedTestimonials.length - 2)
    }
  }

  // transitionend is the primary trigger for the snaps above, but it never
  // arrives if a frame stalls. Without this fallback a single missed event
  // leaves the track translated past the last slide permanently.
  useEffect(() => {
    if (currentSlide > 0 && currentSlide < extendedHeroSlides.length - 1) return

    const timer = window.setTimeout(handleHeroTransitionEnd, 750)
    return () => window.clearTimeout(timer)
  }, [currentSlide])

  useEffect(() => {
    if (currentTestimonial > 0 && currentTestimonial < extendedTestimonials.length - 1) return

    const timer = window.setTimeout(handleTestimonialTransitionEnd, 550)
    return () => window.clearTimeout(timer)
  }, [currentTestimonial])

  const handlePrevSlide = () => {
    if (currentSlide <= 0 || currentSlide >= extendedHeroSlides.length - 1) return
    setIsHeroTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  const handleNextSlide = () => {
    if (currentSlide <= 0 || currentSlide >= extendedHeroSlides.length - 1) return
    setIsHeroTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const handlePrevTestimonial = () => {
    if (currentTestimonial <= 0 || currentTestimonial >= extendedTestimonials.length - 1) return
    setIsTestimonialTransitioning(true)
    setCurrentTestimonial((prev) => prev - 1)
  }

  const handleNextTestimonial = () => {
    if (currentTestimonial <= 0 || currentTestimonial >= extendedTestimonials.length - 1) return
    setIsTestimonialTransitioning(true)
    setCurrentTestimonial((prev) => prev + 1)
  }

  // currentTestimonial indexes extendedTestimonials, whose first and last items
  // are clones that make the loop seamless. Map it back to a real testimonial.
  const activeTestimonial =
    currentTestimonial === 0
      ? testimonials.length - 1
      : currentTestimonial === extendedTestimonials.length - 1
        ? 0
        : currentTestimonial - 1

  // One dot per testimonial stops scaling somewhere around a dozen; at forty the
  // strip is wider than a phone. Show a window that travels with the active dot.
  const DOT_WINDOW = 7
  const dotStart = Math.max(0, Math.min(activeTestimonial - (DOT_WINDOW - 1) / 2, testimonials.length - DOT_WINDOW))
  const dotIndexes = Array.from(
    { length: Math.min(DOT_WINDOW, testimonials.length) },
    (_, i) => dotStart + i
  )

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
        <div className="relative aspect-[2/1] md:aspect-[5/2] w-full overflow-hidden bg-white">
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
                {/* Every panel stretches to the tallest quote in the set, so the
                    content is centred rather than sitting high in the card with
                    the slack collecting underneath. */}
                {extendedTestimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 p-8 md:p-12 text-center flex flex-col items-center justify-center">
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

          {/* Dots Indicator — a travelling window, not one dot per testimonial */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {dotIndexes.map((index) => {
              const isActive = index === activeTestimonial
              // The dots at the edge of the window shrink when there is more
              // list beyond them, so the strip reads as a section of a longer run.
              const isFading =
                (index === dotIndexes[0] && index > 0) ||
                (index === dotIndexes[dotIndexes.length - 1] && index < testimonials.length - 1)
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIsTestimonialTransitioning(true)
                    setCurrentTestimonial(index + 1)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive
                    ? 'w-6 bg-[#091e44]'
                    : isFading
                      ? 'w-1.5 bg-black/15 hover:bg-black/40'
                      : 'w-2 bg-black/20 hover:bg-black/40'
                    }`}
                  aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                />
              )
            })}
          </div>

          {/* With forty testimonials the dots alone no longer say where you are. */}
          <p className="mt-3 text-center text-xs text-gray-400 tabular-nums" aria-live="polite">
            {activeTestimonial + 1} of {testimonials.length}
          </p>
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
            
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto items-stretch sm:items-center">
              <a
                href="https://wa.me/916389088088?text=Hello%2C%20I%20would%20like%20to%20book%20a%20site%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C9922A] hover:bg-[#b07d1f] text-black font-bold px-6 py-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#C9922A]/10 hover:-translate-y-0.5 w-full sm:w-auto whitespace-nowrap"
              >
                <Calendar size={16} />
                <span>Book Site Visit</span>
              </a>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-bold px-6 py-4 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
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

