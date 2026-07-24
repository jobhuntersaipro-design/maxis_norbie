export const GOOGLE_ADS_ID = 'AW-18345188244'

// Conversion label for the "Contact (2)" action, from the Google Ads event snippet.
export const CONTACT_CONVERSION_LABEL = '-vl3CMCkvdUcEJS31atE'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Report a WhatsApp click to Google Ads as a "Contact" conversion. */
export function trackContactConversion(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${CONTACT_CONVERSION_LABEL}`,
    value: 1.0,
    currency: 'MYR',
  })
}
