import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { CheckIcon } from '@/components/ui/icons'

export interface Plan {
  name: string
  price: string
  period?: string
  /** Optional original price, shown struck-through beside the price. */
  rrp?: string
  /** Optional small qualifier under the price, e.g. "36-month contract". */
  note?: string
  /** Optional promo tag shown as a dark ribbon on the top-right, e.g. "3 months free". */
  promo?: string
  blurb: string
  features: string[]
  featured?: boolean
  badge?: string
  whatsappMessage: string
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className="relative flex h-full flex-col rounded-card border border-outline-variant bg-surface p-lg transition-all duration-300 motion-reduce:transition-none sm:p-xl group-data-[selected=true]:scale-[1.02] group-data-[selected=true]:border-maxis-green group-data-[selected=true]:shadow-lg group-data-[selected=true]:ring-1 group-data-[selected=true]:ring-maxis-green motion-reduce:group-data-[selected=true]:scale-100"
    >
      {(plan.badge || plan.promo) && (
        <div className="absolute -top-3 left-lg right-lg flex items-center justify-between gap-sm">
          {plan.badge ? (
            <span className="inline-flex whitespace-nowrap rounded-pill bg-accent px-md py-xs text-xs font-bold uppercase tracking-wide text-on-accent">
              {plan.badge}
            </span>
          ) : (
            <span />
          )}
          {plan.promo && (
            <span className="inline-flex whitespace-nowrap rounded-pill bg-surface-inverse px-md py-xs text-xs font-bold uppercase tracking-wide text-accent shadow-md">
              {plan.promo}
            </span>
          )}
        </div>
      )}

      <h3 className="text-xl font-bold text-on-surface">{plan.name}</h3>
      <p className="mt-sm text-sm text-on-surface-variant">{plan.blurb}</p>

      <p className="mt-lg flex items-baseline gap-xs">
        <span className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm font-medium text-on-surface-variant">
            {plan.period}
          </span>
        )}
        {plan.rrp && (
          <span className="text-sm font-medium text-on-surface-faint line-through">
            {plan.rrp}
          </span>
        )}
      </p>
      {plan.note && (
        <p className="mt-xs text-xs font-semibold text-maxis-green-strong">
          {plan.note}
        </p>
      )}

      <ul className="mt-lg flex-1 space-y-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-sm text-sm text-on-surface">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-maxis-green-strong" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Outline by default; turns into the solid green pill on the selected
          card (same group-data mechanism as the card border). */}
      <WhatsAppButton
        message={plan.whatsappMessage}
        size="lg"
        variant="outline"
        className="mt-xl w-full group-data-[selected=true]:border-transparent group-data-[selected=true]:bg-accent group-data-[selected=true]:text-on-accent group-data-[selected=true]:shadow-sm group-data-[selected=true]:hover:bg-accent group-data-[selected=true]:hover:brightness-95"
      >
        Get this plan
      </WhatsAppButton>
    </div>
  )
}
