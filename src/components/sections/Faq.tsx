import { Container } from '@/components/ui/Container'
import { SectionHeading } from './SectionHeading'

export interface FaqItem {
  q: string
  a: string
}

export function Faq({
  items,
  eyebrow = 'FAQ',
  title = 'Good to know',
}: {
  items: FaqItem[]
  eyebrow?: string
  title?: string
}) {
  return (
    <section className="py-2xl">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-xl divide-y divide-outline-variant border-y border-outline-variant">
          {items.map((item) => (
            <details key={item.q} className="group py-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-md text-lg font-semibold text-on-surface">
                {item.q}
                <span className="text-maxis-green-strong transition-transform group-open:rotate-45">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-sm max-w-measure-lg text-base leading-relaxed text-on-surface-variant">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
