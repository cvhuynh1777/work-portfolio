import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const STAR_COUNT = 220
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.15 + 0.02,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.01 + 0.003,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.85 ? '#a78bfa' : Math.random() > 0.7 ? '#7dd3fc' : '#ffffff',
    }))

    // A few "nebula" blobs
    const nebulae = [
      { x: 0.15, y: 0.2, r: 180, color: 'rgba(139,92,246,0.04)' },
      { x: 0.8, y: 0.6, r: 220, color: 'rgba(0,212,255,0.035)' },
      { x: 0.5, y: 0.85, r: 150, color: 'rgba(139,92,246,0.03)' },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Nebula blobs
      nebulae.forEach(n => {
        const g = ctx.createRadialGradient(
          n.x * canvas.width, n.y * canvas.height, 0,
          n.x * canvas.width, n.y * canvas.height, n.r
        )
        g.addColorStop(0, n.color)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(n.x * canvas.width, n.y * canvas.height, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Stars
      stars.forEach(s => {
        s.opacity += s.twinkleSpeed * s.twinkleDir
        if (s.opacity >= 1) { s.opacity = 1; s.twinkleDir = -1 }
        if (s.opacity <= 0.1) { s.opacity = 0.1; s.twinkleDir = 1 }

        ctx.globalAlpha = s.opacity
        ctx.fillStyle = s.color
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()

        // Tiny cross sparkle for slightly bigger stars
        if (s.r > 1.2) {
          ctx.globalAlpha = s.opacity * 0.4
          ctx.strokeStyle = s.color
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(s.x - s.r * 2.5, s.y)
          ctx.lineTo(s.x + s.r * 2.5, s.y)
          ctx.moveTo(s.x, s.y - s.r * 2.5)
          ctx.lineTo(s.x, s.y + s.r * 2.5)
          ctx.stroke()
        }
      })

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      aria-hidden="true"
    />
  )
}
