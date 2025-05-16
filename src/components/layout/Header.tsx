import React, {useState, useEffect} from 'react'
import {Github, Linkedin, Mail} from 'lucide-react'
import LanguageSwitcher from '../common/LanguageSwitcher'
import {useLanguage} from '../../hooks/LanguageContext'
import {useWindowSize} from 'react-use'

function Header(): React.ReactElement {
  const {t} = useLanguage()
  const {width} = useWindowSize()
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
      className={`fixed select-none border-[#000]/50 w-full z-10 bg-white lg:bg-[#121212]/95 backdrop-blur-sm transition-all duration-700 ease-in-out left-0 ${
        isScrolled || width < 1024 ? 'top-0 shadow-lg' : 'top-10'
      }`}
    >
      <div
        style={{
          width: isScrolled || width < 1024 ? '100%' : '80%',
          maxWidth: isScrolled || width < 1024 ? '100vw' : '1200px',
          transition: 'all 300ms ease-in-out',
        }}
        className='lg:mx-auto'
      >
        <nav
          className={`transition-all duration-500 ease-in-out h-22 flex flex-row items-center justify-between overflow-hidden ring-3 ring-[#000]/25 uppercase min-w-[320px] ${
            isScrolled || width < 1024 ? 'rounded-none' : 'rounded-lg'
          }`}
        >
          <div className='flex flex-row items-center justify-center overflow-hidden h-22 min-w-[200px] flex-shrink-0'>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer anton-regular p-4 pb-5 w-12 h-full flex flex-row items-center bg-white/85 text-neutral-900 text-xl'
            >
              ;
            </div>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer anton-regular relative h-min -left-[16px] bg-neutral-900 text-white rounded leading-none text-center m-0 p-2 font-bold text-3xl z-5'
            >
              NL
            </div>
            <div
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className='cursor-pointer relative flex border-y border-y-white border-l-2 border-l-[#111] lg:border-l-0 items-center -left-[35px] sm:-left-[40px] lg:-left-[44px] p-4 ps-9 pe-10 text-start uppercase h-full bg-white text-neutral-900 font-bold leading-4 text-[10px] tracking-[4px]'
            >
              Nicolas
              <br />
              Llamazares
            </div>
            {width > 1024 && (
              <ul className='flex flex-row h-full font-bold text-[14px] relative -left-[15px] flex-shrink-0 overflow-visible'>
                <li
                  className={`h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer ${
                    activeSection === 'about' ? 'border-b-2 border-[#0fa]' : ''
                  }`}
                >
                  <div
                    className={`flex items-center px-8 h-full whitespace-nowrap ${
                      activeSection === 'about' ? 'text-[#0fa]' : ''
                    }`}
                    onClick={(e) => handleSmoothScroll(e, 'about')}
                  >
                    {t('nav.about')}
                  </div>
                </li>
                <li
                  className={`h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer ${
                    activeSection === 'projects'
                      ? 'border-b-2 border-[#0fa]'
                      : ''
                  }`}
                >
                  <div
                    className={`flex items-center px-8 h-full whitespace-nowrap ${
                      activeSection === 'projects' ? 'text-[#0fa]' : ''
                    }`}
                    onClick={(e) => handleSmoothScroll(e, 'projects')}
                  >
                    {t('nav.projects')}
                  </div>
                </li>
                <li
                  className={`h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer ${
                    activeSection === 'contact'
                      ? 'border-b-2 border-[#0fa]'
                      : ''
                  }`}
                >
                  <div
                    className={`flex items-center px-8 h-full whitespace-nowrap ${
                      activeSection === 'contact' ? 'text-[#0fa]' : ''
                    }`}
                    onClick={(e) => handleSmoothScroll(e, 'contact')}
                  >
                    {t('nav.contact')}
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className='flex flex-row gap-3 items-center h-full px-4 pe-8 flex-shrink-0'>
            {width > 1024 && (
              <>
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
              </>
            )}

            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
