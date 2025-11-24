"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp } from "lucide-react"

interface ReviewCardProps {
  id: string
  guestName: string
  guestImage?: string
  rating: number
  comment: string
  createdAt: string
  helpfulCount: number
  onHelpful?: () => void
}

export function ReviewCard({
  id,
  guestName,
  guestImage,
  rating,
  comment,
  createdAt,
  helpfulCount,
  onHelpful,
}: ReviewCardProps) {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={guestImage || "/placeholder.svg"} alt={guestName} />
            <AvatarFallback>{guestName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{guestName}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{comment}</p>

      <div className="flex items-center gap-2 pt-2">
        <Button variant="ghost" size="sm" onClick={onHelpful} className="text-xs hover:bg-accent">
          <ThumbsUp className="w-4 h-4 mr-1" />
          Helpful ({helpfulCount})
        </Button>
      </div>
    </div>
  )
}
