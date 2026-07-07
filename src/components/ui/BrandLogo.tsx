import Image from 'next/image'

interface BrandLogoProps {
  /** 'color' for light backgrounds, 'white' for dark backgrounds. */
  tone?: 'color' | 'white'
  className?: string
}

/** The Maxis logo. */
export function BrandLogo({ tone = 'color', className = '' }: BrandLogoProps) {
  const src =
    tone === 'white'
      ? '/brand/maxis-logo-white.svg'
      : '/brand/maxis-logo-color.svg'

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Maxis"
        width={173}
        height={50}
        className="h-6 w-auto sm:h-7"
        priority
      />
    </span>
  )
}
