import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'
import Hero     from './components/sections/Hero'
import Services from './components/sections/Services'
import About    from './components/sections/About'
import Portfolio from './components/sections/Portfolio'
import Process  from './components/sections/Process'
import Contact  from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
