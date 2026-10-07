import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { Reveal } from '../animation/Reveal'

export function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    setLoading(true)
    setStatus('Sending...')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing')
      }

      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('Message sent successfully!')
      form.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Failed to send message. Please try again or email directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <div className="section-kicker">
          <span>06 / CONTACT</span>
          <span>KATHMANDU, NEPAL</span>
        </div>
        <div className="contact-intro">
          <Reveal>
            <p className="micro-label">HAVE A PROBLEM WORTH SOLVING?</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="contact-title">
              Let’s make
              <br />
              <em>it work.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <span className="micro-label">DIRECT LINES</span>
            <a href={`mailto:${profile.email}`}>
              <Mail size={15} /> {profile.email}
            </a>
            <a href={profile.phoneHref}>
              <Phone size={15} /> {profile.phone}
            </a>
            <span className="contact-location">
              <MapPin size={15} /> {profile.location}
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span className="github-text-mark">GH</span> GitHub <ArrowUpRight size={13} />
            </a>
            <a className="resume-download" href={profile.resume} download="Ansh-Shrestha-CV.pdf">
              <Download size={15} /> Download résumé (PDF) <ArrowUpRight size={13} />
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <span className="micro-label">SEND A NOTE</span>
              <span>DIRECT TO EMAIL</span>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Name"
              required
              maxLength={100}
              aria-required="true"
            />
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
              aria-required="true"
            />
            <label htmlFor="contact-message">What are you building?</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="A few lines about it..."
              required
              maxLength={3000}
              aria-required="true"
            />
            <div className="form-submit-row">
              <button type="submit" className="button-lime" disabled={loading} aria-busy={loading}>
                {loading ? 'Sending...' : 'Send message'} <ArrowUpRight size={15} />
              </button>
              <span>I'll get back to you as soon as possible</span>
            </div>
            <p className="form-status" role="status" aria-live="polite" aria-atomic="true">
              {status}
            </p>
          </form>
        </div>
      </section>
      <footer className="site-footer section-wrap">
        <a className="footer-signature" href="#top" aria-label="Back to top">
          <span className="monogram">
            <i />
            AS<span>/</span>
          </span>
          <span>
            ANSH SHRESTHA
            <br />
            <small>FULL-STACK DEVELOPER</small>
          </span>
        </a>
        <span className="footer-note">
          DESIGNED & BUILT WITH INTENTION
          <br />
          KATHMANDU, NEPAL · 2026
        </span>
        <a className="back-to-top" href="#top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  )
}
