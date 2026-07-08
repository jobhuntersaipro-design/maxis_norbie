import { Container } from '@/components/ui/Container'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Squiggle } from '@/components/ui/Squiggle'

interface CtaBandProps {
  title?: string
  description?: string
  message: string
  buttonLabel?: string
}

export function CtaBand({
  title = 'Ready when you are.',
  description = 'Tell us what you need. Straight answers, no hard sell.',
  message,
  buttonLabel = 'Chat with us',
}: CtaBandProps) {
  return (
    <section className="py-2xl">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-surface-inverse px-lg py-2xl text-center sm:px-2xl">
          <Squiggle
            tone="green"
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-20"
          />
          <Squiggle
            tone="green"
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 opacity-10"
          />
          <div className="relative mx-auto max-w-measure">
            <h2 className="text-2xl font-extrabold tracking-tight text-on-inverse sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-md max-w-measure-sm text-base text-on-inverse-variant sm:text-lg">
              {description}
            </p>
            <div className="mt-xl flex justify-center">
              <WhatsAppButton message={message} size="lg">
                {buttonLabel}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
