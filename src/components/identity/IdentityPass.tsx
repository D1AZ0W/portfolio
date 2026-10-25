import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MapPin } from 'lucide-react'
import { profile, specialtyStack } from '../../data/portfolio'

function useCompactLayout() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)')
    const sync = () => setCompact(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return compact
}

export function IdentityPass() {
  const scene = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const compact = useCompactLayout()
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [5, -2, 0, 0])
  const scale = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [0.94, 1, 1.04, 1.08])
  const radius = useTransform(scrollYProgress, [0.28, 0.78], ['18px', '2px'])
  const frameOpacity = useTransform(scrollYProgress, [0.38, 0.72], [1, 0.18])
  const portraitWidth = useTransform(
    scrollYProgress,
    [0.04, 0.38, 0.8],
    compact ? ['42%', '44%', '46%'] : ['34%', '37%', '40%'],
  )
  const metadataX = useTransform(scrollYProgress, [0.08, 0.45], [0, -18])
  const metadataOpacity = useTransform(scrollYProgress, [0.46, 0.77], [1, 0.26])

  return (
    <section className="identity-scene section-wrap" id="identity" ref={scene} aria-labelledby="identity-title">
      <div className="identity-sticky">
        <motion.div
          className="id-card"
          style={reduceMotion ? undefined : { rotate, scale, borderRadius: radius }}
        >
          <motion.div className="id-card-frame" style={reduceMotion ? undefined : { opacity: frameOpacity }} />
          <div className="id-card-main">
            <motion.div className="portrait-slot" style={reduceMotion ? undefined : { width: portraitWidth }}>
              <img
                className="portrait-photo"
                src="/portrait/ansh.jpg"
                alt="Portrait of Ansh Shrestha."
                width={1000}
                height={1500}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <span className="portrait-label">PORTRAIT / ANSH</span>
              <span className="portrait-corner portrait-corner--tl" />
              <span className="portrait-corner portrait-corner--br" />
            </motion.div>
            <motion.div
              className="id-card-meta"
              style={reduceMotion ? undefined : { x: metadataX, opacity: metadataOpacity }}
            >
              <h2 id="identity-title">Ansh<br />Shrestha</h2>
              <p>{profile.role}</p>
              <span className="id-card-location"><MapPin size={13} /> Kathmandu, Nepal</span>
              <div className="id-card-stack">
                {specialtyStack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.div>
          </div>
          <div className="id-card-bottom"><span>CSIT / TRIBHUVAN UNIVERSITY</span><span>NEPAL · 2026</span></div>
        </motion.div>
        <div className="identity-note" aria-hidden="true"><span className="identity-note-dot" /> SCROLL TO UNFRAME</div>
      </div>
    </section>
  )
}
