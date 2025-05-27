import { Check } from "lucide-react"

export default function PricingCard({ name, price, period, description, features, popular }) {
  return (
    <div
      className={`relative border-2 transition-all hover:shadow-lg p-6 bg-white rounded-lg ${
        popular ? "border-blue-500 shadow-lg scale-105" : "border-gray-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Mais Popular</span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      <div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            popular
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-gray-300 text-gray-700 hover:border-gray-400"
          }`}
        >
          {price === "Personalizado" ? "Falar com Vendas" : "Começar Agora"}
        </button>
      </div>
    </div>
  )
}
