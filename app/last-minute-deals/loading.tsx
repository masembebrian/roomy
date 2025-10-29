import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LastMinuteDealsLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Skeleton */}
        <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 py-24">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mb-4 bg-white/20" />
            <Skeleton className="h-16 w-full max-w-2xl mb-6 bg-white/20" />
            <Skeleton className="h-6 w-full max-w-3xl bg-white/20" />
          </div>
        </section>

        {/* Filters Skeleton */}
        <section className="border-b bg-background py-4">
          <div className="container mx-auto px-4">
            <div className="flex gap-4">
              <Skeleton className="h-10 w-[200px]" />
              <Skeleton className="h-10 w-[200px]" />
            </div>
          </div>
        </section>

        {/* Grid Skeleton */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
