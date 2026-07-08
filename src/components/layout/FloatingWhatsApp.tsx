import { waLink, waMessages } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/icons'

/**
 * Persistent floating WhatsApp button (bottom-right on every page).
 * Uses the Maxis Shock Green brand colour with a pulsing ring + idle bob.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-lg right-lg z-50 inline-flex items-center gap-sm rounded-pill bg-accent px-md py-md font-semibold text-on-accent shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue sm:px-lg"
    >
      <span
        aria-hidden="true"
        className="wa-ring absolute inset-0 -z-10 rounded-pill bg-accent"
      />
      <WhatsAppIcon className="wa-bob h-6 w-6 shrink-0" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
