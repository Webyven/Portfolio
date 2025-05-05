import React from 'react'
import {motion} from 'framer-motion'
import {useLanguage} from '../../hooks/LanguageContext'

const AboutSection: React.FC = () => {
  const {t} = useLanguage()

  return (
    <div
      id='about'
      className='min-h-[75vh] w-full flex flex-col items-center justify-center pt-25 pb-15'
    >
      <div className='bg-[#0a0a0a] absolute m-0 p-0 h-[2px] w-[99.2vw] left-0 -z-10 flex flex-col align-center justify-between'></div>
      <motion.div
        variants={{
          hidden: {y: 50},
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: 'easeOut',
              when: 'beforeChildren',
              staggerChildren: 0.2,
            },
          },
        }}
        initial='hidden'
        whileInView='visible'
        className='space-y-10 mx-auto relative w-full bg-[#0c0c0c] border-2 border-[#000]/60 p-16 shadow-xl shadow-black/30'
      >
        <motion.div
          className='flex flex-row items-center justify-between'
          variants={{
            hidden: {opacity: 0},
            visible: {
              opacity: 1,
              transition: {
                duration: 0.4,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className='uppercase font-white oswald-regular text-xl text-start text-white'
            variants={{
              hidden: {opacity: 0, x: -30},
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
            {t('about.title')}
          </motion.h1>
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
            <div className='flex flex-row h-16 items-center'>
              <div className='anton-regular relative h-min text-neutral-900 bg-white rounded leading-none text-center m-0 p-2 font-bold text-3xl z-5'>
                NL
              </div>
              <div className='relative flex items-center ps-4 text-start uppercase h-full text-white font-bold leading-4 text-[10px] tracking-[4px]'>
                Nicolas
                <br />
                Llamazares
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hidden: {opacity: 0},
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            },
          }}
          className='border-l-4 border-[#0fa]/50 pl-6'
        >
          <motion.p
            className='text-start text-[18px] leading-[1.75]'
            variants={{
              hidden: {opacity: 0, y: 20},
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: 'easeOut',
                },
              },
            }}
          >
            {t('about.p1')}
            <br />
            <br />
            {t('about.p2')}
            <br />
            <br />
            {t('about.p3')}
            <br />
            <br />
            {t('about.p4')}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutSection
