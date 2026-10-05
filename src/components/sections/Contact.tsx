import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { createContactHref } from '../../lib/contact'
import { Reveal } from '../animation/Reveal'

export function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = new FormData(form)
    const href = createContactHref({
      name: String(values.get('name') ?? ''),
      email: String(values.get('email') ?? ''),
      message: String(values.get('message') ?? ''),
    })
    setStatus('Your email app is opening with the message ready to send.')
    window.location.href = href
  }

  return (
    <>
      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <div className="section-kicker"><span>08 / CONTACT</span><span>KATHMANDU, NEPAL</span></div>
        <div className="contact-intro">
          <Reveal><p className="micro-label">HAVE A PROBLEM WORTH SOLVING?</p></Reveal>
          <Reveal delay={0.05}><h2 id="contact-title">Let’s make<br /><em>it work.</em></h2></Reveal>
          <Reveal delay={0.1}><a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<ArrowUpRight size={18} /></a></Reveal>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <span className="micro-label">DIRECT LINES</span>
            <a href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
            <a href={profile.phoneHref}><Phone size={15} /> {profile.phone}</a>
            <span className="contact-location"><MapPin size={15} /> {profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={13} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span className="github-text-mark">GH</span> GitHub <ArrowUpRight size={13} /></a>
            <a className="resume-download" href={profile.resume} download="Ansh-Shrestha-CV.pdf"><Download size={15} /> Download résumé (PDF) <ArrowUpRight size={13} /></a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span className="micro-label">SEND A NOTE</span><span>DIRECT TO EMAIL</span></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="Name" required maxLength={100} />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
            <label htmlFor="contact-message">What are you building?</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="A few lines about it..." required maxLength={3000} />
            <div className="form-submit-row"><button type="submit" className="button-lime">Compose email <ArrowUpRight size={15} /></button><span>Opens your email app · no data stored</span></div>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <a className="footer-signature" href="#top"><span className="monogram"><i />AS<span>/</span></span><span>ANSH SHRESTHA<br /><small>FULL-STACK DEVELOPER</small></span></a>
        <span className="footer-note">DESIGNED & BUILT WITH INTENTION<br />KATHMANDU, NEPAL · 2026</span>
        <a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </>
  )
}
