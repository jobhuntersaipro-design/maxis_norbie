import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-sm rounded-pill font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-hover focus-visible:outline-maxis-blue',
  accent:
    'bg-accent text-on-accent hover:brightness-95 focus-visible:outline-maxis-blue',
  outline:
    'border border-outline bg-surface text-on-surface hover:bg-surface-container-low focus-visible:outline-maxis-blue',
  ghost:
    'text-maxis-green-strong hover:bg-surface-container-low focus-visible:outline-maxis-blue',
}

const sizes: Record<Size, string> = {
  md: 'px-lg py-sm text-sm',
  lg: 'px-xl py-md text-base',
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
  /** Set for external links (WhatsApp, maps). */
  external?: boolean
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  children,
  ...rest
}: LinkButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  )
}
