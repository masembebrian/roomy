"use client"

import { useState } from "react"
import MouseImageTrail from "@/components/mouse-image-trail"
import InteractiveImageGrid from "@/components/interactive-image-grid"
import MagneticImageHover from "@/components/magnetic-image-hover"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, Grid3x3, Magnet } from "lucide-react"

const trailImages = [
  "/images/kampala-apartment.png",
  "/images/entebbe-studio.png",
  "/images/jinja-family-home.png",
  "/images/mukono-villa.png",
  "/images/fort-portal-cottage.png",
  "/images/white-water-rafting.png",
  "/images/gorilla-trekking.png",
  "/images/cooking-class.png",
]

const gridItems = [
  { id: "1", image: "/images/kampala-apartment.png", title: "Kampala Luxury" },
  { id: "2", image: "/images/entebbe-studio.png", title: "Entebbe Studio" },
  { id: "3", image: "/images/jinja-family-home.png", title: "Jinja Family Home" },
  { id: "4", image: "/images/mukono-villa.png", title: "Mukono Villa" },
  { id: "5", image: "/images/fort-portal-cottage.png", title: "Fort Portal" },
  { id: "6", image: "/images/white-water-rafting.png", title: "Adventure" },
  { id: "7", image: "/images/gorilla-trekking.png", title: "Wildlife" },
  { id: "8", image: "/images/cooking-class.png", title: "Culture" },
]

export default function GalleryPage() {
  const [mode, setMode] = useState<"trail" | "grid" | "magnetic">("trail")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Interactive Image Gallery</h1>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Experience our properties and adventures in a whole new way
            </p>

            {/* Mode Selector */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                variant={mode === "trail" ? "default" : "outline"}
                onClick={() => setMode("trail")}
                className="gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Mouse Trail
              </Button>
              <Button
                variant={mode === "grid" ? "default" : "outline"}
                onClick={() => setMode("grid")}
                className="gap-2"
              >
                <Grid3x3 className="w-4 h-4" />
                Interactive Grid
              </Button>
              <Button
                variant={mode === "magnetic" ? "default" : "outline"}
                onClick={() => setMode("magnetic")}
                className="gap-2"
              >
                <Magnet className="w-4 h-4" />
                3D Magnetic
              </Button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {mode === "trail" && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Mouse Trail Effect</h2>
                <p className="text-muted-foreground mb-8">
                  Move your mouse around to see images follow your cursor with beautiful animations
                </p>
              </div>

              <div className="relative min-h-[600px] bg-gradient-to-br from-background via-primary/5 to-secondary/5 rounded-3xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
                  <h3 className="text-2xl font-semibold">Move your mouse!</h3>
                  <p className="text-muted-foreground">
                    Watch as property images trail your cursor with smooth animations
                  </p>
                </div>
              </div>

              <MouseImageTrail images={trailImages} maxTrailLength={20} enabled={true} />
            </div>
          )}

          {mode === "grid" && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Interactive Grid</h2>
                <p className="text-muted-foreground mb-8">
                  Hover over images to see them react to your mouse position with physics-based animations
                </p>
              </div>

              <InteractiveImageGrid items={gridItems} />
            </div>
          )}

          {mode === "magnetic" && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">3D Magnetic Hover</h2>
                <p className="text-muted-foreground mb-8">
                  Experience 3D perspective transforms that follow your mouse with magnetic attraction
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {gridItems.slice(0, 6).map((item) => (
                  <div key={item.id} className="aspect-square">
                    <MagneticImageHover
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      subtitle="Explore this amazing destination"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Animation Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smooth Trails</h3>
                <p className="text-muted-foreground">Images follow your cursor with fade and scale animations</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Grid3x3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Physics-Based</h3>
                <p className="text-muted-foreground">Spring animations and magnetic attraction effects</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Magnet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">3D Perspective</h3>
                <p className="text-muted-foreground">Real-time 3D transforms following mouse position</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
