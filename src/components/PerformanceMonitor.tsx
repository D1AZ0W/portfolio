import { useEffect } from 'react'
import { reportWebVitals } from '../lib/performance'

export function PerformanceMonitor() {
  useEffect(() => {
    reportWebVitals()
  }, [])

  return null
}
