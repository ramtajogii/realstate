'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', city: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const options = [
    { value: '', label: 'Select a project' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'farmhouse', label: 'Farm House' },
    { value: 'Other', label: 'Other' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
      // Only allow numbers and limit to 10 digits
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    setForm({ ...form, [e.target.name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Front-end phone validation
    if (!/^\d{10}$/.test(form.phone)) {
      setError('Phone number must be exactly 10 digits.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact query.')
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: MessageSquare, title: 'WhatsApp Us', lines: ['+91 6389088088'], link: 'https://wa.me/916389088088' },
    { icon: Mail, title: 'Email Us', lines: ['info@dalanbuilders.in', 'sales@dalanbuilders.com'] },
    { icon: MapPin, title: 'Visit Us', lines: ['203, B - Block Sangam River Front Apartment, Varuna Vihar Colony, Kachahari (Near JP Mehata Inter College)', 'Varanasi UP 221002'] },
    { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 9AM – 7PM', 'Sunday: 10AM – 5PM'] },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 md:pt-14">
        {/* <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Contact" fill className="object-cover" /> */}
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-black">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pt-8 pb-14 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => {
              const CardContent = (
                <>
                  <div className="w-12 h-12 bg-[#091e44]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={20} className="text-[#091e44]" />
                  </div>
                  <h4 className="text-black mb-2">{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </>
              )

              if (item.link) {
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#F7F7F7] border border-black/10 rounded-2xl p-6 text-center hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    {CardContent}
                  </a>
                )
              }

              return (
                <div key={i} className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-6 text-center hover:border-[#091e44]/30 transition-all duration-300">
                  {CardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className={submitted ? "flex flex-col justify-center h-full" : ""}>

            {submitted ? (
              <div className="bg-[#F7F7F7] border border-green-500/30 rounded-2xl p-10 text-center shadow-lg">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-black mb-2">Thank You!</h3>
                <p className="text-gray-600">We have received your message. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-[#091e44] rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-white mb-1.5">
                    Book an Exclusive Experience
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm uppercase tracking-wider font-medium leading-relaxed">
                    DON'T MISS OUT! Register Today to Get the Best Offers
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 border border-red-200/50 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <input
                    name="name"
                    required
                    aria-label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 text-black text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-colors shadow-sm"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-gray-500 text-sm select-none pointer-events-none">+91</span>
                    <input
                      name="phone"
                      required
                      aria-label="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Mobile No*"
                      className="w-full bg-white border border-gray-300 rounded-xl pl-12 pr-4 py-4 text-black text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Email Input is commented out
                <div>
                  <input
                    name="email"
                    type="email"
                    aria-label="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email ID"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 text-black text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-colors shadow-sm"
                  />
                </div>
                */}

                {/* City Input */}
                <div>
                  <input
                    name="city"
                    aria-label="City"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 text-black text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-colors shadow-sm"
                  />
                </div>

                {/* Dropdown (Interested In) */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-all flex items-center justify-between text-left shadow-sm"
                  >
                    <span className={form.subject ? 'text-black' : 'text-gray-400'}>
                      {options.find(o => o.value === form.subject)?.label || 'Select a project'}
                    </span>
                    <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-xl overflow-hidden">
                      {options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, subject: opt.value })
                            setIsOpen(false)
                          }}
                          className={`w-full text-left px-4 py-3 text-sm text-black transition-colors ${
                            form.subject === opt.value
                              ? 'bg-[#091e44]/10 font-semibold'
                              : 'hover:bg-[#091e44]/5'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    aria-label="Message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 text-black text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#091e44]/20 transition-colors resize-none shadow-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-black text-white font-bold tracking-wider text-sm uppercase rounded-xl hover:bg-zinc-900 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? 'Sending...' : 'SUBMIT'}
                </button>
              </form>
            )}
          </div>

          {/* Map embed */}
          <div className="flex flex-col h-full">
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Find Us</span>
            <h2 className="text-black mt-3 mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden flex-grow border border-black/10 shadow-xl min-h-[400px] lg:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.313465805562!2d82.9772873!3d25.33413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db715159781%3A0x6b77209930f78505!2sSangam%20River%20Front%20Apartment!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

