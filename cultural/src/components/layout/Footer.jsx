import Logo from "../common/Logo"

export default function Footer() {
  const footerData = {
    produto: {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#" },
        { label: "Preços", href: "/pricing" },
        { label: "Integrações", href: "#" },
      ],
    },
    empresa: {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Carreiras", href: "#" },
      ],
    },
    suporte: {
      title: "Suporte",
      links: [
        { label: "Central de Ajuda", href: "#" },
        { label: "Contato", href: "/contact" },
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
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SeuProduto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
