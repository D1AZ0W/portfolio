const marks: Record<string, 'react' | 'ts' | 'api' | 'db'> = {
  React: 'react',
  TypeScript: 'ts',
  'Django REST': 'api',
  PostgreSQL: 'db',
}

export function TechMark({ technology }: { technology: string }) {
  const type = marks[technology] ?? 'api'

  if (type === 'react') {
    return (
      <svg className="tech-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="1.9" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.1" transform="rotate(120 12 12)" />
      </svg>
    )
  }

  const label = type === 'ts' ? 'TS' : type === 'db' ? 'DB' : '</>'
  return <span className={`tech-mark tech-mark--${type}`} aria-hidden="true">{label}</span>
}
