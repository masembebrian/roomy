"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Heart,
  Calendar,
  Home,
  MapPin,
  Camera,
  Users,
  Shield,
  HelpCircle,
  Moon,
  Sun,
  Globe,
  Languages,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useAuth } from "@/lib/auth"
import { useLanguage } from "@/lib/i18n/context"
import { languages } from "@/lib/i18n/translations"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { user, signOut, loading } = useAuth()
  const { language, setLanguage, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  const navigationItems = [
    {
      title: t("explore"),
      href: "/explore",
      description: "Discover amazing properties across Uganda",
    },
    {
      title: t("experiences"),
      href: "/experiences",
      description: "Book unique local experiences and activities",
    },
  ]

  const hostingItems = [
    {
      title: t("listYourProperty"),
      href: "/list-property",
      description: t("listPropertyDesc"),
      icon: Home,
    },
    {
      title: t("hostDashboard"),
      href: "/host-dashboard",
      description: t("manageListings"),
      icon: Settings,
    },
    {
      title: t("becomeHost"),
      href: "/become-host",
      description: t("becomeHostDesc"),
      icon: Users,
    },
    {
      title: t("hostProtection"),
      href: "/host-protection",
      description: t("hostProtectionDesc"),
      icon: Shield,
    },
  ]

  const supportItems = [
    {
      title: t("helpCenter"),
      href: "/help",
      description: t("helpCenterDesc"),
      icon: HelpCircle,
    },
    {
      title: t("safetyInfo"),
      href: "/safety",
      description: t("safetyInfoDesc"),
      icon: Shield,
    },
    {
      title: t("contactUs"),
      href: "/contact",
      description: t("contactUsDesc"),
      icon: Users,
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl sm:text-2xl font-bold">R</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              Roomy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Explore & Experiences */}
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                          pathname === item.href ? "bg-accent text-accent-foreground" : ""
                        }`}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Hosting Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("hosting")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/become-host"
                          >
                            <Home className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">{t("becomeHost")}</div>
                            <p className="text-sm leading-tight text-muted-foreground">{t("becomeHostDesc")}</p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      {hostingItems.slice(0, 3).map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Support Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("support")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {supportItems.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder={t("searchDestinations")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hidden md:inline-flex"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Selector - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  {t("language")}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </span>
                    {language === lang.code && <span className="text-primary font-bold">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {!loading && user ? (
              <>
                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative hidden sm:inline-flex">
                      <Bell className="h-4 w-4" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
                      <span className="sr-only">{t("notifications")}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>{t("notifications")}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">Booking Confirmed</p>
                        <p className="text-xs text-muted-foreground">Your stay in Kampala has been confirmed</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">New Message</p>
                        <p className="text-xs text-muted-foreground">Sarah sent you a message about your booking</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/notifications">View all {t("notifications").toLowerCase()}</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.image || "/images/default-avatar.png"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email || user.phone || "Roomy User"}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        {t("profile")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/bookings">
                        <Calendar className="mr-2 h-4 w-4" />
                        {t("myBookings")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/favorites">
                        <Heart className="mr-2 h-4 w-4" />
                        {t("favorites")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/host-dashboard">
                        <Home className="mr-2 h-4 w-4" />
                        {t("hostDashboard")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/list-property">
                        <MapPin className="mr-2 h-4 w-4" />
                        {t("listProperty")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        {t("settings")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("logOut")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Button variant="ghost" asChild className="hidden sm:inline-flex" size="sm">
                  <Link href="/auth/signin">{t("signIn")}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/auth/signup">{t("signUp")}</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile User Info */}
                  {user && (
                    <div className="flex items-center space-x-3 pb-4 border-b">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.image || "/images/default-avatar.png"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {user.email || user.phone || "Roomy User"}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="search"
                      placeholder={t("searchDestinations")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/explore"
                      className="flex items-center space-x-2 text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      <span>{t("explore")}</span>
                    </Link>
                    <Link
                      href="/experiences"
                      className="flex items-center space-x-2 text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Camera className="h-5 w-5" />
                      <span>{t("experiences")}</span>
                    </Link>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold mb-3">{t("hosting")}</h3>
                      {hostingItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center space-x-2 py-2 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold mb-3">{t("support")}</h3>
                      {supportItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center space-x-2 py-2 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Language Selector */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Languages className="h-4 w-4" />
                      {t("language")}
                    </h3>
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={language === lang.code ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setLanguage(lang.code)}
                        >
                          <span className="text-lg mr-2">{lang.flag}</span>
                          <span className="flex-1 text-left">{lang.nativeName}</span>
                          {language === lang.code && <span className="text-primary font-bold">✓</span>}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Theme Toggle */}
                  <div className="border-t pt-4">
                    <Button
                      variant="ghost"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="w-full justify-start"
                    >
                      {theme === "light" ? (
                        <>
                          <Moon className="mr-2 h-4 w-4" />
                          Dark Mode
                        </>
                      ) : (
                        <>
                          <Sun className="mr-2 h-4 w-4" />
                          Light Mode
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Mobile Auth Actions */}
                  {user ? (
                    <div className="border-t pt-4">
                      <Button variant="outline" onClick={handleSignOut} className="w-full justify-start bg-transparent">
                        <LogOut className="mr-2 h-4 w-4" />
                        {t("logOut")}
                      </Button>
                    </div>
                  ) : (
                    <div className="border-t pt-4 space-y-2">
                      <Button
                        variant="outline"
                        asChild
                        className="w-full bg-transparent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/auth/signin">{t("signIn")}</Link>
                      </Button>
                      <Button asChild className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="/auth/signup">{t("signUp")}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

// Named export for compatibility
export { Header }
