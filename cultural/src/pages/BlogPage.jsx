import { Link } from "react-router-dom"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: "como-aumentar-produtividade",
      title: "Como Aumentar sua Produtividade em 2024",
      excerpt: "Descubra as melhores estratégias e ferramentas para maximizar sua produtividade no trabalho.",
      author: "João Silva",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=200&width=400",
      category: "Produtividade",
    },
    {
      id: 2,
      slug: "tendencias-tecnologia",
      title: "Principais Tendências de Tecnologia para Este Ano",
      excerpt: "Explore as tecnologias emergentes que estão moldando o futuro dos negócios.",
      author: "Maria Santos",
      date: "10 de Janeiro, 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=200&width=400",
      category: "Tecnologia",
    },
    {
      id: 3,
      slug: "marketing-digital-estrategias",
      title: "Estratégias de Marketing Digital que Funcionam",
      excerpt: "Aprenda as táticas mais eficazes para alcançar e converter seu público-alvo online.",
      author: "Pedro Costa",
      date: "5 de Janeiro, 2024",
      readTime: "6 min",
      image: "/placeholder.svg?height=200&width=400",
      category: "Marketing",
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, dicas e tendências para ajudar você a crescer
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
