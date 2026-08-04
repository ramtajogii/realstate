import Image from 'next/image'

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" alt="Legal" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#091e44] text-xs uppercase tracking-widest">Legal Information</span>
          <h1 className="text-black mt-3">Legal Policies</h1>
        </div>
      </section>

      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Privacy Policy */}
          <div>
            <h2 className="text-black mb-4">Privacy Policy</h2>
            <div className="w-10 h-1 bg-[#091e44] mb-6" />
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>DALAN Builders ("we", "us", "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
              <p><strong className="text-black">Information We Collect:</strong> We collect personal information that you voluntarily provide, including name, email address, phone number, and property preferences when you fill out enquiry forms or contact us directly.</p>
              <p><strong className="text-black">How We Use Information:</strong> Your information is used to respond to enquiries, send project updates, process transactions, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
              <p><strong className="text-black">Data Security:</strong> We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
              <p><strong className="text-black">Contact:</strong> For privacy-related questions, email us at privacy@dalanbuilders.com.</p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h2 className="text-black mb-4">Terms & Conditions</h2>
            <div className="w-10 h-1 bg-[#091e44] mb-6" />
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>By accessing and using the DALAN Builders website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              <p><strong className="text-black">Use of Website:</strong> This website is intended for informational purposes only. All content, including project details, pricing, and availability, is subject to change without notice.</p>
              <p><strong className="text-black">Accuracy of Information:</strong> While we strive to ensure all information is accurate, DALAN Builders makes no warranties or representations about the completeness or accuracy of any content on this site.</p>
              <p><strong className="text-black">Intellectual Property:</strong> All content on this website, including text, images, logos, and graphics, is the property of DALAN Builders and is protected by applicable intellectual property laws.</p>
              <p><strong className="text-black">Limitation of Liability:</strong> DALAN Builders shall not be liable for any indirect, incidental, or consequential damages arising from use of this website.</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-black mb-4">Disclaimer</h2>
            <div className="w-10 h-1 bg-[#091e44] mb-6" />
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>The information provided on the DALAN Builders website is for general informational purposes only. All project information, including prices, floor plans, specifications, and amenities, is indicative and subject to change.</p>
              <p><strong className="text-black">RERA Compliance:</strong> All our projects are registered under RERA (Regulation and Development Act). Please verify RERA registration details on the official RERA website before making any purchase decision.</p>
              <p><strong className="text-black">Investment Advice:</strong> Nothing on this website constitutes financial, legal, or investment advice. Prospective buyers are encouraged to conduct their own due diligence and consult with appropriate professionals before making any property investment decisions.</p>
              <p><strong className="text-black">Rendering Disclaimer:</strong> Images, 3D renders, and visualizations shown on this website are artistic impressions and may not exactly represent the final delivered product.</p>
              <p>For any queries, please contact us at Info@dalanbuilders.in or call +91 6389088088</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

