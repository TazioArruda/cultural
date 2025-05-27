import Header from "../components/layout/Header"
import HeroSection from "../components/sections/HeroSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import CtaSection from "../components/sections/CtaSection"
import Footer from "../components/layout/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
