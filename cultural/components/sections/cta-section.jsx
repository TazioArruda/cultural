import EmailSignup from "@/components/forms/email-signup"

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para começar sua jornada?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já transformaram seus resultados
        </p>

        <EmailSignup />

        <p className="text-sm text-blue-100 mt-4">Teste grátis por 14 dias. Cancele quando quiser.</p>
      </div>
    </section>
  )
}
