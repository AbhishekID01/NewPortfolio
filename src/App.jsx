import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Project from './pages/Projects'
import TapeSection from './pages/TapeSection'
import AboutSection from './pages/AboutSection'
import ContactSection from './pages/ContactSection'
import FooterSection from './pages/FooterSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Project/>
      <TapeSection/>
      <AboutSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default App