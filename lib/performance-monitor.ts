export const reportWebVitals = (metric: any) => {
  // Only send metrics in production
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    const body = JSON.stringify(metric)

    // Use Navigator.sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/metrics", body)
    }
  }
}

export const measurePageLoad = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    window.addEventListener("load", () => {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart

      console.log("[v0] Page load time:", pageLoadTime, "ms")
    })
  }
}
