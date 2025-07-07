import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ServicesSection from './components/Services'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import ContactUs from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
      <ServicesSection/>
      <Reviews/>
      <Gallery/>
      <ContactUs/>
    </>
  )
}

export default App
