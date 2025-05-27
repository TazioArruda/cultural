import { CheckCircle } from "lucide-react"

export default function FeatureList({ features }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          {feature}
        </div>
      ))}
    </div>
  )
}
