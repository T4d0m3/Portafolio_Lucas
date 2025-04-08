"use client"

import { useEffect, useRef } from "react"

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Crear estrellas - declarar antes de handleResize
    const stars: Star[] = []
    const shootingStars: ShootingStar[] = []
    // Eliminamos las nebulosas que son las bolas moradas que parpadean

    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Regenerar estrellas cuando cambia el tamaño para asegurar buena distribución
      stars.length = 0
      // Aumentamos la cantidad de estrellas para compensar la eliminación de las nebulosas
      for (let i = 0; i < Math.max(500, window.innerWidth / 3); i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8, // Ligeramente más grandes
          opacity: Math.random(),
          speed: Math.random() * 0.05,
          hue: Math.random() > 0.7 ? 270 : 200, // Más estrellas blancas/azules que moradas
        })
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Modificar la función createShootingStar para que sea más probable en pantallas grandes
    const createShootingStar = () => {
      // Aumentar probabilidad en pantallas grandes
      const probability = Math.min(0.03, 0.01 + window.innerWidth / 50000)
      if (Math.random() < probability && shootingStars.length < Math.max(3, window.innerWidth / 800)) {
        const x = Math.random() * canvas.width
        const y = -20
        const length = 50 + Math.random() * 150
        const angle = Math.PI / 4 + Math.random() * (Math.PI / 4)
        const speed = 5 + Math.random() * 15

        shootingStars.push({
          x,
          y,
          length,
          angle,
          speed,
          opacity: 1,
          hue: 270, // Morado
        })
      }
    }

    // Función de animación
    const animate = () => {
      // Limpiar canvas con un fondo negro semi-transparente para crear efecto de estela
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar estrellas
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${star.hue}, 100%, 80%, ${star.opacity})`
        ctx.fill()

        // Hacer que las estrellas parpadeen
        star.opacity = 0.2 + Math.abs(Math.sin(Date.now() * star.speed)) * 0.8
      })

      // Crear y actualizar estrellas fugaces
      createShootingStar()

      // Dibujar estrellas fugaces
      shootingStars.forEach((star, index) => {
        ctx.strokeStyle = `hsla(${star.hue}, 100%, 80%, ${star.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        const endX = star.x + Math.cos(star.angle) * star.length
        const endY = star.y + Math.sin(star.angle) * star.length
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Mover estrella fugaz
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Desvanecer estrella fugaz
        star.opacity -= 0.01

        // Eliminar estrellas fugaces que ya no son visibles
        if (star.opacity <= 0 || star.y > canvas.height || star.x > canvas.width) {
          shootingStars.splice(index, 1)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" style={{ pointerEvents: "none" }} />
}

// Tipos para los elementos del fondo estelar
interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
  hue: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
}

