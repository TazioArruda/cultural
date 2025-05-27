"use client"

import { Link, useLocation } from "react-router-dom"
import { navigationItems } from "../../config/navigation"

export default function MobileNavigation({ isOpen, onClose }) {
  const location = useLocation()

  if (!isOpen) return null

  return (
    <div className="md:hidden border-t bg-white">
      <nav className="container mx-auto px-4 py-4 space-y-4">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`block py-2 transition-colors ${
              location.pathname === item.path ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="pt-4 border-t space-y-2">
          <button className="block w-full text-left py-2 text-gray-600">Entrar</button>
          <button className="block w-full py-2 bg-blue-600 text-white rounded-lg text-center">Começar Grátis</button>
        </div>
      </nav>
    </div>
  )
}
