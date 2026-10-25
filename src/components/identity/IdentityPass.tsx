import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MapPin } from 'lucide-react'
import { profile, specialtyStack } from '../../data/portfolio'
import ReflectiveCard from './ReflectiveCard'

export function IdentityPass() {
  const scene = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [3, -1, 0, 0])
  const scale = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [0.97, 1, 1.02, 1.04])

  return (
    <section className="identity-scene section-wrap" id="identity" ref={scene} aria-labelledby="identity-title">
      <div className="identity-sticky">
        <motion.div
          className="identity-card-frame"
          style={reduceMotion ? undefined : { rotate, scale }}
        >
          <ReflectiveCard
            className="identity-reflective-card"
            width="min(1080px, 100%)"
            height={500}
            radius={10}
            tint="#c7ff43"
            metalness={0.68}
            roughness={0.34}
            blurStrength={7}
            grayscale={0.84}
            warp={0.24}
            shine={0.72}
            glare={0.28}
            tiltStrength={4}
            enableTilt={!reduceMotion}
            intro={!reduceMotion}
          >
            <div className="identity-card-content">
              <div className="identity-card-portrait">
                <img
                  src="/portrait/me.jpg"
                  alt="Portrait of Ansh Shrestha"
                  width={1000}
                  height={1500}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="identity-card-details">
                <h2 id="identity-title">Ansh<br />Shrestha</h2>
                <p className="identity-card-role">{profile.role}</p>
                <span className="identity-card-location"><MapPin size={16} /> Kathmandu, Nepal</span>
                <div className="identity-card-stack">
                  {specialtyStack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="identity-card-footer">
                  <span>BSc. CSIT · Tribhuvan University</span>
                  <span>Nepal · 2026</span>
                </div>
              </div>
            </div>
          </ReflectiveCard>
        </motion.div>
      </div>
    </section>
  )
}
