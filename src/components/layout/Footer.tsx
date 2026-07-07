import Link from 'next/link'
import { site, nav } from '@/lib/site'
import { waLink, waMessages } from '@/lib/whatsapp'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { MailIcon, WhatsAppIcon } from '@/components/ui/icons'

const deviceLinks = [
  { href: '/devices/iphone-17-pro-max', label: 'iPhone 17 Pro Max' },
  { href: '/devices/samsung-galaxy-s26-ultra', label: 'Galaxy S26 Ultra' },
  { href: '/devices/iphone-17', label: 'iPhone 17' },
  { href: '/devices', label: 'All devices' },
]

export function Footer() {
  return (
    <footer className="mt-4xl bg-surface-inverse text-on-inverse">
      <div className="mx-auto max-w-6xl px-md py-2xl sm:px-lg">
        <div className="grid gap-xl md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <BrandLogo tone="white" />
            <p className="mt-md max-w-mini text-sm leading-relaxed text-on-inverse-variant">
              The latest Maxis phones, postpaid plans and home internet, sorted
              over WhatsApp.
            </p>
            <div className="mt-lg space-y-sm text-sm">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-sm text-on-inverse hover:text-accent"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                Chat with {site.agentName}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-sm text-on-inverse hover:text-accent"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {site.email}
              </a>
            </div>
          </div>

          {/* Nav */}
          <FooterCol title="Explore">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Popular devices">
            {deviceLinks.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Plans">
            <FooterLink href="/postpaid">Maxis Postpaid</FooterLink>
            <FooterLink href="/home-fibre">Maxis Home Fibre</FooterLink>
            <FooterLink href="/home-wifi">Maxis Home 5G WiFi</FooterLink>
            <FooterLink href="/home-fibre">Check coverage</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-2xl border-t border-on-inverse-variant/20 pt-lg">
          <p className="text-xs leading-relaxed text-on-inverse-variant">
            &ldquo;Maxis&rdquo; and the Maxis logo are trademarks of Maxis
            Broadband Sdn Bhd. Prices, plans and device availability are subject
            to change and to Maxis&rsquo; terms &mdash; confirm current details
            with us before you buy.
          </p>
          <p className="mt-md text-xs text-on-inverse-variant">
            &copy; {new Date().getFullYear()} {site.brandName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wide text-on-inverse">
        {title}
      </h2>
      <ul className="mt-md space-y-sm">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-on-inverse-variant transition-colors hover:text-accent"
      >
        {children}
      </Link>
    </li>
  )
}
