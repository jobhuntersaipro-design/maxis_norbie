import { site } from './site'

const WHATSAPP_NUMBER = '60164609428' // reseller sales number (Sofie)

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Standard pre-filled messages, kept in one place so copy stays consistent.
 */
export const waMessages = {
  general: `Hi ${site.agentName}, I'd like to know more about Maxis Home Fibre.`,
  homeFibre:
    "Hi, I'm interested in Maxis Home Fibre. What plans are available at my address?",
  coverage: 'Hi, can you check Maxis Home Fibre coverage for my address?',
  ipad:
    "Hi, I'm interested in the Maxis Home Fibre 300Mbps + iPad for RM1/mth offer. Am I eligible?",
} as const
