import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Squiggle } from '@/components/ui/Squiggle'
import { waMessages } from '@/lib/whatsapp'

export default function NotFound() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="mx-auto max-w-measure-sm text-center">
          <Squiggle tone="green" className="mx-auto h-16 w-16" />
          <h1 className="mt-lg text-4xl font-extrabold tracking-tight text-on-surface">
            Page not found
          </h1>
          <p className="mt-md text-lg text-on-surface-variant">
            The page you&rsquo;re after has moved or never existed. Let&rsquo;s
            get you back on track.
          </p>
          <div className="mt-xl flex flex-col justify-center gap-sm sm:flex-row">
            <LinkButton href="/" size="lg">
              Back to home
            </LinkButton>
            <WhatsAppButton
              message={waMessages.general}
              size="lg"
              variant="outline"
            >
              Ask us on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
