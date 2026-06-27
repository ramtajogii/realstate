'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
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
    { icon: Phone, title: 'Call Us', lines: ['+91 6389088088'] },
    { icon: Mail, title: 'Email Us', lines: ['info@dalanbuilders.in', 'sales@dalanbuilders.com'] },
    { icon: MapPin, title: 'Visit Us', lines: ['203, B - Block Sangam River Front Apartment, Varuna Vihar Colony, Kachahari (Near JP Mehata Inter College)', 'Varanasi UP 221002'] },
    { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 9AM – 7PM', 'Sunday: 10AM – 5PM'] },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#091e44] text-xs uppercase tracking-widest">Reach Us</span>
          <h1 className="font-display text-5xl font-bold text-black mt-3">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-[#F7F7F7] border border-black/10 rounded-2xl p-6 text-center hover:border-[#091e44]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#091e44]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-[#091e44]" />
                </div>
                <h4 className="text-black font-semibold mb-2">{item.title}</h4>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-600 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Send a Message</span>
            <h2 className="font-display text-3xl font-bold text-black mt-3 mb-8">Get In Touch</h2>

            {submitted ? (
              <div className="bg-[#F7F7F7] border border-green-500/30 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-black mb-2">Thank You!</h3>
                <p className="text-gray-600">We have received your message. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 text-red-600 border border-red-200/50 rounded-xl px-4 py-3 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-600 text-xs uppercase tracking-wider mb-2 block">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-[#F7F7F7] border border-black/20 rounded-xl px-4 py-3.5 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors" />
                  </div>
                  <div>
                    <label className="text-gray-600 text-xs uppercase tracking-wider mb-2 block">Phone Number *</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-gray-500 text-sm select-none pointer-events-none">+91</span>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="xxxxxxxxxx"
                        className="w-full bg-[#F7F7F7] border border-black/20 rounded-xl pl-12 pr-4 py-3.5 text-black text-sm placeholder-gray-400 focus:outline-none focus:border-[#091e44] transition-colors"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-gray-600 text-xs uppercase tracking-wider mb-2 block">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className="w-full bg-[#F7F7F7] border border-black/20 rounded-xl px-4 py-3.5 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors" />
                </div>
                <div className="relative" ref={dropdownRef}>
                  <label className="text-gray-600 text-xs uppercase tracking-wider mb-2 block">Interested In</label>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-[#F7F7F7] border border-black/20 rounded-xl px-4 py-3.5 text-black text-sm focus:outline-none focus:border-[#091e44] transition-all flex items-center justify-between text-left"
                  >
                    <span>{options.find(o => o.value === form.subject)?.label || 'Select a project'}</span>
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
                <div>
                  <label className="text-gray-600 text-xs uppercase tracking-wider mb-2 block">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us more about your requirements..." className="w-full bg-[#F7F7F7] border border-black/20 rounded-xl px-4 py-3.5 text-black text-sm placeholder-gray-500 focus:outline-none focus:border-[#091e44] transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 bg-[#091e44] text-white font-medium rounded-xl hover:bg-[#061632] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                </button>
              </form>
            )}
          </div>

          {/* Map embed */}
          <div>
            <span className="text-[#091e44] text-xs uppercase tracking-widest font-semibold">Find Us</span>
            <h2 className="font-display text-3xl font-bold text-black mt-3 mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden h-96 border border-black/10">
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

