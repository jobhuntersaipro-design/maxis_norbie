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
