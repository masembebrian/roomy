"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  title: string
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full">
        {/* Main Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden">
          {/* Large Image */}
          <div className="relative h-64 md:h-96 cursor-pointer group" onClick={() => setIsFullscreen(true)}>
            <Image
              src={images[0] || "/placeholder.svg"}
              alt={`${title} - Image 1`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Small Images Grid */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative h-[11.5rem] cursor-pointer group"
                onClick={() => {
                  setCurrentIndex(index + 1)
                  setIsFullscreen(true)
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 2}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold">
                    +{images.length - 5} more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* View All Photos Button */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 right-4 bg-white hover:bg-white/90"
          onClick={() => setIsFullscreen(true)}
        >
          <Maximize2 className="w-4 h-4 mr-2" />
          Show all photos
        </Button>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 text-white"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 text-white"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center p-12">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={cn(
                    "relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                    currentIndex === index
                      ? "border-white scale-110"
                      : "border-transparent opacity-60 hover:opacity-100",
                  )}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
