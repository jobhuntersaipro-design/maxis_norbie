import { priceLabel } from '@/lib/format'

interface PriceTagProps {
  fromMonthly: number | null
  size?: 'sm' | 'lg'
}

export function PriceTag({ fromMonthly, size = 'sm' }: PriceTagProps) {
  const { lead, value, suffix } = priceLabel(fromMonthly)
  const valueCls = size === 'lg' ? 'text-4xl' : 'text-2xl'

  return (
    <p className="flex flex-wrap items-baseline gap-x-xs text-on-surface">
      {lead && (
        <span className="text-sm font-medium text-on-surface-variant">
          {lead}
        </span>
      )}
      <span className={`${valueCls} font-extrabold tracking-tight`}>
        {value}
      </span>
      <span className="text-sm font-medium text-on-surface-variant">
        {suffix}
      </span>
    </p>
  )
}
