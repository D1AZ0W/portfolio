export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-[rgba(199,255,67,0.08)] rounded ${className}`} aria-hidden="true" />
  )
}
