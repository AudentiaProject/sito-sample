import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
