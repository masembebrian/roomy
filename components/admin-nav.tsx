"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Home, AlertTriangle, Settings } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: BarChart3 },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Properties", href: "/admin/properties", icon: Home },
  { label: "Moderation", href: "/admin/moderation", icon: AlertTriangle },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-2 mb-6">
      {adminNavItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link key={item.href} href={item.href}>
            <Button variant={isActive ? "default" : "outline"} size="sm" className="gap-2">
              <Icon className="w-4 h-4" />
              {item.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}
