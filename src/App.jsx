import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import YoutubeSection from './components/YoutubeSection'
import Training from './components/Training'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <YoutubeSection />
      <Training />
      <Testimonials />
      <Footer />
    </>
  )
}
