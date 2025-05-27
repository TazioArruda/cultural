export default function Badge({ icon: Icon, text }) {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8">
      <Icon className="w-4 h-4 mr-2" />
      {text}
    </div>
  )
}
