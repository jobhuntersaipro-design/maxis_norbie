import type { Metadata } from 'next'
import { site } from './site'

interface PageMetaInput {
  title: string
  description: string
  path: string
  /** Absolute or /public-relative image for OG/Twitter cards. */
  image?: string
}

/**
 * Builds per-page Metadata with canonical URL, Open Graph and Twitter cards
 * (project-overview §7). `path` should start with "/".
 */
export function buildMetadata({
  title,
  description,
  path,
  image = '/brand/og-default.svg',
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`
  const imageUrl = image.startsWith('http') ? image : `${site.url}${image}`

  return {
    // `absolute` bypasses the root layout's title template — pages pass a
    // full, self-contained SEO title (often already ending in the brand).
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      locale: 'en_MY',
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
