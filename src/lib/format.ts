/** RM currency + price display helpers, kept consistent across the site. */

export function formatRM(amount: number): string {
  return `RM${amount.toLocaleString('en-MY')}`
}

/**
 * The public "from" price line for a device. Falls back gracefully when a
 * device is upfront-only (fromMonthly null) or has no listed RRP.
 */
export function priceLabel(fromMonthly: number | null): {
  lead: string
  value: string
  suffix: string
} {
  if (fromMonthly === null) {
    return { lead: '', value: 'Ask us', suffix: 'for the best price' }
  }
  if (fromMonthly === 0) {
    return { lead: 'From', value: 'RM0', suffix: '/mth on eligible plans' }
  }
  return { lead: 'From', value: `RM${fromMonthly}`, suffix: '/mth' }
}
