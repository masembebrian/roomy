"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Loader2 } from "lucide-react"

interface ReviewFormProps {
  onSubmit: (rating: number, comment: string) => Promise<void>
  isLoading?: boolean
}

export function ReviewForm({ onSubmit, isLoading = false }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (rating === 0 || !comment.trim()) {
      return
    }

    try {
      await onSubmit(rating, comment)
      setSubmitted(true)
      setRating(0)
      setComment("")
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error("Error submitting review:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Your Experience</CardTitle>
        <CardDescription>Help other guests make informed decisions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base mb-3 block">How would you rate your stay?</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="transition-transform hover:scale-110"
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoverRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {["Poor", "Fair", "Good", "Very Good", "Excellent"][rating - 1]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">Your Review</Label>
          <Textarea
            id="comment"
            placeholder="Share details about your stay, what you loved, and any suggestions..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            maxLength={1000}
          />
          <p className="text-xs text-muted-foreground">{comment.length}/1000 characters</p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={rating === 0 || !comment.trim() || isLoading}
          size="lg"
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : submitted ? (
            "Review Submitted!"
          ) : (
            "Submit Review"
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
