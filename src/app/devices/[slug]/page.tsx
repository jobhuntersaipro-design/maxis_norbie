import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { devices, getDevice } from '@/data/devices'
import { buildMetadata } from '@/lib/metadata'
import { productLd, breadcrumbLd } from '@/lib/schema'
import { formatRM } from '@/lib/format'
import { site } from '@/lib/site'
import { Container } from '@/components/ui/Container'
import { PriceTag } from '@/components/ui/PriceTag'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { LinkButton } from '@/components/ui/Button'
import { DeviceCard } from '@/components/ui/DeviceCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { CheckIcon, ArrowRightIcon } from '@/components/ui/icons'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return devices.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const device = getDevice(slug)
  if (!device) return {}
  return buildMetadata({
    title: device.seoTitle,
    description: device.seoDescription,
    path: `/devices/${device.slug}`,
    image: device.image,
  })
}

const planCategoryHref: Record<string, string> = {
  phone: '/postpaid',
  tablet: '/postpaid',
  wearable: '/postpaid',
}

export default async function DevicePage({ params }: Params) {
  const { slug } = await params
  const device = getDevice(slug)
  if (!device) notFound()

  const related = devices
    .filter((d) => d.slug !== device.slug && d.brand === device.brand)
    .slice(0, 4)
  const fallback = devices
    .filter((d) => d.slug !== device.slug && d.tier === 1)
    .slice(0, 4)
  const recommendations = (related.length >= 3 ? related : fallback).slice(0, 4)

  const planHref = planCategoryHref[device.category] ?? '/postpaid'

  return (
    <>
      <JsonLd data={productLd(device)} />
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Devices', path: '/devices' },
          { name: device.name, path: `/devices/${device.slug}` },
        ])}
      />

      {/* Breadcrumb */}
      <Container className="pt-lg">
        <nav aria-label="Breadcrumb" className="text-sm text-on-surface-variant">
          <ol className="flex flex-wrap items-center gap-xs">
            <li>
              <Link href="/" className="hover:text-on-surface">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/devices" className="hover:text-on-surface">
                Devices
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-on-surface">{device.name}</li>
          </ol>
        </nav>
      </Container>

      {/* Hero */}
      <section className="py-xl">
        <Container>
          <div className="grid items-center gap-xl lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-wide text-maxis-green-strong">
                {device.brand} · Maxis {device.contract}
              </p>
              <h1 className="mt-sm text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
                {device.name} Maxis Plan
              </h1>
              <p className="mt-md text-lg text-on-surface-variant">
                {device.tagline}
              </p>

              <div className="mt-lg rounded-card border border-outline-variant bg-surface-container-low p-lg">
                <PriceTag fromMonthly={device.fromMonthly} size="lg" />
                <dl className="mt-md grid grid-cols-2 gap-sm text-sm">
                  <div>
                    <dt className="text-on-surface-faint">Plan</dt>
                    <dd className="font-semibold text-on-surface">
                      {device.planTieIn}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-on-surface-faint">Instalment</dt>
                    <dd className="font-semibold text-on-surface">
                      {device.contract}
                    </dd>
                  </div>
                  {device.rrp && (
                    <div>
                      <dt className="text-on-surface-faint">Device RRP</dt>
                      <dd className="font-semibold text-on-surface">
                        {formatRM(device.rrp)}
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-on-surface-faint">Interest</dt>
                    <dd className="font-semibold text-on-surface">
                      0% Zerolution
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-lg flex flex-col gap-sm sm:flex-row">
                <WhatsAppButton
                  message={device.whatsappMessage}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get this on WhatsApp
                </WhatsAppButton>
                <LinkButton
                  href={planHref}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See the plan
                </LinkButton>
              </div>

              <p className="mt-md text-xs text-on-surface-faint">
                Price shown is a guide from RM
                {device.fromMonthly ?? 0}/mth and is subject to Maxis&rsquo;
                current terms and your plan eligibility. We&rsquo;ll confirm the
                exact price before you commit.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-4/5 overflow-hidden rounded-card border border-outline-variant bg-surface-container-low sm:aspect-square">
                <Image
                  src={device.image}
                  alt={`${device.name} on a Maxis plan`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights + why buy */}
      <section className="bg-surface-container-low py-2xl">
        <Container>
          <div className="grid gap-xl lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-on-surface">
                Why the {device.name} is worth it
              </h2>
              <ul className="mt-lg grid gap-md sm:grid-cols-2">
                {device.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-sm rounded-card bg-surface p-md"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-maxis-green-strong" />
                    <span className="text-on-surface">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-lg space-y-md text-on-surface-variant">
                <p>
                  Get the {device.name} on {device.planTieIn} with{' '}
                  {device.contract} at 0% interest — spread the cost and keep
                  Maxis 5G, warranty and billing. Message {site.agentName} and
                  we&rsquo;ll confirm today&rsquo;s price, colour and stock.
                </p>
              </div>
            </div>

            {/* Sticky CTA aside */}
            <aside className="lg:col-span-1">
              <div className="rounded-card border border-maxis-green bg-surface p-lg lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-on-surface">
                  Ready to order?
                </h2>
                <p className="mt-sm text-sm text-on-surface-variant">
                  WhatsApp {site.agentName} with your plan and we&rsquo;ll handle
                  the rest.
                </p>
                <WhatsAppButton
                  message={device.whatsappMessage}
                  size="lg"
                  className="mt-lg w-full"
                >
                  WhatsApp us
                </WhatsAppButton>
                <Link
                  href={planHref}
                  className="mt-md flex items-center justify-center gap-xs text-sm font-semibold text-maxis-green-strong hover:underline"
                >
                  Compare Maxis plans
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Related */}
      {recommendations.length > 0 && (
        <section className="py-2xl">
          <Container>
            <div className="mb-lg flex items-end justify-between">
              <h2 className="text-2xl font-bold text-on-surface">
                You might also like
              </h2>
              <Link
                href="/devices"
                className="hidden items-center gap-xs text-sm font-semibold text-maxis-green-strong hover:underline sm:inline-flex"
              >
                All devices
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((d) => (
                <DeviceCard key={d.slug} device={d} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
