"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface TrailImage {
  x: number
  y: number
  id: number
  rotation: number
  scale: number
}

interface MouseImageTrailProps {
  images: string[]
  maxTrailLength?: number
  enabled?: boolean
}

export default function MouseImageTrail({ images, maxTrailLength = 15, enabled = true }: MouseImageTrailProps) {
  const [trail, setTrail] = useState<TrailImage[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!enabled) return

      const rotation = Math.random() * 40 - 20 // Random rotation between -20 and 20 degrees
      const scale = 0.8 + Math.random() * 0.4 // Random scale between 0.8 and 1.2

      setTrail((prevTrail) => [
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
          rotation,
          scale,
        },
        ...prevTrail.slice(0, maxTrailLength - 1),
      ])

      // Cycle through images
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    },
    [enabled, maxTrailLength, images.length],
  )

  useEffect(() => {
    if (!enabled) return

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove, enabled])

  if (!isClient || !enabled) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((item, index) => {
          const imageIndex = (currentImageIndex - index + images.length) % images.length
          const opacity = 1 - index / maxTrailLength

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.9, scale: item.scale }}
              animate={{ opacity: 0, scale: item.scale * 0.5 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
              }}
              className="w-20 h-20 md:w-24 md:h-24"
            >
              <div
                className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-2 ring-white/50"
                style={{
                  opacity: opacity * 0.7,
                  filter: `blur(${index * 0.2}px)`,
                }}
              >
                <Image
                  src={images[imageIndex] || "/placeholder.svg"}
                  alt="Trail image"
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

export { MouseImageTrail }
