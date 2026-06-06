'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '120+', label: 'Projects Delivered', icon: Building2 },
  { value: '5000+', label: 'Happy Families', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
]

const featuredProjects = [
  {
    id: 1,
    title: 'DALAN Builders Heights',
    location: 'Sigra, Varanasi',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    status: 'Ready to Move',
  },
  {
    id: 2,
    title: 'DALAN Builders Business Park',
    location: 'Sarnath, Varanasi',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    status: 'Under Construction',
  },
  {
    id: 3,
    title: 'DALAN Builders Villas',
    location: 'Lanka, Varanasi',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    status: 'New Launch',
  },
  {
    id: 4,
    title: 'DALAN Builders Arcade',
    location: 'Cantonment, Varanasi',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    status: 'Ready to Move',
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
        <div className="relative w-full">
          <Image
            src="/images/master-image.jpeg"
            alt="DALAN Builders"
            width={1600}
            height={853}
            className="block h-auto w-full object-contain"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* <span className="inline-block px-4 py-1.5 bg-[#F26522]/20 border border-[#F26522]/40 rounded-full text-[#F26522] text-xs uppercase tracking-widest mb-6 animate-fade-in">
              Premium
            </span> */}

            {/* <h1 className="font-display text-5xl md:text-7xl font-bold text-black leading-tight mb-6 animate-fade-up">
              Build Your{' '}
              <span className="text-[#F26522]">Dream</span>{' '}
              Space
            </h1> */}

            {/* <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              DALAN Builders delivers world-class residential and commercial properties
              built for the way you live and work today.
            </p> */}

            {/* <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 bg-[#F26522] text-black font-medium rounded-full hover:bg-[#D4521A] transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:gap-3"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>
            </div> */}
              {/* <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-black/5 backdrop-blur border border-black/30 text-black font-medium rounded-full hover:bg-black/10 transition-all duration-300"
              >
                <Play size={16} className="text-[#F26522]" /> Watch Story
              </Link> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-[#F26522]" />
        </div> */}
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-[#F26522] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center reveal">
                <stat.icon size={28} className="text-black/70 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-display font-bold text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-black/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="relative reveal">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80"
                  alt="About DALAN Builders"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full h-64"
                />
                <Image
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&q=80"
                  alt="About DALAN Builders"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full h-64 mt-8"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#F26522] rounded-2xl p-6 text-black shadow-2xl">
                <div className="text-3xl font-display font-bold">15+</div>
                <div className="text-xs uppercase tracking-wide text-black/80">Years of Trust</div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-6 leading-tight">
                Building More Than Structures
              </h2>
              <div className="w-14 h-1 bg-[#F26522] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                DALAN Builders was founded with a single vision: to create spaces that enhance the quality of life.
                For over 15 years, we have delivered residential communities and commercial destinations that stand
                the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every project we undertake is guided by our commitment to quality construction, innovative design,
                and on-time delivery. We don't just build properties — we build legacies.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#F26522] text-[#F26522] rounded-full hover:bg-[#F26522] hover:text-black transition-all duration-300"
              >
                Know More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className="py-18 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Our Projects</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              Landmark Properties
            </h2>
            <div className="w-14 h-1 bg-[#F26522] mx-auto" />
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#F26522] text-black text-xs rounded-full font-medium">
                    {project.status}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[#F26522] text-xs uppercase tracking-wider">{project.type}</span>
                    <h3 className="font-display text-xl font-bold text-black mt-1">{project.title}</h3>
                    <p className="text-gray-700 text-sm mt-1 flex items-center gap-1">
                      📍 {project.location}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[#F26522] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F26522] text-black font-medium rounded-full hover:bg-[#D4521A] transition-all duration-300"
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
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-14 h-1 bg-[#F26522] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-8 reveal hover:border-[#F26522]/30 transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Quote Mark */}
                <div className="text-[#F26522] text-5xl font-display leading-none mb-4">"</div>
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
                    <div className="text-[#F26522] text-xs">{t.role}</div>
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
            Ready to Find Your{' '}
            <span className="text-[#F26522]">Dream Property?</span>
          </h2>
          <p className="text-gray-700 text-lg mb-10">
            Talk to our expert team today and take the first step towards owning your perfect space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#F26522] text-black font-medium rounded-full hover:bg-[#D4521A] transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40"
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

