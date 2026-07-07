import type { MetadataRoute } from 'next'
import { devices } from '@/data/devices'
import { site } from '@/lib/site'

// Static export: Next emits this as /sitemap.xml at build time.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: {
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/devices', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/postpaid', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/home-fibre', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/home-wifi', priority: 0.8, changeFrequency: 'monthly' },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const deviceEntries: MetadataRoute.Sitemap = devices.map((d) => ({
    url: `${site.url}/devices/${d.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticEntries, ...deviceEntries]
}
