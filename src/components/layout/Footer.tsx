import React from 'react'
import {motion} from 'framer-motion'
import {useLanguage} from '../../hooks/LanguageContext'
import {ChevronsUp} from 'lucide-react'
import {fadeInUp} from '../../animations/variants'

function Footer(): React.ReactElement {
  const {t} = useLanguage()

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
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.3}}
      className='w-full -mt-28 pt-1 h-28 bg-[#000]/60 overflow-hidden'
      style={{
        clipPath:
          'polygon(0% 0%, 275px 0, 375px 59%, 100% 59%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div
        className='w-full h-full relative flex flex-row bg-[#111]/60'
        style={{
          clipPath:
            'polygon(0% 0%, 275px 0, 375px calc(59% + 2px), 100% calc(59% + 2px), 100% 100%, 100% 100%, 0% 100%, 0% 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <motion.div
          variants={{
            hidden: {opacity: 0, x: 30},
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
              },
            },
          }}
        >
          <div className='flex flex-row h-16 items-center px-16 pt-11'>
            <div className='anton-regular relative h-min text-neutral-900 bg-white rounded leading-none text-center m-0 p-2 font-bold text-4xl z-5'>
              NL
            </div>
            <div className='relative flex items-center ps-4 text-start uppercase h-full text-white font-bold leading-5 text-[12px] tracking-[5px]'>
              {t('footer.my')}
              <br />
              {t('footer.portfolio')}
            </div>
          </div>
        </motion.div>
        <p
          className='absolute inset-x-0 bottom-3 text-center font-bold text-[#777] text-sm'
          style={{fontWeight: 200}}
        >
          {t('footer.message')}
        </p>
        <div
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className='cursor-pointer text-[#999] absolute -end-5 flex bottom-0 top-0 text-md leading-none m-0 p-3 pe-7 ps-4.5 pb-3.5 z-5 border-l-4 border-[#070707] items-end hover:bg-[#000]/25 hover:text-white transition duration-300 ease-in-out'
          style={{
            transform: 'skew(-15deg)',
          }}
        >
          <div
            className='flex flex-row gap-2'
            style={{transform: 'skew(15deg)'}}
          >
            <motion.div
              animate={{
                y: [1, -1, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ChevronsUp size={19} />
            </motion.div>
            {t('footer.backToTop')}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
