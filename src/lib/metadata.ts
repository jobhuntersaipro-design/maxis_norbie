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
  image = '/og.png',
}: PageMetaInput): Metadata {
  const url = `${site.url}${path}`
  // Social platforms don't render SVG OG images — fall back to the branded PNG.
  const safeImage = /\.(png|jpe?g|webp)$/i.test(image) ? image : '/og.png'
  const imageUrl = safeImage.startsWith('http')
    ? safeImage
    : `${site.url}${safeImage}`

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
