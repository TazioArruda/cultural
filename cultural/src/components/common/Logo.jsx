import { Zap } from "lucide-react"
import { Link } from "react-router-dom"

export default function Logo({ variant = "light", className = "" }) {
  const isLight = variant === "light"

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <Zap className="w-5 h-5 text-white" />
      </div>
      <span className={`text-xl font-bold ${isLight ? "text-gray-900" : "text-white"}`}>SeuProduto</span>
    </Link>
  )
}
