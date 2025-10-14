"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MouseImageTrail from "@/components/mouse-image-trail"
import InteractiveImageGrid from "@/components/interactive-image-grid"
import MagneticImageHover from "@/components/magnetic-image-hover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Grid3x3, Magnet, Info } from "lucide-react"

export default function GalleryPage() {
  const [activeMode, setActiveMode] = useState("trail")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {activeMode === "trail" && <MouseImageTrail />}

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="w-3 h-3 mr-1" />
            Interactive Gallery
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience Interactive Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our properties with stunning animations and effects that respond to your mouse movements
          </p>
        </div>

        {/* Mode Selector */}
        <Tabs value={activeMode} onValueChange={setActiveMode} className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="trail" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Mouse Trail
            </TabsTrigger>
            <TabsTrigger value="grid" className="flex items-center gap-2">
              <Grid3x3 className="w-4 h-4" />
              Interactive Grid
            </TabsTrigger>
            <TabsTrigger value="magnetic" className="flex items-center gap-2">
              <Magnet className="w-4 h-4" />
              3D Magnetic
            </TabsTrigger>
          </TabsList>

          {/* Trail Mode */}
          <TabsContent value="trail" className="mt-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  How to Use Mouse Trail
                </CardTitle>
                <CardDescription>
                  Move your mouse around to see images follow your cursor with beautiful animations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Images trail behind your cursor</li>
                      <li>• Smooth fade-out animations</li>
                      <li>• Random rotations for variety</li>
                      <li>• Cycles through property images</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Move slowly for longer trails</li>
                      <li>• Move quickly for dynamic effects</li>
                      <li>• Works best on desktop devices</li>
                      <li>• Try circular motions!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="min-h-[600px] rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <div className="text-center p-8">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold mb-2">Move Your Mouse Around!</h3>
                <p className="text-muted-foreground">
                  Watch as property images create a beautiful trail following your cursor
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Grid Mode */}
          <TabsContent value="grid" className="mt-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  How to Use Interactive Grid
                </CardTitle>
                <CardDescription>Hover over images to see them react with physics-based animations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Magnetic attraction to cursor</li>
                      <li>• Scale and rotation effects</li>
                      <li>• Glowing cursor follower</li>
                      <li>• Particle animations on hover</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hover near images to see attraction</li>
                      <li>• Watch the cursor glow effect</li>
                      <li>• Images scale and rotate smoothly</li>
                      <li>• Details appear on hover</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InteractiveImageGrid />
          </TabsContent>

          {/* Magnetic Mode */}
          <TabsContent value="magnetic" className="mt-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  How to Use 3D Magnetic Cards
                </CardTitle>
                <CardDescription>Experience realistic 3D tilt effects that follow your mouse movement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Realistic 3D perspective</li>
                      <li>• Shine/reflection effects</li>
                      <li>• Floating particle animations</li>
                      <li>• Smooth spring physics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Move mouse within card bounds</li>
                      <li>• Watch for the shine effect</li>
                      <li>• Cards tilt like physical objects</li>
                      <li>• Details animate on hover</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <MagneticImageHover />
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Sparkles className="w-8 h-8 mb-2 text-purple-600" />
                <CardTitle>Smooth Animations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  60fps animations powered by Framer Motion for buttery smooth interactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Grid3x3 className="w-8 h-8 mb-2 text-pink-600" />
                <CardTitle>Interactive Physics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Spring-based physics create natural, realistic movements and interactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Magnet className="w-8 h-8 mb-2 text-indigo-600" />
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimized for all devices with appropriate fallbacks for mobile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
