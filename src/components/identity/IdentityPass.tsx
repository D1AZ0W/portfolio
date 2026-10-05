import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDownRight, MapPin, ScanLine } from 'lucide-react'
import { profile, specialtyStack } from '../../data/portfolio'
import { Reveal } from '../animation/Reveal'

export function IdentityPass() {
  const scene = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [5, -2, 0, 0])
  const scale = useTransform(scrollYProgress, [0.05, 0.36, 0.72, 0.95], [0.94, 1, 1.04, 1.08])
  const radius = useTransform(scrollYProgress, [0.28, 0.78], ['18px', '2px'])
  const frameOpacity = useTransform(scrollYProgress, [0.38, 0.72], [1, 0.18])
  const portraitWidth = useTransform(scrollYProgress, [0.04, 0.38, 0.8], ['34%', '43%', '49%'])
  const metadataX = useTransform(scrollYProgress, [0.08, 0.45], [0, -18])
  const metadataOpacity = useTransform(scrollYProgress, [0.46, 0.77], [1, 0.26])

  return (
    <section className="identity-scene section-wrap" id="identity" ref={scene} aria-labelledby="identity-title">
      <div className="section-kicker"><span>01 / IDENTITY</span><span>FIELD ID — AS/26</span></div>
      <div className="identity-sticky">
        <motion.div
          className="id-card"
          style={reduceMotion ? undefined : { rotate, scale, borderRadius: radius }}
        >
          <motion.div className="id-card-frame" style={reduceMotion ? undefined : { opacity: frameOpacity }} />
          <div className="id-card-top">
            <span className="id-card-brand"><span className="monogram monogram--small"><i />AS<span>/</span></span> DEVELOPER PASS</span>
            <span className="id-card-mark"><ScanLine size={16} strokeWidth={1.5} /> No. 2026 / NP</span>
          </div>
          <div className="id-card-main">
            <motion.div className="portrait-slot" style={reduceMotion ? undefined : { width: portraitWidth }}>
              <img className="portrait-placeholder-image" src="/portrait-placeholder.svg" alt="Abstract portrait placeholder; replace with Ansh’s own portrait when supplied." />
              <span className="portrait-label">PHOTO PLACEHOLDER</span>
              <span className="portrait-corner portrait-corner--tl" />
              <span className="portrait-corner portrait-corner--br" />
            </motion.div>
            <motion.div
              className="id-card-meta"
              style={reduceMotion ? undefined : { x: metadataX, opacity: metadataOpacity }}
            >
              <span className="id-card-overline">FULL-STACK / 001</span>
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

      <div className="about-editorial">
        <div className="about-label"><span>02 / ABOUT</span><span>BUILT BETWEEN LAYERS</span></div>
        <div className="about-headline">
          <Reveal><p className="about-lead">I work across</p></Reveal>
          <Reveal delay={0.06}><p className="about-line"><span className="about-accent">interfaces</span> and infrastructure.</p></Reveal>
        </div>
        <div className="about-facts" aria-label="Specialties and working approach">
          <Reveal><div className="about-fact"><span className="about-fact-label">SPECIALTY / FRONTEND</span><p>React + TypeScript</p></div></Reveal>
          <Reveal delay={0.04}><div className="about-fact"><span className="about-fact-label">SPECIALTY / BACKEND</span><p>Python + Django REST Framework</p></div></Reveal>
          <Reveal delay={0.08}><div className="about-fact"><span className="about-fact-label">WORKING KNOWLEDGE</span><p>Node.js + JavaScript ecosystem</p></div></Reveal>
          <Reveal delay={0.12}><div className="about-fact"><span className="about-fact-label">HOW I WORK</span><p>Specify features, translate designs to test pages, own the problem</p></div></Reveal>
        </div>
        <div className="about-footnote"><span>01 — FRONTEND</span><span>02 — BACKEND</span><ArrowDownRight size={14} /></div>
      </div>
    </section>
  )
}
