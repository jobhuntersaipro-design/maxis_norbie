# Project Overview — Maxis Authorized Reseller Website

> Single source of truth for the site. Read this before starting any feature.
> Companion files: `@context/coding-standards.md`, `@context/ai-interaction.md`.

---

## 1. What this is

A lean, SEO-focused marketing site for an **authorized Maxis reseller** (Kim Brothers Enterprise, Putra Heights / Petaling Jaya, Selangor). The site's job is to:

1. Rank on Google for high-intent device + plan searches (e.g. "iPhone 17 Pro Max Maxis plan").
2. Present postpaid, Home Fibre, and Home WiFi offerings clearly.
3. Funnel every visitor to **WhatsApp (Sofie, the sales agent)** to close.

It is **not** a store. No cart, no checkout, no payment. Every CTA leads to WhatsApp.

### Positioning / compliance (read carefully)

- The site must clearly state it is an **authorized Maxis reseller** — logo always paired with an "Authorized Reseller" label in header and footer — and must **not** imply it *is* Maxis.
- Prices shown are reseller-facing snapshots and **must match the live Maxis store** on the day a page is published. A wrong price on an indexed page is the single worst outcome (trust + compliance). See §6 maintenance rules.

### Using the Maxis brand guideline

The uploaded Maxis brand guide is Maxis's **internal** print guideline — written for Maxis and its agencies, not automatically licensed to resellers. **Actual usage rights come from the dealer/reseller agreement, not the brand guide.** Confirm what the agreement permits (or ask the Maxis dealer contact) before finalizing branding. The design goal is **brand-aligned but clearly labelled**: a visitor should instantly recognise a legitimate Maxis reseller, but never mistake the site for `maxis.com.my`.

**Do use (subject to dealer agreement):**
- **Maxis Shock Green** as an accent / brand-alignment colour — C40 Y100, Pantone 375, `#8DC63F`-family (verify exact hex against approved assets).
- The **official Maxis logo**, but *always* paired with a visible "Authorized Reseller" qualifier beside it.
- Maxis **photography direction** — positive, real, cheerful subjects, uncluttered backgrounds (good practice, no licensing concern).
- A typographic feel close to **Aaux Next** (or a licensed/free near-equivalent).


---

## 2. Tech stack

Consistent with existing projects:

- **Next.js** (App Router) — **static export** where possible (`output: 'export'` unless a feature needs otherwise)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-based `@theme` config in `globals.css` — no `tailwind.config.*`)
- **shadcn/ui** components
- **Vercel** hosting
- `next/image` for all device imagery

No database. No auth. Device data lives in a single hand-maintained TS file (§5).

---

## 3. Site structure

```
/                      Home — device deals hero + postpaid + fibre + wifi sections
/devices               Device hub — grid of all ~17 hero devices + "More devices? Ask us" button
/devices/[slug]        One page per hero device (the SEO surface) — ~17 pages
/postpaid              Postpaid plans (switch-to-Maxis)
/home-fibre            Home Fibre plans
/home-wifi             Home WiFi / 5G router plans
/about                 Authorized reseller trust page (who we are, service area, why buy from us)
/contact               Contact + coverage enquiry (CTA still WhatsApp)
```

- Every page is statically generated and individually indexable.
- **Accessories and "home devices" get NO individual pages.** Accessories (≈196 SKUs) and router hardware are low search-intent / high-maintenance. They live behind the "More devices? Ask us →" WhatsApp button. Home Fibre / Home WiFi are *plans* and are covered by their own pages; the bundled router does not get a product page.

### Internal linking
Home → `/devices` → each `/devices/[slug]`. Each device page links to the relevant plan page (`/postpaid` etc.). This aids crawl + passes ranking signal.

---

## 4. The hero device list (~17)

These are the only devices with their own indexable pages, chosen by Malaysian search demand + postpaid-contract intent (Apple dominates browsing share and contract attach; Samsung leads premium/foldable; one strong hero per remaining category). Budget "RM0" phones are largely excluded — high unit volume but low postpaid-contract intent.

> **Prices below are snapshot values for reference only — verify against the live Maxis store before publishing each page.**

**Tier 1 — flagships (build first)**

| # | Device | From | RRP |
|---|--------|------|-----|
| 1 | iPhone 17 Pro Max | RM131/mth | RM5,999 |
| 2 | iPhone 17 Pro | RM118/mth | RM5,499 |
| 3 | iPhone 17 | RM0/mth | RM3,999 |
| 4 | iPhone Air | RM0/mth | RM4,999 |
| 5 | Samsung Galaxy S26 Ultra | RM154/mth | RM6,799 |
| 6 | Samsung Galaxy S26+ | RM105/mth | RM6,199 |
| 7 | Samsung Galaxy S26 | RM80/mth | RM5,199 |
| 8 | iPhone 16 | RM0/mth | RM3,499 |
| 9 | iPhone 16e | RM49/mth | RM3,499 |

**Tier 2 — strong secondary demand**

| # | Device | From | RRP |
|---|--------|------|-----|
| 10 | Samsung Galaxy Z Fold7 | RM190/mth | RM7,799 |
| 11 | Google Pixel 10 Pro XL | RM100/mth | RM5,999 |
| 12 | Xiaomi 17 Ultra | RM95/mth | RM5,499 |
| 13 | Samsung Galaxy A57 | RM0/mth | RM2,699 |
| 14 | Xiaomi Redmi Note 15 Pro | RM0/mth | RM1,699 |

**Tier 3 — one hero per remaining category**

| # | Device | From | RRP |
|---|--------|------|-----|
| 15 | iPad Air 11-inch (6th Gen) | RM77/mth | — |
| 16 | Apple Watch Series 11 | RM47/mth | — |
| 17 | Samsung Galaxy Watch8 *(optional)* | RM47/mth | — |

17 hero devices total (16 if you skip the optional second wearable). Do not pad the list with low-intent budget models — the rest live behind the "More devices? Ask us" WhatsApp button.

---

## 5. Device data schema

All hero devices live in **one file**: `src/data/devices.ts`. Hand-edited. Pages are generated from it via `generateStaticParams`.

```ts
// src/types/device.ts
export type DeviceCategory = 'phone' | 'tablet' | 'wearable'

export interface Device {
  slug: string                 // URL segment, e.g. "iphone-17-pro-max"
  name: string                 // "iPhone 17 Pro Max"
  brand: string                // "Apple"
  category: DeviceCategory
  tier: 1 | 2 | 3              // for ordering / "featured" treatment
  image: string                // /devices/iphone-17-pro-max.webp (in /public)

  // Pricing — always verify against live Maxis store before publish
  fromMonthly: number | null   // 131  (RM/mth on Zerolution); null if upfront-only
  rrp: number | null           // 5999 (RM) or null
  planTieIn: string            // "Maxis Postpaid 109"
  contract: string             // "Zerolution 36 months"

  // Marketing copy
  tagline: string              // one-line hook
  highlights: string[]         // 3-5 short spec/why-buy bullets

  // SEO
  seoTitle: string             // <title>
  seoDescription: string       // meta description (~150-160 chars)

  // Conversion
  whatsappMessage: string      // pre-filled WhatsApp text for this device

  lastVerified: string         // ISO date the price was last checked — shown in admin, not public
}
```

### Example entry

```ts
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
    '6.9" display, A19 Pro chip',
    'Pro camera system',
    '0% Zerolution instalment',
    'No upfront on eligible plans',
  ],
  seoTitle: 'iPhone 17 Pro Max Maxis Plan | From RM131/mth | Maxis Authorized Reseller',
  seoDescription:
    'Get the iPhone 17 Pro Max on a Maxis postpaid plan from RM131/mth with 0% Zerolution instalment. Authorized Maxis reseller in Selangor. WhatsApp us today.',
  whatsappMessage:
    "Hi, I'm interested in the iPhone 17 Pro Max on a Maxis plan. Can you help?",
  lastVerified: '2026-07-05',
}
```

### Migration note
Because the data source is a single typed file, swapping it later for a sheet/CMS/scraper is a one-file change. Do **not** build an auto-sync pipeline now — manual editing is lower-effort at this scale.

---

## 6. Price maintenance rules

- Hero device prices are **hand-maintained**. When Maxis changes a price, edit `devices.ts` and redeploy (Vercel rebuilds static pages).
- Update `lastVerified` whenever you touch a price.
- Everything not in the hero list lives behind the WhatsApp button — nothing stale to chase.
- Never publish a price you haven't checked against the live Maxis store that day.

---

## 7. Per-page SEO spec

Applies to every page; device pages are the priority.

**Each device page must have:**
- Unique `<title>` and meta description (from `seoTitle` / `seoDescription`).
- One `<h1>` = device name + "Maxis Plan" (e.g. "iPhone 17 Pro Max Maxis Plan").
- Real body copy — tagline + highlights + a short "why buy from us" line. Not just a price table (Google needs text to rank).
- Canonical URL (strip tracking params like `?gad_source=`).
- Open Graph + Twitter card tags (title, description, device image) so WhatsApp/FB shares render a proper card.
- `Product` + `Offer` JSON-LD (see §8).
- Internal link to the relevant plan page.

**Site-wide:**
- `sitemap.xml` + `robots.txt` (Next.js generates these; submit sitemap in Google Search Console).
- `Organization` + `LocalBusiness` JSON-LD in the root layout.
- Fast Core Web Vitals — static export + `next/image` handles most of this.
- Semantic headings, descriptive alt text on device images.

**Local SEO (the real edge over the national brand):**
- Set up / link a **Google Business Profile**.
- Consistent Name / Address / Phone (NAP) in footer + schema.
- Mention service area (Putra Heights, Petaling Jaya, Selangor) naturally in About + footer copy.

---

## 8. Structured data (JSON-LD)

**Device page — `Product` + `Offer`:**

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "iPhone 17 Pro Max",
  "brand": { "@type": "Brand", "name": "Apple" },
  "image": "https://[domain]/devices/iphone-17-pro-max.webp",
  "description": "iPhone 17 Pro Max on a Maxis postpaid plan from RM131/mth.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "price": "131",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://[domain]/devices/iphone-17-pro-max"
  }
}
```
> Note: monthly-instalment pricing in `Offer` is a simplification — keep `price` consistent with what's shown on-page to avoid Google rich-result mismatches. If unsure, use the on-page "from RM/mth" value and be consistent.

**Root layout — `Organization` + `LocalBusiness`:**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maxis Authorized Reseller",
  "telephone": "+601162838299",
  "areaServed": "Selangor, Malaysia",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Putra Heights",
    "addressRegion": "Selangor",
    "addressCountry": "MY"
  }
}
```

---

## 9. WhatsApp CTA pattern

WhatsApp (Sofie) is the primary and only conversion action.

- Central helper builds the link:

```ts
// src/lib/whatsapp.ts
const WHATSAPP_NUMBER = '601162838299' // reseller sales number

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
```

- **Device page CTA:** uses the device's `whatsappMessage`.
- **"More devices? Ask us →" button** (on `/devices` and end of home grid):
  `"Hi, I'm looking for a device that's not listed on your site — can you help?"`
- **Plan pages** (postpaid / fibre / wifi): plan-specific pre-fill, e.g.
  `"Hi, I'm interested in Maxis Home Fibre. What plans are available in my area?"`
- Buttons are real `<a href>` links (crawlable, work without JS).

---

## 10. Design system

- Follow `@context/coding-standards.md` for tokens. **Colour tokens** (`bg-surface`, never `bg-[#hex]`) and **spacing tokens** (`mt-md`, never `mt-8`) are mandatory — accept linter suggestions to the named token form.
- Keep Maxis-brand usage within reseller limits (see §1 compliance). Prefer a distinct-but-complementary look over cloning maxis.com.my.
- Mobile-first; the audience is largely on phones.
- Design references (to be added): `@context/DESIGN.md`, `@context/design-reference.html`, `@context/design-reference.png`.

---

## 11. Out of scope (v1)

- Cart / checkout / payment
- Individual accessory pages
- Individual router / home-device pages
- Auto price sync / scraping
- Multi-language (English only at launch; BM/Chinese may come later — keep copy structure translation-friendly)
- User accounts / login

---

## 12. Build order (suggested)

1. Scaffold Next.js + Tailwind v4 + shadcn, tokens in `globals.css`.
2. `devices.ts` + types + WhatsApp helper.
3. `/devices/[slug]` template + `generateStaticParams` → Tier 1 devices first.
4. Home page (hero + section links).
5. Plan pages (postpaid / home-fibre / home-wifi).
6. About (reseller trust) + Contact.
7. SEO layer: metadata, JSON-LD, sitemap, robots, OG tags.
8. Remaining Tier 2/3 device entries.
9. Google Search Console + Google Business Profile setup.
