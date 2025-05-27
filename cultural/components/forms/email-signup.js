import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function EmailSignup() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Seu melhor email"
        className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
      />
      <Button size="lg" variant="secondary" className="whitespace-nowrap">
        Começar Grátis
      </Button>
    </div>
  )
}
