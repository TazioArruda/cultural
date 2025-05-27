import FeatureCard from "@/components/cards/feature-card"
import { Zap, Shield, Users } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      iconColor: "blue",
      title: "Rápido e Eficiente",
      description: "Performance otimizada para resultados instantâneos",
      content:
        "Nossa tecnologia avançada garante velocidade máxima em todas as operações, economizando seu tempo valioso.",
    },
    {
      icon: Shield,
      iconColor: "green",
      title: "Seguro e Confiável",
      description: "Proteção de dados de nível empresarial",
      content: "Seus dados estão protegidos com criptografia de ponta e backup automático em múltiplas localizações.",
    },
    {
      icon: Users,
      iconColor: "purple",
      title: "Colaboração Fácil",
      description: "Trabalhe em equipe sem complicações",
      content: "Compartilhe projetos, colabore em tempo real e mantenha toda sua equipe sincronizada.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recursos que fazem a diferença</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para ter sucesso, em uma única plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
