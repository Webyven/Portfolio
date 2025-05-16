import React from 'react'
import {useLanguage} from '../../hooks/LanguageContext'

const LanguageSwitcher: React.FC = () => {
  const {language, setLanguage} = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <div
      onClick={toggleLanguage}
      className='rounded-full w-8 h-8 bg-[#000]/10 lg:text-gray-400 border-2 border-[#222] text-[#222] lg:border-[#000]/15 lg:hover:text-[#fff] lg:hover:border-[#0fa] hover:border-[#000] hover:text-[#000] transition-colors duration-300 cursor-pointer overflow-hidden relative'
      style={{padding: 0}}
    >
      <div
        className='flex w-[205%] tracking-wide oswald-regular text-sm bg-[#000]/10 items-center h-full absolute p-0 transition-all flex-row'
        style={{
          transform: language === 'en' ? 'translateX(0px)' : 'translateX(-50%)',
        }}
      >
        <div className='w-[50%] mb-0.5'>
          <span>EN</span>
        </div>
        <div className='w-[50%] mb-0.5'>
          <span>ES</span>
        </div>
      </div>
    </div>
  )
}

export default LanguageSwitcher
