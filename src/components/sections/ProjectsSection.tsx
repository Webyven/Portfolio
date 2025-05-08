import React from 'react'
import {motion} from 'framer-motion'
import NoiteIcon from '../../assets/projects/Noite.png'
import PoolCountersIcon from '../../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../../assets/projects/BTC Tracker.png'
import {stagger, fadeInUp} from '../../animations/variants'
import {Github, Globe, Monitor, BookOpen} from 'lucide-react'
import {useLanguage} from '../../hooks/LanguageContext'
import ProjectCard from './ProjectCard'
import {useWindowSize} from 'react-use'

const ProjectsSection: React.FC = () => {
  const {t} = useLanguage()
  const {width} = useWindowSize()
  const isMobile = width <= 768

  if (isMobile) {
    return (
      <motion.div
        id='projects'
        className='min-h-[85vh] flex flex-col gap-5 pt-25 pb-15'
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.3}}
      >
        <motion.div
          className='text-end flex items-start pt-3 pe-10 justify-end text-[#fff] font-bold oswald-regular pb-5'
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
        <motion.div className='relative' variants={fadeInUp}>
          <ProjectCard
            number='#01'
            category={t('projects.webDevelopment')}
            icon={<Globe />}
            image={NoiteIcon}
            imageAlt='Noche de cine - Logo'
            title={t('projects.cinemaNight')}
            description={t('projects.cinemaNight.p1')}
            links={[
              {icon: <Github size={20} />},
              {icon: <Globe size={20} />},
              {icon: <BookOpen size={20} />},
            ]}
          />
        </motion.div>
        <motion.div
          className='relative'
          variants={{
            hidden: {opacity: 0, y: 60},
            visible: {
              opacity: 1,
              y: 0,
              transition: {duration: 0.7, ease: 'easeOut'},
            },
          }}
        >
          <ProjectCard
            number='#02'
            category={t('projects.desktopDevelopment')}
            icon={<Monitor />}
            image={PoolCountersIcon}
            imageAlt='Pool Counters - Logo'
            title='Pool Counters'
            description={t('projects.poolCounters.p1')}
            links={[
              {icon: <Github size={20} />},
              {icon: <BookOpen size={20} />},
            ]}
            imgStyle={{padding: 0}}
          />
        </motion.div>
        <motion.div
          className='relative'
          variants={{
            hidden: {opacity: 0, y: 60},
            visible: {
              opacity: 1,
              y: 0,
              transition: {duration: 0.7, ease: 'easeOut'},
            },
          }}
        >
          <ProjectCard
            number='#03'
            category={t('projects.desktopDevelopment')}
            icon={<Monitor />}
            image={MultiTwitchIcon}
            imageAlt='Multi Twitch - Logo'
            title='Multi-Twitch'
            description={t('projects.multiTwitch.p1')}
          />
        </motion.div>
        <motion.div
          className='relative'
          variants={{
            hidden: {opacity: 0, y: 60},
            visible: {
              opacity: 1,
              y: 0,
              transition: {duration: 0.7, ease: 'easeOut'},
            },
          }}
        >
          <ProjectCard
            number='#04'
            category={t('projects.desktopDevelopment')}
            icon={<Monitor />}
            image={BTCTrackerIcon}
            imageAlt='BTC Tracker - Logo'
            title='BTC Tracker'
            description={t('projects.btcTracker.p1')}
            imgStyle={{padding: 0}}
          />
        </motion.div>
      </motion.div>
    )
  }

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
        <ProjectCard
          number='#01'
          category={t('projects.webDevelopment')}
          icon={<Globe />}
          image={NoiteIcon}
          imageAlt='Noche de cine - Logo'
          title={t('projects.cinemaNight')}
          description={t('projects.cinemaNight.p1')}
          links={[
            {icon: <Github size={20} />},
            {icon: <Globe size={20} />},
            {icon: <BookOpen size={20} />},
          ]}
        />
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
        <ProjectCard
          number='#02'
          category={t('projects.desktopDevelopment')}
          icon={<Monitor />}
          image={PoolCountersIcon}
          imageAlt='Pool Counters - Logo'
          title='Pool Counters'
          description={t('projects.poolCounters.p1')}
          links={[{icon: <Github size={20} />}, {icon: <BookOpen size={20} />}]}
          imgStyle={{padding: 0}}
        />
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
        <ProjectCard
          number='#03'
          category={t('projects.desktopDevelopment')}
          icon={<Monitor />}
          image={MultiTwitchIcon}
          imageAlt='Multi Twitch - Logo'
          title='Multi-Twitch'
          description={t('projects.multiTwitch.p1')}
        />
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
        <ProjectCard
          number='#04'
          category={t('projects.desktopDevelopment')}
          icon={<Monitor />}
          image={BTCTrackerIcon}
          imageAlt='BTC Tracker - Logo'
          title='BTC Tracker'
          description={t('projects.btcTracker.p1')}
          imgStyle={{padding: 0}}
        />
      </motion.div>
    </motion.div>
  )
}

export default ProjectsSection
