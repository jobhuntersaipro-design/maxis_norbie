'use client'

import { useEffect } from 'react'
import { trackContactConversion } from '@/lib/gtag'

/**
 * Fires the Google Ads "Contact" conversion whenever any wa.me link on the
 * page is clicked. A single delegated listener covers every WhatsApp CTA
 * (floating button, plan cards, CTA bands) without touching each component.
 */
export function WhatsAppConversionTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('a[href*="wa.me/"]')) trackContactConversion()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
