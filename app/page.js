import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Learning from '../components/Learning'
import Insights from '../components/Insights'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div className="hero-scene-divider" aria-hidden />
      <About />
      <Projects />
      <Timeline />
      <Skills />
      <Insights />
      <Learning />
      <Contact />
      <Footer />
    </main>
  )
}
