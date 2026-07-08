import { site } from './site'
import type { Post } from '@/types/post'

/** Organization for the root layout (project-overview §8). */
export function localBusinessLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'InternetServiceProvider'],
    '@id': `${site.url}/#business`,
    name: site.brandName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/brand/maxis-logo-color.svg`,
    priceRange: 'RM',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  }
}

/** BlogPosting JSON-LD for a guide/article. */
export function articleLd(post: Post): Record<string, unknown> {
  const url = `${site.url}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: site.brandName },
    publisher: {
      '@type': 'Organization',
      name: site.brandName,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/brand/maxis-logo-color.svg`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  }
}

export function breadcrumbLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

/** FAQPage JSON-LD built from the on-page FAQ items. */
export function faqLd(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
