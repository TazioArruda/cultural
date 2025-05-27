import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Colocamos nossos clientes no centro de tudo que fazemos",
    },
    {
      icon: Target,
      title: "Inovação",
      description: "Buscamos constantemente novas formas de resolver problemas",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos com a qualidade em cada detalhe",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre Nossa Empresa</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Somos uma empresa dedicada a transformar experiências digitais e ajudar nossos clientes a alcançar seus
              objetivos.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
