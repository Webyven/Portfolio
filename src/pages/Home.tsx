import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'

function Home(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Home
