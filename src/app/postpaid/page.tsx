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
  title: 'Maxis Postpaid Plans | Switch to Maxis 5G',
  description:
    'Compare Maxis Postpaid plans — unlimited calls, big 5G data and 0% Zerolution device instalments. Switch to Maxis 5G in Selangor & the Klang Valley. WhatsApp us.',
  path: '/postpaid',
})

const plans: Plan[] = [
  {
    name: 'Maxis Postpaid 89',
    price: 'RM89',
    period: '/mth',
    blurb: 'Everyday 5G with plenty of data for one person.',
    features: [
      'Unlimited calls to all networks',
      '100GB 5G high-speed data',
      'Unlimited basic internet',
      'Eligible for 0% Zerolution devices',
    ],
    whatsappMessage:
      "Hi, I'm interested in the Maxis Postpaid 89 plan. Can you help me sign up?",
  },
  {
    name: 'Maxis Postpaid 109',
    price: 'RM109',
    period: '/mth',
    blurb: 'Our most popular plan — the sweet spot for most people.',
    features: [
      'Unlimited calls & SMS',
      '200GB 5G high-speed data',
      'Unlimited basic internet',
      'Best pairing for flagship phones',
      '5G hotspot included',
    ],
    featured: true,
    badge: 'Most popular',
    whatsappMessage:
      "Hi, I'm interested in the Maxis Postpaid 109 plan. Can you help me sign up?",
  },
  {
    name: 'Maxis Postpaid 139',
    price: 'RM139',
    period: '/mth',
    blurb: 'Maximum data and perks for heavy users and families.',
    features: [
      'Unlimited calls & SMS',
      'Unlimited 5G high-speed data',
      'Premium device deals',
      'Priority network experience',
      'Add family lines & devices',
    ],
    whatsappMessage:
      "Hi, I'm interested in the Maxis Postpaid 139 plan. Can you help me sign up?",
  },
]

const faqs = [
  {
    q: 'Can I keep my current number?',
    a: 'Yes. If you’re switching from another network you can port your number to Maxis, or transfer an existing Maxis line. We’ll walk you through it on WhatsApp.',
  },
  {
    q: 'What is 0% Zerolution?',
    a: 'Zerolution lets you spread the cost of a device over 24 or 36 months at 0% interest when you take an eligible Maxis postpaid plan, instead of paying the full price upfront.',
  },
  {
    q: 'Are these the same prices as the Maxis store?',
    a: 'Yes — you get the same Maxis plans and pricing. Prices can change, so we always confirm the current rate with you before you sign up.',
  },
  {
    q: 'How do I sign up?',
    a: 'Message us on WhatsApp with the plan and device you want. We’ll check eligibility, confirm the price and arrange the paperwork and activation.',
  },
]

export default function PostpaidPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Postpaid', path: '/postpaid' },
        ])}
      />

      <PageHero
        eyebrow="Maxis Postpaid"
        title="Switch to Maxis 5G postpaid"
        description="Unlimited calls, big 5G data and 0% device instalments. Sorted by a real person."
        message={waMessages.postpaid}
        buttonLabel="Ask about postpaid"
      />

      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Pick a plan, or let us match you"
            description="Not sure? Tell us your usage and we'll match you."
          />
          <div className="mt-xl grid items-start gap-lg md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-lg text-sm text-on-surface-faint">
            Plan details are a guide and subject to Maxis&rsquo; current terms.
            We&rsquo;ll confirm the latest data quotas, prices and promotions
            before you sign up.
          </p>
        </Container>
      </section>

      <Faq items={faqs} title="Postpaid questions" />

      <CtaBand
        title="Ready to switch?"
        message={waMessages.postpaid}
        buttonLabel="Get started on WhatsApp"
      />
    </>
  )
}
