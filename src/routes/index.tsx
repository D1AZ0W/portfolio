import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '../components/navigation/SiteNav'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { IdentityPass } from '../components/identity/IdentityPass'

export const Route = createFileRoute('/')({
  component: PortfolioPage,
})

function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <IdentityPass />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
