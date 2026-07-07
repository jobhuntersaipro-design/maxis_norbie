import { site } from './site'

const WHATSAPP_NUMBER = '60164609428' // reseller sales number (Sofie)

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Standard pre-filled messages, kept in one place so copy stays consistent.
 * Device pages pass the device's own `whatsappMessage`.
 */
export const waMessages = {
  general: `Hi ${site.agentName}, I'd like some help choosing a Maxis phone or plan.`,
  moreDevices:
    "Hi, I'm looking for a device that's not listed on your site — can you help?",
  postpaid:
    "Hi, I'd like to switch to / sign up for a Maxis Postpaid plan. What are my options?",
  homeFibre:
    "Hi, I'm interested in Maxis Home Fibre. What plans are available in my area?",
  homeWifi:
    "Hi, I'm interested in Maxis Home 5G WiFi. Is it available at my address?",
  coverage:
    "Hi, can you check Maxis Home Fibre / 5G coverage for my address?",
} as const
