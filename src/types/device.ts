export type DeviceCategory = 'phone' | 'tablet' | 'wearable'

export interface Device {
  slug: string // URL segment, e.g. "iphone-17-pro-max"
  name: string // "iPhone 17 Pro Max"
  brand: string // "Apple"
  category: DeviceCategory
  tier: 1 | 2 | 3 // for ordering / "featured" treatment
  image: string // /devices/iphone-17-pro-max.svg (in /public)

  // Pricing — always verify against the live Maxis store before publish
  fromMonthly: number | null // 131 (RM/mth on Zerolution); null if upfront-only
  rrp: number | null // 5999 (RM) or null
  planTieIn: string // "Maxis Postpaid 109"
  contract: string // "Zerolution 36 months"

  // Marketing copy
  tagline: string // one-line hook
  highlights: string[] // 3-5 short spec / why-buy bullets

  // SEO
  seoTitle: string // <title>
  seoDescription: string // meta description (~150-160 chars)

  // Conversion
  whatsappMessage: string // pre-filled WhatsApp text for this device

  lastVerified: string // ISO date the price was last checked — admin only, not public
}
