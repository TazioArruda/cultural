import Logo from "@/components/common/logo"
import FooterSection from "@/components/footer/footer-section"

export default function Footer() {
  const footerData = {
    produto: {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#" },
        { label: "Preços", href: "#" },
        { label: "Integrações", href: "#" },
      ],
    },
    empresa: {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
      ],
    },
    suporte: {
      title: "Suporte",
      links: [
        { label: "Central de Ajuda", href: "#" },
        { label: "Contato", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo variant="dark" className="mb-4" />
            <p className="text-gray-400">Transformando experiências digitais desde 2024.</p>
          </div>

          {Object.entries(footerData).map(([key, section]) => (
            <FooterSection key={key} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SeuProduto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
