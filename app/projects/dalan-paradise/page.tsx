import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  ArrowRight,
  Building,
  LayoutGrid,
  Layers,
  ClipboardCheck,
  DoorOpen,
  ArrowUpDown,
  Cctv,
  Trees,
  Smile,
  GlassWater,
  Zap,
  Car,
  ChefHat,
  Lock
} from 'lucide-react'
import ProjectStatusTag from '@/components/ProjectStatusTag'

export default function DalanParadisePage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-[#091e44] text-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
        {/* Background Decorative Pattern or Subtle Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(9,30,68,0.4),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-18 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumbs */}
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Premium 2 BHK Apartments
            </span>
            
            <h1 className="text-white mb-4">
              DALAN <span className="text-[#C9922A] font-medium italic font-serif">Paradise</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-200 mb-4 flex items-center gap-2">
              2 BHK Flats <span className="text-[#C9922A]">|</span> Stilt + 4
            </p>

            <div className="flex items-start gap-2.5 text-gray-300 mb-6 max-w-xl">
              <MapPin size={20} className="text-[#C9922A] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-white">Ganeshpur (Near BHEL), Airport Road</span>
                <br />
                Varanasi, Uttar Pradesh
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-light">
              Experience comfort, convenience and modern living at DALAN Paradise – thoughtfully designed 2 BHK apartments for a better lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-row gap-2.5 items-center w-full sm:w-auto">
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

          {/* Right Column: Image */}
          <div className="lg:col-span-5 h-[350px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/apartments/dalanparadise.png"
              alt="DALAN Paradise exterior view"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
            />
            {/* Soft dark vignettes to integrate with background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#091e44]/30 to-transparent pointer-events-none" />
            <ProjectStatusTag stage="New Launch" className="absolute top-5 right-5 md:top-6 md:right-6" />
          </div>

        </div>
      </section>

      {/* Floating Specs Details Bar */}
      <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Spec Item 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:first:pt-0 first:pt-0">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Building size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Project Type</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Apartment</span>
          </div>

          {/* Spec Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <LayoutGrid size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Configuration</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">2 BHK Flats</span>
          </div>

          {/* Spec Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Layers size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Structure</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Stilt + 4</span>
          </div>

          {/* Spec Item 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <MapPin size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Location</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Ganeshpur, Varanasi</span>
          </div>

          {/* Spec Item 5 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <ClipboardCheck size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Status</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Upcoming Project</span>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Copy */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              About Dalan Paradise
            </span>
            <h2 className="text-gray-900 mb-6">
              Modern Homes,<br />Thoughtfully Designed
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mb-8" />

            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light">
              <p>
                DALAN Paradise offers a perfect blend of contemporary architecture, essential amenities, and a prime location near BHEL on Airport Road, Varanasi.
              </p>
              <p className="font-medium text-gray-800">
                It&apos;s more than just a home – it&apos;s a lifestyle upgrade.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7 relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
            <Image
              src="/apartments/dalanparadise_interior.png"
              alt="DALAN Paradise interior view"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-[#fcfdfc] py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Amenities
            </span>
            <h2 className="text-gray-900 mt-2">
              Lifestyle Amenities For Modern Living
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            
            {/* Amenity 1 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <DoorOpen size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Grand Entrance Gate</span>
            </div>

            {/* Amenity 2 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <ArrowUpDown size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">High-Speed Lift</span>
            </div>

            {/* Amenity 3 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Cctv size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">CCTV & Video Door Phone</span>
            </div>

            {/* Amenity 4 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Trees size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Landscaped Garden</span>
            </div>

            {/* Amenity 5 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Smile size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Children&apos;s Play Area</span>
            </div>

            {/* Amenity 6 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <GlassWater size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Rooftop Party Area</span>
            </div>

            {/* Amenity 7 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Zap size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Power Backup</span>
            </div>

            {/* Amenity 8 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Car size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">EV Charging Point</span>
            </div>

            {/* Amenity 9 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <ChefHat size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Modular Kitchen</span>
            </div>

            {/* Amenity 10 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Lock size={20} className="text-[#C9922A]" />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Digital Smart Lock</span>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-Footer Banner Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#091e44] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
            <div className="text-center md:text-left w-full md:w-auto text-white">
              <h3 className="text-white mb-2">
                A Perfect Home Awaits You
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light">
                Comfort, Connectivity & Convenience at DALAN Paradise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch sm:items-center justify-center shrink-0">
              <Link
                href="/contact"
                className="bg-[#C9922A] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/10 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/20 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                Enquire Now
              </Link>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-green-500/30 gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
