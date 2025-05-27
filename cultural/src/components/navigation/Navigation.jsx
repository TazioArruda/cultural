import { Link, useLocation } from "react-router-dom"
import { navigationItems } from "../../config/navigation"

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`transition-colors hover:text-gray-900 ${
            location.pathname === item.path ? "text-blue-600 font-medium" : "text-gray-600"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
