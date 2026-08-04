import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts, formatDate } from './posts'

export const metadata = {
  title: 'Blogs | DALAN Builders',
  description:
    'Buyer guides, market notes, and practical advice on buying and owning property in Varanasi, from the team at DALAN Builders.',
}

const [featured, ...rest] = blogPosts

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-56 md:h-64 flex items-center overflow-hidden bg-[#091e44]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091e44] via-[#0d2a5c] to-[#061632]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <span className="text-[#C9922A] text-xs uppercase tracking-widest">Insights &amp; Advice</span>
          <h1 className="text-white mt-3">Blogs</h1>
          <p className="text-gray-300 text-sm mt-3 max-w-lg">
            Practical guidance on buying, building, and owning property in Varanasi.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black mb-2">Featured</h2>
          <div className="w-10 h-1 bg-[#091e44] mb-8" />

          <Link href={`/blogs/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#091e44] text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                {featured.category}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} /> {formatDate(featured.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} /> {featured.readTime}
                </span>
              </div>
              <h3 className="text-black group-hover:text-[#091e44] transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#C9922A] group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black mb-2">Latest Articles</h2>
          <div className="w-10 h-1 bg-[#091e44] mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#091e44] text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-black group-hover:text-[#091e44] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#C9922A] group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#091e44] rounded-lg px-8 py-12 md:px-14 md:py-14 border-l-4 border-[#C9922A]">
            <h2 className="text-white">
              Have a question we haven&apos;t covered?
            </h2>
            <p className="text-gray-300 text-sm mt-3 max-w-xl">
              Our team is happy to talk through your requirements, whether you are ready to buy or just starting to look.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-[#C9922A] hover:bg-[#a6741b] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
