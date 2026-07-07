import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { waMessages } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { PlanCard, type Plan } from '@/components/sections/PlanCard'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { CoverageChecker } from '@/components/sections/CoverageChecker'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Faq } from '@/components/sections/Faq'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Maxis Home Fibre Plans | Broadband in Selangor',
  description:
    'Maxis Home Fibre broadband from 100Mbps to 2Gbps with a free WiFi 6 router and unlimited internet. Check coverage and sign up through an authorized Maxis reseller.',
  path: '/home-fibre',
})

// New sign-up promo prices for new Maxis Home Fibre customers, with the standard
// RRP shown struck-through. Source: July 2026 promo update. ⚠️ Re-verify against
// the reseller portal before publishing — promo prices, rebates and free-months
// change regularly and are subject to infra (HSBA/Allo/CTS/Sacofa) & coverage.
const plans: Plan[] = [
  {
    name: 'Home Fibre 100Mbps',
    price: 'RM89',
    period: '/mth',
    rrp: 'RM99',
    note: 'New sign-up · + 3 months free',
    blurb: 'Great for smaller homes and everyday streaming.',
    features: [
      '100Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free standard installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 100Mbps at RM89/mth. Is it available at my address?",
  },
  {
    name: 'Home Fibre 300Mbps',
    price: 'RM99',
    period: '/mth',
    rrp: 'RM139',
    note: 'New sign-up · 36-month contract',
    blurb: 'The all-rounder for busy homes and remote work.',
    features: [
      '300Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
      'Save up to RM1,440 over the contract',
    ],
    featured: true,
    badge: 'Best deal',
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 300Mbps at RM99/mth (36-month). Is it available at my address?",
  },
  {
    name: 'Home Fibre 500Mbps',
    price: 'RM149',
    period: '/mth',
    rrp: 'RM159',
    note: 'New sign-up · + 3 months free',
    blurb: 'Plenty of headroom for bigger households and gaming.',
    features: [
      '500Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router + mesh option',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 500Mbps at RM149/mth. Is it available at my address?",
  },
  {
    name: 'Home Fibre 1Gbps',
    price: 'RM249',
    period: '/mth',
    note: 'New sign-up · + 3 months free',
    blurb: 'Serious speed for heavy streaming, gaming and WFH.',
    features: [
      '1Gbps download speed',
      'Unlimited internet',
      'Premium mesh WiFi coverage',
      'Priority support',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 1Gbps at RM249/mth with 3 months free. Is it available at my address?",
  },
  {
    name: 'Home Fibre 2Gbps',
    price: 'RM319',
    period: '/mth',
    note: 'New sign-up · + 3 months free',
    blurb: 'Our fastest fibre for the busiest smart homes.',
    features: [
      '2Gbps download speed',
      'Unlimited internet',
      'Whole-home mesh WiFi',
      'Selected coverage areas',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 2Gbps at RM319/mth with 3 months free. Is it available at my address?",
  },
]

const faqs = [
  {
    q: 'Are the promo prices really available?',
    a: 'Yes — the prices shown are current new-sign-up offers (with rebates and free months where noted). Offers change regularly and depend on the fibre infrastructure at your address, so we always confirm the exact deal you qualify for before sign-up.',
  },
  {
    q: 'I’m already a Maxis postpaid customer — can I save more?',
    a: 'Often yes. Existing Maxis postpaid customers can qualify for converged bundle prices on Home Fibre. Tell us your postpaid plan on WhatsApp and we’ll work out your best combined deal.',
  },
  {
    q: 'How do I know if fibre is available at my home?',
    a: 'Coverage varies street by street. Send us your address on WhatsApp and we’ll check Maxis fibre availability for you — and suggest Home 5G WiFi if fibre isn’t there yet.',
  },
  {
    q: 'Is the router included?',
    a: 'Yes. Maxis Home Fibre plans come with a free WiFi 6 router, and higher-tier plans can include mesh units for better whole-home coverage.',
  },
  {
    q: 'How long does installation take?',
    a: 'Once your order is confirmed, Maxis typically schedules installation within a few working days depending on your area. We’ll keep you posted throughout.',
  },
  {
    q: 'Can I bundle fibre with a postpaid line?',
    a: 'Often yes — bundling home fibre with a Maxis postpaid plan can unlock discounts. Ask us and we’ll work out the best combined deal for you.',
  },
]

export default function HomeFibrePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Home Fibre', path: '/home-fibre' },
        ])}
      />

      <PageHero
        eyebrow="Maxis Home Fibre"
        title="Fast, reliable fibre for the whole home"
        description="Unlimited broadband from 100Mbps to 2Gbps with a free WiFi 6 router. We'll check your coverage first."
        message={waMessages.homeFibre}
        buttonLabel="Check my coverage"
      />

      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Choose your speed"
            description="New sign-up prices — rebates and free months already included, usual price struck through. Not sure which speed? We'll recommend one."
          />
          <div className="mt-xl grid items-start gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
            {/* Converged-offer upsell for existing Maxis postpaid customers. */}
            <div className="flex flex-col justify-center rounded-card border border-dashed border-maxis-green bg-surface-container-low p-lg sm:p-xl">
              <h3 className="text-xl font-bold text-on-surface">
                Already on Maxis postpaid?
              </h3>
              <p className="mt-sm text-sm text-on-surface-variant">
                Existing Maxis postpaid customers can unlock even lower converged
                bundle prices on Home Fibre. Tell us your plan and we&rsquo;ll
                work out your best combined deal.
              </p>
              <WhatsAppButton
                message="Hi, I'm an existing Maxis postpaid customer — what converged Home Fibre bundle price can I get?"
                size="lg"
                className="mt-lg w-full"
              >
                Get my bundle price
              </WhatsAppButton>
            </div>
          </div>
          <p className="mt-lg text-sm text-on-surface-faint">
            Prices shown are current new-sign-up offers and are a guide only —
            subject to Maxis&rsquo; terms, contract period, fibre infrastructure
            (HSBA / Allo / CTS / Sacofa) and coverage at your address. Struck-
            through figures are the standard monthly price. We&rsquo;ll confirm
            the exact plan and price available to you before sign-up.
          </p>
        </Container>
      </section>

      {/* Coverage — Shock Green band (brand primary colour) */}
      <section className="bg-surface-brand py-3xl">
        <Container>
          <div className="grid gap-xl lg:grid-cols-2 lg:items-center">
            <div className="text-on-accent">
              <p className="text-sm font-bold uppercase tracking-wide text-on-accent/80">
                Coverage
              </p>
              <h2 className="mt-sm text-3xl font-extrabold tracking-tight sm:text-4xl">
                Check your address first
              </h2>
              <p className="mt-md max-w-measure-sm text-lg text-on-accent/90">
                Fibre coverage varies street by street. Send us your address and
                we&rsquo;ll confirm what&rsquo;s available — and suggest Home 5G
                WiFi if fibre isn&rsquo;t there yet.
              </p>
            </div>
            <CoverageChecker />
          </div>
        </Container>
      </section>

      <Faq items={faqs} title="Home Fibre questions" />

      <CtaBand
        title="Prefer to just message us?"
        message={waMessages.coverage}
        buttonLabel="Ask on WhatsApp"
      />
    </>
  )
}
