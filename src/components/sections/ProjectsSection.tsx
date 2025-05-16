import React from 'react'
import {motion} from 'framer-motion'
import NoiteIcon from '../../assets/projects/Noite.png'
import PoolCountersIcon from '../../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../../assets/projects/BTC Tracker.png'
import {stagger, fadeInUp} from '../../animations/variants'
import {Github, Globe, Monitor, BookOpen, ExternalLink} from 'lucide-react'
import {useLanguage} from '../../hooks/LanguageContext'
import ProjectCard from './ProjectCard'
import {useWindowSize} from 'react-use'
import Modal from '../common/Modal'

// Definir la interfaz para los proyectos
interface Project {
  id: number
  number: string
  category: string
  icon: React.ReactNode
  image: string
  imageAlt: string
  title: string
  description: string
  longDescription?: string
  technologies?: string[]
  links?: Array<{
    icon: React.ReactNode
    url?: string
    onClick?: () => void
    label?: string
  }>
  imgStyle?: React.CSSProperties
}

const ProjectsSection: React.FC = () => {
  const {t} = useLanguage()
  const {width} = useWindowSize()
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    null
  )
  const isMobile = width <= 768

  // Definir todos los proyectos en un solo lugar
  const projects: Project[] = [
    {
      id: 1,
      number: '#01',
      category: t('projects.webDevelopment'),
      icon: <Globe />,
      image: NoiteIcon,
      imageAlt: 'Noche de cine - Logo',
      title: t('projects.cinemaNight'),
      description: t('projects.cinemaNight.p1'),
      longDescription:
        'Una descripción más detallada del proyecto Noche de Cine, incluyendo sus características principales y el proceso de desarrollo.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: [
        {
          icon: <Github size={20} />,
          label: 'GitHub',
          url: 'https://github.com/tuusuario/noche-de-cine',
        },
        {
          icon: <Globe size={20} />,
          label: 'Demo',
          url: 'https://noche-de-cine.example.com',
        },
        {
          icon: <BookOpen size={20} />,
          label: 'Documentación',
          url: 'https://docs.noche-de-cine.example.com',
        },
      ],
    },
    {
      id: 2,
      number: '#02',
      category: t('projects.desktopDevelopment'),
      icon: <Monitor />,
      image: PoolCountersIcon,
      imageAlt: 'Pool Counters - Logo',
      title: 'Pool Counters',
      description: t('projects.poolCounters.p1'),
      longDescription:
        'Pool Counters es una aplicación de escritorio para llevar el conteo de juegos de billar, con estadísticas y seguimiento de jugadores.',
      technologies: ['Electron', 'React', 'TypeScript', 'SQLite'],
      links: [
        {
          icon: <Github size={20} />,
          label: 'GitHub',
          url: 'https://github.com/tuusuario/pool-counters',
        },
        {
          icon: <BookOpen size={20} />,
          label: 'Documentación',
          url: 'https://docs.pool-counters.example.com',
        },
      ],
      imgStyle: {padding: 0},
    },
    {
      id: 3,
      number: '#03',
      category: t('projects.desktopDevelopment'),
      icon: <Monitor />,
      image: MultiTwitchIcon,
      imageAlt: 'Multi Twitch - Logo',
      title: 'Multi-Twitch',
      description: t('projects.multiTwitch.p1'),
      longDescription:
        'Multi-Twitch permite ver múltiples streams de Twitch simultáneamente en una sola ventana, optimizando la experiencia de visualización.',
      technologies: ['Electron', 'Vue.js', 'Twitch API'],
    },
    {
      id: 4,
      number: '#04',
      category: t('projects.desktopDevelopment'),
      icon: <Monitor />,
      image: BTCTrackerIcon,
      imageAlt: 'BTC Tracker - Logo',
      title: 'BTC Tracker',
      description: t('projects.btcTracker.p1'),
      longDescription:
        'BTC Tracker es una aplicación para seguir el precio del Bitcoin en tiempo real, con alertas y análisis histórico.',
      technologies: ['React Native', 'Redux', 'Cryptocurrency API'],
      imgStyle: {padding: 0},
    },
    // Proyectos adicionales que solo se mostrarán en el modal
    {
      id: 5,
      number: '#05',
      category: t('projects.webDevelopment'),
      icon: <Globe />,
      image: NoiteIcon, // Usar una imagen existente como placeholder
      imageAlt: 'Portfolio - Logo',
      title: 'Portfolio Personal',
      description:
        'Mi sitio web personal para mostrar mis proyectos y habilidades.',
      longDescription:
        'Este portfolio fue desarrollado con React y TypeScript, utilizando Framer Motion para animaciones y Tailwind CSS para estilos.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    },
    {
      id: 6,
      number: '#06',
      category: t('projects.mobileDevelopment'),
      icon: <Monitor />,
      image: BTCTrackerIcon, // Usar una imagen existente como placeholder
      imageAlt: 'App Móvil - Logo',
      title: 'Aplicación Móvil',
      description: 'Una aplicación móvil para gestión de tareas diarias.',
      longDescription:
        'Aplicación móvil desarrollada con React Native para la gestión eficiente de tareas diarias, con sincronización en la nube.',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
  ]

  // Encontrar el proyecto seleccionado
  const selectedProjectData =
    selectedProject !== null
      ? projects.find((project) => project.id === selectedProject)
      : null

  // Renderizar para móviles
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

        {/* Mostrar solo los primeros 4 proyectos en la vista principal */}
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            className='relative'
            variants={
              index === 0
                ? fadeInUp
                : {
                    hidden: {opacity: 0, y: 60},
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {duration: 0.7, ease: 'easeOut'},
                    },
                  }
            }
            onClick={() => setSelectedProject(project.id)}
          >
            <ProjectCard
              number={project.number}
              category={project.category}
              icon={project.icon}
              image={project.image}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              links={project.links}
              imgStyle={project.imgStyle}
            />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Renderizar para escritorio
  return (
    <>
      <motion.div
        id='projects'
        className='min-h-[85vh] grid grid-cols-4 grid-rows-9 gap-x-5 pt-25 pb-15 -me-5'
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true, amount: 0.3}}
      >
        <motion.div
          className='relative cursor-pointer'
          style={{gridArea: '1 / 1 / 10 / 2'}}
          onClick={() => setSelectedProject(1)}
          variants={fadeInUp}
        >
          <ProjectCard
            number={projects[0]?.number || '#00'}
            category={projects[0]?.category || ''}
            icon={projects[0]?.icon || <></>}
            image={projects[0]?.image || ''}
            imageAlt={projects[0]?.imageAlt || ''}
            title={projects[0]?.title || ''}
            description={projects[0]?.description || ''}
            links={projects[0]?.links || []}
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
          className='relative cursor-pointer'
          style={{gridArea: '2 / 2 / 10 / 3'}}
          onClick={() => setSelectedProject(2)}
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
            number={projects[1]?.number || '#00'}
            category={projects[1]?.category || ''}
            icon={projects[1]?.icon || <></>}
            image={projects[1]?.image || ''}
            imageAlt={projects[1]?.imageAlt || ''}
            title={projects[1]?.title || ''}
            description={projects[1]?.description || ''}
            links={projects[1]?.links || []}
            imgStyle={projects[1]?.imgStyle}
          />
        </motion.div>
        <motion.div
          className='relative cursor-pointer'
          style={{gridArea: '3 / 3 / 10 / 4'}}
          onClick={() => setSelectedProject(3)}
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
            number={projects[2]?.number || '#00'}
            category={projects[2]?.category || ''}
            icon={projects[2]?.icon || <></>}
            image={projects[2]?.image || ''}
            imageAlt={projects[2]?.imageAlt || ''}
            title={projects[2]?.title || ''}
            description={projects[2]?.description || ''}
            links={projects[2]?.links || []}
          />
        </motion.div>
        <motion.div
          className='relative cursor-pointer'
          style={{gridArea: '3 / 4 / 10 / 5'}}
          onClick={() => setSelectedProject(4)}
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
            number={projects[3]?.number || '#00'}
            category={projects[3]?.category || ''}
            icon={projects[3]?.icon || <></>}
            image={projects[3]?.image || ''}
            imageAlt={projects[3]?.imageAlt || ''}
            title={projects[3]?.title || ''}
            description={projects[3]?.description || ''}
            links={projects[3]?.links || []}
            imgStyle={projects[3]?.imgStyle}
          />
        </motion.div>
      </motion.div>

      {/* Modal mejorado con detalles del proyecto y lista de otros proyectos */}
      {selectedProject !== null && selectedProjectData && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div className='p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Columna izquierda: Detalles del proyecto seleccionado */}
              <div className='md:col-span-2'>
                <h2 className='text-3xl oswald-regular uppercase mb-4'>
                  {selectedProjectData.title}
                </h2>
                <div className='flex items-center gap-2 mb-4'>
                  <span className='text-[#0fa] text-sm'>
                    {selectedProjectData.category}
                  </span>
                </div>

                <div className='mb-6'>
                  <h3 className='text-xl oswald-regular mb-2'>Descripción</h3>
                  <p>
                    {selectedProjectData.longDescription ||
                      selectedProjectData.description}
                  </p>
                </div>

                {selectedProjectData.technologies && (
                  <div className='mb-6'>
                    <h3 className='text-xl oswald-regular mb-2'>Tecnologías</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className='bg-[#000]/25 border border-[#000]/35 px-3 py-1 rounded-md text-sm'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProjectData.links &&
                  selectedProjectData.links.length > 0 && (
                    <div className='flex gap-4 mt-4'>
                      {selectedProjectData.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 bg-[#070707] hover:bg-[#0fa]/20 transition-colors px-4 py-2 rounded-md'
                        >
                          {link.icon}
                          {link.label && <span>{link.label}</span>}
                        </a>
                      ))}
                    </div>
                  )}
              </div>

              {/* Columna derecha: Lista de otros proyectos */}
              <div className='border-l border-[#222] pl-6'>
                <h3 className='text-xl oswald-regular mb-4'>Otros Proyectos</h3>
                <div className='flex flex-col gap-4'>
                  {projects
                    .filter((project) => project.id !== selectedProject)
                    .map((project) => (
                      <div
                        key={project.id}
                        className='flex items-center gap-4 p-3 cursor-pointer hover:bg-[#000]/25 transition-colors rounded-md'
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <div className='w-16 h-16 overflow-hidden rounded-md'>
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div>
                          <h4 className='font-medium'>{project.title}</h4>
                          <p className='text-sm text-[#0fa]'>
                            {project.category}
                          </p>
                        </div>
                        <ExternalLink
                          size={16}
                          className='ml-auto text-[#555]'
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default ProjectsSection
