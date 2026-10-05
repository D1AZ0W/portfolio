import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../../data/portfolio'
import { Reveal } from '../animation/Reveal'

export function Skills() {
  const [selected, setSelected] = useState(0)
  const group = skillGroups[selected]

  return (
    <section className="skills-section section-wrap" id="skills" aria-labelledby="skills-title">
      <div className="section-kicker"><span>03 / TOOLKIT</span><span>SELECT A DISCIPLINE</span></div>
      <div className="section-heading skills-heading">
        <h2 id="skills-title">Tools for<br /><em>the whole stack.</em></h2>
        <p>Specialties and working knowledge, grounded in project work—not a made-up score.</p>
      </div>
      <div className="skills-layout">
        <div className="skill-tabs" role="tablist" aria-label="Skill categories" aria-orientation="vertical">
          {skillGroups.map((item, index) => (
            <button
              type="button"
              role="tab"
              id={`skill-tab-${index}`}
              aria-selected={selected === index}
              aria-controls="skill-panel"
              tabIndex={selected === index ? 0 : -1}
              className={selected === index ? 'skill-tab skill-tab--active' : 'skill-tab'}
              key={item.title}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
                event.preventDefault()
                const direction = event.key === 'ArrowDown' ? 1 : -1
                const next = (selected + direction + skillGroups.length) % skillGroups.length
                setSelected(next)
                document.getElementById(`skill-tab-${next}`)?.focus()
              }}
            >
              <span className="skill-tab-index">0{index + 1}</span>
              <span>{item.title}</span>
              <ArrowUpRight size={13} />
            </button>
          ))}
        </div>
        <div className="skill-panel" role="tabpanel" id="skill-panel" aria-labelledby={`skill-tab-${selected}`}>
          <div className="skill-panel-head"><span>{group.title}</span><span>CV / VERIFIED</span></div>
          <div className="skill-list">
            {group.items.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.025}>
                <div className="skill-row">
                  <span className="skill-name">{item.name}</span>
                  <span className={`skill-signal ${item.signal === 'Core focus' ? 'skill-signal--core' : ''}`}>
                    <i aria-hidden="true" />{item.signal}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="skill-legend"><span><i className="legend-core" /> Core focus</span><span><i /> CV-listed / used</span></div>
        </div>
      </div>
      <p className="skills-note">No arbitrary percentages. Each signal reflects how the experience is described in the CV.</p>
    </section>
  )
}
