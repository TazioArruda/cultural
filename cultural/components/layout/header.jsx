import { Button } from "@/components/ui/button"
import Logo from "@/components/common/logo"
import Navigation from "@/components/navigation/navigation"

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button>Começar Grátis</Button>
        </div>
      </div>
    </header>
  )
}
