import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/types/post'
import { ArrowRightIcon } from '@/components/ui/icons'

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z')
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-outline-variant bg-surface transition-all hover:-translate-y-1 hover:border-maxis-green hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue"
    >
      <div className="relative aspect-16/9 overflow-hidden bg-surface-container-low">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <span className="absolute left-md top-md inline-flex rounded-pill bg-surface/90 px-md py-xs text-xs font-bold uppercase tracking-wide text-maxis-green-strong backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-lg">
        <h3 className="text-lg font-bold leading-snug text-on-surface transition-colors group-hover:text-maxis-green-strong">
          {post.title}
        </h3>
        <p className="mt-sm line-clamp-2 flex-1 text-sm leading-relaxed text-on-surface-variant">
          {post.excerpt}
        </p>
        <div className="mt-lg flex items-center justify-between">
          <span className="text-xs text-on-surface-faint">
            {formatDate(post.date)} · {post.readMins} min read
          </span>
          <span className="inline-flex items-center gap-xs text-sm font-semibold text-maxis-green-strong">
            Read
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
