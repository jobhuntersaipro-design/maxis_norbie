import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { posts } from '@/data/posts'
import { breadcrumbLd } from '@/lib/schema'
import { Container } from '@/components/ui/Container'
import { Squiggle } from '@/components/ui/Squiggle'
import { PostCard } from '@/components/blog/PostCard'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { waMessages } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'Home Internet Guides | Fix Slow WiFi, Coverage & Fibre Tips',
  description:
    'Practical guides to faster, more reliable home internet — fix slow WiFi, improve coverage and choose the right Home Fibre plan.',
  path: '/blog',
})

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/blog' },
        ])}
      />

      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
        <Squiggle
          tone="green"
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-15"
        />
        <Container className="relative py-2xl sm:py-3xl">
          <div className="max-w-measure-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-maxis-green-strong">
              Guides
            </p>
            <h1 className="mt-sm text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
              Home internet, made simple
            </h1>
            <p className="mt-md text-base text-on-surface-variant sm:text-lg">
              Practical tips to get faster, more reliable WiFi at home — and how
              to choose the right Home Fibre plan.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-3xl">
        <Container>
          <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready for faster internet?"
        message={waMessages.homeFibre}
        buttonLabel="Check coverage on WhatsApp"
      />
    </>
  )
}
