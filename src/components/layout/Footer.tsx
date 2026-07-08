import { site, nav } from '@/lib/site'
import { waLink, waMessages } from '@/lib/whatsapp'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { MailIcon, WhatsAppIcon } from '@/components/ui/icons'

const included = [
  'Free WiFi 6 router',
  'Free installation',
  'Unlimited internet',
  'Free Home WiFi analysis',
]

export function Footer() {
  return (
    <footer className="mt-4xl bg-surface-inverse text-on-inverse">
      <div className="mx-auto max-w-6xl px-md py-2xl sm:px-lg">
        <div className="grid gap-xl sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + contact */}
          <div>
            <BrandLogo tone="white" />
            <p className="mt-md max-w-mini text-sm leading-relaxed text-on-inverse-variant">
              Superfast Maxis Home Fibre, sorted over WhatsApp.
            </p>
            <div className="mt-lg space-y-sm text-sm">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-sm text-on-inverse hover:text-accent"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                Chat with us
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
          <FooterCol title="Home Fibre">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-on-inverse-variant transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterCol>

          {/* Included */}
          <FooterCol title="Every plan includes">
            {included.map((f) => (
              <li key={f} className="text-sm text-on-inverse-variant">
                {f}
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-2xl border-t border-on-inverse-variant/20 pt-lg">
          <p className="text-xs leading-relaxed text-on-inverse-variant">
            &ldquo;Maxis&rdquo; and the Maxis logo are trademarks of Maxis
            Broadband Sdn Bhd. Plans, prices and promotions are subject to change
            and to Maxis&rsquo; terms &mdash; confirm current details with us
            before you sign up.
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
