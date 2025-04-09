import React from 'react'
import {Link} from 'react-router-dom'
import {Github, Linkedin, Mail} from 'lucide-react'

function Header(): React.ReactElement {
  return (
    <header className='fixed select-none left-0 top-10 w-full z-10 bg-[#121212]'>
      <nav className='container max-w-8/12 md:max-lg:max-w-10/12 max-md:max-w-full h-19 mx-auto flex flex-row items-center rounded-lg overflow-hidden ring-3 ring-[#000]/25 uppercase'>
        {/* Logo y nombre */}
        <div className='anton-regular p-4 pb-5 w-12 h-full flex flex-row items-center bg-white/85 text-neutral-900 text-xl'>
          ;
        </div>
        <Link
          to={'/'}
          className='anton-regular relative h-min -left-[14px] bg-neutral-900 text-white rounded leading-none text-center m-0 p-2 font-bold text-3xl z-5'
        >
          NL
        </Link>
        <div className='relative flex border-y border-y-white items-center -left-[39px] p-4 ps-9 pe-10 text-start uppercase h-full bg-white text-neutral-900 font-bold leading-4 text-[10px] tracking-[4px]'>
          Nicolas
          <br />
          Llamazares
        </div>

        {/* Navegación */}
        <ul className='flex flex-row h-full font-bold text-[14px] relative -left-[15px]'>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link className='flex items-center px-8 h-full' to='/about'>
              About
            </Link>
          </li>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link className='flex items-center px-8 h-full' to='/projects'>
              Projects
            </Link>
          </li>
          <li className='h-full flex items-center hover:bg-neutral-900 transition-all cursor-pointer'>
            <Link className='flex items-center px-8 h-full' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className='flex flex-row gap-3 items-center ml-auto h-full px-4 pe-8'>
          <a
            href='URL_ADDRESS.com/NicolasLlamazares'
            target='_blank'
            className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-colors'
            rel='noopener noreferrer'
          >
            <Github size={16} fill='inherit' />
          </a>
          <a
            href='URL_ADDRESS.com/NicolasLlamazares'
            target='_blank'
            className='rounded-full p-2 bg-[#000]/10 text-gray-400 border-2 border-[#000]/15 hover:text-[#fff] hover:border-[#0fa] transition-colors'
            rel='noopener noreferrer'
          >
            <Linkedin size={16} fill='inherit' />
          </a>
          <a
            href='URL_ADDRESS.com/NicolasLlamazares'
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
