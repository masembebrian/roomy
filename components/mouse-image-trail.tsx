"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface TrailImage {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
  rotation: number
  src: string
}

interface MouseImageTrailProps {
  images?: string[]
  maxTrailLength?: number
  fadeSpeed?: number
}

export default function MouseImageTrail({
  images = [
    "/images/kampala-apartment.png",
    "/images/entebbe-studio.png",
    "/images/jinja-family-home.png",
    "/images/mukono-villa.png",
    "/images/fort-portal-cottage.png",
  ],
  maxTrailLength = 15,
  fadeSpeed = 0.05,
}: MouseImageTrailProps) {
  const [trail, setTrail] = useState<TrailImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const mousePosition = useRef({ x: 0, y: 0 })
  const lastAddTime = useRef(0)
  const animationFrameId = useRef<number>()
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Only enable on desktop devices
    const checkDevice = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
      setIsEnabled(!isTouch && window.innerWidth > 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      const now = Date.now()

      // Add new trail image every 50ms
      if (now - lastAddTime.current > 50) {
        lastAddTime.current = now

        setTrail((prevTrail) => {
          const newTrail: TrailImage = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            opacity: 1,
            scale: 1,
            rotation: (Math.random() - 0.5) * 30, // Random rotation between -15 and 15 degrees
            src: images[currentImageIndex],
          }

          // Update image index for next trail
          setCurrentImageIndex((prev) => (prev + 1) % images.length)

          // Keep only the last maxTrailLength images
          const updatedTrail = [...prevTrail, newTrail].slice(-maxTrailLength)
          return updatedTrail
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isEnabled, images, currentImageIndex, maxTrailLength])

  useEffect(() => {
    if (!isEnabled) return

    const animate = () => {
      setTrail((prevTrail) =>
        prevTrail
          .map((item) => ({
            ...item,
            opacity: item.opacity - fadeSpeed,
            scale: item.scale - fadeSpeed * 0.5,
          }))
          .filter((item) => item.opacity > 0),
      )

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [isEnabled, fadeSpeed])

  if (!isEnabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40" aria-hidden="true">
      {trail.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: item.x - 40,
            top: item.y - 40,
            opacity: item.opacity,
            transform: `scale(${item.scale}) rotate(${item.rotation}deg)`,
            transition: "none",
          }}
        >
          <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-xl" style={{ filter: "blur(1px)" }}>
            <Image src={item.src || "/placeholder.svg"} alt="" fill className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  )
}
