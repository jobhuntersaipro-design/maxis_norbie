import { Container } from '@/components/ui/Container'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { waMessages } from '@/lib/whatsapp'

/** Full-width "Get faster Home Fibre" CTA band used across the blog. */
export function FibreCtaBand() {
  return (
    <section className="bg-surface-container-low py-2xl">
      <Container>
        <div className="grid items-center gap-lg sm:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-bold text-on-surface sm:text-3xl">
              Get faster Home Fibre
            </h2>
            <p className="mt-sm max-w-measure text-on-surface-variant">
              Maxis Home Fibre from RM89/mth with a free WiFi 6 router, free
              installation and unlimited internet. We&rsquo;ll check coverage at
              your address.
            </p>
          </div>
          <WhatsAppButton
            message={waMessages.homeFibre}
            size="lg"
            className="w-full shrink-0 sm:w-auto"
          >
            Check coverage on WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  )
}
