# Feature: Website v1 — Maxis Authorized Reseller

Status: In Progress · Owner: build · Ref: `@context/project-overview.md`

## Objective

Ship the full v1 marketing site: SEO-focused, WhatsApp-funnelled, statically
exported. Brand-aligned but clearly labelled "Authorized Reseller".

## Scope (pages)

| Route | Purpose |
|-------|---------|
| `/` | Home — hero + device deals + postpaid/fibre/wifi sections |
| `/devices` | Device hub grid + "More devices? Ask us" |
| `/devices/[slug]` | 17 hero device pages (SEO surface) |
| `/postpaid` | Postpaid plans (switch-to-Maxis) |
| `/home-fibre` | Home Fibre plans |
| `/home-wifi` | Home 5G WiFi plans |
| `/about` | Authorized reseller trust page |
| `/contact` | Contact + coverage enquiry |

## Architecture / batches

1. **Scaffold** — Next 15 App Router, `output: 'export'`, TS strict, Tailwind v4
   `@theme` tokens in `globals.css`, brand assets in `/public/brand`, favicon.
2. **Data** — `types/device.ts`, `data/devices.ts` (17), `lib/whatsapp.ts`,
   `lib/site.ts` (NAP + nav).
3. **Components** — `layout/Header`, `layout/Footer`, `ui/Button`, `ui/WhatsAppButton`,
   `ui/PriceTag`, `ui/DeviceCard`, `ui/Squiggle`, `sections/*` (Hero, CtaBand,
   PlanCard, TrustStrip), `seo/JsonLd`.
4. **Device pages** — `[slug]` template + `generateStaticParams`, hub grid.
5. **Home** — hero, featured devices, plan teasers, why-us, CTA band.
6. **Plan pages** — postpaid / home-fibre / home-wifi (plan cards + FAQ + CTA).
7. **About + Contact** — trust copy, service area, WhatsApp CTA.
8. **SEO layer** — root layout metadata + Organization/LocalBusiness JSON-LD,
   per-device Product/Offer JSON-LD, OG/Twitter, `sitemap.ts`, `robots.ts`,
   canonical, generated device SVG placeholders.
9. **Verify** — `npm install` + `npm run build` clean, static `out/` generated.

## Design system

- Colours: Maxis Shock Green `#8DC63F`, Maxis blue `#002391`, squiggle motif.
  Named tokens only (`bg-surface`, `text-on-surface`, `bg-accent`).
- Spacing: named tokens (`p-lg`, `gap-md`). Type: Manrope (Aaux-Next-like).
- Primary buttons = blue + white text (contrast). WhatsApp CTA = green pill +
  dark text + WA glyph. Light theme, cheerful, mobile-first.

## Conversion

Every CTA is a real `<a href>` → `waLink(message)` (Sofie, `60164609428`).

## Compliance / risks

- Logo always paired with "Authorized Reseller"; never imply the site *is* Maxis.
- **Prices are unverified snapshots — re-check live Maxis store before publish.**
- Device images are branded SVG placeholders — swap for real photos + OG images.
- Brand asset rights depend on the dealer agreement, not the brand guide.

## Acceptance

- `npm run build` succeeds; ~25 static pages emitted (8 static + 17 device).
- Every device page has unique title/description, one H1, body copy, canonical,
  OG tags, Product/Offer JSON-LD, plan link, WhatsApp CTA.
- Header/footer show logo + "Authorized Reseller" + NAP. Sitemap + robots present.

## History

- 2026-07-07 — Client revision round (see `current-feature.md` for the full list):
  rebrand to "Maxis Deals" (reseller/company identity removed), About + Contact
  pages deleted, real `.webp` device photos wired in, Home Fibre new-sign-up
  promo pricing, CoverageChecker form (home + fibre), brand-aligned section
  backgrounds (forest green + Shock Green), footer reduced to WhatsApp + email,
  favicon → squiggle, copy trimmed. Build + typecheck clean; screenshot-verified.
- 2026-07-05 — Feature started; scaffold + data + plan doc created.
