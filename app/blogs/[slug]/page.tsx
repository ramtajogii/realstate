import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts, getPost, formatDate } from '../posts'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article Not Found | DALAN Builders' }
  return { title: `${post.title} | DALAN Builders`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <div className="pt-10 md:pt-14 pb-6 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#091e44] transition-colors text-sm"
          >
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
        </div>
      </div>

      <article className="pb-16 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block px-3 py-1 bg-[#091e44] text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-black leading-tight mt-5">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500 mt-5 pb-6 border-b border-gray-200">
            <span className="inline-flex items-center gap-1.5">
              <User size={13} /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg mt-8">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="mt-10 space-y-5">
            <p className="text-lg text-black font-medium leading-relaxed">{post.excerpt}</p>
            <div className="w-10 h-1 bg-[#C9922A]" />
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-gray-600 text-[15px] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="text-xs text-gray-400 italic mt-10 pt-6 border-t border-gray-200">
            This is sample content published to demonstrate the blog layout. It is general information, not legal or
            financial advice.
          </p>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-black mb-2">More Articles</h2>
          <div className="w-10 h-1 bg-[#091e44] mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blogs/${p.slug}`}
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9922A]">{p.category}</span>
                  <h3 className="font-display text-lg font-bold text-black leading-snug mt-2 group-hover:text-[#091e44] transition-colors">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#091e44] group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
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
