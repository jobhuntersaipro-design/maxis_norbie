import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { posts, getPost } from '@/data/posts'
import type { PostBlock } from '@/types/post'
import { buildMetadata } from '@/lib/metadata'
import { articleLd, breadcrumbLd } from '@/lib/schema'
import { Container } from '@/components/ui/Container'
import { PostCard } from '@/components/blog/PostCard'
import { FibreCtaBand } from '@/components/sections/FibreCtaBand'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { CheckIcon } from '@/components/ui/icons'
import { waMessages } from '@/lib/whatsapp'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
  })
}

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-2xl text-xl font-bold tracking-tight text-on-surface sm:text-2xl">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="mt-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul className="mt-md space-y-sm">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-sm text-base text-on-surface-variant sm:text-lg">
              <CheckIcon className="mt-1.5 h-5 w-5 shrink-0 text-maxis-green-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <div className="mt-lg rounded-card border border-maxis-green bg-surface-container-low p-lg">
          <p className="text-sm font-bold uppercase tracking-wide text-maxis-green-strong">
            Tip
          </p>
          <p className="mt-xs text-on-surface">{block.text}</p>
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <JsonLd data={articleLd(post)} />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <Container className="pt-lg">
          <nav aria-label="Breadcrumb" className="text-sm text-on-surface-variant">
            <ol className="flex flex-wrap items-center gap-xs">
              <li>
                <Link href="/" className="hover:text-on-surface">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-on-surface">
                  Guides
                </Link>
              </li>
            </ol>
          </nav>
        </Container>

        <header className="py-xl">
          <Container>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-maxis-green-strong">
                {post.category}
              </p>
              <h1 className="mt-sm text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-md text-sm text-on-surface-faint">
                {formatDate(post.date)} · {post.readMins} min read
              </p>
            </div>
          </Container>
        </header>

        <Container>
          <div className="relative mb-xl aspect-16/9 overflow-hidden rounded-card bg-surface-container-low sm:aspect-[8/3]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
        </Container>

        <Container>
          <div className="pb-2xl">
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>

        <FibreCtaBand />
      </article>

      {related.length > 0 && (
        <section className="border-t border-outline-variant py-2xl">
          <Container>
            <h2 className="text-2xl font-bold text-on-surface">
              More guides
            </h2>
            <div className="mt-lg grid gap-lg sm:grid-cols-2">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Ready when you are"
        message={waMessages.general}
        buttonLabel="Chat on WhatsApp"
      />
    </>
  )
}
