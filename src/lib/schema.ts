import { site } from './site'

/** Organization + LocalBusiness for the root layout (project-overview §8). */
export function localBusinessLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'InternetServiceProvider'],
    '@id': `${site.url}/#business`,
    name: site.brandName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/brand/maxis-logo-color.svg`,
    priceRange: 'RM',
    areaServed: site.serviceAreas.map((a) => ({
      '@type': 'AdministrativeArea',
      name: a,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHours: 'Mo-Sa 10:00-19:00',
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
