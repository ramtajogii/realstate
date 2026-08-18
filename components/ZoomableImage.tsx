'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Expand, X } from 'lucide-react'

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

/**
 * An image that fills the screen when clicked.
 *
 * Detailed artwork such as a floor plan is unreadable at the size it occupies
 * in a page column, so the inline copy is a button that opens the full image
 * over the page. Closes on Escape, on a backdrop click, or via the close
 * button, and restores focus to the trigger afterwards.
 */
export default function ZoomableImage({
  src,
  alt,
  sizes = '100vw',
  imageClassName = 'object-contain',
  hint = 'Click to enlarge',
}: Props) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

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
    triggerRef.current?.focus()
  }

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
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9922A]"
          >
            <X size={20} />
          </button>

          {/* Swallow clicks on the artwork so only the backdrop closes. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-full w-full max-w-[1600px]"
          >
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>
      )}
    </>
  )
}
