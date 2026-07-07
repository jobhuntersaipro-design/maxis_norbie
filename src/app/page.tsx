import Link from 'next/link'
import Image from 'next/image'
import type { Device } from '@/types/device'
import { getDevice } from '@/data/devices'
import { site } from '@/lib/site'
import { waMessages } from '@/lib/whatsapp'
import { Container } from '@/components/ui/Container'
import { DeviceCard } from '@/components/ui/DeviceCard'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { LinkButton } from '@/components/ui/Button'
import { Squiggle } from '@/components/ui/Squiggle'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { CtaBand } from '@/components/sections/CtaBand'
import { CoverageChecker } from '@/components/sections/CoverageChecker'
import { ArrowRightIcon } from '@/components/ui/icons'

// Hand-picked homepage heroes.
const FEATURED_SLUGS = [
  'iphone-17-pro-max',
  'samsung-galaxy-s26-ultra',
  'iphone-17',
  'iphone-air',
] as const

const heroChips = [
  '0% Zerolution instalments',
  'RM0 upfront on eligible plans',
  'Real answers on WhatsApp',
]

const planSections = [
  {
    href: '/postpaid',
    title: 'Maxis Postpaid',
    blurb:
      'Switch to Maxis 5G with unlimited calls and generous data. Keep your number, keep it simple.',
    cta: 'Explore postpaid',
  },
  {
    href: '/home-fibre',
    title: 'Maxis Home Fibre',
    blurb:
      'Fast, reliable fibre broadband for the whole home — with plans from 100Mbps up to 2Gbps.',
    cta: 'Explore Home Fibre',
  },
  {
    href: '/home-wifi',
    title: 'Maxis Home 5G WiFi',
    blurb:
      'No fibre at your address? Get online in minutes with a plug-and-play 5G WiFi router.',
    cta: 'Explore Home WiFi',
  },
]

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => getDevice(slug)).filter(
    (d): d is Device => Boolean(d),
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-inverse">
        <Squiggle
          tone="green"
          className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 opacity-20"
        />
        <Squiggle
          tone="green"
          className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 opacity-10"
        />
        <Container className="relative py-3xl">
          <div className="grid items-center gap-xl lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-on-inverse sm:text-5xl lg:text-6xl">
                The latest phones on Maxis plans —{' '}
                <span className="text-accent">sorted over WhatsApp.</span>
              </h1>
              <p className="mt-lg max-w-measure-sm text-lg text-on-inverse-variant">
                Malaysia&rsquo;s premier 5G network — unlimited data and the
                latest phones on 0% Zerolution. Message {site.agentName}, walk
                away sorted.
              </p>

              <div className="mt-xl flex flex-col gap-sm sm:flex-row">
                <WhatsAppButton
                  message={waMessages.general}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Chat with {site.agentName}
                </WhatsAppButton>
                <LinkButton
                  href="/devices"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Browse devices
                  <ArrowRightIcon className="h-5 w-5" />
                </LinkButton>
              </div>

              <ul className="mt-xl flex flex-wrap gap-x-lg gap-y-sm">
                {heroChips.map((chip) => (
                  <li
                    key={chip}
                    className="flex items-center gap-sm text-sm font-medium text-on-inverse-variant"
                  >
                    <span className="h-1.5 w-1.5 rounded-pill bg-accent" />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured device showcase */}
            <div className="relative mx-auto w-full max-w-measure-sm lg:ml-auto">
              <div className="grid grid-cols-2 gap-md">
                {featured.slice(0, 2).map((d, i) => (
                  <Link
                    key={d.slug}
                    href={`/devices/${d.slug}`}
                    className={`group relative overflow-hidden rounded-card border border-on-inverse-variant/20 bg-surface shadow-lg transition-transform hover:-translate-y-1 ${
                      i === 0 ? 'translate-y-3 hover:translate-y-2' : ''
                    }`}
                  >
                    {d.fromMonthly ? (
                      <span className="absolute left-xs top-xs z-10 rounded-pill bg-accent px-sm py-xs text-[0.65rem] font-bold text-on-accent">
                        RM{d.fromMonthly}/mth
                      </span>
                    ) : null}
                    <div className="relative aspect-square">
                      <Image
                        src={d.image}
                        alt={`${d.name} on a Maxis plan`}
                        fill
                        sizes="(max-width: 1024px) 40vw, 15vw"
                        className="object-contain p-sm"
                        priority
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured devices */}
      <section className="py-3xl">
        <Container>
          <div className="flex items-end justify-between gap-md">
            <SectionHeading
              eyebrow="Hot right now"
              title="Flagship devices on Maxis"
              description="This month's most-wanted phones, on 0% Zerolution."
            />
            <Link
              href="/devices"
              className="hidden shrink-0 items-center gap-xs pb-sm text-sm font-semibold text-maxis-green-strong hover:underline sm:inline-flex"
            >
              All devices
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((device) => (
              <DeviceCard key={device.slug} device={device} />
            ))}
          </div>

          <div className="mt-xl flex flex-col items-center gap-sm rounded-card bg-surface-container-low p-lg text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-on-surface-variant">
              Can&rsquo;t see the model you want? We carry plenty more.
            </p>
            <WhatsAppButton message={waMessages.moreDevices}>
              More devices? Ask us
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="bg-surface-container-low py-3xl">
        <Container>
          <SectionHeading
            eyebrow="Plans"
            title="Postpaid, fibre & 5G home internet"
            description="Your phone, your home, or both. We'll match you to the right plan."
          />
          <div className="mt-xl grid gap-lg md:grid-cols-3">
            {planSections.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-card border border-outline-variant bg-surface p-lg transition-all hover:-translate-y-1 hover:border-maxis-green hover:shadow-lg"
              >
                <div className="mb-md h-1.5 w-12 rounded-pill bg-accent" />
                <h3 className="text-xl font-bold text-on-surface">{p.title}</h3>
                <p className="mt-sm flex-1 text-on-surface-variant">
                  {p.blurb}
                </p>
                <span className="mt-lg inline-flex items-center gap-xs text-sm font-semibold text-maxis-green-strong">
                  {p.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage — Shock Green band (brand primary colour) */}
      <section className="relative overflow-hidden bg-surface-brand py-3xl">
        <Squiggle
          tone="white"
          className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 opacity-20"
        />
        <Container className="relative">
          <div className="grid gap-xl lg:grid-cols-2 lg:items-center">
            <div className="text-on-accent">
              <p className="text-sm font-bold uppercase tracking-wide text-on-accent/80">
                Home internet
              </p>
              <h2 className="mt-sm text-3xl font-extrabold tracking-tight sm:text-4xl">
                Is Maxis available at your place?
              </h2>
              <p className="mt-md max-w-measure-sm text-lg text-on-accent/90">
                Pop in your address — we&rsquo;ll check Fibre &amp; 5G and send
                back your best plan.
              </p>
            </div>
            <CoverageChecker />
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CtaBand
        title={`Let's get you connected`}
        message={waMessages.general}
      />
    </>
  )
}
