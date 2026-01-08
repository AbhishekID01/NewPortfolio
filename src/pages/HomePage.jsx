import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import TapeSection from '../components/TapeSection'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Projects/>
        <TapeSection/>
        <AboutSection/>
    </div>
  )
}

export default HomePage