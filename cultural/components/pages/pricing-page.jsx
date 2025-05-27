import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PricingCard from "@/components/cards/pricing-card"

export default function PricingPage() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 29",
      period: "/mês",
      description: "Perfeito para começar",
      features: ["Até 1.000 usuários", "Suporte por email", "Dashboard básico", "Integrações limitadas"],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 79",
      period: "/mês",
      description: "Para equipes em crescimento",
      features: [
        "Até 10.000 usuários",
        "Suporte prioritário",
        "Dashboard avançado",
        "Todas as integrações",
        "Analytics detalhado",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Para grandes empresas",
      features: ["Usuários ilimitados", "Suporte dedicado", "Customizações", "SLA garantido", "Treinamento incluso"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Escolha o Plano Ideal</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Planos flexíveis que crescem com seu negócio
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
