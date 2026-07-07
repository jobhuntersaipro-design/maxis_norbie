import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { tier1Devices, tier2Devices, tier3Devices } from '@/data/devices'
import { Container } from '@/components/ui/Container'
import { DeviceCard } from '@/components/ui/DeviceCard'
import { SectionHeading } from '@/components/sections/SectionHeading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { CtaBand } from '@/components/sections/CtaBand'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbLd } from '@/lib/schema'
import { waMessages } from '@/lib/whatsapp'
import type { Device } from '@/types/device'

export const metadata: Metadata = buildMetadata({
  title: 'Devices on Maxis Plans | Phones, Tablets & Wearables',
  description:
    'Browse the latest iPhone, Samsung Galaxy, Google Pixel and Xiaomi devices on Maxis postpaid plans with 0% Zerolution. Authorized Maxis reseller in Selangor.',
  path: '/devices',
})

function DeviceGrid({ items }: { items: Device[] }) {
  return (
    <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((device) => (
        <DeviceCard key={device.slug} device={device} />
      ))}
    </div>
  )
}

export default function DevicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Devices', path: '/devices' },
        ])}
      />

      <section className="border-b border-outline-variant bg-surface-container-low py-2xl">
        <Container>
          <SectionHeading
            as="h2"
            eyebrow="Devices"
            title={
              <h1 className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl">
                Every hero device, on a Maxis plan
              </h1>
            }
            description="The phones, tablets and wearables people actually ask us for — each on a Maxis postpaid plan with 0% Zerolution instalments. Tap any device for the full details, then WhatsApp us to order."
          />
        </Container>
      </section>

      <section className="py-2xl">
        <Container className="space-y-2xl">
          <div>
            <h2 className="mb-lg text-xl font-bold text-on-surface">
              Flagships
            </h2>
            <DeviceGrid items={tier1Devices} />
          </div>
          <div>
            <h2 className="mb-lg text-xl font-bold text-on-surface">
              Popular picks
            </h2>
            <DeviceGrid items={tier2Devices} />
          </div>
          <div>
            <h2 className="mb-lg text-xl font-bold text-on-surface">
              Tablets &amp; wearables
            </h2>
            <DeviceGrid items={tier3Devices} />
          </div>

          <div className="rounded-card border border-dashed border-outline bg-surface-container-low p-xl text-center">
            <h2 className="text-xl font-bold text-on-surface">
              Looking for something else?
            </h2>
            <p className="mx-auto mt-sm max-w-measure-sm text-on-surface-variant">
              We carry far more than what&rsquo;s listed here — accessories,
              routers, older models and other brands. Tell us what you&rsquo;re
              after and we&rsquo;ll sort it.
            </p>
            <div className="mt-lg flex justify-center">
              <WhatsAppButton message={waMessages.moreDevices} size="lg">
                More devices? Ask us
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand message={waMessages.general} />
    </>
  )
}
