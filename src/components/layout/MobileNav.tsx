'use client'

import { useState } from 'react'
import { nav } from '@/lib/site'
import { waMessages } from '@/lib/whatsapp'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-pill text-on-surface hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-maxis-blue"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-outline-variant bg-surface shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col gap-xs px-md py-md">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-card px-md py-sm text-base font-semibold text-on-surface hover:bg-surface-container-low"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton
              message={waMessages.general}
              size="lg"
              className="mt-sm w-full"
            >
              Chat on WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </div>
  )
}
