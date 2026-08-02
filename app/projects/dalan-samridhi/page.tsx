import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Plane,
  Landmark,
  Building2,
  ShieldCheck,
  Award,
  Fence,
  TreePine,
  Zap,
  Route,
  Droplets,
  Waves,
  Store,
  TrainFront,
  FerrisWheel,
  Home,
  ArrowRight,
} from 'lucide-react'
import ProjectStatusTag from '@/components/ProjectStatusTag'

const paragraphs = [
  'Welcome to Dalan Samridhi - a thoughtfully crafted residential community where the promise of a better life begins the moment you step through the gate. Built by the trusted name of Dalan Builders Pvt. Ltd., Dalan Samridhi is designed for families who believe that a home should not just shelter you, but inspire you. Set amidst wide open spaces, clean surroundings, and a warmly connected neighbourhood, every home here is a step towards the life you have always envisioned.',
  'Located in Village Kanudih, near Chandmari Market on Ring Road, Varanasi, Dalan Samridhi offers the rare combination of peaceful residential living and outstanding city connectivity. Ring Road is just 100 metres away, Chandmari Market is a short 700-metre walk, and LBS International Airport is only 15 minutes from your door. Whether you are a working professional, a growing family, or a smart investor - Dalan Samridhi puts you exactly where you need to be.',
  'With loan facility available, ISO 9001:2015 certified construction quality, and a commitment to 100% transparent policies, your journey to owning your dream home has never been this smooth, this trustworthy, or this close.',
]

const highlights = [
  { icon: MapPin, title: 'Prime Location', lines: ['Ring Road', '100 Metres'] },
  { icon: Plane, title: 'LBS Airport', lines: ['15 Minutes', 'Drive'] },
  { icon: Landmark, title: 'Sarnath', lines: ['10 Minutes', 'Drive'] },
  { icon: Building2, title: 'Finance Facility', lines: ['Available with', 'All Leading Banks'] },
  { icon: ShieldCheck, title: '100% Transparent', lines: ['Policies'] },
  { icon: Award, title: 'ISO 9001:2015', lines: ['Certified Developer'] },
]

const amenities = [
  { icon: Fence, label: 'Well Entrance & Society Gate' },
  { icon: TreePine, label: 'Greenery' },
  { icon: Zap, label: 'Electricity' },
  { icon: Route, label: 'Wide Pitch Road' },
  { icon: Droplets, label: 'Water Supply' },
  { icon: Waves, label: 'Sewage System' },
]

const keyDistances = [
  { icon: Route, label: 'Ring Road', value: '100 Metres' },
  { icon: Store, label: 'Chandmari Market', value: '700 Metres' },
  { icon: FerrisWheel, label: 'Funtasia Waterpark and Resort', value: '1 KM' },
  { icon: Plane, label: 'LBS International Airport', value: '15 Minutes Drive' },
  { icon: TrainFront, label: 'Varanasi Cantt Railway Station', value: '7 KM' },
  { icon: Landmark, label: 'Sarnath', value: '10 Minutes Drive' },
]

const trustPoints = [
  { icon: Home, label: 'Thoughtfully Planned Homes' },
  { icon: ShieldCheck, label: 'Peaceful & Secure Community' },
  { icon: Route, label: 'Excellent Connectivity' },
  { icon: TreePine, label: 'Lush Green Environment' },
  { icon: Award, label: 'Quality Construction You Can Trust' },
]

export default function DalanSamridhiPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Split Hero Section */}
      <section className="relative bg-[#091e44] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
          {/* Left: Brand & Copy */}
          <div className="relative z-10 order-2 md:order-1 px-6 py-14 md:py-20 lg:px-14 flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9922A]">
              Duplex Villa
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-none">
              <span className="text-white">DALAN</span>
              <br />
              <span className="text-[#C9922A]">SAMRIDHI</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl font-display italic">
              Where Prosperity Finds Its Home
            </p>
            <div className="w-14 h-1 bg-[#C9922A] my-6" />
            <p className="text-white/70 flex items-start gap-2 text-sm md:text-base font-medium">
              <MapPin size={18} className="text-[#C9922A] shrink-0 mt-0.5" />
              Village Kanudih, near Chandmari Market, Ring Road, Varanasi UP
            </p>
            <div className="mt-8 flex flex-row gap-2.5 items-center w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 bg-[#C9922A] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/20 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Enquire Now
                <ArrowRight size={14} className="shrink-0" />
              </Link>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 bg-[#25D366] text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-green-500/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Building Image + Stage Tag */}
          <div className="relative order-1 md:order-2 min-h-[320px] md:min-h-[560px]">
            <Image
              src="/samriddhi/samridhi.png"
              alt="Dalan Samridhi"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#091e44] to-transparent pointer-events-none" />
            <ProjectStatusTag
              stage="Under Construction"
              className="absolute top-5 right-5 md:top-8 md:right-8"
            />
          </div>
        </div>
      </section>

      {/* About + Project Highlights */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* About */}
          <div>
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">About Dalan Samridhi</span>
            <div className="w-14 h-1 bg-[#C9922A] my-5" />
            <div className="space-y-6 text-gray-700 text-base leading-relaxed font-body">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Project Highlights</span>
            <div className="w-14 h-1 bg-[#C9922A] my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {highlights.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center gap-3 rounded-xl border border-black/10 bg-[#F7F7F7] px-4 py-6 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#091e44] text-[#C9922A]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-gray-500 text-xs mt-0.5">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Strip */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Amenities</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Every Comfort You Need, Right Where You Live</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {amenities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-8 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20"
              >
                <Icon size={28} className="text-[#091e44]" />
                <p className="font-medium text-black text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout & Plans */}
      <section className="bg-white py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Layout & Plans</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Unit Plan & Project Overview</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Project Overview & Location Map */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Project Overview & Location Map</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/samriddhi/facility.png"
                  alt="Dalan Samridhi Project Overview & Location Map"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Right Column: Unit Plan */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Unit Plan - Ground & First Floor</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/samriddhi/samridhiplan.png"
                  alt="Dalan Samridhi Unit Plan - Ground & First Floor"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Distances */}
      <section className="bg-[#F7F7F7] py-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Connectivity</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Key Distances</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
            {keyDistances.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-black/10 bg-white px-5 py-4 transition-all duration-300 hover:shadow-lg hover:border-[#091e44]/20"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#091e44] text-[#C9922A] shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">{label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer Bar */}
      <section className="bg-[#091e44] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#C9922A]">
                  <Icon size={22} />
                </div>
                <p className="text-white/80 text-xs font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 text-center">
            <p className="font-display text-lg md:text-xl">
              <span className="text-white">A Home Built With </span>
              <span className="text-[#C9922A] font-semibold">Trust</span>
              <span className="text-white">. A Life Filled With </span>
              <span className="text-[#C9922A] font-semibold">Happiness</span>
              <span className="text-white">.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
