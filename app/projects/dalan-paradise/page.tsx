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

export default function DalanParadisePage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-[#0d1a15] text-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
        {/* Background Decorative Pattern or Subtle Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,44,30,0.4),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-18 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumbs */}
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Premium 2 BHK Apartments
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
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
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9922A] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/20 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/30 hover:-translate-y-0.5"
              >
                Enquire Now
                <ArrowRight size={16} />
              </Link>
              
              <a
                href="tel:+916389088088"
                className="inline-flex items-center gap-2 border border-[#C9922A] text-[#C9922A] px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9922A]/10 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-green-500/20 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.957 11.999.957c-5.442 0-9.866 4.372-9.87 9.802 0 1.71.463 3.382 1.34 4.867l-.98 3.577 3.668-.949zM15.86 17.51c-.267-.134-1.579-.78-1.823-.866-.244-.09-.422-.134-.599.134-.178.267-.689.866-.844 1.046-.156.178-.311.2-.578.067-.267-.134-1.127-.415-2.147-1.326-.79-.705-1.324-1.577-1.48-1.844-.155-.267-.016-.41.118-.543.12-.12.267-.311.4-.467.133-.156.178-.267.267-.444.089-.178.045-.333-.022-.467-.067-.134-.599-1.446-.823-1.98-.217-.52-.455-.45-.63-.459-.166-.008-.356-.01-.545-.01-.19 0-.499.07-.76.356-.262.287-1 0-1 2.44 0 2.442 1.777 4.793 2.022 5.122.245.33 3.5 5.34 8.48 7.48 1.18.5 2.1.8 2.82 1.03 1.19.38 2.27.32 3.13.2 1 .15 2.07-.61 2.3-1.21.23-.6 2.3-3.44 2.2-3.52-.09-.08-.36-.13-.62-.26z" />
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a15]/30 to-transparent pointer-events-none" />
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
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
          <div className="bg-gradient-to-r from-[#0b1a13] to-[#122b1f] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
                A Perfect Home Awaits You
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light">
                Comfort, Connectivity & Convenience at DALAN Paradise.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="bg-[#C9922A] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/10 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/20 hover:-translate-y-0.5"
              >
                Enquire Now
              </Link>
              <a
                href="tel:+916389088088"
                className="border border-[#C9922A] text-[#C9922A] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9922A]/10 hover:-translate-y-0.5"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
