export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-[rgba(114,149,200,0.08)] rounded ${className}`} aria-hidden="true" />
  )
}
