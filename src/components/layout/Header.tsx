import Link from 'next/link'
import { nav, site } from '@/lib/site'
import { waMessages } from '@/lib/whatsapp'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { MobileNav } from './MobileNav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-md px-md py-sm sm:px-lg">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue"
          aria-label={`${site.brandName}, home`}
        >
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-xs md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-pill px-md py-sm text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <span className="hidden sm:inline-flex">
            <WhatsAppButton message={waMessages.general}>
              WhatsApp us
            </WhatsAppButton>
          </span>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
