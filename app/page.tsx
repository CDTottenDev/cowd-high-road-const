import { Sidebar } from "./components/sidebar"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Projects } from "./components/projects"
import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Sidebar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
