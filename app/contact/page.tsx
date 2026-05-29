'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // -------------------------------------------------------
    // EMAILJS INTEGRATION (replace with your IDs):
    // import emailjs from '@emailjs/browser'
    // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
    // -------------------------------------------------------
    // Simulate API call for now
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: Phone, title: 'Call Us', lines: ['+91 9838096190', '+91 6389088088'] },
    { icon: Mail, title: 'Email Us', lines: ['info@dalanbuilders.com', 'sales@dalanbuilders.com'] },
    { icon: MapPin, title: 'Visit Us', lines: ['DALAN Builders Pvt. ltd. C/O - Brijesh Pandey', '203, B - Block Sangam River Front Apartment, Varuna Vihar Colony, Kachahari (Near JP Mehata Inter College)', 'Varanasi UP 221002'] },
    { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 9AM – 7PM', 'Sunday: 10AM – 5PM'] },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#F26522] text-xs uppercase tracking-widest">Reach Us</span>
          <h1 className="font-display text-5xl font-bold text-white mt-3">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 text-center hover:border-[#F26522]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#F26522]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-[#F26522]" />
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-400 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Send a Message</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-8">Get In Touch</h2>

            {submitted ? (
              <div className="bg-[#1A1A1A] border border-green-500/30 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">We have received your message. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F26522] transition-colors" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Phone Number *</label>
                    <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 9838096190" className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F26522] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F26522] transition-colors" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Interested In</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#F26522] transition-colors">
                    <option value="" className="bg-[#1A1A1A]">Select a project type</option>
                    <option value="residential" className="bg-[#1A1A1A]">Residential Property</option>
                    <option value="commercial" className="bg-[#1A1A1A]">Commercial Property</option>
                    <option value="investment" className="bg-[#1A1A1A]">Investment Query</option>
                    <option value="other" className="bg-[#1A1A1A]">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us more about your requirements..." className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F26522] transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-4 bg-[#F26522] text-white font-medium rounded-xl hover:bg-[#D4521A] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                </button>
              </form>
            )}
          </div>

          {/* Map embed */}
          <div>
            <span className="text-[#F26522] text-xs uppercase tracking-widest font-semibold">Find Us</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden h-96 border border-white/10">
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
