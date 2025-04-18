import React, {useEffect, useRef} from 'react'
import AvatarImage from '../assets/images/AvatarLaptopBackground.png'
import NoiteIcon from '../assets/projects/Noite.png'
import PoolCountersIcon from '../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../assets/projects/BTC Tracker.png'
import {Download, Globe, GraduationCap, Monitor} from 'lucide-react'
import ButtonCut from '../components/common/ButtonCut'
import {motion, useAnimation, useInView} from 'framer-motion'
import {useLanguage} from '../hooks/LanguageContext'

function Home(): React.ReactElement {
  const {t} = useLanguage()
  // Refs para detectar cuando los elementos están en el viewport
  const aboutRef = useRef(null)
  const isAboutInView = useInView(aboutRef, {
    once: true,
    amount: 0.3,
  })
  const aboutControls = useAnimation()

  // Efecto para controlar la animación basada en la visibilidad
  useEffect(() => {
    if (isAboutInView) {
      aboutControls.start('visible')
    } else {
      // Reiniciar la animación cuando sale del viewport
      aboutControls.start('hidden')
    }
  }, [isAboutInView, aboutControls])

  function handleDownloadCV(): void {
    const link = document.createElement('a')
    link.href = '/Llamazares Nicolás - CV.docx'
    link.download = 'Llamazares Nicolás - CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div
        id='home'
        className='text-end w-full h-screen flex flex-row items-center justify-center gap-15'
      >
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          className='flex flex-col items-end gap-10'
        >
          <p className='uppercase font-bold leading-4 text-[12px] tracking-[5px] text-[#0fa]'>
            {t('home.role')}
          </p>
          <div className='flex flex-col items-end justify-center oswald-regular text-xl'>
            <h1>LLAMAZARES</h1>
            <h1>NICOLAS</h1>
          </div>
          <div className='flex flex-row items-center gap-4 text-[15px]'>
            <div>
              <p>{t('home.university')}</p>
              <p>
                {' '}
                <a
                  className='font-bold'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://unlp.edu.ar/'
                >
                  {t('home.university.from')}
                </a>
              </p>
            </div>
            <div className='rounded-full border-1 border-white p-2'>
              <GraduationCap color='#0d9' strokeWidth={1} size={28} />
            </div>
          </div>
          <ButtonCut
            onClick={handleDownloadCV}
            color='#fff'
            backgroundColor='#151515'
            textColor='#000'
            alternativeColor='#0d9'
            alternativeColorHover='#0fa'
            icon={<Download size={15} />}
          >
            {t('home.resume')}
          </ButtonCut>
        </motion.div>
        <motion.div initial={{x: 100}} animate={{x: 0}}>
          <img
            src={AvatarImage}
            className='rounded-tl-[75px] rounded-br-[75px] w-80 h-115 object-cover object-[45%_50%] border-16 hover:border-0 transition-all border-neutral-900 shadow-2xl shadow-neutral-500/50'
            style={{boxShadow: '0px 0px 0px 2px #ccc'}}
            alt='Avatar'
          />
        </motion.div>
      </div>

      <div
        id='about'
        ref={aboutRef}
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
          animate={aboutControls}
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
            className='border-l-4 border-[#0fa]/45 pl-6'
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
      <div
        id='projects'
        className='min-h-[85vh] grid grid-cols-4 grid-rows-9 gap-5 pt-25 pb-15'
      >
        <div style={{gridArea: '1 / 1 / 10 / 2'}}>
          <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 hover:ring-3 ring-[#0fa] transition-all duration-400 text-start p-6 px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#01</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  WEB DEVELOPMENT
                </p>
              </div>
              <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
                <Globe />
              </div>
            </div>
            <div
              className='w-full h-fit bg-[#070707] p-2 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={NoiteIcon}
                className='w-full h-79 bg-[#0a0a0a] object-contain object-center px-5'
                alt='Noche de cine - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h5 className='mt-6 uppercase'>Noche de cine</h5>
            <p className='mt-2 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div
          style={{gridArea: '1 / 3 / 3 / 6'}}
          className='text-end flex items-center justify-end w-full h-full text-[#fff] font-bold oswald-regular'
        >
          <h1>PROJECTS //</h1>
        </div>
        <div style={{gridArea: '2 / 2 / 10 / 3'}}>
          <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 hover:ring-3 ring-[#0fa] transition-all duration-400 text-start p-6 px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#02</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  DESKTOP DEVELOPMENT
                </p>
              </div>
              <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
                <Monitor />
              </div>
            </div>
            <div
              className='w-full h-fit bg-[#070707] p-2 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={PoolCountersIcon}
                className='w-full h-62 object-cover object-center '
                alt='Pool Counters - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h5 className='mt-6 uppercase'>Pool Counters</h5>
            <p className='mt-2 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div style={{gridArea: '3 / 3 / 10 / 4'}}>
          <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 hover:ring-3 ring-[#0fa] transition-all duration-400 text-start p-6 px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#03</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  DESKTOP DEVELOPMENT
                </p>
              </div>
              <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
                <Monitor />
              </div>
            </div>
            <div
              className='w-full h-fit bg-[#070707] p-2 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={MultiTwitchIcon}
                className='w-full h-46 p-4 bg-[#0a0a0a] object-cover object-center '
                alt='Multi Twitch - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h5 className='mt-6 uppercase'>Multi-Twitch</h5>
            <p className='mt-2 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div style={{gridArea: '3 / 4 / 10 / 5'}}>
          <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 hover:ring-3 ring-[#0fa] transition-all duration-400 text-start p-6 px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#04</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  DESKTOP DEVELOPMENT
                </p>
              </div>
              <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
                <Monitor />
              </div>
            </div>
            <div
              className='w-full h-fit bg-[#070707] p-2 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={BTCTrackerIcon}
                className='w-full h-46 bg-[#0a0a0a] object-cover object-center '
                alt='BTC Tracker - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h5 className='mt-6 uppercase'>BTC Tracker</h5>
            <p className='mt-2 font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div id='contact' className='min-h-[75vh] bg-[#0a0a0a]'></div>
      <div id='footer' className='min-h-[75vh] bg-[#151515]'></div>
    </>
  )
}

export default Home
