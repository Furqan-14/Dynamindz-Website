import Navbar       from './components/layout/Navbar'
import Footer       from './components/layout/Footer'
import Hero         from './components/sections/Hero'
import Capabilities from './components/sections/Capabilities'
import Services     from './components/sections/Services'
import About        from './components/sections/About'
import Process      from './components/sections/Process'
import Contact      from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
