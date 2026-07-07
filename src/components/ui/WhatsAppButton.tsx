import { waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'

type Size = 'md' | 'lg'

const sizes: Record<Size, string> = {
  md: 'px-lg py-sm text-sm',
  lg: 'px-xl py-md text-base',
}

const iconSizes: Record<Size, string> = {
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

interface WhatsAppButtonProps {
  message: string
  children?: React.ReactNode
  size?: Size
  /** Solid green pill (default) or a lighter outline treatment. */
  variant?: 'solid' | 'outline'
  className?: string
}

/**
 * The primary conversion action across the whole site — a real crawlable
 * <a href> that opens WhatsApp (Sofie) with a pre-filled message.
 */
export function WhatsAppButton({
  message,
  children = 'WhatsApp us',
  size = 'md',
  variant = 'solid',
  className = '',
}: WhatsAppButtonProps) {
  const skin =
    variant === 'solid'
      ? 'bg-accent text-on-accent hover:brightness-95 shadow-sm'
      : 'border border-outline bg-surface text-on-surface hover:bg-surface-container-low'

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-sm rounded-pill font-semibold leading-none transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue ${sizes[size]} ${skin} ${className}`}
    >
      <WhatsAppIcon className={iconSizes[size]} />
      {children}
    </a>
  )
}
