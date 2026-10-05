import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import gsap from 'gsap'
import { profile, specialtyStack } from '../../data/portfolio'
import { TechMark } from '../ui/TechMark'
import { SplitText } from '../animation/SplitText'

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 .9a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.35 3.24 1.65.1-.72.39-1.21.7-1.49-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.43-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.73.78 1.16 1.78 1.16 3 0 4.3-2.63 5.24-5.12 5.52.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9Z" />
    </svg>
  )
}

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reduceMotion) return
      gsap.fromTo(
        '.hero-secondary',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.72, stagger: 0.11, delay: 0.72, ease: 'power2.out' },
      )
      gsap.fromTo(
        '.hero-index',
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.26, ease: 'power2.out' },
      )
    },
    { scope: root, dependencies: [reduceMotion] },
  )

  return (
    <section className="hero section-wrap" id="top" ref={root} aria-labelledby="hero-title">
      <div className="hero-index micro-label"><span>PORTFOLIO / 2026</span><span>01 — 09</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-secondary"><span className="eyebrow-line" /> Full-stack developer <span className="eyebrow-place">— Kathmandu, Nepal</span></p>
          <SplitText text="ANSH" id="hero-title" className="hero-name hero-name--first" />
          <div className="hero-name-row">
            <SplitText text="SHRESTHA" className="hero-name hero-name--last" />
            <span className="hero-asterisk" aria-hidden="true">✳</span>
          </div>
          <div className="hero-meta hero-secondary">
            <span className="role-label">{profile.role}</span>
            <span className="hero-location"><MapPin size={14} strokeWidth={1.6} /> {profile.location}</span>
          </div>
          <p className="hero-summary hero-secondary">
            React and TypeScript on the surface. Python and Django REST underneath. Building the connective tissue between them.
          </p>
          <div className="hero-bottom hero-secondary">
            <a className="text-link hero-github" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubMark /> GitHub profile <ArrowUpRight size={14} />
            </a>
            <div className="stack-line" aria-label="Specialty technologies">
              {specialtyStack.map((technology) => <span className="stack-chip" key={technology}><TechMark technology={technology} />{technology}</span>)}
            </div>
          </div>
        </div>
        <div className="hero-side hero-secondary" aria-label="Developer focus">
          <span className="side-index">/ FIELD NOTES</span>
          <p>Interface to<br />infrastructure.</p>
          <div className="side-rule" />
          <span className="side-stack">REACT <i>×</i> TYPESCRIPT<br />PYTHON <i>×</i> DJANGO REST</span>
          <div className="orbit-mark" aria-hidden="true"><b /><i /><em /></div>
        </div>
      </div>
      <a className="scroll-cue" href="#identity">
        <span className="scroll-cue-line" /> <span>Scroll to explore</span> <ArrowDownRight size={14} />
      </a>
    </section>
  )
}
