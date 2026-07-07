import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Squiggle } from '@/components/ui/Squiggle'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  message: string
  buttonLabel?: string
  children?: ReactNode
}

/** Compact page header used on plan / about / contact pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  message,
  buttonLabel = 'WhatsApp us',
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low">
      <Squiggle
        tone="green"
        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-15"
      />
      <Container className="relative py-2xl sm:py-3xl">
        <div className="max-w-measure-lg">
          <p className="text-sm font-semibold uppercase tracking-wide text-maxis-green-strong">
            {eyebrow}
          </p>
          <h1 className="mt-sm text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
            {title}
          </h1>
          <p className="mt-md text-lg text-on-surface-variant">{description}</p>
          <div className="mt-lg">
            <WhatsAppButton message={message} size="lg">
              {buttonLabel}
            </WhatsAppButton>
          </div>
          {children}
        </div>
      </Container>
    </section>
  )
}
