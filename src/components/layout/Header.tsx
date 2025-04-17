import React, {useState, useEffect} from 'react'
import {Github, Linkedin, Mail} from 'lucide-react'
import LanguageSwitcher from '../common/LanguageSwitcher'
import {useLanguage} from '../../hooks/LanguageContext'

function Header(): React.ReactElement {
  const {t} = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'projects', 'contact']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLDivElement>,
    targetId: string
  ) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`fixed select-none w-full z-10 bg-[#121212]/95 backdrop-blur-sm transition-all duration-700 ease-in-out left-0 ${
        isScrolled ? 'top-0 shadow-lg' : 'top-10'
      }`}
    >
      <div
        style={{
          width: isScrolled ? '100%' : '80%',
          maxWidth: isScrolled ? '100vw' : '1200px',
          transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className='mx-auto'
      >
        <nav
          className={`transition-all duration-700 ease-in-out h-22 flex flex-row items-center justify-between overflow-hidden ring-3 ring-[#000]/25 uppercase min-w-[320px] ${
            isScrolled ? 'rounded-none' : 'rounded-lg'
          }`}
        >
          <div className='flex flex-row items-center justify-center overflow-hidden h-22 min-w-[180px] flex-shrink-0'>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer anton-regular p-4 pb-5 w-12 h-full flex flex-row items-center bg-white/85 text-neutral-900 text-xl hover:bg-white transition-colors duration-300'
              aria-label='Home'
            >
              ;
            </div>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer anton-regular relative h-min -left-[16px] bg-neutral-900 text-white rounded leading-none text-center m-0 p-2 font-bold text-3xl z-5 hover:bg-neutral-800 transition-colors duration-300'
              aria-label='Home'
            >
              NL
            </div>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer relative flex border-y border-y-white items-center -left-[44px] p-4 ps-9 pe-10 text-start uppercase h-full bg-white text-neutral-900 font-bold leading-4 text-[10px] tracking-[4px] hover:bg-gray-100 transition-colors duration-300'
              aria-label='Home'
            >
              Nicolas
              <br />
              Llamazares
            </div>
            <ul className='flex flex-row h-full font-bold text-[14px] relative -left-[15px] flex-shrink-0 overflow-visible'>
              {['about', 'projects', 'contact'].map((section) => (
                <li
                  key={section}
                  className={`h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer ${
                    activeSection === section ? 'border-b-2 border-[#0fa]' : ''
                  }`}
                >
                  <div
                    className={`flex items-center px-8 h-full whitespace-nowrap ${
                      activeSection === section ? 'text-[#0fa]' : ''
                    }`}
                    onClick={(e) => handleSmoothScroll(e, section)}
                    aria-label={t(`nav.${section}`)}
                  >
                    {t(`nav.${section}`)}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-lg:hidden flex flex-row gap-3 items-center h-full px-4 pe-8 flex-shrink-0'>
            <a
              href='https://github.com/Webyven/'
              target='_blank'
              className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-all duration-300 hover:scale-110'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <Github size={16} fill='inherit' />
            </a>
            <a
              href='https://www.linkedin.com/in/llamazares-nicolas/'
              target='_blank'
              className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-all duration-300 hover:scale-110'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <Linkedin size={16} fill='inherit' />
            </a>
            <a
              href='mailto:llamazares.nico@gmail.com'
              target='_blank'
              className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-all duration-300 hover:scale-110'
              rel='noopener noreferrer'
              aria-label='Email'
            >
              <Mail size={16} fill='inherit' />
            </a>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
