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
  blurb: string
  features: string[]
  featured?: boolean
  badge?: string
  whatsappMessage: string
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-card border p-lg sm:p-xl ${
        plan.featured
          ? 'border-maxis-green bg-surface shadow-lg ring-1 ring-maxis-green'
          : 'border-outline-variant bg-surface'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-lg inline-flex rounded-pill bg-accent px-md py-xs text-xs font-bold uppercase tracking-wide text-on-accent">
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-on-surface">{plan.name}</h3>
      <p className="mt-sm text-sm text-on-surface-variant">{plan.blurb}</p>

      <p className="mt-lg flex items-baseline gap-xs">
        <span className="text-4xl font-extrabold tracking-tight text-on-surface">
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

      <WhatsAppButton
        message={plan.whatsappMessage}
        size="lg"
        variant={plan.featured ? 'solid' : 'outline'}
        className="mt-xl w-full"
      >
        Get this plan
      </WhatsAppButton>
    </div>
  )
}
