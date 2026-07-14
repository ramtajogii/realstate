import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  ArrowRight,
  Building,
  LayoutGrid,
  ClipboardCheck,
  Shield,
  Layers,
  CheckCircle,
  Calendar,
  DollarSign,
  DoorOpen,
  Trees,
  Baby,
  PartyPopper,
  Zap,
  Video,
  ArrowUpDown,
  BatteryCharging,
  CookingPot,
  Lock,
  Locate
} from 'lucide-react'

export default function DalanResidencyPage() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-[#ffffff] text-gray-900 overflow-hidden min-h-[580px] lg:min-h-[680px] flex items-center border-b border-gray-100">
        
        {/* Full-height Background Image on the right (Desktop only) */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0 hidden lg:block pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/residency1.jpg"
              alt="Dalan Residency Exterior Background"
              fill
              priority
              sizes="60vw"
              className="object-cover object-bottom"
            />
            {/* Gradient fade to white on the left */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Floating Finance Facility Card - Dark Blue Vertical Card */}
        {/* On desktop, positioned at the top right of the section */}
        {/* On mobile, hidden here because it will be placed inside the mobile image wrapper */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-[#091e44] rounded-2xl p-5 border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center max-w-[155px] z-20 transition-all duration-300 hover:scale-[1.02] hidden lg:flex">
          <div className="w-14 h-14 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-3">
            {/* Gold hand holding rupee symbol SVG */}
            <svg className="w-9 h-9 text-[#C9922A] fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="7.5" r="4.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 1.5h3m-3-1.5c1 0 1.5.5 1.5 1s-.5 1-1.5 1m0 0l2.25 2.25" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 16c1.5-1.5 3.5-2 6-2s4.5.5 6 2M7.5 15.5V20a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-4.5" />
            </svg>
          </div>
          <span className="text-[10px] uppercase font-black text-[#C9922A] tracking-wider mb-1 leading-snug">
            Finance Facility
          </span>
          <span className="text-[9px] font-light text-gray-300 leading-tight">
            available with all leading bank&apos;s
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="px-3.5 py-1 bg-[#C9922A] text-white text-xs font-bold uppercase tracking-widest rounded-md mb-4 inline-block w-fit">
              Premium Row Houses
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
              DALAN <span className="text-[#C9922A] font-medium italic font-serif">Residency</span>
            </h1>

            <div className="inline-block px-4 py-1.5 bg-[#091e44] text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-md mb-6 w-fit">
              2 BHK Row Houses
            </div>

            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
              Still + 4
            </p>

            <div className="flex items-start gap-2.5 text-gray-600 mb-8 max-w-xl">
              <MapPin size={20} className="text-[#C9922A] shrink-0 mt-0.5" />
              <p className="text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-gray-800">Ganeshpur (Near BHEL), Airport Road</span>
                <br />
                Varanasi, Uttar Pradesh
              </p>
            </div>

            {/* Quick Features List - 2 Column Table Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-t border-gray-200/60 pt-6">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-800 block">Lowest Down Payment</strong>
                  <span className="text-xs text-gray-500">Minimum down payment options</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-800 block">Maximum EMI Available</strong>
                  <span className="text-xs text-gray-500">Flexible repayment scheme</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-800 block">Immediate Sale Deed</strong>
                  <span className="text-xs text-gray-500">Registration upon purchase</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-[#C9922A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-800 block">100% Transparent Policies</strong>
                  <span className="text-xs text-gray-500">No hidden terms or pricing</span>
                </div>
              </div>
            </div>

            {/* Book Today Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/916389088088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-xl text-sm md:text-base font-bold tracking-wide shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                BOOK YOUR DREAM HOME TODAY
              </a>
            </div>
          </div>

          {/* Right Column: Mobile-only Image card (stacked below the text on small screens) */}
          <div className="lg:col-span-7 relative aspect-[2/1] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group lg:hidden block">
            <Image
              src="/images/residency1.jpg"
              alt="Dalan Residency Exterior View"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
            {/* Floating Finance Facility Card - Dark Blue Vertical Card (positioned inside the mobile image wrapper) */}
            <div className="hidden sm:flex absolute top-4 right-4 bg-[#091e44] rounded-2xl p-4 border border-white/10 shadow-2xl flex-col items-center justify-center text-center max-w-[125px] z-10">
              <div className="w-10 h-10 rounded-full bg-[#C9922A]/10 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-[#C9922A] fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="7.5" r="4.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 1.5h3m-3-1.5c1 0 1.5.5 1.5 1s-.5 1-1.5 1m0 0l2.25 2.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 16c1.5-1.5 3.5-2 6-2s4.5.5 6 2M7.5 15.5V20a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-4.5" />
                </svg>
              </div>
              <span className="text-[8px] uppercase font-black text-[#C9922A] tracking-wider mb-0.5 leading-snug">
                Finance Facility
              </span>
              <span className="text-[7px] font-light text-gray-300 leading-tight">
                available with all leading bank&apos;s
              </span>
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
            <span className="font-semibold text-gray-800 text-sm md:text-base">Row House</span>
          </div>

          {/* Spec Item 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <LayoutGrid size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Configuration</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">2 BHK Homes</span>
          </div>

          {/* Spec Item 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-4">
            <div className="flex items-center gap-2 mb-2 text-gray-500">
              <Layers size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Structure</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Still + 4</span>
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
              <Shield size={18} className="text-[#C9922A]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Status</span>
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">Upcoming Project</span>
          </div>

        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-[#C9922A]/40" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C9922A]">
                Amenities
              </span>
              <div className="h-[1px] w-12 bg-[#C9922A]/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              World Class Amenities
            </h2>
            <div className="w-14 h-1 bg-[#C9922A] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
            
            {/* Amenity 1 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <DoorOpen className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Grand Entrance Gate</span>
            </div>

            {/* Amenity 2 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <Trees className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Landscaped Garden</span>
            </div>

            {/* Amenity 3 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <Baby className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Children&apos;s Play Area</span>
            </div>

            {/* Amenity 4 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <PartyPopper className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Rooftop Party Area</span>
            </div>

            {/* Amenity 5 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <Zap className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Power Backup</span>
            </div>

            {/* Amenity 6 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <Video className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">CCTV & Video Phone</span>
            </div>

            {/* Amenity 7 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <ArrowUpDown className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">High-Speed Lift</span>
            </div>

            {/* Amenity 8 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <BatteryCharging className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">EV Charging Point</span>
            </div>

            {/* Amenity 9 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <CookingPot className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Modular Kitchen</span>
            </div>

            {/* Amenity 10 */}
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-[#C9922A]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#C9922A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C9922A]/10 transition-colors">
                <Lock className="text-[#C9922A]" size={22} />
              </div>
              <span className="font-semibold text-gray-800 text-xs md:text-sm leading-snug">Digital Smart Lock</span>
            </div>

          </div>
        </div>
      </section>

      {/* Accessibility & Floor Plan Section */}
      <section className="bg-[#fcfdfc] py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Accessibility List in Navy Blue Container */}
            <div className="lg:col-span-4 bg-[#091e44] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-3">
                  <Locate className="text-[#C9922A]" size={22} />
                  <h3 className="font-serif text-xl font-bold tracking-wide">ACCESSIBILITY</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { text: 'Ring Road', val: '(300 mtr.)' },
                    { text: 'Om Villas', val: '(100 mtr.)' },
                    { text: 'Chandmari Market', val: '(700 mtr.)' },
                    { text: 'Varanasi Kachahari', val: '(4.5 km)' },
                    { text: 'Cantt Railway Station', val: '(7 km)' },
                    { text: 'LBS International Airport', val: '(15 Minutes)' }
                  ].map((item) => (
                    <li key={item.text} className="flex justify-between items-start gap-2 border-b border-white/5 pb-2.5 last:border-b-0 text-sm">
                      <span className="text-gray-300 font-medium">{item.text}</span>
                      <span className="text-[#C9922A] font-semibold shrink-0">{item.val}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-gray-400 text-xs font-medium">
                <MapPin size={14} className="text-[#C9922A]" />
                <span>Ganeshpur, Airport Road, Varanasi</span>
              </div>
            </div>

            {/* Right Column: Floor Plans Layout */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-white rounded-3xl border border-gray-100 shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C9922A] font-bold block">Layout Drawings</span>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Floor & Unit Plans</h3>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs bg-[#091e44] text-white px-3.5 py-1.5 rounded-full font-bold">Ground Plan</span>
                  <span className="text-xs bg-[#C9922A] text-white px-3.5 py-1.5 rounded-full font-bold">First Plan</span>
                </div>
              </div>

              {/* Plans Image display */}
              <div className="relative h-[320px] md:h-[420px] w-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100 p-2">
                <Image
                  src="/images/residency_plans.png"
                  alt="Dalan Residency Floor Plans"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-Footer Banner Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#091e44] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
            <div className="text-center md:text-left w-full md:w-auto text-white">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 leading-tight">
                A Perfect Home Awaits You
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light">
                Modern living, Prime location & Great investment - All at DALAN Residency.
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
