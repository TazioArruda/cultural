import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Badge from "@/components/common/badge"
import FeatureList from "@/components/common/feature-list"

export default function HeroSection() {
  const features = ["Teste grátis por 14 dias", "Sem cartão de crédito", "Suporte 24/7"]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge icon={Star} text="Novo: Funcionalidade revolucionária disponível" />

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transforme sua
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            experiência digital
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          A solução completa que você precisa para acelerar seus resultados. Simples, poderoso e feito para crescer com
          você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg px-8 py-3">
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3">
            Ver Demonstração
          </Button>
        </div>

        <FeatureList features={features} />
      </div>
    </section>
  )
}
