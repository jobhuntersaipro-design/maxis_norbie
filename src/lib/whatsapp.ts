const WHATSAPP_NUMBER = '60164609428' // sales WhatsApp number

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Standard pre-filled messages, kept in one place so copy stays consistent.
 */
export const waMessages = {
  general: "Hi, I'm interested in a Maxis Home Fibre plan. Can you help me?",
  homeFibre:
    "Hi, I'm interested in Maxis Home Fibre. What plans are available at my address?",
  coverage: 'Hi, can you check Maxis Home Fibre coverage for my address?',
  ipad:
    "Hi, I'm interested in the Maxis Home Fibre 300Mbps + iPad for RM1/mth offer. Am I eligible?",
} as const
