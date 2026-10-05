import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#identity', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [active, setActive] = useState('top')
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 34)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = ['top', 'identity', 'skills', 'work', 'journey', 'open-source', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header className={`site-nav ${compact ? 'site-nav--compact' : ''}`}>
      <a className="wordmark" href="#top" aria-label="Ansh Shrestha, back to top" onClick={() => setOpen(false)}>
        <span className="monogram" aria-hidden="true"><i />AS<span>/</span></span>
        <span className="wordmark-name">Ansh Shrestha</span>
      </a>

      <nav id="mobile-navigation" className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        {links.map((link) => {
          const sectionId = link.href.slice(1)
          return (
            <a
              key={link.href}
              href={link.href}
              className={active === sectionId ? 'nav-link nav-link--active' : 'nav-link'}
              aria-current={active === sectionId ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      <a className="nav-availability" href="#contact"><span /> Open to opportunities</a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
      <span className="sr-only" aria-live="polite">
        {open ? 'Navigation menu open' : 'Navigation menu closed'}
      </span>
    </header>
  )
}
