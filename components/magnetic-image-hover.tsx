"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface MagneticImage {
  id: number
  src: string
  title: string
  subtitle: string
  description: string
}

interface MagneticImageHoverProps {
  images?: MagneticImage[]
}

const defaultImages: MagneticImage[] = [
  {
    id: 1,
    src: "/images/kampala-apartment.png",
    title: "Urban Living",
    subtitle: "Kampala City",
    description: "Experience modern comfort in the heart of Uganda's capital",
  },
  {
    id: 2,
    src: "/images/entebbe-studio.png",
    title: "Lakeside Retreat",
    subtitle: "Entebbe",
    description: "Wake up to stunning views of Lake Victoria",
  },
  {
    id: 3,
    src: "/images/jinja-family-home.png",
    title: "Adventure Hub",
    subtitle: "Jinja",
    description: "Perfect base for exploring the source of the Nile",
  },
]

export default function MagneticImageHover({ images = defaultImages }: MagneticImageHoverProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Discover Amazing Spaces</h2>
          <p className="text-xl text-gray-300">Hover to explore our featured properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <MagneticCard
              key={image.id}
              image={image}
              index={index}
              isHovered={hoveredIndex === index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MagneticCard({
  image,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: {
  image: MagneticImage
  index: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    onHoverEnd()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative h-96 w-full">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.title}
            fill
            className="object-cover"
            style={{ transform: "translateZ(0px)" }}
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            style={{
              transform: "translateZ(20px)",
              background: `radial-gradient(circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(255,255,255,0.3), transparent 50%)`,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            style={{ transform: "translateZ(10px)" }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8" style={{ transform: "translateZ(50px)" }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-pink-300 mb-2 font-medium">{image.subtitle}</p>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold text-white mb-3"
              initial={{ y: 10, opacity: 0.8 }}
              animate={{ y: isHovered ? 0 : 10, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {image.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {image.description}
            </motion.p>

            <motion.button
              className="mt-4 px-6 py-2 bg-white text-purple-900 rounded-full font-semibold hover:bg-pink-100 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </div>

          {/* Floating particles */}
          {isHovered &&
            [...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 200}%`,
                  y: `${50 + (Math.random() - 0.5) * 200}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                }}
                style={{ transform: "translateZ(60px)" }}
              />
            ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
