export function reportWebVitals() {
  if (typeof window === 'undefined') return

  const report = (metric: any) => {
    if (import.meta.env.DEV) {
      console.log(`[WebVitals] ${metric.name}:`, metric.value)
    }
  }

  try {
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(report)
      onFCP(report)
      onINP(report)
      onLCP(report)
      onTTFB(report)
    })
  } catch (e) {
    // ignore
  }
}
