"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageTrailItem {
  id: string
  image: string
  title: string
  subtitle?: string
  link?: string
}

interface ImageTrailProps {
  items: ImageTrailItem[]
  autoplay?: boolean
  interval?: number
  showControls?: boolean
}

export default function ImageTrail({ items, autoplay = true, interval = 4000, showControls = true }: ImageTrailProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!autoplay || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval, isPaused, items.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100 z-10"
                : index === (currentIndex - 1 + items.length) % items.length
                  ? "opacity-0 scale-95 -translate-x-full z-0"
                  : "opacity-0 scale-95 translate-x-full z-0"
            }`}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in-up">{item.title}</h3>
              {item.subtitle && (
                <p className="text-lg md:text-xl opacity-90 animate-fade-in-up animation-delay-100">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 z-20 gap-2 p-2 bg-black/30 backdrop-blur-sm rounded-lg">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-16 rounded overflow-hidden transition-all duration-300 ${
              index === currentIndex ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

// Export named as well for compatibility
export { ImageTrail }
