import type { ReactNode } from 'react'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles/globals.css?url'

function NotFound() {
  return (
    <main
      className="section-wrap"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(48px, 8vw, 96px)',
          margin: 0,
          letterSpacing: '-0.08em',
          fontFamily: 'var(--mono)',
        }}
      >
        404
      </h1>
      <p style={{ color: 'var(--muted)' }}>Page not found</p>
    </main>
  )
}

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Ansh Shrestha — Full-Stack Developer' },
      {
        name: 'description',
        content:
          'Full-stack developer specializing in React, TypeScript, Django REST Framework and Python. Portfolio showcasing projects, skills and experience.',
      },
      { name: 'theme-color', content: '#080a08' },
      { property: 'og:title', content: 'Ansh Shrestha — Full-Stack Developer' },
      {
        property: 'og:description',
        content:
          'Full-stack developer specializing in React, TypeScript, Django REST Framework and Python. Portfolio showcasing projects, skills and experience.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/favicon.svg' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Ansh Shrestha — Full-Stack Developer' },
      {
        name: 'twitter:description',
        content:
          'Full-stack developer specializing in React, TypeScript, Django REST Framework and Python. Portfolio showcasing projects, skills and experience.',
      },
      { name: 'keywords', content: 'Ansh Shrestha, full-stack developer, React, TypeScript, Django REST, Python, portfolio' },
      { name: 'author', content: 'Ansh Shrestha' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap',
      },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
