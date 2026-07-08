'use client'

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons'

/**
 * Horizontal snap carousel with < > arrows and dot indicators (no scrollbar).
 * Supports native touch swipe plus click-and-drag with a mouse on desktop.
 * Cards are passed as children (each wrapped with data-card + width classes).
 */
export function PlansCarousel({ children }: { children: ReactNode }) {
  const count = Children.count(children)
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [active, setActive] = useState(0)
  // Number of reachable scroll positions (fewer than cards when several are
  // visible at once) — so we don't render "dead" dots at the end.
  const [pages, setPages] = useState(count)
  const [dragging, setDragging] = useState(false)
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false })

  // Scroll a full "page" of visible cards at a time, capped at 3 pages so it
  // never takes more than a couple of scrolls to see every plan.
  const metrics = () => {
    const el = trackRef.current
    if (!el) return { pageStep: 1, pages: 1 }
    const card = el.querySelector<HTMLElement>('[data-card]')
    const cardStep = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    const perPage = Math.max(Math.floor(el.clientWidth / cardStep) || 1, Math.ceil(count / 3))
    const pages = Math.max(1, Math.ceil(count / perPage))
    return { pageStep: perPage * cardStep, pages }
  }

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { pageStep, pages: pageCount } = metrics()
    const maxScroll = el.scrollWidth - el.clientWidth
    setPages(pageCount)
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= maxScroll - 2)
    setActive(Math.min(pageCount - 1, Math.round(el.scrollLeft / pageStep)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scrollByCards = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * metrics().pageStep, behavior: 'smooth' })
  }
  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({ left: i * metrics().pageStep, behavior: 'smooth' })
  }

  // Mouse drag-to-scroll (touch devices use native swipe).
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = trackRef.current
    if (!el) return
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false }
    setDragging(true)
  }
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return
    const el = trackRef.current
    if (!el) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 4) drag.current.moved = true
    el.scrollLeft = drag.current.startLeft - dx
  }
  const endDrag = () => {
    if (!drag.current.active) return
    drag.current.active = false
    setDragging(false)
  }
  const onClickCapture = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <div className="relative">
      <div className="mb-md flex items-center justify-end gap-sm">
        <ArrowButton label="Previous plans" disabled={atStart} onClick={() => scrollByCards(-1)}>
          <ChevronLeftIcon className="h-5 w-5" />
        </ArrowButton>
        <ArrowButton label="Next plans" disabled={atEnd} onClick={() => scrollByCards(1)}>
          <ChevronRightIcon className="h-5 w-5" />
        </ArrowButton>
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`flex snap-x snap-mandatory gap-lg overflow-x-auto pb-lg pt-md select-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {children}
      </div>

      {/* Dot indicators (one per reachable scroll position) */}
      <div className="mt-md flex items-center justify-center gap-xs">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to plan ${i + 1}`}
            aria-current={active === i}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-pill transition-all hover:bg-maxis-green ${
              active === i ? 'w-6 bg-maxis-green' : 'w-2 bg-outline'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function ArrowButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: ReactNode
  label: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-outline bg-surface text-on-surface transition-all hover:border-maxis-green hover:bg-accent hover:text-on-accent hover:shadow-md active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maxis-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-outline disabled:hover:bg-surface disabled:hover:text-on-surface disabled:hover:shadow-none"
    >
      {children}
    </button>
  )
}
