import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { certifications, education, experience } from '../../data/portfolio'
import { Reveal } from '../animation/Reveal'

export function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="journey-section section-wrap" id="journey" aria-labelledby="journey-title">
      <div className="section-kicker"><span>05 / JOURNEY</span><span>SELECTED EXPERIENCE</span></div>
      <div className="section-heading journey-heading">
        <h2 id="journey-title">A little<br /><em>context.</em></h2>
        <p>Roles, learning, and the systems I’ve worked across—drawn directly from the CV.</p>
      </div>
      <div className="timeline-layout">
        <div className="timeline-axis" aria-hidden="true"><span className="timeline-axis-label">2026</span><div className="timeline-axis-track"><motion.i initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }} /></div><span className="timeline-axis-foot">NOW</span></div>
        <div className="timeline-entries">
          {experience.map((item, index) => (
            <motion.article
              className="timeline-entry"
              key={item.company}
              initial={reduceMotion ? false : { opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-entry-head"><span className="timeline-date">{item.date}</span><span className="timeline-tag">{item.tag}</span></div>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}{item.location && <> <span>·</span> {item.location}</>}</p>
              <p className="timeline-detail">{item.detail}</p>
              <span className="timeline-entry-index">0{index + 1}</span>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="education-band">
        <Reveal>
          <div className="education-card">
            <span className="education-icon"><GraduationCap size={21} strokeWidth={1.5} /></span>
            <div><span className="micro-label">EDUCATION / 2026</span><h3>{education.degree}</h3><p>{education.school} <span>—</span> {education.status}</p></div>
            <ArrowUpRight size={16} className="education-arrow" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="certifications">
            <span className="micro-label">CERTIFICATIONS</span>
            <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
