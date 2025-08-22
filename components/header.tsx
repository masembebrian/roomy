"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Bell, Heart, Menu, Moon, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: "booking" | "message" | "review" | "system" | "host_update" | "price_drop"
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Booking Confirmed",
    message: "Your booking for Modern Apartment in Kampala has been confirmed",
    time: "2 hours ago",
    read: false,
    type: "booking",
  },
  {
    id: "2",
    title: "New Message",
    message: "Sarah M. sent you a message about your upcoming stay",
    time: "4 hours ago",
    read: false,
    type: "message",
  },
  {
    id: "3",
    title: "Host Update",
    message: "Adventure Uganda added a new experience",
    time: "6 hours ago",
    read: false,
    type: "host_update",
  },
]

export default function Header() {
  const { user, signOut } = useAuth()
  const { setTheme, theme } = useTheme()
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [showNotifications, setShowNotifications] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return "📅"
      case "message":
        return "💬"
      case "review":
        return "⭐"
      case "host_update":
        return "🔔"
      case "price_drop":
        return "💰"
      case "system":
        return "🔔"
      default:
        return "📢"
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Roomy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors">
            Explore
          </Link>
          <Link href="/experiences" className="text-sm font-medium hover:text-primary transition-colors">
            Experiences
          </Link>
          <Link href="/list-property" className="text-sm font-medium hover:text-primary transition-colors">
            List Your Property
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {user ? (
            <>
              {/* Notifications */}
              <DropdownMenu open={showNotifications} onOpenChange={setShowNotifications}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {unreadCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold">Notifications</h3>
                    <Link href="/notifications">
                      <Button variant="ghost" size="sm">
                        View All
                      </Button>
                    </Link>
                  </div>
                  <ScrollArea className="h-96">
                    {notifications.slice(0, 5).length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">No notifications</div>
                    ) : (
                      <div className="space-y-1">
                        {notifications.slice(0, 5).map((notification) => (
                          <Link key={notification.id} href="/notifications">
                            <div
                              className={`p-3 hover:bg-muted cursor-pointer border-b ${
                                !notification.read ? "bg-primary/5" : ""
                              }`}
                              onClick={() => markAsRead(notification.id)}
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className="font-medium text-sm">{notification.title}</p>
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">{notification.message}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                  {notifications.length > 5 && (
                    <div className="p-2 border-t">
                      <Link href="/notifications">
                        <Button variant="ghost" size="sm" className="w-full">
                          View All {notifications.length} Notifications
                        </Button>
                      </Link>
                    </div>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Favorites */}
              <Link href="/favorites">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.image || "/placeholder.svg"} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/bookings">My Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/favorites">Favorites</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/following">Following</Link>
                  </DropdownMenuItem>
                  {user.role === "host" && (
                    <DropdownMenuItem asChild>
                      <Link href="/host-dashboard">Host Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through Roomy</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link href="/explore" className="text-sm font-medium">
                  Explore
                </Link>
                <Link href="/experiences" className="text-sm font-medium">
                  Experiences
                </Link>
                <Link href="/list-property" className="text-sm font-medium">
                  List Your Property
                </Link>
                {user && (
                  <>
                    <Link href="/notifications" className="text-sm font-medium">
                      Notifications
                    </Link>
                    <Link href="/following" className="text-sm font-medium">
                      Following
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
