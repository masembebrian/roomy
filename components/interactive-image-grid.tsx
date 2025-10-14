"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ImageGridItem {
  id: string
  image: string
  title: string
}

interface InteractiveImageGridProps {
  items: ImageGridItem[]
}

export default function InteractiveImageGrid({ items }: InteractiveImageGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div
      ref={gridRef}
      className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8"
      onMouseMove={handleMouseMove}
    >
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index
        const distance =
          hoveredIndex !== null
            ? Math.sqrt(
                Math.pow(mousePosition.x - (index % 4) * 250 - 125, 2) +
                  Math.pow(mousePosition.y - Math.floor(index / 4) * 250 - 125, 2),
              )
            : 999

        const scale = hoveredIndex !== null ? Math.max(0.9, 1 - distance / 1000) : 1
        const rotate = isHovered ? (mousePosition.x - (index % 4) * 250 - 125) / 20 : 0

        return (
          <motion.div
            key={item.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale,
              rotate,
              zIndex: isHovered ? 50 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.div
              className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </motion.div>

            {/* Ripple effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-xl border-4 border-primary"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
          </motion.div>
        )
      })}

      {/* Cursor follower */}
      {hoveredIndex !== null && (
        <motion.div
          className="absolute w-32 h-32 pointer-events-none"
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <div className="w-full h-full rounded-full bg-primary/20 blur-xl" />
        </motion.div>
      )}
    </div>
  )
}

export { InteractiveImageGrid }
