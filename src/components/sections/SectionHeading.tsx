import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-measure ${alignCls}`}>
      {eyebrow && (
        <p className="mb-sm text-sm font-semibold uppercase tracking-wide text-maxis-green-strong">
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-md text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </div>
  )
}
