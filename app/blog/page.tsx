import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  { id: 1, title: 'Top 5 Areas to Invest in Varanasi in 2025', excerpt: 'Discover which localities in Varanasi are offering the best returns for investors this year.', category: 'Investment', date: 'Jan 15, 2025', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80' },
  { id: 2, title: 'Complete Home Buying Guide for First-Time Buyers in India', excerpt: 'Everything you need to know about purchasing your first home — from loan eligibility to registration.', category: 'Guide', date: 'Feb 8, 2025', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80' },
  { id: 3, title: 'Commercial Trends: What to Expect in 2025', excerpt: 'The commercial property market is evolving rapidly. Here is what investors and businesses need to know.', category: 'Trends', date: 'Mar 1, 2025', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
  { id: 4, title: 'RERA: Your Rights as a Homebuyer in India', excerpt: 'Understanding the Regulation Act and how it protects you as a property buyer.', category: 'Legal', date: 'Mar 20, 2025', readTime: '7 min read', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80' },
  { id: 5, title: 'NRI Guide to Buying Property in India', excerpt: 'Step-by-step guide for Non-Resident Indians looking to invest in Indian.', category: 'NRI', date: 'Apr 5, 2025', readTime: '9 min read', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=700&q=80' },
  { id: 6, title: 'Vastu Tips for Your New Home', excerpt: 'How to incorporate Vastu Shastra principles when choosing or designing your new home.', category: 'Lifestyle', date: 'Apr 22, 2025', readTime: '4 min read', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80' },
]

const categoryColors: Record<string, string> = {
  Investment: 'bg-blue-500/20 text-blue-400',
  Guide: 'bg-green-500/20 text-green-400',
  Trends: 'bg-purple-500/20 text-purple-400',
  Legal: 'bg-red-500/20 text-red-400',
  NRI: 'bg-yellow-500/20 text-yellow-400',
  Lifestyle: 'bg-[#091e44]/20 text-[#091e44]',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80" alt="Blog" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[#091e44] text-xs uppercase tracking-widest">Insights & News</span>
          <h1 className="font-display text-5xl font-bold text-black mt-3">Our Blog</h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group bg-[#F7F7F7] rounded-2xl overflow-hidden border border-black/10 hover:border-[#091e44]/30 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-600 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-black group-hover:text-[#091e44] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="flex items-center gap-1 text-[#091e44] text-sm font-medium">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

