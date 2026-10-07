import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export function DottedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const N = 900
    const pts: [number, number, number][] = []
    const ga = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - 2 * ((i + 0.5) / N)
      const r = Math.sqrt(1 - y * y)
      const t = ga * i
      pts.push([Math.cos(t) * r, y, Math.sin(t) * r])
    }

    let size = 0
    let dpr = 1
    let ax = 0
    let ay = 0
    let vx = 0
    let vy = 0
    let hover = false
    let drag = false
    let lx = 0
    let ly = 0
    let lt = 0
    const AUTO = 0.012

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const b = canvas.getBoundingClientRect()
      size = b.width
      canvas.width = size * dpr
      canvas.height = size * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const pos = (e: PointerEvent): [number, number] => {
      const b = canvas.getBoundingClientRect()
      return [e.clientX - b.left, e.clientY - b.top]
    }

    const handleEnter = () => {
      hover = true
    }
    const handleLeave = () => {
      hover = false
    }
    const handleDown = (e: PointerEvent) => {
      drag = true
      canvas.setPointerCapture(e.pointerId)
      canvas.classList.add('drag')
      const p = pos(e)
      lx = p[0]
      ly = p[1]
      lt = performance.now()
      vx = 0
      vy = 0
    }
    const handleMove = (e: PointerEvent) => {
      if (!drag) return
      const p = pos(e)
      const now = performance.now()
      const dt = Math.max(now - lt, 1)
      const dx = ((p[0] - lx) / size) * Math.PI * 2
      const dy = ((p[1] - ly) / size) * Math.PI * 2
      ay += dx
      ax += dy
      vy = (dx / dt) * 16
      vx = (dy / dt) * 16
      lx = p[0]
      ly = p[1]
      lt = now
    }
    const handleUp = () => {
      if (!drag) return
      drag = false
      canvas.classList.remove('drag')
      if (performance.now() - lt > 80) {
        vx = 0
        vy = 0
      }
    }

    canvas.addEventListener('pointerenter', handleEnter)
    canvas.addEventListener('pointerleave', handleLeave)
    canvas.addEventListener('pointerdown', handleDown)
    canvas.addEventListener('pointermove', handleMove)
    canvas.addEventListener('pointerup', handleUp)
    canvas.addEventListener('pointercancel', handleUp)

    let rafId: number
    const frame = () => {
      if (!drag) {
        if (hover && !reduceMotion) {
          vx *= 0.97
          vy *= 0.97
        } else if (!reduceMotion) {
          vx *= 0.9995
          vy = 0.004
        } else {
          vx = 0
          vy = 0
        }
        ay += vy
        ax += vx
      }
      const s = size * dpr
      const R = s * 0.4
      const cx = s / 2
      const sa = Math.sin(ax)
      const ca = Math.cos(ax)
      const sb = Math.sin(ay)
      const cb = Math.cos(ay)
      ctx.clearRect(0, 0, s, s)
      const col = getComputedStyle(document.documentElement)
        .getPropertyValue('--dot')
        .trim()

      for (let k = 0; k < N; k++) {
        const p = pts[k]
        const x = p[0] * cb + p[2] * sb
        const z = -p[0] * sb + p[2] * cb
        const y2 = p[1] * ca - z * sa
        const z2 = p[1] * sa + z * ca
        const depth = (z2 + 1) / 2
        const persp = (1 / (1.8 - z2 * 0.5)) * 1.8
        const px = cx + x * R * persp
        const py = cx + y2 * R * persp
        const rad = (0.7 + depth * 1.6) * dpr
        ctx.fillStyle = 'rgba(' + col + ',' + (0.12 + depth * 0.88).toFixed(2) + ')'
        ctx.beginPath()
        ctx.arc(px, py, rad, 0, 6.2832)
        ctx.fill()
      }
      rafId = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointerenter', handleEnter)
      canvas.removeEventListener('pointerleave', handleLeave)
      canvas.removeEventListener('pointerdown', handleDown)
      canvas.removeEventListener('pointermove', handleMove)
      canvas.removeEventListener('pointerup', handleUp)
      canvas.removeEventListener('pointercancel', handleUp)
    }
  }, [reduceMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-label="Animated 3D dotted sphere background decoration"
      role="img"
      tabIndex={-1}
      style={{
        position: 'absolute',
        top: '57%',
        right: '3%',
        transform: 'translateY(-50%)',
        width: 'min(92vw, 580px)',
        height: 'min(92vw, 580px)',
        cursor: 'grab',
        touchAction: 'none',
        pointerEvents: 'auto',
        zIndex: 0,
        willChange: 'transform',
      }}
      className="dotted-sphere"
    />
  )
}