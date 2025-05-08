import React, {useEffect, useState, useRef} from 'react'
import AvatarImage from '../assets/images/AvatarLaptopBackground.png'
import NoiteIcon from '../assets/projects/Noite.png'
import PoolCountersIcon from '../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../assets/projects/BTC Tracker.png'
import {
  Download,
  Github,
  Globe,
  GraduationCap,
  Monitor,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-react'
import ButtonCut from '../components/common/ButtonCut'
import {motion, useAnimation, useInView} from 'framer-motion'
import {useLanguage} from '../hooks/LanguageContext'
import {TextField} from '@mui/material'
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
