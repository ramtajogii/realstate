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
  Handshake,
  CreditCard,
  ArrowRight,
  Home,
} from 'lucide-react'

const paragraphs = [
  'A life of comfort, pride, and belonging awaits you at Dalan Saubhagyam — nestled in the heart of the ever-evolving city of Varanasi. Our vision is to bring together the warmth of a close-knit community and the strength of quality construction, delivering homes that are not just built with bricks, but with trust.',
  'There is something deeply soulful about waking up in a city as timeless as Kashi, and at Dalan Saubhagyam, we ensure that every sunrise feels like a new beginning. Wide open roads, lush greenery, and a well-planned society welcome you every time you come home. With seamless connectivity to Ring Road, the airport, railway station, and the city’s key landmarks, you are never far from where life takes you — yet always close to the peace you deserve.',
]

const highlights = [
  { icon: MapPin, title: 'Prime Location', lines: ['Near Ring Road', '300 Mtr.'] },
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
  { icon: MapPin, label: 'Prime Location' },
  { icon: Handshake, label: 'Immediate Sale Deed' },
  { icon: CreditCard, label: 'Easy EMI Scheme' },
  { icon: Landmark, label: 'Bank Finance Available' },
]

const trustPoints = [
  { icon: Home, label: 'Well Planned & Spacious Homes' },
  { icon: ShieldCheck, label: 'Peaceful & Secure Community' },
  { icon: Route, label: 'Excellent Connectivity' },
  { icon: TreePine, label: 'Lush Green Environment' },
  { icon: Award, label: 'Quality Construction You Can Trust' },
]

const whatsappIcon = (
  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
)

export default function DalanSaubhagyamPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Split Hero Section */}
      <section className="relative bg-[#091e44] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
          {/* Left: Brand & Copy */}
          <div className="relative z-10 px-6 py-14 md:py-20 lg:px-14 flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9922A]">
              Duplex
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-none">
              <span className="text-white">DALAN</span>
              <br />
              <span className="text-[#C9922A]">SAUBHAGYAM</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl font-display italic">
              Find Your Dream Home in the Heart of Changing Kashi
            </p>
            <div className="w-14 h-1 bg-[#C9922A] my-6" />
            <p className="text-white/70 flex items-start gap-2 text-sm md:text-base font-medium">
              <MapPin size={18} className="text-[#C9922A] shrink-0 mt-0.5" />
              Ring Road, Varanasi
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9922A] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/20 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/30 hover:-translate-y-0.5"
              >
                Enquire Now
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                {whatsappIcon}
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Building Image + ISO Badge */}
          <div className="relative min-h-[320px] md:min-h-[560px]">
            <Image
              src="/shaubhagyam/shubhagyam.png"
              alt="DALAN Saubhagyam"
              fill
              priority
              className="object-cover object-center"
            />
            <div
              className="absolute top-0 right-6 md:right-10 bg-[#091e44] text-center px-5 pt-4 pb-6 shadow-xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)' }}
            >
              <p className="text-[#C9922A] font-bold text-xs tracking-widest">ISO</p>
              <p className="text-white font-bold text-sm mt-1 whitespace-nowrap">9001:2015</p>
              <p className="text-white/70 text-[9px] mt-1 leading-tight">CERTIFIED<br />DEVELOPER</p>
            </div>
          </div>
        </div>
      </section>

      {/* About + Project Highlights */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* About */}
          <div>
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">About Dalan Saubhagyam</span>
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
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="hidden sm:block h-px w-16 md:w-24 bg-[#C9922A]/40" />
            <span className="rounded-full bg-[#091e44] px-6 py-2 text-white text-sm font-semibold tracking-widest font-display">
              AMENITIES
            </span>
            <span className="hidden sm:block h-px w-16 md:w-24 bg-[#C9922A]/40" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mt-2">Unit Plan & Why Choose Dalan Saubhagyam</h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Ground Floor Plan */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">Ground Floor Plan</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/shaubhagyam/ground-floor-plan.png"
                  alt="Dalan Saubhagyam Ground Floor Plan"
                  width={800}
                  height={950}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Column 2: First Floor Plan */}
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-black/10 shadow-md hover:shadow-xl hover:border-[#091e44]/20 transition-all duration-300">
              <div className="bg-[#091e44] py-4 px-6 border-b border-black/10">
                <h3 className="text-white font-semibold text-lg font-display tracking-wide">First Floor Plan</h3>
              </div>
              <div className="flex-grow bg-white group overflow-hidden">
                <Image
                  src="/shaubhagyam/first-floor-plan.png"
                  alt="Dalan Saubhagyam First Floor Plan"
                  width={800}
                  height={950}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Column 3: Why Choose Dalan Saubhagyam */}
            <div className="flex flex-col bg-[#091e44] rounded-2xl overflow-hidden shadow-md p-8">
              <h3 className="text-[#C9922A] font-semibold text-lg font-display tracking-wide mb-5">Why Choose Dalan Saubhagyam?</h3>
              <div className="space-y-5">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-[#C9922A] shrink-0">
                      <Icon size={16} />
                    </div>
                    <p className="text-white/80 text-sm font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer Bar */}
      <section className="bg-[#091e44] py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-display text-lg md:text-xl text-center">
            <span className="text-white">A Home Built with </span>
            <span className="text-[#C9922A] font-semibold">Trust</span>
            <span className="text-white">. A Life Filled with </span>
            <span className="text-[#C9922A] font-semibold">Happiness</span>
            <span className="text-white">.</span>
          </p>
          <a
            href="https://wa.me/916389088088"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-green-500/30 hover:-translate-y-0.5 shrink-0"
          >
            {whatsappIcon}
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
