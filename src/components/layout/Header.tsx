import Link from 'next/link'
import { nav, site } from '@/lib/site'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { MobileNav } from './MobileNav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-t-4 border-t-maxis-green border-b border-b-outline-variant bg-surface/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-md px-lg py-md sm:px-xl">
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

        <MobileNav />
      </div>
    </header>
  )
}
