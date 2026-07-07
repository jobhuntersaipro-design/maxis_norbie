import type { Device } from '@/types/device'
import { site } from './site'

/** Organization + LocalBusiness for the root layout (project-overview §8). */
export function localBusinessLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'MobilePhoneStore'],
    '@id': `${site.url}/#business`,
    name: site.brandName,
    url: site.url,
    telephone: site.phoneE164,
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

/** Product + Offer for a device page (project-overview §8). */
export function productLd(device: Device): Record<string, unknown> {
  const url = `${site.url}/devices/${device.slug}`
  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    priceCurrency: 'MYR',
    // Keep price consistent with the on-page "from RM/mth" value.
    price: String(device.fromMonthly ?? 0),
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url,
    seller: {
      '@type': 'Organization',
      name: site.brandName,
    },
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: device.name,
    brand: { '@type': 'Brand', name: device.brand },
    image: `${site.url}${device.image}`,
    description: `${device.name} on a Maxis postpaid plan${
      device.fromMonthly ? ` from RM${device.fromMonthly}/mth` : ''
    }. ${device.tagline}`,
    category: device.category,
    offers: offer,
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
