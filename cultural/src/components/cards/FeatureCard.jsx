export default function FeatureCard({ icon: Icon, iconColor, title, description, content }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  }

  return (
    <div className="border-0 shadow-lg hover:shadow-xl transition-shadow p-6 bg-white rounded-lg">
      <div className="mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[iconColor]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}
