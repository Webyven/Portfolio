import React from 'react'
import {motion} from 'framer-motion'
import NoiteIcon from '../../assets/projects/Noite.png'
import PoolCountersIcon from '../../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../../assets/projects/BTC Tracker.png'
import {stagger, fadeInUp} from '../../animations/variants'
import {Github, Globe, Monitor, BookOpen} from 'lucide-react'
import {useLanguage} from '../../hooks/LanguageContext'

const ProjectsSection: React.FC = () => {
  const {t} = useLanguage()

  return (
    <motion.div
      id='projects'
      className='min-h-[85vh] grid grid-cols-4 grid-rows-9 gap-x-5 pt-25 pb-15 -me-5'
      variants={stagger}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.3}}
    >
      <motion.div
        className='relative'
        style={{gridArea: '1 / 1 / 10 / 2'}}
        variants={fadeInUp}
      >
        <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start py-6'>
          <div className='px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#01</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  {t('projects.webDevelopment')}
                </p>
              </div>
              <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
                <Globe />
              </div>
            </div>
            <div
              className='w-full h-auto bg-[#070707] p-2 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={NoiteIcon}
                className='w-full h-auto bg-[#0a0a0a] object-cover object-center p-4'
                alt='Noche de cine - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h4 className='mt-6 uppercase'>{t('projects.cinemaNight')}</h4>
            <p className='mt-2 font-light'>{t('projects.cinemaNight.p1')}</p>
          </div>
          <div className='absolute bottom-10 start-0 w-full bg-[#070707] h-[2px]'>
            <div className='justify-center w-full -top-3.5 flex flex-row gap-2 items-center'></div>
          </div>
        </div>
        <div className='absolute -bottom-5 end-4 w-fit h-fit flex flex-row gap-2'>
          <div
            className='cursor-pointer select-none p-1 mt-6'
            style={{
              clipPath:
                'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)',
            }}
          >
            <div
              className='w-full h-auto object-cover bg-[#070707] hover:bg-[#0fa] transition-colors object-center p-[2px]'
              style={{
                clipPath:
                  'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
              }}
            >
              <div
                className='w-full flex flex-row gap-2 items-center h-9 bg-[#0e0e0e] hover:bg-[#0a0a0a] transition-colors object-center px-2.5'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              >
                <Github size={20} />
              </div>
            </div>
          </div>
          <div
            className='cursor-pointer select-none p-1 mt-6'
            style={{
              clipPath:
                'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)',
            }}
          >
            <div
              className='w-full h-auto object-cover bg-[#070707] hover:bg-[#0fa] transition-colors object-center p-[2px]'
              style={{
                clipPath:
                  'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
              }}
            >
              <div
                className='w-full flex flex-row gap-2 items-center h-9 bg-[#0e0e0e] hover:bg-[#0a0a0a] transition-colors object-center px-2.5'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              >
                <Globe size={20} />
              </div>
            </div>
          </div>
          <div
            className='cursor-pointer select-none p-1 mt-6'
            style={{
              clipPath:
                'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)',
            }}
          >
            <div
              className='w-full h-auto object-cover bg-[#070707] hover:bg-[#0fa] transition-colors object-center p-[2px]'
              style={{
                clipPath:
                  'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
              }}
            >
              <div
                className='w-full flex flex-row gap-2 items-center h-9 bg-[#0e0e0e] hover:bg-[#0a0a0a] transition-colors object-center px-2.5'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              >
                <BookOpen size={20} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{gridArea: '1 / 3 / 3 / 6'}}
        className='text-end flex items-start pt-3 pe-5 justify-end w-full h-full text-[#fff] font-bold oswald-regular'
        variants={{
          hidden: {opacity: 0, x: 75},
          visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.5, ease: 'easeOut'},
          },
        }}
      >
        <h1>{t('projects.title')}</h1>
      </motion.div>
      <motion.div
        className='relative'
        style={{gridArea: '2 / 2 / 10 / 3'}}
        variants={{
          hidden: {opacity: 0, y: 60},
          visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7, ease: 'easeOut'},
          },
        }}
      >
        <div className='relative oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start py-6'>
          <div className='px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#02</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  {t('projects.desktopDevelopment')}
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
                className='w-full h-auto object-cover object-center '
                alt='Pool Counters - Logo'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              />
            </div>
            <h4 className='mt-6 uppercase'>Pool Counters</h4>
            <p className='mt-2 font-light'>{t('projects.poolCounters.p1')}</p>
          </div>
          <div className='absolute bottom-10 w-full bg-[#070707] h-[2px]'>
            <div className='justify-center w-full -top-3.5 flex flex-row gap-2 items-center'></div>
          </div>
          <div className='absolute -bottom-5 end-4 w-fit h-fit flex flex-row gap-2'>
            <div
              className='cursor-pointer select-none p-1 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)',
              }}
            >
              <div
                className='w-full h-auto object-cover bg-[#070707] hover:bg-[#0fa] transition-colors object-center p-[2px]'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              >
                <div
                  className='w-full flex flex-row gap-2 items-center h-9 bg-[#0e0e0e] hover:bg-[#0a0a0a] transition-colors object-center px-2.5'
                  style={{
                    clipPath:
                      'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                  }}
                >
                  <Github size={20} />
                </div>
              </div>
            </div>
            <div
              className='cursor-pointer select-none p-1 mt-6'
              style={{
                clipPath:
                  'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)',
              }}
            >
              <div
                className='w-full h-auto object-cover bg-[#070707] hover:bg-[#0fa] transition-colors object-center p-[2px]'
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                }}
              >
                <div
                  className='w-full flex flex-row gap-2 items-center h-9 bg-[#0e0e0e] hover:bg-[#0a0a0a] transition-colors object-center px-2.5'
                  style={{
                    clipPath:
                      'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                  }}
                >
                  <BookOpen size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='relative'
        style={{gridArea: '3 / 3 / 10 / 4'}}
        variants={{
          hidden: {opacity: 0, y: 60},
          visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7, ease: 'easeOut'},
          },
        }}
      >
        <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start py-6 pb-10'>
          <div className='px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#03</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  {t('projects.desktopDevelopment')}
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
            <h4 className='mt-6 uppercase'>Multi-Twitch</h4>
            <p className='mt-2 font-light'>{t('projects.multiTwitch.p1')}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className='relative'
        style={{gridArea: '3 / 4 / 10 / 5'}}
        variants={{
          hidden: {opacity: 0, y: 60},
          visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.7, ease: 'easeOut'},
          },
        }}
      >
        <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start py-6'>
          <div className='px-8'>
            <div className='flex flex-row w-full justify-between items-center'>
              <div className='flex flex-col'>
                <h3 className='text-xl'>#04</h3>
                <p className='text-[#0fa] text-xs font-[500]'>
                  {t('projects.desktopDevelopment')}
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
            <h4 className='mt-6 uppercase'>BTC Tracker</h4>
            <p className='mt-2 font-light'>{t('projects.btcTracker.p1')}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsSection
