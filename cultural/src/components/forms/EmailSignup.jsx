export default function EmailSignup() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
      <input
        type="email"
        placeholder="Seu melhor email"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button className="whitespace-nowrap px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
        Começar Grátis
      </button>
    </div>
  )
}
