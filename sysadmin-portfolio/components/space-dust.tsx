"use client"

import { useEffect, useRef } from "react"

export default function SpaceDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Crear partículas de polvo espacial - declarar antes de handleResize
    const particles: Particle[] = []

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Regenerar partículas cuando cambia el tamaño
      particles.length = 0
      for (let i = 0; i < Math.max(150, window.innerWidth / 10); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5,
          hue: 270 + Math.random() * 60, // Variaciones de morado
        })
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar y actualizar partículas
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`
        ctx.fill()

        // Mover partículas
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Hacer que las partículas parpadeen ligeramente
        particle.opacity = Math.max(0.1, particle.opacity + (Math.random() - 0.5) * 0.01)

        // Reposicionar partículas que salen de la pantalla
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-1" style={{ pointerEvents: "none" }} />
}

// Tipo para las partículas de polvo espacial
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  hue: number
}

