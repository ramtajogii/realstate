'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Expand, Minus, Plus, RotateCcw, X } from 'lucide-react'

type Props = {
  src: string
  alt: string
  /** Sizes hint for the inline thumbnail. The overlay always requests full width. */
  sizes?: string
  /** Extra classes for the inline image (object-fit, padding and so on). */
  imageClassName?: string
  /** Label under the expand icon on hover, and the button's accessible name. */
  hint?: string
}

const MIN_SCALE = 1
const MAX_SCALE = 6

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

/**
 * An image that fills the screen when clicked, and can then be zoomed and panned.
 *
 * Detailed artwork such as a floor plan is unreadable at the size it occupies in
 * a page column. Opening it over the page helps on a desktop, but on a phone a
 * landscape plan still only reaches the screen width -- so the overlay supports
 * pinch to zoom, drag to pan, wheel zoom and double-click, which is the only way
 * the dimensions become legible on a small screen.
 *
 * Closes on Escape, on a backdrop click or via the close button, locks the
 * background scroll while open and restores focus to the trigger afterwards.
 */
export default function ZoomableImage({
  src,
  alt,
  sizes = '100vw',
  imageClassName = 'object-contain',
  hint = 'Click to enlarge',
}: Props) {
  const [open, setOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  // Live pointer positions, keyed by pointerId: one entry means a pan, two a pinch.
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null)
  const panStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null)

  const reset = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  /**
   * Keep the artwork from being dragged off screen: at scale s the image may
   * move by half of whatever overflows the stage, and no further.
   */
  const clampOffset = useCallback((next: { x: number; y: number }, s: number) => {
    const stage = stageRef.current
    if (!stage) return next
    const { width, height } = stage.getBoundingClientRect()
    const maxX = Math.max(0, (width * s - width) / 2)
    const maxY = Math.max(0, (height * s - height) / 2)
    return { x: clamp(next.x, -maxX, maxX), y: clamp(next.y, -maxY, maxY) }
  }, [])

  const applyScale = useCallback(
    (next: number) => {
      const s = clamp(next, MIN_SCALE, MAX_SCALE)
      setScale(s)
      setOffset((o) => (s === 1 ? { x: 0, y: 0 } : clampOffset(o, s)))
    },
    [clampOffset]
  )

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    // Stop the page behind the overlay from scrolling while it is open.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const close = () => {
    setOpen(false)
    reset()
    pointers.current.clear()
    pinchStart.current = null
    panStart.current = null
    triggerRef.current?.focus()
  }

  const onPointerDown = (e: React.PointerEvent) => {
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values())
      pinchStart.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), scale }
      panStart.current = null
    } else if (pointers.current.size === 1 && scale > 1) {
      panStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y }
      setDragging(true)
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointers.current.size === 2 && pinchStart.current) {
      const [a, b] = Array.from(pointers.current.values())
      const distance = Math.hypot(a.x - b.x, a.y - b.y)
      applyScale(pinchStart.current.scale * (distance / pinchStart.current.distance))
      return
    }

    if (panStart.current && scale > 1) {
      const next = {
        x: panStart.current.ox + (e.clientX - panStart.current.x),
        y: panStart.current.oy + (e.clientY - panStart.current.y),
      }
      setOffset(clampOffset(next, scale))
    }
  }

  const endPointer = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinchStart.current = null
    if (pointers.current.size === 0) {
      panStart.current = null
      setDragging(false)
    }
  }

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    applyScale(scale * (e.deltaY < 0 ? 1.15 : 1 / 1.15))
  }

  const zoomed = scale > 1

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} — ${hint}`}
        className="group/zoom absolute inset-0 h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A] focus-visible:ring-offset-2 rounded-xl"
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />

        {/* Affordance: without it nothing suggests the image is interactive. */}
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-[#091e44]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100">
          <Expand size={12} className="text-[#C9922A]" />
          {hint}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
        >
          {/* Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 z-10 flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => applyScale(scale / 1.4)}
              disabled={scale <= MIN_SCALE}
              aria-label="Zoom out"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A]"
            >
              <Minus size={18} />
            </button>
            <button
              type="button"
              onClick={() => applyScale(scale * 1.4)}
              disabled={scale >= MAX_SCALE}
              aria-label="Zoom in"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A]"
            >
              <Plus size={18} />
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={!zoomed}
              aria-label="Reset zoom"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A]"
            >
              <RotateCcw size={16} />
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Swallow clicks on the artwork so only the backdrop closes. */}
          <div
            ref={stageRef}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={() => (zoomed ? reset() : applyScale(2.5))}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
            onWheel={onWheel}
            style={{ touchAction: 'none' }}
            className={`relative h-full w-full max-w-[1600px] overflow-hidden ${
              dragging ? 'cursor-grabbing' : zoomed ? 'cursor-grab' : 'cursor-zoom-in'
            }`}
          >
            <div
              className="relative h-full w-full"
              style={{
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
                transition: dragging ? 'none' : 'transform 120ms ease-out',
              }}
            >
              <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" priority />
            </div>
          </div>

          <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] text-white/70 backdrop-blur-sm">
            Pinch or scroll to zoom &middot; drag to move &middot; Esc to close
          </p>
        </div>
      )}
    </>
  )
}
