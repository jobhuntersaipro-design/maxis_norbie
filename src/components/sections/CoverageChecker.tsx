'use client'

import { useState } from 'react'
import { waLink } from '@/lib/whatsapp'
import { malaysiaStates, site } from '@/lib/site'
import { WhatsAppIcon, PinIcon } from '@/components/ui/icons'

type Dwelling = 'High-rise' | 'Landed'

const inputClass =
  'w-full rounded-card border border-outline bg-surface px-md py-sm text-on-surface placeholder:text-on-surface-faint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue'
const labelClass = 'mb-xs block text-sm font-semibold text-on-surface'

/**
 * Static-site coverage checker: gathers the address and opens WhatsApp with a
 * pre-filled enquiry so Sofie can check Maxis Fibre / 5G availability. No backend.
 */
export function CoverageChecker() {
  const [dwelling, setDwelling] = useState<Dwelling>('High-rise')
  const [unit, setUnit] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const [state, setState] = useState<string>('')

  const ready = address.trim().length > 3 && /^\d{4,5}$/.test(postcode.trim())

  const message = [
    `Hi ${site.agentName}, please check Maxis Home Fibre coverage for my address:`,
    `• Property: ${dwelling}`,
    address.trim() && `• Address: ${address.trim()}${unit.trim() ? `, Unit ${unit.trim()}` : ''}`,
    postcode.trim() && `• Postcode: ${postcode.trim()}`,
    `• State: ${state}`,
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <div className="overflow-hidden rounded-card border border-outline-variant bg-surface shadow-sm">
      <div className="border-b border-outline-variant bg-surface-container-low px-lg py-md sm:px-xl">
        <h3 className="flex items-center gap-sm text-lg font-bold text-on-surface">
          <PinIcon className="h-5 w-5 text-maxis-green-strong" />
          Check your coverage
        </h3>
        <p className="mt-xs text-sm text-on-surface-variant">
          Tell us where you are and we&rsquo;ll confirm Maxis Home Fibre
          availability at your address over WhatsApp.
        </p>
      </div>

      <div className="grid gap-lg p-lg sm:p-xl">
        {/* Dwelling */}
        <div>
          <span className={labelClass}>Property type</span>
          <div className="flex gap-sm">
            {(['High-rise', 'Landed'] as Dwelling[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDwelling(d)}
                aria-pressed={dwelling === d}
                className={`flex-1 rounded-card border px-md py-md text-sm font-semibold transition-colors sm:flex-none sm:px-xl ${
                  dwelling === d
                    ? 'border-maxis-green bg-accent text-on-accent'
                    : 'border-outline bg-surface text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Address + unit */}
        <div className="grid gap-lg sm:grid-cols-[1fr_auto]">
          <div>
            <label className={labelClass} htmlFor="cov-address">
              Street address
            </label>
            <input
              id="cov-address"
              className={inputClass}
              placeholder="e.g. 12, Jalan Mawar 3, Taman Sri Indah"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
            />
          </div>
          <div className="sm:w-40">
            <label className={labelClass} htmlFor="cov-unit">
              Unit / floor <span className="font-normal text-on-surface-faint">(optional)</span>
            </label>
            <input
              id="cov-unit"
              className={inputClass}
              placeholder="e.g. A-12-3"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
        </div>

        {/* Postcode + state */}
        <div className="grid gap-lg sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="cov-postcode">
              Postcode
            </label>
            <input
              id="cov-postcode"
              className={inputClass}
              placeholder="e.g. 47650"
              inputMode="numeric"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              autoComplete="postal-code"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="cov-state">
              State
            </label>
            <select
              id="cov-state"
              className={inputClass}
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select state</option>
              {malaysiaStates.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-sm sm:flex-row sm:items-center">
          <a
            href={ready ? waLink(message) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            className={`inline-flex items-center justify-center gap-sm rounded-pill px-xl py-md text-base font-semibold transition-all ${
              ready
                ? 'bg-accent text-on-accent hover:brightness-95'
                : 'pointer-events-none cursor-not-allowed bg-surface-dim text-on-surface-faint'
            }`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Check coverage on WhatsApp
          </a>
          {!ready && (
            <p className="text-xs text-on-surface-faint">
              Enter your street address and postcode to continue.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
