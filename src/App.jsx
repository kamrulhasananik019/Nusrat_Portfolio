import './App.css'
import About from './components/About'
import Carousel from './components/Carousel/Carousel'

import Clients from './components/Clients'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {


  return (
    <section className='overflow-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Carousel/>
        <Clients />
        <Contact />
    </section>
  )
}

export default App
