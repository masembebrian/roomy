"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ScrollItem {
  id: string
  image: string
  title: string
  subtitle?: string
}

interface InfiniteScrollTrailProps {
  items: ScrollItem[]
  direction?: "left" | "right"
  speed?: number
}

export default function InfiniteScrollTrail({ items, direction = "left", speed = 30 }: InfiniteScrollTrailProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let position = 0

    const animate = () => {
      if (direction === "left") {
        position -= speed / 60
        if (position <= -scrollContainer.scrollWidth / 2) {
          position = 0
        }
      } else {
        position += speed / 60
        if (position >= 0) {
          position = -scrollContainer.scrollWidth / 2
        }
      }

      scrollContainer.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [direction, speed])

  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-8">
      <div ref={scrollRef} className="flex gap-6 will-change-transform" style={{ width: "max-content" }}>
        {duplicatedItems.map((item, index) => (
          <Card
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-[300px] overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-[200px]">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
              {item.subtitle && <p className="text-sm text-muted-foreground line-clamp-2">{item.subtitle}</p>}
            </div>
          </Card>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}

export { InfiniteScrollTrail }
