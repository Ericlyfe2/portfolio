import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000 })

    const COLORS = ['#00d4ff', '#7c3aed', '#00ff88', '#a855f7']
    const COUNT = 120

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.5,
      baseAlpha: Math.random() * 0.5 + 0.15,
      alpha: 0,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }))

    let time = 0

    const draw = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          p.vx -= dx / dist * 0.02
          p.vy -= dy / dist * 0.02
          p.vx *= 0.98
          p.vy *= 0.98
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        p.vx = Math.min(Math.max(p.vx, -1.2), 1.2)
        p.vy = Math.min(Math.max(p.vy, -1.2), 1.2)

        p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.1

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        gradient.addColorStop(0, p.color)
        gradient.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalAlpha = p.alpha * 0.3
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#00d4ff'
            ctx.globalAlpha = alpha
            ctx.lineWidth = 0.6
            ctx.stroke()

            ctx.strokeStyle = '#a855f7'
            ctx.globalAlpha = alpha * 0.4
            ctx.lineWidth = 1.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      const mx = mouse.x
      const my = mouse.y
      if (mx > 0 && my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 200)
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.04)')
        gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.02)')
        gradient.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(mx, my, 200, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('mouseleave', () => {})
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none"
    />
  )
}
