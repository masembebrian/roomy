import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function InvestorsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Skeleton className="w-24 h-24 rounded-full" />
          </div>
          <Skeleton className="h-12 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-[600px] mx-auto" />
        </div>

        {/* Key Metrics Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-8 w-20 mb-1" />
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-4 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-8">
          <div className="flex space-x-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>

          {/* Content Area Skeleton */}
          <div className="space-y-12">
            {/* Investment Thesis Cards */}
            <div>
              <Skeleton className="h-8 w-48 mx-auto mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="w-12 h-12 rounded-full mb-4" />
                      <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Market Opportunity */}
            <div>
              <Skeleton className="h-8 w-48 mx-auto mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-6 text-center">
                      <Skeleton className="h-8 w-16 mx-auto mb-2" />
                      <Skeleton className="h-5 w-24 mx-auto mb-2" />
                      <Skeleton className="h-4 w-32 mx-auto mb-1" />
                      <Skeleton className="h-5 w-20 mx-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Investment History */}
            <div>
              <Skeleton className="h-8 w-48 mx-auto mb-8" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-2">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-5 w-20" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Investors Grid */}
            <div>
              <Skeleton className="h-8 w-32 mx-auto mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-6 text-center">
                      <Skeleton className="h-12 w-full mb-4" />
                      <Skeleton className="h-5 w-32 mx-auto mb-1" />
                      <Skeleton className="h-4 w-24 mx-auto mb-1" />
                      <Skeleton className="h-5 w-16 mx-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section Skeleton */}
        <Card className="mt-16">
          <CardContent className="text-center py-12">
            <Skeleton className="w-16 h-16 mx-auto mb-6" />
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-5 w-48 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="h-4 w-36 mx-auto" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-36" />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
