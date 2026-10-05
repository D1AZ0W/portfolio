import { useEffect, useState, type PointerEvent as ReactPointerEvent } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  Terminal,
} from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import type { Project } from '../../data/portfolio'
import { projects } from '../../data/portfolio'
import { Reveal } from '../animation/Reveal'

function VisualPlaceholder({ project }: { project: Project }) {
  const glyphs: Record<Project['visual'], string[]> = {
    billdiv: ['01 / shared costs', '02 / group balance', '03 / settle'],
    vision: ['TRAFFIC FRAME', 'YOLOv8 → PLATE', 'OCR / Paddle'],
    yatra: ['PASSENGER', 'DRIVER', 'ADMIN'],
    commerce: ['SEARCH / FILTER', 'PRODUCTS', 'CART STATE'],
    versus: ['POKÉMON A', 'COMPARE', 'POKÉMON B'],
  }
  return (
    <div className={`visual-placeholder visual-placeholder--${project.visual}`}>
      <div className="placeholder-windowbar"><span /><span /><span /><b>{project.title.toUpperCase()} / VISUAL STUDY</b></div>
      <div className="placeholder-art">
        <div className="placeholder-art-orbit" aria-hidden="true" />
        <div className="placeholder-art-lines" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="placeholder-art-label">{project.visual === 'vision' ? 'PIPELINE' : project.visual === 'yatra' ? 'ROUTE' : project.visual === 'versus' ? 'VS' : project.visual === 'commerce' ? 'CATALOG' : 'BALANCE'}</div>
        <div className="placeholder-art-grid" aria-hidden="true">{glyphs[project.visual].map((label, index) => <span key={label}><i>0{index + 1}</i>{label}</span>)}</div>
      </div>
      <div className="visual-watermark">CONCEPTUAL VISUAL · NOT A SCREENSHOT</div>
    </div>
  )
}

function TiltedProjectFrame({ children }: { children: React.ReactNode }) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.5 })
  const smoothY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.5 })
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.6, 3.6])
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.8, -2.8])
  const reduceMotion = useReducedMotion()

  function trackPointer(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      className="tilted-card"
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
    >
      {children}
    </motion.div>
  )
}

function ScreenshotReel({ project }: { project: Project }) {
  const slides = project.screenshots
  const [active, setActive] = useState(0)
  const [manualPause, setManualPause] = useState(false)
  const [engaged, setEngaged] = useState(false)
  const reduceMotion = useReducedMotion()
  const hasScreenshots = slides.length > 0
  const current = hasScreenshots ? slides[active % slides.length] : null
  const autoplayActive = slides.length > 1 && !manualPause && !engaged && !reduceMotion

  useEffect(() => {
    if (!hasScreenshots || slides.length < 2 || manualPause || engaged || reduceMotion) return
    const interval = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length)
    }, 5200)
    return () => window.clearInterval(interval)
  }, [engaged, hasScreenshots, manualPause, reduceMotion, slides.length])

  function move(direction: number) {
    if (!hasScreenshots) return
    setActive((index) => (index + direction + slides.length) % slides.length)
    setManualPause(true)
  }

  return (
    <figure
      className="project-figure"
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocusCapture={() => setEngaged(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setEngaged(false)
      }}
      onPointerDown={(event) => { if (event.pointerType !== 'mouse') setManualPause(true) }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') move(1)
        if (event.key === 'ArrowLeft') move(-1)
      }}
    >
      <TiltedProjectFrame>
        <div className="project-screen">
          <div className="screen-chrome"><span /><span /><span /><small>ansh.dev / work / {project.number}</small><i>×</i></div>
          {current ? (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.src}
                className="project-screenshot"
                initial={reduceMotion ? false : { opacity: 0, clipPath: 'inset(3% 7% 3% 0%)', scale: 1.025 }}
                animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)', scale: 0.985 }}
                transition={{ duration: reduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={current.src} alt={current.alt} loading="lazy" />
                <span className="screenshot-caption">{current.caption ?? `PROJECT ${project.number} / SCREEN ${String(active + 1).padStart(2, '0')}`}</span>
              </motion.div>
            </AnimatePresence>
          ) : (
            <VisualPlaceholder project={project} />
          )}
          {hasScreenshots && slides.length > 1 && (
            <div className="reel-controls" aria-label={`${project.title} screenshot carousel controls`}>
              <button type="button" aria-label="Previous screenshot" onClick={() => move(-1)}><ArrowLeft size={15} /></button>
              <span aria-live="polite" aria-atomic="true">{String(active + 1).padStart(2, '0')} <i>/</i> {String(slides.length).padStart(2, '0')}</span>
              <button type="button" aria-label="Next screenshot" onClick={() => move(1)}><ArrowRight size={15} /></button>
              <button
                type="button"
                aria-label={reduceMotion ? 'Automatic screenshots disabled by reduced-motion preference' : autoplayActive ? 'Pause automatic screenshots' : 'Resume automatic screenshots'}
                disabled={Boolean(reduceMotion)}
                onClick={() => setManualPause((value) => !value)}
              >
                {autoplayActive ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          )}
        </div>
      </TiltedProjectFrame>
      <figcaption className="visual-figcaption">
        <span>{hasScreenshots ? current?.caption ?? 'Project screenshot' : 'Visual placeholder · replace with project screenshot'}</span>
        {hasScreenshots && slides.length > 1 && <span className="reel-state">AUTO SEQUENCE / {autoplayActive ? 'PLAYING' : 'PAUSED'}</span>}
      </figcaption>
    </figure>
  )
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const feature = index < 2
  const reverse = index % 2 === 1
  return (
    <article className={`project-case ${feature ? 'project-case--feature' : 'project-case--compact'} ${reverse ? 'project-case--reverse' : ''}`}>
      <div className="project-case-media"><ScreenshotReel project={project} /></div>
      <div className="project-case-copy">
        <div className="project-number"><span>{project.number}</span><i /></div>
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>
        <div className="project-stack" aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer"><Terminal size={14} /> Repository <ArrowUpRight size={14} /></a>}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="projects-section section-wrap" id="work" aria-labelledby="projects-title">
      <div className="section-kicker"><span>04 / SELECTED WORK</span><span>BUILD → TEST → SHIP</span></div>
      <div className="section-heading projects-heading">
        <h2 id="projects-title">Made to<br /><em>do the work.</em></h2>
        <p>Five projects from the CV. No vanity metrics—just the decisions and systems behind each build.</p>
      </div>
      <div className="projects-index"><span>CASE STUDIES / 05</span><span>SCREENSHOTS: PLACEHOLDERS UNTIL PROVIDED</span></div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index < 2 ? 0.02 : 0}>
            <ProjectCase project={project} index={index} />
          </Reveal>
        ))}
      </div>
      <div className="projects-endnote"><span>END OF SELECTED WORK</span><span>MORE DETAIL IN THE REPOSITORIES <ArrowRight size={13} /></span></div>
    </section>
  )
}
