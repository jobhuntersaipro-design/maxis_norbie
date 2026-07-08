import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbLd } from '@/lib/schema'
import { Container } from '@/components/ui/Container'
import { Squiggle } from '@/components/ui/Squiggle'
import { CoverageChecker } from '@/components/sections/CoverageChecker'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { waMessages } from '@/lib/whatsapp'

export const metadata: Metadata = buildMetadata({
  title: 'Check Maxis Home Fibre Coverage at Your Address',
  description:
    'Check if Maxis Home Fibre is available at your address. Send us your details and we’ll confirm coverage and your best plan over WhatsApp — no commitment.',
  path: '/coverage',
})

const steps = [
  {
    title: '1. Send your address',
    body: 'Enter your address, postcode and property type below, or message us directly on WhatsApp.',
  },
  {
    title: '2. We check availability',
    body: 'We check which fibre infrastructure serves your address and what speeds are available.',
  },
  {
    title: '3. Get your best plan',
    body: 'We reply with the plans and promotions you qualify for — including any free-gift offers.',
  },
]

export default function CoveragePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Coverage', path: '/coverage' },
        ])}
      />

      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-brand">
        <Squiggle
          tone="white"
          className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 opacity-20"
        />
        <Container className="relative py-2xl sm:py-3xl">
          <div className="grid gap-xl lg:grid-cols-2 lg:items-center">
            <div className="text-on-accent">
              <p className="text-sm font-bold uppercase tracking-wide text-on-accent/80">
                Coverage
              </p>
              <h1 className="mt-sm text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Is Maxis Home Fibre available at your address?
              </h1>
              <p className="mt-md max-w-measure-sm text-lg text-on-accent/90">
                Fibre availability varies street by street. Pop in your details
                and we&rsquo;ll confirm coverage — then send back the best plan
                you can get.
              </p>
            </div>
            <CoverageChecker />
          </div>
        </Container>
      </section>

      <section className="py-3xl">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Coverage check in 3 steps"
          />
          <div className="mt-xl grid gap-lg sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.title}
                className="rounded-card border border-outline-variant bg-surface p-lg transition-shadow hover:shadow-lg"
              >
                <div className="mb-md h-1.5 w-10 rounded-pill bg-accent" />
                <h2 className="text-base font-bold text-on-surface">
                  {s.title}
                </h2>
                <p className="mt-sm text-sm leading-relaxed text-on-surface-variant">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-lg max-w-measure text-on-surface-variant">
            No fibre at your address yet? Let us know and we&rsquo;ll suggest the
            best alternative to get you online.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Prefer to just message us?"
        message={waMessages.coverage}
        buttonLabel="Check coverage on WhatsApp"
      />
    </>
  )
}
