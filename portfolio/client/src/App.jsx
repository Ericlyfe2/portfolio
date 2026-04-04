import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import EventGallery from './components/EventGallery'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-base text-slate-200">
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <EventGallery />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
