import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import About from "@/components/about"
import Companies from "@/components/companies"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Companies />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
