import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from 'motion/react'
import gsap from 'gsap'

type SplitTextProps = {
  text: string
  className?: string
  id?: string
}

/**
 * Lightweight React Bits SplitText adaptation: characters are rendered as
 * accessible decorative spans and revealed once by a scoped GSAP timeline.
 */
export function SplitText({ text, className, id }: SplitTextProps) {
  const root = useRef<HTMLHeadingElement>(null)
  const reduceMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reduceMotion) return
      const characters = root.current?.querySelectorAll<HTMLElement>('.split-char')
      if (!characters?.length) return

      gsap.fromTo(
        characters,
        { yPercent: 105, opacity: 0, rotateX: -72 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.82,
          stagger: 0.032,
          ease: 'power3.out',
          delay: 0.14,
        },
      )
    },
    { scope: root, dependencies: [text, reduceMotion] },
  )

  return (
    <h1 ref={root} id={id} className={className} aria-label={text}>
      <span aria-hidden="true" className="split-line">
        {Array.from(text).map((character, index) => (
          <span
            className="split-char-wrap"
            key={`${character}-${index}`}
            style={{ perspective: '700px' }}
          >
            <span className="split-char">{character === ' ' ? '\u00a0' : character}</span>
          </span>
        ))}
      </span>
    </h1>
  )
}
