import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingCard({ name, price, period, description, features, popular }) {
  return (
    <Card
      className={cn(
        "relative border-2 transition-all hover:shadow-lg",
        popular ? "border-blue-500 shadow-lg scale-105" : "border-gray-200",
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Mais Popular</span>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {price === "Personalizado" ? "Falar com Vendas" : "Começar Agora"}
        </Button>
      </CardContent>
    </Card>
  )
}
