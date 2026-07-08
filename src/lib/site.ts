/**
 * Single source of truth for site identity (NAP), URLs and brand strings.
 * Keep Name / Address / Phone consistent with the Google Business Profile
 * and JSON-LD (project-overview §7 Local SEO).
 */
export const site = {
  // Storefront brand. `brandName` is the display name across the UI.
  brandName: 'Maxis Deals',
  tagline: 'Superfast Maxis Home Fibre — sorted over WhatsApp.',
  description:
    'Superfast Maxis Home Fibre from RM89/mth with a free WiFi 6 router, free installation and unlimited internet. WhatsApp us to check coverage at your address.',

  // Update to the live domain before submitting the sitemap to Search Console.
  url: 'https://www.maxisdeals.com.my',

  // Sales agent
  agentName: 'Sofie',

  // TODO: confirm the real business email before launch.
  email: 'hello@maxisdeals.com.my',

  phoneDisplay: '+60 16-460 9428',
  phoneE164: '+60164609428',
  hours: 'Mon–Sat, 10am–7pm',
} as const

// Primary navigation. On-home anchors use "/#…" so they also work from
// /blog and /coverage (navigate home, then scroll).
export const nav = [
  { href: '/#plans', label: 'Plans' },
  { href: '/#ipad', label: 'iPad Offer' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/blog', label: 'Guides' },
] as const

// Malaysian states/regions for the coverage-check form.
export const malaysiaStates = [
  'Selangor',
  'Kuala Lumpur',
  'Putrajaya',
  'Johor',
  'Melaka',
  'Negeri Sembilan',
  'Perak',
  'Penang',
  'Kedah',
  'Perlis',
  'Kelantan',
  'Terengganu',
  'Pahang',
  'Sabah',
  'Sarawak',
  'Labuan',
] as const
