import Link from 'next/link'
import Image from 'next/image'
import type { Device } from '@/types/device'
import { PriceTag } from './PriceTag'
import { ArrowRightIcon } from './icons'

const categoryLabel: Record<Device['category'], string> = {
  phone: 'Smartphone',
  tablet: 'Tablet',
  wearable: 'Wearable',
}

export function DeviceCard({ device }: { device: Device }) {
  return (
    <Link
      href={`/devices/${device.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-outline-variant bg-surface transition-all hover:-translate-y-1 hover:border-outline hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-surface-container-low">
        <Image
          src={device.image}
          alt={`${device.name} on a Maxis plan`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-md transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-sm p-lg">
        <p className="text-xs font-semibold uppercase tracking-wide text-maxis-green-strong">
          {device.brand} · {categoryLabel[device.category]}
        </p>
        <h3 className="text-lg font-bold leading-snug text-on-surface">
          {device.name}
        </h3>
        <p className="line-clamp-2 text-sm text-on-surface-variant">
          {device.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between pt-sm">
          <PriceTag fromMonthly={device.fromMonthly} />
          <span className="inline-flex items-center gap-xs text-sm font-semibold text-maxis-green-strong">
            View
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
