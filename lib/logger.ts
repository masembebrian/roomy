type LogLevel = "debug" | "info" | "warn" | "error"

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: any
  context?: string
  userAgent?: string
  url?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development"
  private logs: LogEntry[] = []
  private maxLogs = 100

  /**
   * Log a debug message (development only)
   */
  debug(message: string, data?: any, context?: string) {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, data)
      this.storeLog("debug", message, data, context)
    }
  }

  /**
   * Log an info message
   */
  info(message: string, data?: any, context?: string) {
    console.info(`[INFO] ${message}`, data)
    this.storeLog("info", message, data, context)
  }

  /**
   * Log a warning
   */
  warn(message: string, data?: any, context?: string) {
    console.warn(`[WARN] ${message}`, data)
    this.storeLog("warn", message, data, context)
  }

  /**
   * Log an error with stack trace
   */
  error(message: string, error?: Error | any, context?: string) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    const stack = error instanceof Error ? error.stack : undefined

    console.error(`[ERROR] ${message}`, { error: errorMessage, stack })
    this.storeLog("error", message, { error: errorMessage, stack }, context)

    // Send error to monitoring service in production
    if (!this.isDevelopment && typeof window !== "undefined") {
      this.sendToMonitoring({
        level: "error",
        message,
        error: errorMessage,
        stack,
        context,
      })
    }
  }

  /**
   * Store log entry internally
   */
  private storeLog(level: LogLevel, message: string, data?: any, context?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      context,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      url: typeof window !== "undefined" ? window.location.href : undefined,
    }

    this.logs.push(entry)

    // Keep only recent logs in memory
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }
  }

  /**
   * Send error to monitoring service
   */
  private sendToMonitoring(data: any) {
    try {
      // Send to your monitoring service (Sentry, Datadog, etc.)
      navigator.sendBeacon("/api/logs", JSON.stringify(data))
    } catch (error) {
      console.error("Failed to send to monitoring:", error)
    }
  }

  /**
   * Get recent logs for debugging
   */
  getLogs(level?: LogLevel, limit: number = 20): LogEntry[] {
    let filtered = this.logs

    if (level) {
      filtered = filtered.filter((log) => log.level === level)
    }

    return filtered.slice(-limit)
  }

  /**
   * Clear logs
   */
  clearLogs() {
    this.logs = []
  }

  /**
   * Export logs for debugging
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }

  /**
   * Track performance metrics
   */
  trackPerformance(name: string, duration: number, metadata?: any) {
    if (this.isDevelopment) {
      console.log(`[PERF] ${name}: ${duration}ms`, metadata)
    }
    this.storeLog("info", `Performance: ${name}`, { duration, ...metadata }, "performance")
  }

  /**
   * Track user events
   */
  trackEvent(eventName: string, eventData?: any) {
    this.storeLog("info", eventName, eventData, "analytics")

    // Send to analytics service in production
    if (!this.isDevelopment && typeof window !== "undefined") {
      navigator.sendBeacon(
        "/api/analytics",
        JSON.stringify({
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
        })
      )
    }
  }
}

export const logger = new Logger()

/**
 * Performance measurement utility
 */
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  const start = performance.now()
  const result = fn()
  const duration = performance.now() - start
  logger.trackPerformance(name, duration)
  return result
}

/**
 * Async performance measurement utility
 */
export async function measurePerformanceAsync<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  const start = performance.now()
  const result = await fn()
  const duration = performance.now() - start
  logger.trackPerformance(name, duration)
  return result
}
