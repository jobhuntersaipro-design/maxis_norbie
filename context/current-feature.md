# Current Feature

## Status

v1 built & verified — pending pre-launch checks (see Notes: verify prices, confirm
storefront name `Maxis Deals` + `site.email`, and the reseller-labelling compliance call).

## Goals

Build the initial Maxis Authorized Reseller marketing website (v1) per
`@context/project-overview.md`.

- Next.js App Router, static export, TypeScript strict, Tailwind v4 (CSS `@theme` tokens).
- Brand-aligned but clearly labelled "Authorized Reseller" (compliance §1).
- Pages: `/`, `/devices`, `/devices/[slug]` (17 hero devices), `/postpaid`,
  `/home-fibre`, `/home-wifi`, `/about`, `/contact`.
- Every CTA → WhatsApp (Sofie) via central `waLink()` helper.
- Full SEO layer: per-page metadata, OG/Twitter, Product/Offer + LocalBusiness
  JSON-LD, sitemap, robots, canonical.
- Design system: Maxis Shock Green `#8DC63F`, Maxis blue `#002391`, squiggle
  motif, Aaux-Next-like type (Manrope). Named colour + spacing tokens only.

## Notes

- **Prices are snapshot values from the overview — must be re-verified against the
  live Maxis store before this site is published.** `lastVerified` set to 2026-07-05.
- Device imagery uses generated branded SVG placeholders (`/public/devices/*.svg`).
  Replace with real device photos + per-device OG images before launch.
- Light theme chosen (brand is white-box logo + green); cheerful/clean per brand guide.
- Brand asset usage is subject to the dealer/reseller agreement (overview §1).

## History

> Sorted from latest to earliest.

- 2026-07-08 (later) — Content + UX pass:
  - Added iPad promo image (`/public/promo/ipad.webp`) to hero teaser + RM1 offer.
  - Removed **all area mentions** (Putra Heights / PJ / Selangor) from copy,
    metadata, hero eyebrow, footer; schema switched to Organization +
    areaServed Malaysia (no local postal address). Coverage form state now
    defaults to "Select state".
  - Plans are a **horizontal carousel** (`PlansCarousel` client component): `< >`
    arrow controls, hidden scrollbar, snap, wider card peek, native touch swipe +
    mouse drag-to-scroll.
  - Hover effects on arrows, plan/included/why-us/post cards.
  - **Blog** (SEO): `/blog` index + 3 posts (`/blog/[slug]`): slow-internet fixes,
    WiFi coverage/dead zones, fibre vs 5G WiFi. Keyword-targeted; BlogPosting +
    Breadcrumb JSON-LD; content is original (topics inspired by Maxis discovery
    articles the client shared).
  - New **`/coverage`** page (coverage checker stays on home too).
  - Nav: Plans · iPad Offer · Coverage · Guides (on-home anchors use `/#…`).
  - UI review (ui-reviewer agent) fixes: even plan-card heights, header nav at
    `md`, larger tap targets, header WhatsApp now actually hides < sm.

- 2026-07-08 — **Pivot to Home-Fibre-only business.** Removed all phones,
  postpaid and 5G-WiFi pages/data/components (devices, [slug], postpaid,
  home-wifi, home-fibre, devices.ts, DeviceCard, PriceTag, TrustStrip, format.ts,
  productLd, device images). Site is now a **single-page** Home Fibre landing
  (`/`) with anchor nav (Plans / iPad Offer / Coverage / FAQ). Content from
  `materials/`:
  - Plans (new sign-up "from" prices, RRP struck): 100M RM89, 300M RM99/139,
    500M RM129/159, 1G RM159/249, 2G RM319 (+3 mths free). Full rebate table NOT
    published (reseller rule). ⚠️ Re-verify vs reseller portal — prices vary by
    infra (HSBA/Allo/CTS/Sacofa/NGBB) and Transfer vs non-Transfer.
  - Featured **iPad promo**: Home Fibre 300Mbps 36-mth @ RM139 + Apple 11" iPad
    128GB (RRP RM1,599) on Home Zerolution for RM1/mth (DAP waived), switchover
    customers, while stocks last. Deliberately shown without a hard expiry date
    (materials list 30 Jun 2026 which is past; framed as "limited / while stocks
    last" — confirm current validity).
  - FAQPage JSON-LD added; sitemap reduced to `/`; metadata retargeted to
    "Maxis Home Fibre in Selangor".

- 2026-07-07 (pm) — Client revisions:
  - Rebrand: removed all "Authorized Reseller" labelling and the "Kim Brothers
    Enterprise" company name. Storefront now presents as **"Maxis Deals"**
    (`site.brandName`, placeholder — confirm real business name). Footer keeps a
    minimal Maxis trademark line only. ⚠️ This reverses the overview §1 reseller-
    labelling requirement at the owner's explicit request — revisit for compliance.
  - Deleted the **About** and **Contact** pages (+ nav/sitemap/footer cleanup).
  - Footer contact reduced to **WhatsApp + email** (`site.email` placeholder —
    confirm before launch).
  - Favicon → Maxis green squiggle (`src/app/icon.svg`).
  - Real device photos: 17 transparent `.webp` cut-outs in `/public/devices`,
    rendered `object-contain`. Recommended asset spec: 1200×1200 transparent
    PNG/WebP named by slug. Placeholder generator retained for future use.
  - Home: 3 hand-picked heroes (iPhone 17 Pro Max, Galaxy S26 Ultra, iPhone 17),
    smaller card sizing, Maxis-focused hero copy.
  - Home Fibre now shows **new sign-up promo prices** with RRP struck through
    (100:RM89/99, 300:RM99/139 36-mth, 500:RM149/159, 1G:RM249, 2G:RM319) +
    "already on postpaid?" converged upsell. ⚠️ Re-verify vs reseller portal;
    owner opted to publish promo prices (overrides earlier "don't post rebate
    table" note).
  - New **CoverageChecker** form (address → pre-filled WhatsApp) on home + fibre.
  - Brand-aligned section backgrounds: Maxis forest green (`surface-inverse`
    #0e3a22) dark panels, Shock Green band (`surface-brand`), white + green tints.
  - Copy trimmed site-wide for a punchier, less-wordy tone.

- 2026-07-07 — Reviewed `July Promo Updates_30June2026.pdf` (reseller deck,
  effective 1 July 2026). Two actions taken on `/home-fibre`:
  1. **Compliance:** deck states *"Posting the rebate table on Facebook or
     Google is not allowed."* A public indexed site counts — so we show
     **standard RRP only** and funnel live rebates/promos to WhatsApp (added a
     promo-funnel card + FAQ). Do NOT tabulate discounted promo prices on the site.
  2. **Price fix:** corrected Home Fibre RRP to 100Mbps RM99, 300Mbps RM139,
     500Mbps RM159, 1Gbps RM249, 2Gbps RM319 (was invented). Added 300Mbps &
     2Gbps tiers.
  - Deck has no 5G Home WiFi or phone/postpaid pricing → those pages unchanged
    (keep "confirm before you buy" disclaimers; postpaid RM89/109/139 still
    need verifying against the live Maxis store). Home devices (TVs/consoles)
    remain out of scope / behind WhatsApp.
</content>
