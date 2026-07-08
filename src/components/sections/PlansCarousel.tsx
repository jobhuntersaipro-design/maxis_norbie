'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons'

/**
 * Horizontal snap carousel with < > arrow controls (no visible scrollbar).
 * Supports native touch swipe plus click-and-drag with a mouse on desktop.
 * Cards are passed as children (each wrapped with data-card + width classes).
 */
export function PlansCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [dragging, setDragging] = useState(false)
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  // Mouse drag-to-scroll (touch devices use native swipe).
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = trackRef.current
    if (!el) return
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    }
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

  // Swallow the click that fires after a real drag so buttons/links don't trigger.
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
        <ArrowButton
          label="Previous plans"
          disabled={atStart}
          onClick={() => scrollByCards(-1)}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </ArrowButton>
        <ArrowButton
          label="Next plans"
          disabled={atEnd}
          onClick={() => scrollByCards(1)}
        >
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
        className={`-mx-md flex snap-x snap-mandatory scroll-px-md gap-lg overflow-x-auto px-md pb-sm pt-3 select-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:mx-0 sm:scroll-px-0 sm:px-0 [&::-webkit-scrollbar]:hidden ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {children}
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
