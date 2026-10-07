import { useState } from 'react'
import { Skeleton } from './Skeleton'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  fetchPriority = 'auto',
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!loaded && <Skeleton className="absolute inset-0" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
