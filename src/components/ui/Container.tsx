import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centered page-width wrapper with responsive gutters. */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-md sm:px-lg ${className}`}>
      {children}
    </div>
  )
}
