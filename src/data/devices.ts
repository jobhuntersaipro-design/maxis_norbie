import type { Device } from '@/types/device'

/**
 * Hero devices — the SEO surface. Hand-maintained (project-overview §5/§6).
 *
 * ⚠️ Prices are snapshot values for reference only. Re-verify every price
 * against the live Maxis store before publishing a page, and bump `lastVerified`.
 * Everything not in this list lives behind the "More devices? Ask us" WhatsApp button.
 */
export const devices: Device[] = [
  // ---- Tier 1 — flagships ------------------------------------------------
  {
    slug: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-17-pro-max.webp',
    fromMonthly: 131,
    rrp: 5999,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'The most powerful iPhone, on Maxis 5G.',
    highlights: [
      '6.9" Super Retina XDR display',
      'A19 Pro chip',
      'Pro camera system with 5x telephoto',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'iPhone 17 Pro Max Maxis Plan | From RM131/mth | Maxis Deals Malaysia',
    seoDescription:
      'Get the iPhone 17 Pro Max on a Maxis postpaid plan from RM131/mth with 0% Zerolution instalment. Maxis plans in Selangor & the Klang Valley. WhatsApp us today.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone 17 Pro Max on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-17-pro.webp',
    fromMonthly: 118,
    rrp: 5499,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'Pro performance and cameras, made for 5G.',
    highlights: [
      '6.3" ProMotion display',
      'A19 Pro chip',
      'Triple 48MP Pro cameras',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'iPhone 17 Pro Maxis Plan | From RM118/mth | Maxis Deals Malaysia',
    seoDescription:
      'iPhone 17 Pro on a Maxis postpaid plan from RM118/mth with 0% Zerolution. Maxis plans in Putra Heights & Petaling Jaya, Selangor. WhatsApp us to order.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone 17 Pro on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'iphone-17',
    name: 'iPhone 17',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-17.webp',
    fromMonthly: 0,
    rrp: 3999,
    planTieIn: 'Maxis Postpaid 99',
    contract: 'Zerolution 36 months',
    tagline: 'The iPhone everyone wants — RM0 upfront on eligible plans.',
    highlights: [
      '6.3" display',
      'A19 chip',
      'Advanced dual-camera system',
      'RM0 upfront on eligible Maxis plans',
    ],
    seoTitle:
      'iPhone 17 Maxis Plan | RM0 Upfront | Maxis Deals Malaysia',
    seoDescription:
      'Get the iPhone 17 on a Maxis postpaid plan with RM0 upfront on eligible plans and 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us today.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone 17 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'iphone-air',
    name: 'iPhone Air',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-air.webp',
    fromMonthly: 0,
    rrp: 4999,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'The thinnest iPhone ever — RM0 upfront on eligible plans.',
    highlights: [
      'Ultra-thin titanium design',
      'A19 Pro chip',
      'All-day battery life',
      'RM0 upfront on eligible Maxis plans',
    ],
    seoTitle:
      'iPhone Air Maxis Plan | RM0 Upfront | Maxis Deals Malaysia',
    seoDescription:
      'Get the ultra-thin iPhone Air on a Maxis postpaid plan with RM0 upfront on eligible plans and 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone Air on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'samsung-galaxy-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra',
    brand: 'Samsung',
    category: 'phone',
    tier: 1,
    image: '/devices/samsung-galaxy-s26-ultra.webp',
    fromMonthly: 154,
    rrp: 6799,
    planTieIn: 'Maxis Postpaid 139',
    contract: 'Zerolution 36 months',
    tagline: 'The ultimate Galaxy, with S Pen and Galaxy AI.',
    highlights: [
      '6.9" Dynamic AMOLED 2X',
      '200MP quad camera',
      'Built-in S Pen',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Samsung Galaxy S26 Ultra Maxis Plan | From RM154/mth | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy S26 Ultra on a Maxis postpaid plan from RM154/mth with 0% Zerolution and Galaxy AI. Maxis plans in Selangor & the Klang Valley. WhatsApp us to order.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy S26 Ultra on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'samsung-galaxy-s26-plus',
    name: 'Samsung Galaxy S26+',
    brand: 'Samsung',
    category: 'phone',
    tier: 1,
    image: '/devices/samsung-galaxy-s26-plus.webp',
    fromMonthly: 105,
    rrp: 6199,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'A big, brilliant Galaxy flagship with Galaxy AI.',
    highlights: [
      '6.7" Dynamic AMOLED 2X',
      'Triple pro-grade cameras',
      'Large all-day battery',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Samsung Galaxy S26+ Maxis Plan | From RM105/mth | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy S26+ on a Maxis postpaid plan from RM105/mth with 0% Zerolution and Galaxy AI. Maxis plans in Putra Heights & PJ, Selangor. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy S26+ on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'samsung-galaxy-s26',
    name: 'Samsung Galaxy S26',
    brand: 'Samsung',
    category: 'phone',
    tier: 1,
    image: '/devices/samsung-galaxy-s26.webp',
    fromMonthly: 80,
    rrp: 5199,
    planTieIn: 'Maxis Postpaid 99',
    contract: 'Zerolution 36 months',
    tagline: 'Compact flagship power with Galaxy AI.',
    highlights: [
      '6.2" Dynamic AMOLED 2X',
      'Flagship Snapdragon chip',
      'Pro-grade triple camera',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Samsung Galaxy S26 Maxis Plan | From RM80/mth | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy S26 on a Maxis postpaid plan from RM80/mth with 0% Zerolution and Galaxy AI. Maxis plans in Selangor & the Klang Valley. WhatsApp us to order today.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy S26 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-16.webp',
    fromMonthly: 0,
    rrp: 3499,
    planTieIn: 'Maxis Postpaid 89',
    contract: 'Zerolution 36 months',
    tagline: 'Still brilliant, now better value — RM0 upfront.',
    highlights: [
      '6.1" Super Retina XDR display',
      'A18 chip',
      'Advanced dual-camera system',
      'RM0 upfront on eligible Maxis plans',
    ],
    seoTitle: 'iPhone 16 Maxis Plan | RM0 Upfront | Maxis Deals Malaysia',
    seoDescription:
      'Get the iPhone 16 on a Maxis postpaid plan with RM0 upfront on eligible plans and 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us today.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone 16 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'iphone-16e',
    name: 'iPhone 16e',
    brand: 'Apple',
    category: 'phone',
    tier: 1,
    image: '/devices/iphone-16e.webp',
    fromMonthly: 49,
    rrp: 3499,
    planTieIn: 'Maxis Postpaid 89',
    contract: 'Zerolution 36 months',
    tagline: 'The most affordable way into iPhone on Maxis.',
    highlights: [
      '6.1" Super Retina XDR display',
      'A18 chip with Apple Intelligence',
      '48MP Fusion camera',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'iPhone 16e Maxis Plan | From RM49/mth | Maxis Deals Malaysia',
    seoDescription:
      'iPhone 16e on a Maxis postpaid plan from RM49/mth with 0% Zerolution. The affordable iPhone. Maxis plans in Selangor & the Klang Valley. WhatsApp us to order.',
    whatsappMessage:
      "Hi, I'm interested in the iPhone 16e on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },

  // ---- Tier 2 — strong secondary demand ---------------------------------
  {
    slug: 'samsung-galaxy-z-fold7',
    name: 'Samsung Galaxy Z Fold7',
    brand: 'Samsung',
    category: 'phone',
    tier: 2,
    image: '/devices/samsung-galaxy-z-fold7.webp',
    fromMonthly: 190,
    rrp: 7799,
    planTieIn: 'Maxis Postpaid 139',
    contract: 'Zerolution 36 months',
    tagline: 'A phone that unfolds into a tablet.',
    highlights: [
      '8" main foldable display',
      'Multi-window multitasking',
      'Flagship camera + Galaxy AI',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Samsung Galaxy Z Fold7 Maxis Plan | From RM190/mth | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy Z Fold7 on a Maxis postpaid plan from RM190/mth with 0% Zerolution and Galaxy AI. Maxis plans in Selangor & the Klang Valley. WhatsApp us to order.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy Z Fold7 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'google-pixel-10-pro-xl',
    name: 'Google Pixel 10 Pro XL',
    brand: 'Google',
    category: 'phone',
    tier: 2,
    image: '/devices/google-pixel-10-pro-xl.webp',
    fromMonthly: 100,
    rrp: 5999,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'The smartest Pixel camera, powered by Google AI.',
    highlights: [
      '6.8" Super Actua display',
      'Google Tensor G5 chip',
      'Pro triple camera + AI editing',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Google Pixel 10 Pro XL Maxis Plan | From RM100/mth | Maxis Deals Malaysia',
    seoDescription:
      'Google Pixel 10 Pro XL on a Maxis postpaid plan from RM100/mth with 0% Zerolution and Google AI. Maxis plans in Selangor & the Klang Valley. WhatsApp us today.',
    whatsappMessage:
      "Hi, I'm interested in the Google Pixel 10 Pro XL on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'xiaomi-17-ultra',
    name: 'Xiaomi 17 Ultra',
    brand: 'Xiaomi',
    category: 'phone',
    tier: 2,
    image: '/devices/xiaomi-17-ultra.webp',
    fromMonthly: 95,
    rrp: 5499,
    planTieIn: 'Maxis Postpaid 109',
    contract: 'Zerolution 36 months',
    tagline: 'Leica-tuned cameras, flagship power.',
    highlights: [
      '6.7" LTPO AMOLED display',
      'Leica quad camera system',
      'Flagship Snapdragon chip',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Xiaomi 17 Ultra Maxis Plan | From RM95/mth | Maxis Deals Malaysia',
    seoDescription:
      'Xiaomi 17 Ultra with Leica cameras on a Maxis postpaid plan from RM95/mth with 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us to order.',
    whatsappMessage:
      "Hi, I'm interested in the Xiaomi 17 Ultra on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'samsung-galaxy-a57',
    name: 'Samsung Galaxy A57',
    brand: 'Samsung',
    category: 'phone',
    tier: 2,
    image: '/devices/samsung-galaxy-a57.webp',
    fromMonthly: 0,
    rrp: 2699,
    planTieIn: 'Maxis Postpaid 69',
    contract: 'Zerolution 36 months',
    tagline: 'Big-screen everyday Galaxy — RM0 upfront.',
    highlights: [
      '6.7" Super AMOLED display',
      'Triple camera with OIS',
      'Long-lasting 5000mAh battery',
      'RM0 upfront on eligible Maxis plans',
    ],
    seoTitle:
      'Samsung Galaxy A57 Maxis Plan | RM0 Upfront | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy A57 on a Maxis postpaid plan with RM0 upfront on eligible plans and 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us today.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy A57 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'xiaomi-redmi-note-15-pro',
    name: 'Xiaomi Redmi Note 15 Pro',
    brand: 'Xiaomi',
    category: 'phone',
    tier: 2,
    image: '/devices/xiaomi-redmi-note-15-pro.webp',
    fromMonthly: 0,
    rrp: 1699,
    planTieIn: 'Maxis Postpaid 59',
    contract: 'Zerolution 36 months',
    tagline: 'Smart value done right — RM0 upfront.',
    highlights: [
      '6.7" AMOLED 120Hz display',
      '200MP main camera',
      'Fast charging, big battery',
      'RM0 upfront on eligible Maxis plans',
    ],
    seoTitle:
      'Xiaomi Redmi Note 15 Pro Maxis Plan | RM0 Upfront | Maxis Deals Malaysia',
    seoDescription:
      'Xiaomi Redmi Note 15 Pro on a Maxis postpaid plan with RM0 upfront on eligible plans and 0% Zerolution. Maxis plans in Selangor & the Klang Valley. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the Xiaomi Redmi Note 15 Pro on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },

  // ---- Tier 3 — one hero per remaining category -------------------------
  {
    slug: 'ipad-air-11-inch',
    name: 'iPad Air 11-inch (6th Gen)',
    brand: 'Apple',
    category: 'tablet',
    tier: 3,
    image: '/devices/ipad-air-11-inch.webp',
    fromMonthly: 77,
    rrp: null,
    planTieIn: 'Maxis Postpaid + Tablet add-on',
    contract: 'Zerolution 36 months',
    tagline: 'Serious performance in a light, portable iPad.',
    highlights: [
      '11" Liquid Retina display',
      'Apple M-series chip',
      'Works with Apple Pencil Pro',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'iPad Air 11" Maxis Plan | From RM77/mth | Maxis Deals Malaysia',
    seoDescription:
      'iPad Air 11-inch on a Maxis plan from RM77/mth with 0% Zerolution. Add a Maxis data plan for on-the-go. Maxis plans in Selangor & the Klang Valley. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the iPad Air 11-inch on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'apple-watch-series-11',
    name: 'Apple Watch Series 11',
    brand: 'Apple',
    category: 'wearable',
    tier: 3,
    image: '/devices/apple-watch-series-11.webp',
    fromMonthly: 47,
    rrp: null,
    planTieIn: 'Maxis OneNumber add-on',
    contract: 'Zerolution 36 months',
    tagline: 'Health, fitness and calls right on your wrist.',
    highlights: [
      'Always-On Retina display',
      'Advanced health & fitness sensors',
      'Cellular with Maxis OneNumber',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Apple Watch Series 11 Maxis Plan | From RM47/mth | Maxis Deals Malaysia',
    seoDescription:
      'Apple Watch Series 11 on a Maxis plan from RM47/mth with 0% Zerolution and Maxis OneNumber cellular. Maxis plans in Selangor & the Klang Valley. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the Apple Watch Series 11 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
  {
    slug: 'samsung-galaxy-watch8',
    name: 'Samsung Galaxy Watch8',
    brand: 'Samsung',
    category: 'wearable',
    tier: 3,
    image: '/devices/samsung-galaxy-watch8.webp',
    fromMonthly: 47,
    rrp: null,
    planTieIn: 'Maxis OneNumber add-on',
    contract: 'Zerolution 36 months',
    tagline: 'Galaxy AI wellness, on your wrist.',
    highlights: [
      'Super AMOLED display',
      'Advanced sleep & health tracking',
      'Cellular with Maxis OneNumber',
      '0% Zerolution instalment',
    ],
    seoTitle:
      'Samsung Galaxy Watch8 Maxis Plan | From RM47/mth | Maxis Deals Malaysia',
    seoDescription:
      'Samsung Galaxy Watch8 on a Maxis plan from RM47/mth with 0% Zerolution and Maxis OneNumber cellular. Maxis plans in Selangor & the Klang Valley. WhatsApp us.',
    whatsappMessage:
      "Hi, I'm interested in the Samsung Galaxy Watch8 on a Maxis plan. Can you help?",
    lastVerified: '2026-07-05',
  },
]

export function getDevice(slug: string): Device | undefined {
  return devices.find((d) => d.slug === slug)
}

export const tier1Devices = devices.filter((d) => d.tier === 1)
export const tier2Devices = devices.filter((d) => d.tier === 2)
export const tier3Devices = devices.filter((d) => d.tier === 3)
