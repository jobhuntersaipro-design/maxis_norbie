import Link from 'next/link'
import Image from 'next/image'
import type { Device } from '@/types/device'
import { ArrowRightIcon } from './icons'

const categoryLabel: Record<Device['category'], string> = {
  phone: 'Smartphone',
  tablet: 'Tablet',
  wearable: 'Wearable',
}

function shortPrice(fromMonthly: number | null): string {
  if (fromMonthly === null) return 'Ask us'
  if (fromMonthly === 0) return 'From RM0'
  return `From RM${fromMonthly}/mth`
}

export function DeviceCard({
  device,
  className = '',
}: {
  device: Device
  className?: string
}) {
  return (
    <Link
      href={`/devices/${device.slug}`}
      className={`group flex flex-col overflow-hidden rounded-card border border-outline-variant bg-surface transition-all hover:-translate-y-1 hover:border-outline hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue ${className}`}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-surface-container-low">
        <Image
          src={device.image}
          alt={`${device.name} on a Maxis plan`}
          fill
          sizes="(max-width: 640px) 33vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-sm transition-transform duration-300 group-hover:scale-[1.04] sm:p-md"
        />
      </div>

      <div className="flex flex-1 flex-col gap-xs p-sm sm:gap-sm sm:p-lg">
        <p className="hidden text-xs font-semibold uppercase tracking-wide text-maxis-green-strong sm:block">
          {device.brand} · {categoryLabel[device.category]}
        </p>
        <h3 className="truncate text-sm font-bold leading-snug text-on-surface sm:whitespace-normal sm:text-lg">
          {device.name}
        </h3>
        <p className="hidden text-sm text-on-surface-variant sm:line-clamp-2 sm:block">
          {device.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between gap-xs pt-xs sm:pt-sm">
          <p className="text-sm font-extrabold tracking-tight text-on-surface sm:text-base">
            {shortPrice(device.fromMonthly)}
          </p>
          <span className="hidden shrink-0 items-center gap-xs text-sm font-semibold text-maxis-green-strong sm:inline-flex">
            View
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
