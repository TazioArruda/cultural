"use client"

import { useParams, Link, Navigate } from "react-router-dom"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"

export default function BlogPostPage() {
  const { slug } = useParams()

  // Simulando busca do post pelo slug
  const blogPosts = {
    "como-aumentar-produtividade": {
      title: "Como Aumentar sua Produtividade em 2024",
      content: `
        <p>A produtividade é um dos fatores mais importantes para o sucesso profissional. Neste artigo, vamos explorar estratégias comprovadas para maximizar sua eficiência no trabalho.</p>
        
        <h2>1. Organize seu Ambiente de Trabalho</h2>
        <p>Um ambiente organizado contribui significativamente para a concentração e eficiência. Mantenha sua mesa limpa e organize seus arquivos digitais.</p>
        
        <h2>2. Use a Técnica Pomodoro</h2>
        <p>Trabalhe em blocos de 25 minutos com pausas de 5 minutos. Esta técnica ajuda a manter o foco e evita o esgotamento mental.</p>
        
        <h2>3. Elimine Distrações</h2>
        <p>Identifique e elimine as principais fontes de distração em seu ambiente de trabalho. Isso inclui notificações desnecessárias e interrupções constantes.</p>
      `,
      author: "João Silva",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=400&width=800",
      category: "Produtividade",
    },
    "tendencias-tecnologia": {
      title: "Principais Tendências de Tecnologia para Este Ano",
      content: `
        <p>A tecnologia evolui rapidamente e é essencial estar atualizado com as principais tendências que moldarão o futuro dos negócios.</p>
        
        <h2>Inteligência Artificial</h2>
        <p>A IA continua a revolucionar diversos setores, desde atendimento ao cliente até análise de dados complexos.</p>
        
        <h2>Computação em Nuvem</h2>
        <p>A migração para a nuvem se tornou essencial para empresas que buscam escalabilidade e eficiência.</p>
      `,
      author: "Maria Santos",
      date: "10 de Janeiro, 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=400&width=800",
      category: "Tecnologia",
    },
  }

  const post = blogPosts[slug]

  if (!post) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Blog
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">{post.category}</span>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Share2 className="w-4 h-4 mr-1" />
              Compartilhar
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>

          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </header>

        {/* Post Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gostou do conteúdo?</h3>
          <p className="text-gray-600 mb-6">Assine nossa newsletter para receber mais insights como este</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Assinar Newsletter
          </button>
        </div>
      </div>
    </div>
  )
}
