import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  ArrowRight,
  Building,
  LayoutGrid,
  Maximize2,
  ClipboardCheck,
  Shield,
  Compass,
  Heart,
  Leaf,
  Trees,
  Sprout,
  Zap,
  Milestone,
  Droplet,
  Store,
  Bell,
  Eye,
  CheckCircle,
  Calendar,
  Locate,
  DoorOpen,
  TrendingUp
} from 'lucide-react'

export default function DalanGreensPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative text-white min-h-[550px] lg:min-h-[650px] flex items-center bg-[#0d1a15] overflow-hidden">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/greens_hero.png"
            alt="Dalan Greens Entrance Gate Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark gradient overlay that blends into the gate image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a15]/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24 relative z-10">
          {/* Left Content wrapper to keep it clean */}
          <div className="max-w-2xl flex flex-col justify-center">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Residential Plots
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Dalan <span className="text-[#C9922A] font-medium italic font-serif">Greens</span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-200 mb-4">
              Premium Plotted Living in Mau
            </p>

            <div className="flex items-start gap-2.5 text-gray-300 mb-8 max-w-xl">
              <MapPin size={20} className="text-[#C9922A] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-white">Village Mau, Near Mohanlalganj Tehsil</span>
                <br />
                Lucknow - UP
              </p>
            </div>

            {/* Quick Features List in Hero - Horizontal with icon on top */}
            <div className="flex flex-wrap gap-6 md:gap-8 mb-8 justify-start">
              <div className="flex flex-col items-center gap-2 text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9922A]/20 group-hover:border-[#C9922A]/30">
                  <Shield size={18} className="text-[#C9922A]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-300 uppercase">Gated Community</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9922A]/20 group-hover:border-[#C9922A]/30">
                  <Compass size={18} className="text-[#C9922A]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-300 uppercase">Wide Roads</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9922A]/20 group-hover:border-[#C9922A]/30">
                  <Heart size={18} className="text-[#C9922A]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-300 uppercase">Secure & Peaceful</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9922A]/20 group-hover:border-[#C9922A]/30">
                  <Leaf size={18} className="text-[#C9922A]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-300 uppercase">Green Env</span>
              </div>
            </div>

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
            <span className="font-semibold text-gray-800 text-sm md:text-base">Residential Plots</span>
          </div>

          {/* Spec Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Maximize2 size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Plot Sizes</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">1000 - 1500 Sq.ft.</span>
          </div>

          {/* Spec Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <MapPin size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Location</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Mau, Lucknow - UP</span>
          </div>

          {/* Spec Item 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <ClipboardCheck size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Status</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Ready to Register</span>
          </div>

          {/* Spec Item 5 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Shield size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Society Type</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Gated Community</span>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Copy */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              About the Project
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              A Community Designed<br />For a Better Tomorrow
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mb-8" />

            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light">
              <p>
                Dalan Greens is a thoughtfully planned residential plotted development located in Village Mau, near Mohanlalganj Tehsil, Lucknow.
              </p>
              <p>
                Surrounded by greenery and equipped with wide roads and modern amenities, this gated community offers the perfect blend of comfort, connectivity and future growth.
              </p>
              <p className="font-medium text-gray-800">
                Whether you&apos;re planning to build your dream home or make a smart investment, Dalan Greens is the right choice for a better tomorrow.
              </p>
            </div>
          </div>

          {/* Right Column: Image with Floating Features Bar */}
          <div className="lg:col-span-7 relative group">
            {/* Image Container with rounded corners and overflow hidden */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/greens_park.png"
                alt="Dalan Greens Community Park"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />
            </div>
            {/* Features Bar - positioned overlapping the bottom boundary (half-in, half-out) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#122b1f]/95 backdrop-blur-md grid grid-cols-4 gap-2 py-4 px-3 text-center text-[10px] md:text-xs text-white rounded-2xl shadow-xl border border-white/10 z-20">
              <div className="flex flex-col items-center gap-1.5 border-r border-white/10 last:border-r-0 px-1">
                <LayoutGrid size={18} className="text-[#C9922A] mb-0.5" />
                <span className="font-semibold text-gray-200 tracking-wide leading-tight">Well Planned<br />Layout</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border-r border-white/10 last:border-r-0 px-1">
                <Trees size={18} className="text-[#C9922A] mb-0.5" />
                <span className="font-semibold text-gray-200 tracking-wide leading-tight">Green & Peaceful<br />Environment</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border-r border-white/10 last:border-r-0 px-1">
                <Shield size={18} className="text-[#C9922A] mb-0.5" />
                <span className="font-semibold text-gray-200 tracking-wide leading-tight">Secure Gated<br />Community</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 border-r border-white/10 last:border-r-0 px-1">
                <TrendingUp size={18} className="text-[#C9922A] mb-0.5" />
                <span className="font-semibold text-gray-200 tracking-wide leading-tight">High Investment<br />Potential</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Project Layout & Plot Plan Section */}
      <section className="bg-[#fcfdfc] py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Master Layout
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Project Layout & Plot Plan
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Layout Map */}
            <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl group">
              <div className="bg-[#0d1a15] py-4 px-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="text-white font-semibold text-base md:text-lg font-serif">Dalan Greens Site Plan</h3>
                <span className="text-xs bg-[#C9922A] text-white px-3 py-1 rounded-full font-medium">Layout Map</span>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src="/images/greens_layout.png"
                  alt="Dalan Greens Layout Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Key details & Table */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Plot Features & Infrastructure</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Wide Internal Roads',
                    'Underground Drainage',
                    'Water Supply',
                    'Street Lighting',
                    'Parks & Green Spaces',
                    'Commercial Space'
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <CheckCircle size={16} className="text-[#C9922A] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
                <h4 className="text-sm uppercase tracking-wider font-bold text-gray-800 border-b border-gray-100 pb-2">Layout Data</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Total Plots Area:</span>
                    <span className="font-semibold text-gray-800">73025.73 Sq.ft.</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Proposed Road Width:</span>
                    <span className="font-semibold text-gray-800">30&apos; & 25&apos; Roads</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">No. of Plots:</span>
                    <span className="font-semibold text-gray-800">38 Total Plots</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/images/greens_layout.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1a15] text-white hover:bg-[#122b1f] text-sm font-semibold rounded-full shadow-md shadow-emerald-950/20 transition-all duration-300"
                >
                  <Eye size={16} className="text-[#C9922A]" />
                  View Full Layout Plan
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-white py-20 md:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A] mb-3 inline-block">
              Amenities
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              World Class Amenities
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            
            {/* Amenity 1 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <DoorOpen className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Entrance Gate</span>
            </div>

            {/* Amenity 2 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Trees className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Park</span>
            </div>

            {/* Amenity 3 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Sprout className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Greenery</span>
            </div>

            {/* Amenity 4 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Zap className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Electricity</span>
            </div>

            {/* Amenity 5 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Milestone className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">32&apos; & 25&apos; Road</span>
            </div>

            {/* Amenity 6 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Droplet className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Sewer System</span>
            </div>

            {/* Amenity 7 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Store className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Commercial Space</span>
            </div>

            {/* Amenity 8 */}
            <div className="flex items-center gap-3.5 p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-10 h-10 rounded-lg bg-[#C9922A]/5 flex items-center justify-center group-hover:bg-[#C9922A]/10 transition-colors">
                <Bell className="text-[#C9922A]" size={20} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">Temple</span>
            </div>

          </div>
        </div>
      </section>

      {/* Accessibility, Location & Booking Details */}
      <section className="bg-[#fcfdfc] py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Accessibility */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-3">
                <Locate className="text-[#C9922A]" size={22} />
                <h3 className="font-serif text-xl font-bold text-gray-900">Accessibility</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { text: 'Mohanlalganj Gosaiganj Highway', time: '100 mtr.' },
                  { text: 'Mohanlalganj Railway Station', time: '01 km.' },
                  { text: 'Mohanlalganj Tehsil', time: '1500 mtr.' },
                  { text: 'Lucknow Raibareli Highway', time: '1500 mtr.' },
                  { text: 'Charbagh Railway Station', time: '30 Minutes' },
                  { text: 'SGPGI Hospital', time: '10 Minutes' },
                  { text: 'Lucknow City Center', time: '25 Minutes' },
                  { text: 'CCS International Airport', time: '30 Minutes' }
                ].map((item) => (
                  <li key={item.text} className="flex justify-between items-start gap-2 border-b border-gray-50/50 pb-2 last:border-b-0 text-sm">
                    <span className="text-gray-600 font-medium">{item.text}</span>
                    <span className="text-[#C9922A] font-semibold shrink-0">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Location Card */}
          <div className="bg-gradient-to-br from-[#0d1a15] to-[#040806] rounded-3xl p-8 text-white flex flex-col justify-between border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />
            <div className="relative z-10 text-center flex-grow flex flex-col justify-center py-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Trees size={32} className="text-[#C9922A]" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-wide mb-1 text-white">DALAN GREENS</h3>
              <p className="text-xs uppercase tracking-widest text-[#C9922A] mb-8 font-medium">Premium Plotted Development</p>
              
              <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />

              <div className="space-y-4 text-gray-300">
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold block">Site Location</span>
                <p className="text-xl font-bold text-white tracking-wide">Village : MAU</p>
                <p className="text-sm font-medium">Near Mohanlalganj Tehsil<br />Lucknow - UP</p>
              </div>
            </div>
            
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
              <MapPin size={14} className="text-[#C9922A]" />
              <span>Mohanlalganj, Lucknow</span>
            </div>
          </div>

          {/* Column 3: Booking Info */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6 border-b border-gray-100 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-gray-400 block mb-1">For Booking Call</span>
                <a href="tel:+916389088088" className="font-serif text-2xl md:text-3xl font-extrabold text-[#C9922A] flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Phone size={22} />
                  6389 088 088
                </a>
              </div>
              <ul className="space-y-3.5">
                {[
                  <span>Book Your Plot With Just <strong className="text-gray-900 font-bold">₹ 11000</strong> Only.</span>,
                  <span>Special Discount <strong className="text-gray-900 font-bold">2%</strong> to <strong className="text-[#C9922A] font-bold">ARMED FORCES</strong>.</span>,
                  <span>Free Boundary Wall <strong className="text-gray-900 font-bold">5&apos; Height</strong> Surrounding Plot With Gate.</span>,
                  <span>Lowest Down Payment options available.</span>,
                  <span>Maximum flexible EMI terms.</span>,
                  <span>Immediate Sale Deed Registration.</span>,
                  <span>100% Transparent Policies.</span>,
                  <span>Easy EMI Schemes.</span>,
                  <span>Prime & Strategic Location.</span>,
                  <span>Entrance at Special Investment Region.</span>
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600 font-medium">
                    <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
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
                Ready to Own a Plot in Mau?
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light">
                Build your dream home or make a smart investment in a fast-growing location.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="bg-[#C9922A] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-[#C9922A]/10 transition-all duration-300 hover:bg-[#a6741b] hover:shadow-[#C9922A]/20 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <Calendar size={16} />
                Book Site Visit
              </Link>
              <a
                href="tel:+916389088088"
                className="border border-[#C9922A] text-[#C9922A] px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9922A]/10 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-green-500/10 transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-green-500/20 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.957 11.999.957c-5.442 0-9.866 4.372-9.87 9.802 0 1.71.463 3.382 1.34 4.867l-.98 3.577 3.668-.949zM15.86 17.51c-.267-.134-1.579-.78-1.823-.866-.244-.09-.422-.134-.599.134-.178.267-.689.866-.844 1.046-.156.178-.311.2-.578.067-.267-.134-1.127-.415-2.147-1.326-.79-.705-1.324-1.577-1.48-1.844-.155-.267-.016-.41.118-.543.12-.12.267-.311.4-.467.133-.156.178-.267.267-.444.089-.178.045-.333-.022-.467-.067-.134-.599-1.446-.823-1.98-.217-.52-.455-.45-.63-.459-.166-.008-.356-.01-.545-.01-.19 0-.499.07-.76.356-.262.287-1 0-1 2.44 0 2.442 1.777 4.793 2.022 5.122.245.33 3.5 5.34 8.48 7.48 1.18.5 2.1.8 2.82 1.03 1.19.38 2.27.32 3.13.2 1 .15 2.07-.61 2.3-1.21.23-.6 2.3-3.44 2.2-3.52-.09-.08-.36-.13-.62-.26z" />
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
