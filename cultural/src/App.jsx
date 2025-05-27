import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Layout from "./components/layout/Layout"
import LoadingSpinner from "./components/common/LoadingSpinner"
import ErrorBoundary from "./components/common/ErrorBoundary"
import "./App.css"

// Lazy loading das páginas para melhor performance
const LandingPage = lazy(() => import("./pages/LandingPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const PricingPage = lazy(() => import("./pages/PricingPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Rotas públicas */}
              <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:slug" element={<BlogPostPage />} />
              </Route>

              {/* Página 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
