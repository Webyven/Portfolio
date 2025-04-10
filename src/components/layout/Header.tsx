import React from 'react'
import {Link} from 'react-router-dom'
import {Github, Linkedin, Mail} from 'lucide-react'

function Header(): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Llamar una vez al inicio para establecer el estado correcto
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Añadir array de dependencias vacío para que solo se ejecute una vez

  return (
    <header
      className={`fixed select-none w-full z-10 bg-[#121212] transition-all duration-500 ease-in-out left-0 ${
        isScrolled ? 'top-0' : 'top-10'
      }`}
    >
      <nav
        className={`transition-all duration-500 ease-in-out h-19 flex flex-row items-center justify-between overflow-hidden ring-3 ring-[#000]/25 uppercase min-w-[320px] ${
          isScrolled
            ? 'w-full m-0 rounded-none'
            : 'container max-w-9/12 md:max-lg:max-w-10/12 max-md:max-w-full mx-auto rounded-lg'
        }`}
      >
        <div className='flex flex-row items-center justify-center overflow-hidden h-19 min-w-[180px] flex-shrink-0'>
          {/* Logo y nombre */}
          <Link
            to={'/'}
            className='anton-regular p-4 pb-5 w-12 h-full flex flex-row items-center bg-white/85 text-neutral-900 text-xl'
          >
            ;
          </Link>
          <Link
            to={'/'}
            className='anton-regular relative h-min -left-[14px] bg-neutral-900 text-white rounded leading-none text-center m-0 p-2 font-bold text-3xl z-5'
          >
            NL
          </Link>
          <Link
            to={'/'}
            className='relative flex border-y border-y-white items-center -left-[39px] p-4 ps-9 pe-10 text-start uppercase h-full bg-white text-neutral-900 font-bold leading-4 text-[10px] tracking-[4px]'
          >
            Nicolas
            <br />
            Llamazares
          </Link>
        </div>

        {/* Navegación */}
        <ul className='flex flex-row h-full font-bold text-[14px] relative -left-[15px] flex-shrink-0 overflow-visible'>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link
              className='flex items-center px-8 h-full whitespace-nowrap'
              to='/about'
            >
              About
            </Link>
          </li>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link
              className='flex items-center px-8 h-full whitespace-nowrap'
              to='/projects'
            >
              Projects
            </Link>
          </li>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link
              className='flex items-center px-8 h-full whitespace-nowrap'
              to='/contact'
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className='max-lg:hidden flex flex-row gap-3 items-center h-full px-4 pe-8 flex-shrink-0'>
          <a
            href='https://github.com/Webyven/'
            target='_blank'
            className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-colors'
            rel='noopener noreferrer'
          >
            <Github size={16} fill='inherit' />
          </a>
          <a
            href='https://www.linkedin.com/in/llamazares-nicolas/'
            target='_blank'
            className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-colors'
            rel='noopener noreferrer'
          >
            <Linkedin size={16} fill='inherit' />
          </a>
          <a
            href='mailto:llamazares.nico@gmail.com'
            target='_blank'
            className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-colors'
            rel='noopener noreferrer'
          >
            <Mail size={16} fill='inherit' />
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Header
