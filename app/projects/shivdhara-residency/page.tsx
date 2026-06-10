import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const paragraphs = [
  'Welcome to Dalan Samridhi - a thoughtfully crafted residential community where the promise of a better life begins the moment you step through the gate. Built by the trusted name of Dalan Builders Pvt. Ltd., Dalan Samridhi is designed for families who believe that a home should not just shelter you, but inspire you. Set amidst wide open spaces, clean surroundings, and a warmly connected neighbourhood, every home here is a step towards the life you have always envisioned.',
  'Located in Village Kanudih, near Chandmari Market on Ring Road, Varanasi, Dalan Samridhi offers the rare combination of peaceful residential living and outstanding city connectivity. Ring Road is just 100 metres away, Chandmari Market is a short 700-metre walk, and LBS International Airport is only 15 minutes from your door. Whether you are a working professional, a growing family, or a smart investor - Dalan Samridhi puts you exactly where you need to be.',
  'With loan facility available, ISO 9001:2015 certified construction quality, and a commitment to 100% transparent policies, your journey to owning your dream home has never been this smooth, this trustworthy, or this close.',
]

const planImages = [
  { src: '/shivdhara/home.png', alt: 'Dalan Samridhi home' },
  { src: '/shivdhara/unit-plan.png', alt: 'Dalan Samridhi unit plan' },
]

export default function ShivdharaResidencyPage() {
  return (
    <>
      <section className="bg-white">
        <Image
          src="/shivdhara/main.png"
          alt="Dalan Samridhi"
          width={881}
          height={881}
          priority
          className="mx-auto h-auto max-h-[720px] w-full object-contain"
        />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <span className="mb-5 inline-block rounded-full bg-[#091e44] px-3 py-1 text-xs font-medium text-white">
            Row House
          </span>
          <h2 className="font-display text-4xl font-bold text-black md:text-5xl">Dalan Samridhi</h2>
          <h3 className="mt-3 text-xl font-semibold text-[#091e44] md:text-2xl">Where Prosperity Finds Its Home</h3>
          <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#091e44] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#061632]"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+916389088088"
              className="inline-flex items-center justify-center rounded-full border border-[#091e44] px-7 py-3 text-sm font-medium text-[#091e44] transition-colors hover:bg-[#091e44] hover:text-white"
            >
              Call & WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {planImages.map((image) => (
              <div key={image.src} className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-white p-3 shadow-xl shadow-black/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1275}
                  height={1800}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Image
            src="/shivdhara/amentites.png"
            alt="Dalan Samridhi amenities"
            width={1018}
            height={504}
            className="mx-auto h-auto w-full max-w-5xl object-contain shadow-xl shadow-black/10"
          />
        </div>
      </section>
    </>
  )
}
