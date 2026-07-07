import { Container } from '@/components/ui/Container'
import { SectionHeading } from './SectionHeading'
import { site } from '@/lib/site'

const reasons = [
  {
    title: 'The real deal',
    body: 'Genuine Maxis plans, contracts and warranty. Nothing grey-market.',
  },
  {
    title: 'One person, start to finish',
    body: `Deal directly with ${site.agentName} on WhatsApp. Real answers, fast.`,
  },
  {
    title: '0% Zerolution',
    body: 'Spread the latest phones over 24–36 months at 0% interest.',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-surface py-2xl">
      <Container>
        <SectionHeading
          eyebrow="Why buy from us"
          title="A Maxis line, sorted the easy way"
          description="Same Maxis plans and pricing — with a real person who replies."
        />
        <div className="mt-xl grid gap-lg sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-card border border-outline-variant bg-surface p-lg"
            >
              <div className="mb-md h-1.5 w-10 rounded-pill bg-accent" />
              <h3 className="text-base font-bold text-on-surface">{r.title}</h3>
              <p className="mt-sm text-sm leading-relaxed text-on-surface-variant">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
