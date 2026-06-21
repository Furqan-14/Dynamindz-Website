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
    <div className="min-h-screen bg-white text-ink-700 overflow-x-hidden">
      <Navbar />
      <main>
        {/* Section rhythm: white / tint band alternating */}
        <Hero />
        <div className="band">
          <Capabilities />
        </div>
        <Services />
        <div className="band">
          <About />
        </div>
        <Process />
        <div className="band">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
