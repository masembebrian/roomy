import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LastMinuteDealsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-48 mb-6 bg-white/20" />
          <Skeleton className="h-16 w-96 mb-4 bg-white/20" />
          <Skeleton className="h-6 w-full max-w-2xl bg-white/20" />
        </div>
      </div>

      {/* Filters Skeleton */}
      <div className="border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-4">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
          </div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
