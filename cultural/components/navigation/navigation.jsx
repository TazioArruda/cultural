"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  const navigationItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Preços", href: "/pricing" },
    { label: "Contato", href: "/contact" },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors hover:text-gray-900",
            pathname === item.href ? "text-blue-600 font-medium" : "text-gray-600",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
