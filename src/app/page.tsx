import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import { waMessages } from '@/lib/whatsapp'
import { faqLd } from '@/lib/schema'
import { Container } from '@/components/ui/Container'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { LinkButton } from '@/components/ui/Button'
import { Squiggle } from '@/components/ui/Squiggle'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { PlanCard, type Plan } from '@/components/sections/PlanCard'
import { PlansCarousel } from '@/components/sections/PlansCarousel'
import { Faq, type FaqItem } from '@/components/sections/Faq'
import { CoverageChecker } from '@/components/sections/CoverageChecker'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/icons'

export const metadata: Metadata = buildMetadata({
  title: 'Maxis Home Fibre | Plans from RM89/mth + Free iPad Offer',
  description: site.description,
  path: '/',
})

const heroChips = [
  'Free WiFi 6 router',
  'Free installation',
  'Unlimited internet',
]

// New sign-up "from" prices with the standard price struck through.
// Source: Reseller Offer Matrix (materials/). ⚠️ Re-verify vs the reseller
// portal before publishing — prices depend on infra (HSBA/Allo/CTS/Sacofa/NGBB),
// Transfer vs non-Transfer, and coverage. Full rebate table is NOT published here.
const plans: Plan[] = [
  {
    name: 'Home Fibre 100Mbps',
    price: 'RM89',
    period: '/mth',
    note: 'New sign-up',
    blurb: 'Great for smaller homes and everyday streaming.',
    features: [
      '100Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 100Mbps. Is it available at my address?",
  },
  {
    name: 'Home Fibre 300Mbps',
    price: 'RM99',
    period: '/mth',
    rrp: 'RM139',
    note: 'Most popular · iPad offer available',
    blurb: 'The all-rounder for busy homes and working from home.',
    features: [
      '300Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
      'Or add an iPad for RM1/mth (see offer)',
    ],
    featured: true,
    badge: 'Most popular',
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 300Mbps. Is it available at my address?",
  },
  {
    name: 'Home Fibre 500Mbps',
    price: 'RM129',
    period: '/mth',
    rrp: 'RM159',
    note: 'Super Saver',
    blurb: 'Plenty of headroom for bigger households and gaming.',
    features: [
      '500Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router + mesh option',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 500Mbps. Is it available at my address?",
  },
  {
    name: 'Home Fibre 1Gbps',
    price: 'RM159',
    period: '/mth',
    rrp: 'RM249',
    note: 'Super Saver',
    blurb: 'Serious speed for heavy streaming, gaming and WFH.',
    features: [
      '1Gbps download speed',
      'Unlimited internet',
      'Premium mesh WiFi coverage',
      'Priority support',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 1Gbps. Is it available at my address?",
  },
  {
    name: 'Home Fibre 2Gbps',
    price: 'RM319',
    period: '/mth',
    note: '+ 3 months free',
    blurb: 'Our fastest fibre for the busiest smart homes.',
    features: [
      '2Gbps download speed',
      'Unlimited internet',
      'Whole-home mesh WiFi',
      'Selected coverage areas',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 2Gbps. Is it available at my address?",
  },
]

const included = [
  {
    title: 'Free WiFi 6 router',
    body: 'A modern WiFi 6 router included with every plan — mesh units on higher tiers.',
  },
  {
    title: 'Free installation',
    body: 'Standard installation by a Maxis technician at no cost.',
  },
  {
    title: 'Unlimited internet',
    body: 'No data caps — stream, game and work as much as you like.',
  },
  {
    title: 'Free Home WiFi analysis',
    body: 'We help make sure the WiFi reaches every corner of your home.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'How do I get the iPad for RM1/mth?',
    a: 'Sign up for Maxis Home Fibre 300Mbps on a 36-month contract at RM139/mth as a switchover / transfer customer, and you can get an Apple 11-inch iPad (128GB, RRP RM1,599) on Home Zerolution for RM1/mth with the device advance payment waived. It’s while stocks last — WhatsApp us to check you’re eligible and that stock is available.',
  },
  {
    q: 'Are the promo prices really available?',
    a: 'Yes — the prices shown are current new-sign-up offers. The exact price depends on the fibre infrastructure at your address and whether you’re transferring from another provider, so we always confirm your best available deal before sign-up.',
  },
  {
    q: 'How do I check if fibre is available at my home?',
    a: 'Coverage varies street by street. Use the coverage checker above or send us your address on WhatsApp and we’ll confirm Maxis Home Fibre availability for you.',
  },
  {
    q: 'What’s included with every plan?',
    a: 'Every plan comes with a free WiFi 6 router, free standard installation, unlimited internet and a free Home WiFi analysis. Higher-speed plans can include mesh WiFi units for better whole-home coverage.',
  },
  {
    q: 'I’m switching from unifi / TM — can you transfer me?',
    a: 'Yes. We handle switchover (transfer request) from other providers, and some plans include extra free months for switchers. Send us your details on WhatsApp and we’ll sort it.',
  },
  {
    q: 'How long does installation take?',
    a: 'Once your order is confirmed, Maxis usually schedules installation within a few working days depending on your area. We’ll keep you posted throughout.',
  },
  {
    q: 'Is there a contract?',
    a: 'Most plans are on a 24-month contract; the iPad offer is a 36-month contract. Early termination within the contract period may incur charges. We’ll explain the exact terms before you commit.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-inverse">
        <Squiggle
          tone="green"
          className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 opacity-20"
        />
        <Squiggle
          tone="green"
          className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 opacity-10"
        />
        <Container className="relative py-3xl">
          <div className="grid items-center gap-xl lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-sm rounded-pill bg-accent px-md py-xs text-xs font-bold uppercase tracking-wide text-on-accent">
                Maxis Home Fibre · from RM89/mth
              </span>
              <h1 className="mt-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-on-inverse sm:text-5xl lg:text-6xl">
                Superfast Home Fibre —{' '}
                <span className="text-accent">sorted over WhatsApp.</span>
              </h1>
              <p className="mt-lg max-w-measure-sm text-base text-on-inverse-variant sm:text-lg">
                Unlimited Maxis Home Fibre from RM89/mth, with a free WiFi 6
                router and free installation.
              </p>

              <div className="mt-xl flex flex-col gap-sm sm:flex-row">
                <WhatsAppButton
                  message={waMessages.homeFibre}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Chat with {site.agentName}
                </WhatsAppButton>
                <LinkButton
                  href="#plans"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See plans
                  <ArrowRightIcon className="h-5 w-5" />
                </LinkButton>
              </div>

              <ul className="mt-xl flex flex-wrap gap-x-lg gap-y-sm">
                {heroChips.map((chip) => (
                  <li
                    key={chip}
                    className="flex items-center gap-sm text-sm font-medium text-on-inverse-variant"
                  >
                    <span className="h-1.5 w-1.5 rounded-pill bg-accent" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            {/* iPad offer teaser card */}
            <div className="relative">
              <a
                href="#ipad"
                className="group relative block overflow-hidden rounded-card bg-surface p-lg shadow-lg transition-transform hover:-translate-y-1 sm:p-xl"
              >
                <div className="flex items-start gap-md">
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-pill bg-accent px-md py-xs text-xs font-bold uppercase tracking-wide text-on-accent">
                      Limited-time offer
                    </span>
                    <p className="mt-md text-xl font-extrabold leading-tight text-on-surface sm:text-3xl">
                      300Mbps fibre + an Apple iPad for{' '}
                      <span className="text-maxis-green-strong">RM1/mth</span>
                    </p>
                    <p className="mt-sm text-on-surface-variant">
                      Get an 11-inch iPad (128GB, worth RM1,599) on Home
                      Zerolution.
                    </p>
                  </div>
                  <Image
                    src="/promo/ipad.webp"
                    alt="Apple 11-inch iPad free with Maxis Home Fibre 300Mbps"
                    width={110}
                    height={150}
                    className="hidden h-32 w-auto shrink-0 drop-shadow-lg sm:block"
                  />
                </div>
                <span className="mt-lg inline-flex items-center gap-xs font-semibold text-maxis-green-strong">
                  See the offer
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* iPad offer */}
      <section id="ipad" className="scroll-mt-24 py-3xl">
        <Container>
          <div className="overflow-hidden rounded-card border border-maxis-green bg-surface-container-low">
            <div className="grid gap-xl p-lg sm:p-2xl lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-pill bg-accent px-md py-xs text-xs font-bold uppercase tracking-wide text-on-accent">
                  Switch &amp; save
                </span>
                <h2 className="mt-md text-2xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
                  Get an Apple iPad for RM1/mth
                </h2>
                <p className="mt-md text-base text-on-surface-variant sm:text-lg">
                  Sign up for Maxis Home Fibre 300Mbps (36-month) at RM139/mth as
                  a switchover customer and take home an{' '}
                  <strong className="text-on-surface">
                    Apple 11-inch iPad (128GB)
                  </strong>{' '}
                  on Home Zerolution for just RM1/mth — device advance payment
                  fully waived.
                </p>
                <ul className="mt-lg grid gap-sm sm:grid-cols-2">
                  {[
                    'iPad 11-inch, 128GB (worth RM1,599)',
                    'RM0 device advance payment',
                    '300Mbps unlimited fibre',
                    'Free WiFi 6 router + installation',
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-sm text-sm text-on-surface"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-maxis-green-strong" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-xl">
                  <WhatsAppButton message={waMessages.ipad} size="lg">
                    Check if I&rsquo;m eligible
                  </WhatsAppButton>
                </div>
                <p className="mt-md text-xs text-on-surface-faint">
                  For switchover / transfer customers on eligible infrastructure,
                  subject to credit check and while stocks last. Terms apply —
                  we&rsquo;ll confirm eligibility before sign-up.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-card bg-surface-inverse p-lg text-center text-on-inverse">
                <Squiggle
                  tone="green"
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 opacity-15"
                />
                <p className="relative text-sm font-semibold uppercase tracking-wide text-on-inverse-variant">
                  Apple 11-inch iPad · 128GB
                </p>
                <div className="relative mx-auto mt-md flex items-center justify-center gap-md">
                  <Image
                    src="/promo/ipad.webp"
                    alt="Apple 11-inch iPad (128GB) — free with Maxis Home Fibre 300Mbps"
                    width={140}
                    height={190}
                    className="h-40 w-auto drop-shadow-lg"
                  />
                  <div className="text-left">
                    <p className="text-4xl font-extrabold leading-none tracking-tight text-accent sm:text-5xl">
                      RM1
                    </p>
                    <p className="mt-xs text-sm text-on-inverse-variant">
                      /mth &times; 36 months
                    </p>
                  </div>
                </div>
                <div className="relative mt-lg border-t border-on-inverse-variant/20 pt-md">
                  <p className="text-sm text-on-inverse-variant">
                    with Home Fibre 300Mbps
                  </p>
                  <p className="text-2xl font-bold text-on-inverse">
                    RM139<span className="text-sm font-medium">/mth</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 bg-surface-container-low py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Choose your speed"
            description="New sign-up prices — the usual price struck through. Not sure which speed? Tell us how many people and devices are online at once and we'll recommend one."
          />
          {/* Horizontal carousel with < > controls (see PlansCarousel) */}
          <div className="mt-xl">
            <PlansCarousel>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  data-card
                  className="w-[76%] shrink-0 snap-start sm:w-[43%] lg:w-[29%]"
                >
                  <PlanCard plan={plan} />
                </div>
              ))}
              <div
                data-card
                className="w-[76%] shrink-0 snap-start sm:w-[43%] lg:w-[29%]"
              >
                <div className="flex h-full flex-col justify-center rounded-card border border-dashed border-maxis-green bg-surface p-lg transition-shadow hover:shadow-lg sm:p-xl">
                  <h3 className="text-xl font-bold text-on-surface">
                    Already on Maxis postpaid?
                  </h3>
                  <p className="mt-sm text-sm text-on-surface-variant">
                    Existing Maxis postpaid customers can unlock lower converged
                    bundle prices on Home Fibre. Tell us your plan and we&rsquo;ll
                    work out your best deal.
                  </p>
                  <WhatsAppButton
                    message="Hi, I'm an existing Maxis postpaid customer — what converged Home Fibre price can I get?"
                    size="lg"
                    className="mt-lg w-full"
                  >
                    Get my bundle price
                  </WhatsAppButton>
                </div>
              </div>
            </PlansCarousel>
          </div>
          <p className="mt-lg text-sm text-on-surface-faint">
            Prices shown are current new-sign-up offers and are a guide only —
            subject to Maxis&rsquo; terms, contract period, fibre infrastructure
            and coverage at your address. Struck-through figures are the standard
            monthly price. We&rsquo;ll confirm the exact plan and price available
            to you before sign-up.
          </p>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Every plan includes"
            title="More than just fast internet"
          />
          <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <div
                key={item.title}
                className="rounded-card border border-outline-variant bg-surface p-lg transition-shadow hover:shadow-md"
              >
                <div className="mb-md h-1.5 w-10 rounded-pill bg-accent" />
                <h3 className="text-base font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-sm text-sm leading-relaxed text-on-surface-variant">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage — Shock Green band */}
      <section
        id="coverage"
        className="relative scroll-mt-24 overflow-hidden bg-surface-brand py-3xl"
      >
        <Squiggle
          tone="white"
          className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 opacity-20"
        />
        <Container className="relative">
          <div className="grid gap-xl lg:grid-cols-2 lg:items-center">
            <div className="text-on-accent">
              <p className="text-sm font-bold uppercase tracking-wide text-on-accent/80">
                Coverage
              </p>
              <h2 className="mt-sm text-2xl font-extrabold tracking-tight sm:text-4xl">
                Is fibre available at your place?
              </h2>
              <p className="mt-md max-w-measure-sm text-base text-on-accent/90 sm:text-lg">
                Pop in your address — we&rsquo;ll check Maxis Home Fibre coverage
                and send back your best plan.
              </p>
            </div>
            <CoverageChecker />
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Why buy from us"
            title="Home Fibre, sorted the easy way"
            description="Genuine Maxis Home Fibre with a real person who actually replies."
          />
          <div className="mt-xl grid gap-lg sm:grid-cols-3">
            {[
              {
                title: 'The real deal',
                body: 'Genuine Maxis Home Fibre plans, contracts and installation. Nothing grey-market.',
              },
              {
                title: 'One person, start to finish',
                body: `Deal directly with ${site.agentName} on WhatsApp. Real answers, fast.`,
              },
              {
                title: 'Best price, checked for you',
                body: 'We confirm the best offer you qualify for at your address before you sign up.',
              },
            ].map((r) => (
              <div
                key={r.title}
                className="rounded-card border border-outline-variant bg-surface p-lg transition-shadow hover:shadow-md"
              >
                <div className="mb-md h-1.5 w-10 rounded-pill bg-accent" />
                <h3 className="text-base font-bold text-on-surface">
                  {r.title}
                </h3>
                <p className="mt-sm text-sm leading-relaxed text-on-surface-variant">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div id="faq" className="scroll-mt-24">
        <Faq items={faqs} title="Home Fibre questions" />
      </div>

      <CtaBand
        title="Let's get you connected"
        message={waMessages.coverage}
        buttonLabel="Check coverage on WhatsApp"
      />
    </>
  )
}
