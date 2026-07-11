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
import { PostCard } from '@/components/blog/PostCard'
import { posts } from '@/data/posts'
import { PlansCarousel } from '@/components/sections/PlansCarousel'
import { Faq, type FaqItem } from '@/components/sections/Faq'
import { CoverageChecker } from '@/components/sections/CoverageChecker'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { ArrowRightIcon } from '@/components/ui/icons'

export const metadata: Metadata = buildMetadata({
  title: 'Maxis Home Fibre | Plans from RM89/mth',
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
    note: '24-month contract',
    blurb: 'Great for smaller homes and everyday streaming.',
    features: [
      '100Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 100Mbps (RM89/mth). Is it available at my address?",
  },
  {
    name: 'Home Fibre 300Mbps',
    price: 'RM99',
    period: '/mth',
    note: 'Best value · 36-month contract',
    blurb: 'The all-rounder for busy homes and working from home.',
    features: [
      '300Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 300Mbps at RM99/mth (36-month contract). Is it available at my address?",
  },
  {
    name: 'Home Fibre 300Mbps',
    price: 'RM129',
    period: '/mth',
    note: '24-month contract',
    promo: '3 months free',
    blurb: 'The same all-round speed on a shorter 24-month contract.',
    features: [
      '300Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router',
      'Free installation',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 300Mbps at RM129/mth with 3 months free (24-month contract). Is it available at my address?",
  },
  {
    name: 'Home Fibre 500Mbps',
    price: 'RM149',
    period: '/mth',
    note: '24-month contract',
    promo: '3 months free',
    blurb: 'Plenty of headroom for bigger households and gaming.',
    features: [
      '500Mbps download speed',
      'Unlimited internet',
      'Free WiFi 6 router + mesh option',
      'Free installation',
    ],
    featured: true,
    badge: 'Most popular',
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 500Mbps (RM149/mth, 3 months free). Is it available at my address?",
  },
  {
    name: 'Home Fibre 1Gbps',
    price: 'RM249',
    period: '/mth',
    note: '24-month contract',
    promo: '3 months free',
    blurb: 'Serious speed for heavy streaming, gaming and WFH.',
    features: [
      '1Gbps download speed',
      'Unlimited internet',
      'Premium mesh WiFi coverage',
      'Priority support',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 1Gbps (RM249/mth, 3 months free). Is it available at my address?",
  },
  {
    name: 'Home Fibre 2Gbps',
    price: 'RM319',
    period: '/mth',
    note: '24-month contract',
    promo: '3 months free',
    blurb: 'Our fastest fibre for the busiest smart homes.',
    features: [
      '2Gbps download speed',
      'Unlimited internet',
      'Whole-home mesh WiFi',
      'Selected coverage areas',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home Fibre 2Gbps (RM319/mth, 3 months free). Is it available at my address?",
  },
]

const included = [
  {
    title: 'Level up your Maxis experience',
    body: 'Unlimited home and mobile data for everyone in the family. Just add any Maxis Postpaid plan.',
  },
  {
    title: 'Level up to faster, better and stronger home WiFi',
    body: 'Upgrade to the next-generation Premium WiFi 7 certified router for faster connection, stronger coverage and better device capacity.',
  },
  {
    title: 'Level up with the latest devices on Zerolution',
    body: 'Stream 4K entertainment with 65" Samsung 4K TV, Apple TV & mesh WiFi.',
  },
  {
    title: 'Get access to sooka VIP TV',
    body: 'Uninterrupted live sports and entertainment on the big screen with sooka VIP TV access. Get exclusive bundled prices on Maxis TV after your fibre installation.',
  },
  {
    title: 'Maxis MaxWiFi by Maxperts',
    body: 'Get total WiFi coverage and tech support for your home any time you need.',
  },
]

const faqs: FaqItem[] = [
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
    a: 'Most plans are on a 24-month contract; the 300Mbps RM99/mth plan is on a 36-month contract. Early termination within the contract period may incur charges. We’ll explain the exact terms before you commit.',
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
                Genuine Maxis Home Fibre Plans
              </span>
              <h1 className="mt-lg text-3xl font-extrabold leading-[1.08] tracking-tight text-on-inverse sm:text-5xl lg:text-6xl">
                Maxis Home Fibre Malaysia — Unlimited Internet{' '}
                <span className="text-accent">from RM89/mth</span>
              </h1>
              <p className="mt-lg max-w-measure-sm text-base text-on-inverse-variant sm:text-lg">
                Superfast unlimited home WiFi with free installation and a free
                WiFi 6 router — coverage checked and sign-up sorted over
                WhatsApp in minutes.
              </p>

              <div className="mt-xl flex flex-col gap-sm sm:flex-row">
                <WhatsAppButton
                  message={waMessages.homeFibre}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Chat with us
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

            <div className="relative">
              <Image
                src="/images/main-hero.webp"
                alt="Couple at home enjoying unlimited high-speed Maxis home internet with a plug-and-play Maxis 5G Home WiFi router"
                width={2400}
                height={1600}
                priority
                className="h-auto w-full rounded-card shadow-lg"
              />
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
            description="Current new sign-up prices. Not sure which speed? Tell us how many people and devices are online at once and we'll recommend one."
          />
          {/* Horizontal carousel with < > controls (see PlansCarousel) */}
          <div className="mt-xl">
            <PlansCarousel initialCard={plans.findIndex((p) => p.featured)}>
              {plans.map((plan) => (
                <div
                  key={`${plan.name}-${plan.price}`}
                  data-card
                  className="group w-[76%] shrink-0 snap-start sm:w-[43%] lg:w-[29%]"
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
            and coverage at your address. We&rsquo;ll confirm the exact plan and
            price available to you before sign-up.
          </p>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="About the plan"
            title="More than just fast internet"
          />
          <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
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
                body: 'Deal directly with us on WhatsApp. Real answers, fast.',
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

      {/* Latest guides — surfaces the newest SEO posts on the homepage */}
      <section className="bg-surface-container-low py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Guides"
            title="Home internet, made simple"
            description="Practical tips on speed, WiFi coverage and picking the right plan."
          />
          <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-xl">
            <LinkButton href="/blog" variant="outline" size="lg">
              View all guides
              <ArrowRightIcon className="h-5 w-5" />
            </LinkButton>
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
