import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
              <Input placeholder="Seu nome completo" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" placeholder="seu@email.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
            <Input placeholder="Como podemos ajudar?" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <Textarea placeholder="Descreva sua necessidade ou dúvida..." rows={5} />
          </div>

          <Button className="w-full" size="lg">
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
