"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface GridImage {
  id: number
  src: string
  title: string
  location: string
}

interface InteractiveImageGridProps {
  images?: GridImage[]
}

const defaultImages: GridImage[] = [
  { id: 1, src: "/images/kampala-apartment.png", title: "Modern Apartment", location: "Kampala" },
  { id: 2, src: "/images/entebbe-studio.png", title: "Lakeside Studio", location: "Entebbe" },
  { id: 3, src: "/images/jinja-family-home.png", title: "Family Villa", location: "Jinja" },
  { id: 4, src: "/images/mukono-villa.png", title: "Luxury Villa", location: "Mukono" },
  { id: 5, src: "/images/fort-portal-cottage.png", title: "Mountain Cottage", location: "Fort Portal" },
  { id: 6, src: "/images/white-water-rafting.png", title: "Adventure Base", location: "Jinja" },
]

export default function InteractiveImageGrid({ images = defaultImages }: InteractiveImageGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const cardRefs = useRef<HTMLDivElement[]>([])

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorX,
          top: cursorY,
          x: -16,
          y: -16,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => {
            return (
              <motion.div
                key={image.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative group"
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    rotateZ: hoveredId === image.id ? 2 : 0,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.location}</p>
                  </motion.div>

                  {hoveredId === image.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          initial={{
                            x: "50%",
                            y: "50%",
                            scale: 0,
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 100}%`,
                            y: `${50 + (Math.random() - 0.5) * 100}%`,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 0.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
