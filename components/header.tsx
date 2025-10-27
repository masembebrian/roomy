"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Menu,
  User,
  Settings,
  Heart,
  Calendar,
  MessageSquare,
  HelpCircle,
  LogOut,
  Globe,
  Compass,
  Sparkles,
  Check,
} from "lucide-react"
import { useAuth } from "@/lib/auth"
import { useLanguage } from "@/lib/i18n/context"

const languages = [
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "lg" as const, name: "Luganda", flag: "🇺🇬" },
  { code: "sw" as const, name: "Kiswahili", flag: "🇰🇪" },
  { code: "fr" as const, name: "Français", flag: "🇫🇷" },
]

export function Header() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const navigation = [
    { name: t("nav.explore"), href: "/explore", icon: Compass },
    { name: t("nav.experiences"), href: "/experiences", icon: Sparkles },
  ]

  const userNavigation = user
    ? [
        { name: t("nav.bookings"), href: "/bookings", icon: Calendar },
        { name: t("nav.favorites"), href: "/favorites", icon: Heart },
        { name: t("nav.messages"), href: "/messages", icon: MessageSquare },
        { name: t("nav.profile"), href: "/profile", icon: User },
        { name: t("nav.settings"), href: "/settings", icon: Settings },
        { name: t("nav.help"), href: "/help", icon: HelpCircle },
      ]
    : []

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roomy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" className="gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language Selector - Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden md:flex">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="cursor-pointer">
                    <span className="mr-2">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {language === lang.code && <Check className="h-4 w-4 ml-2" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user.user_metadata?.avatar_url || "/placeholder.svg"}
                        alt={user.user_metadata?.full_name || "User"}
                      />
                      <AvatarFallback>
                        {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-sm">{user.user_metadata?.full_name || "User"}</p>
                      <p className="text-xs text-muted-foreground">{user.email || user.phone}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {userNavigation.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="cursor-pointer">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t("nav.signout")}</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link href="/auth/signin">
                  <Button variant="ghost">{t("nav.signin")}</Button>
                </Link>
                <Link href="/auth/signup">
                  <Button>{t("nav.signup")}</Button>
                </Link>
              </div>
            )}

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {user && (
                    <div className="flex items-center gap-3 pb-4 border-b">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.user_metadata?.avatar_url || "/placeholder.svg"} />
                        <AvatarFallback>
                          {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.user_metadata?.full_name || "User"}</p>
                        <p className="text-sm text-muted-foreground">{user.email || user.phone}</p>
                      </div>
                    </div>
                  )}

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}

                  {user ? (
                    <>
                      <div className="border-t pt-4">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent"
                          >
                            <item.icon className="h-5 w-5" />
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        ))}
                      </div>

                      {/* Language Selector - Mobile */}
                      <div className="border-t pt-4">
                        <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{t("nav.language")}</div>
                        <div className="space-y-1">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => setLanguage(lang.code)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent ${
                                language === lang.code ? "bg-accent" : ""
                              }`}
                            >
                              <span className="text-xl">{lang.flag}</span>
                              <span className="flex-1 text-left font-medium">{lang.name}</span>
                              {language === lang.code && <Check className="h-4 w-4" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          handleSignOut()
                          setMobileMenuOpen(false)
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-red-600 mt-4"
                      >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">{t("nav.signout")}</span>
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Language Selector for non-logged in users */}
                      <div className="border-t pt-4">
                        <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{t("nav.language")}</div>
                        <div className="space-y-1">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => setLanguage(lang.code)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent ${
                                language === lang.code ? "bg-accent" : ""
                              }`}
                            >
                              <span className="text-xl">{lang.flag}</span>
                              <span className="flex-1 text-left font-medium">{lang.name}</span>
                              {language === lang.code && <Check className="h-4 w-4" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-4 border-t pt-4">
                        <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full bg-transparent">
                            {t("nav.signin")}
                          </Button>
                        </Link>
                        <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                          <Button className="w-full">{t("nav.signup")}</Button>
                        </Link>
                      </div>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

// Default export for compatibility
export default Header
