import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { waMessages } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { PlanCard, type Plan } from '@/components/sections/PlanCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { Faq } from '@/components/sections/Faq'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Maxis Home 5G WiFi Plans | Wireless Broadband, No Fibre Needed',
  description:
    'Maxis Home 5G WiFi gives you fast home internet with a plug-and-play router — no fibre installation required. Ideal where fibre isn’t available. Maxis 5G in Selangor.',
  path: '/home-wifi',
})

const plans: Plan[] = [
  {
    name: 'Home 5G WiFi Lite',
    price: 'RM99',
    period: '/mth',
    blurb: 'Wireless home internet, ready in minutes.',
    features: [
      'Fast Maxis 5G speeds',
      'Generous monthly data quota',
      'Plug-and-play 5G router',
      'No fibre installation needed',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home 5G WiFi Lite. Is 5G available at my address?",
  },
  {
    name: 'Home 5G WiFi Plus',
    price: 'RM139',
    period: '/mth',
    blurb: 'More data and speed for the whole household.',
    features: [
      'Priority Maxis 5G speeds',
      'Large data quota',
      'Premium 5G WiFi router',
      'Wide whole-home coverage',
      'Setup in minutes',
    ],
    featured: true,
    badge: 'Most popular',
    whatsappMessage:
      "Hi, I'm interested in Maxis Home 5G WiFi Plus. Is 5G available at my address?",
  },
  {
    name: 'Home 5G Unlimited',
    price: 'RM179',
    period: '/mth',
    blurb: 'Unlimited wireless data for heavy usage.',
    features: [
      'Unlimited 5G data',
      'Top-tier 5G router',
      'Best for streaming & WFH',
      'No fixed-line contract',
    ],
    whatsappMessage:
      "Hi, I'm interested in Maxis Home 5G Unlimited WiFi. Is 5G available at my address?",
  },
]

const faqs = [
  {
    q: 'How is 5G WiFi different from fibre?',
    a: 'Home 5G WiFi connects wirelessly over the Maxis 5G network instead of a physical fibre cable. There’s no installation appointment — you just plug in the router and go. It’s ideal where fibre isn’t available yet.',
  },
  {
    q: 'Do I need an installation?',
    a: 'No. The 5G router is plug-and-play — power it on, and you’re online in minutes. We’ll help you get set up over WhatsApp if you need a hand.',
  },
  {
    q: 'Is 5G available at my address?',
    a: 'Maxis 5G coverage is expanding but not everywhere yet. Send us your address and we’ll check whether 5G Home WiFi will work well for you, or recommend Home Fibre instead.',
  },
  {
    q: 'Can I move the router between homes?',
    a: 'Generally yes — because there’s no fixed line, you can use it anywhere with good Maxis 5G coverage, subject to plan terms. Great for renters and temporary homes.',
  },
]

export default function HomeWifiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Home WiFi', path: '/home-wifi' },
        ])}
      />

      <PageHero
        eyebrow="Maxis Home 5G WiFi"
        title="Home internet without the wait"
        description="No fibre at your address? Get online in minutes with a plug-and-play 5G router — no installation. We'll check 5G coverage first."
        message={waMessages.homeWifi}
        buttonLabel="Check 5G coverage"
      />

      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Wireless plans to suit your usage"
            description="From light browsing to unlimited streaming. We'll confirm it works at your address."
          />
          <div className="mt-xl grid items-start gap-lg md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-lg text-sm text-on-surface-faint">
            Data quotas, speeds and router models are a guide and subject to
            Maxis&rsquo; current terms and 5G coverage at your address.
          </p>
        </Container>
      </section>

      <Faq items={faqs} title="Home 5G WiFi questions" />

      <CtaBand
        title="See if 5G works at your place"
        message={waMessages.coverage}
        buttonLabel="Check coverage on WhatsApp"
      />
    </>
  )
}
