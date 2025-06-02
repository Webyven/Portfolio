import React, {useEffect} from 'react'
import {motion} from 'framer-motion'
import {stagger, fadeInUp} from '../../animations/variants'
import {useLanguage} from '../../hooks/LanguageContext'
import ProjectCard from './ProjectCard'
import {useWindowSize} from 'react-use'
import Modal from '../common/Modal'
import {GalleryImage, projectsData} from '../../data/projects'
import {ChevronLeft, ChevronRight} from 'lucide-react'

interface Project {
  id: number
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
    onClick?: (e: React.MouseEvent) => void
    label?: string
  }>
  imgStyle?: React.CSSProperties
  gallery?: GalleryImage[]
}

const ProjectsSection: React.FC = () => {
  const {t} = useLanguage()
  const {width} = useWindowSize()
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    null
  )
  const [selectedProjectImage, setSelectedProjectImage] =
    React.useState<GalleryImage | null>(null)
  const isMobile = width <= 768

  const projects: Project[] = projectsData.map((p) => ({
    ...p,
    category: t(p.categoryKey),
    title: t(p.titleKey),
    description: t(p.descriptionKey),
    longDescription: p.longDescriptionKey
      ? t(p.longDescriptionKey)
      : t(p.descriptionKey),
    links: p.links?.map((link) => ({
      ...link,
      icon: link.icon || <></>,
      label: link.label || '',
      onClick:
        link.onClick ||
        ((e: React.MouseEvent) => {
          e.stopPropagation() // Evita que el clic se propague al contenedor
          if (link.url) {
            window.open(link.url, '_blank')
          }
        }),
    })),
  }))

  // Encontrar el proyecto seleccionado
  const selectedProjectData =
    selectedProject !== null
      ? projects.find((project) => project.id === selectedProject)
      : null

  useEffect(() => {
    if (selectedProject !== null && selectedProjectData) {
      if (
        !selectedProjectImage ||
        !selectedProjectData.gallery?.some(
          (img) => img === selectedProjectImage
        )
      ) {
        const firstImage = selectedProjectData.gallery?.[0]
        if (firstImage) {
          setSelectedProjectImage(firstImage)
        }
      }
    }
  }, [selectedProject, selectedProjectData, selectedProjectImage])

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
              number={`#${project.id.toString().padStart(2, '0')}`}
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
            number={'#01'}
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
          className='text-end flex items-start pt-3 pe-5 justify-end w-full h-full text-[#fff] font-bold oswald-regular select-none cursor-pointer origin-right'
          variants={{
            hidden: {opacity: 0, x: 75},
            visible: {
              opacity: 1,
              x: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: {duration: 0.2, ease: 'easeOut'},
          }}
          onClick={() => {
            setSelectedProject(1)
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
            number={'#02'}
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
            number={'#03'}
            category={projects[2]?.category || ''}
            icon={projects[2]?.icon || <></>}
            image={projects[2]?.image || ''}
            imageAlt={projects[2]?.imageAlt || ''}
            title={projects[2]?.title || ''}
            description={projects[2]?.description || ''}
            links={[]}
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
            number={'#04'}
            category={projects[3]?.category || ''}
            icon={projects[3]?.icon || <></>}
            image={projects[3]?.image || ''}
            imageAlt={projects[3]?.imageAlt || ''}
            title={projects[3]?.title || ''}
            description={projects[3]?.description || ''}
            links={[]}
            imgStyle={projects[3]?.imgStyle}
          />
        </motion.div>
      </motion.div>

      {/* Modal mejorado con detalles del proyecto y lista de otros proyectos */}
      {selectedProject !== null && selectedProjectData && (
        <Modal onClose={() => setSelectedProject(null)}>
          <div className='p-0 h-[100dvh]'>
            <div className='h-full flex flex-col justify-between'>
              {/* Header: Título e imagen del proyecto seleccionado */}
              <div className='bg-[#121212] px-2 pb-2'>
                <div className='flex flex-row items-center gap-5 bg-[#0C0C0C]'>
                  <img
                    src={selectedProjectData.image}
                    alt={selectedProjectData.imageAlt}
                    className='w-26 h-26 p-3 object-cover border-r-2 border-[#121212] bg-[#000]/35'
                  />
                  <div className='flex flex-col grow'>
                    <h2 className='text-3xl oswald-regular uppercase'>
                      {selectedProjectData.title}
                    </h2>
                    <div className='flex items-center gap-2'>
                      <span className='text-[#0fa] text-sm'>
                        {selectedProjectData.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center w-full h-full overflow-hidden mx-auto'>
                {selectedProjectData.gallery &&
                  selectedProjectData.gallery.length > 0 && (
                    <div className='h-full w-[70%] bg-[#0A0A0A] border-l-10 border-[#0C0C0C]'>
                      <div
                        className='w-full relative'
                        style={{
                          height:
                            selectedProjectData.gallery &&
                            selectedProjectData.gallery.length > 1
                              ? '85%'
                              : '100%',
                        }}
                      >
                        <img
                          src={
                            selectedProjectImage
                              ? selectedProjectImage.src
                              : selectedProjectData.image
                          }
                          alt={
                            selectedProjectImage
                              ? selectedProjectImage.alt
                              : selectedProjectData.imageAlt
                          }
                          style={{
                            objectFit: 'scale-down',
                            ...(selectedProjectImage?.style || {}),
                          }}
                          className='w-full h-full'
                        />
                        {selectedProjectImage?.descriptionKey ? (
                          <div
                            className='absolute bottom-0 right-0 -bg-linear-240 from-[#111]/45 from-10% via-[#111]75 via-30% to-[#111] to-90% p-2 ps-5 pe-3'
                            style={{
                              clipPath:
                                'polygon(13px 0, 100% 0%, 100% 100%, 0 100%)',
                            }}
                          >
                            <p className='text-[#aaa] text-sm'>
                              {t(selectedProjectImage.descriptionKey)}
                            </p>
                          </div>
                        ) : null}
                      </div>
                      {selectedProjectData.gallery &&
                        selectedProjectData.gallery.length > 1 && (
                          <div className='h-[15%] w-full flex flex-row justify-between bg-[#070707]'>
                            <div
                              className='h-full bg px-2 cursor-pointer bg-[#050505] hover:bg-[#090909] transition-all flex justify-center items-center'
                              onClick={() => {
                                const galleryContainer =
                                  document.querySelector('.gallery-container')
                                if (galleryContainer) {
                                  galleryContainer.scrollLeft -= 400 // Ajusta este valor según necesites
                                }
                              }}
                            >
                              <ChevronLeft />
                            </div>
                            <div
                              className='py-6 px-5 overflow-hidden flex flex-row gap-3 h-full items-center justify-start gallery-container bg-[#070707]'
                              style={{
                                scrollBehavior: 'smooth',
                                scrollSnapAlign: 'start',
                                scrollSnapType: 'x mandatory',
                                scrollSnapStop: 'always',
                              }}
                            >
                              {selectedProjectData.gallery &&
                                selectedProjectData.gallery.map((x, index) => (
                                  <img
                                    onClick={() => setSelectedProjectImage(x)}
                                    key={index}
                                    src={x.src}
                                    alt={x.alt}
                                    className={`w-22 h-14 cursor-pointer border-1 ${
                                      selectedProjectImage &&
                                      selectedProjectImage.src === x.src
                                        ? 'border-[#0fa] opacity-100'
                                        : 'border-[#252525] hover:border-[#aaa] opacity-40 hover:opacity-75'
                                    } transition-all object-cover`}
                                  />
                                ))}
                            </div>
                            <div
                              className='h-full bg px-2 cursor-pointer bg-[#050505] hover:bg-[#090909] transition-all flex justify-center items-center'
                              onClick={() => {
                                const galleryContainer =
                                  document.querySelector('.gallery-container')
                                if (galleryContainer) {
                                  galleryContainer.scrollLeft += 400 // Ajusta este valor según necesites
                                }
                              }}
                            >
                              <ChevronRight />
                            </div>
                          </div>
                        )}
                    </div>
                  )}
                <div
                  className={`h-full ${
                    selectedProjectData.gallery &&
                    selectedProjectData.gallery.length > 0
                      ? 'w-[35%]'
                      : 'w-full'
                  } bg-[#070707] backdrop-blur-2xl overflow-y-scroll p-5 border-l-6 border-[#0C0C0C]`}
                >
                  <div className='mb-6'>
                    <h3 className='text-xl oswald-regular uppercase mb-2'>
                      {t('projects.description')}
                    </h3>
                    <p>
                      {selectedProjectData.longDescription ||
                        selectedProjectData.description}
                    </p>
                  </div>
                  {selectedProjectData.technologies && (
                    <div className='mb-6'>
                      <h3 className='text-xl oswald-regular uppercase mb-2'>
                        {t('projects.technologies')}
                      </h3>
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
              </div>

              {/* Columna derecha: Lista de otros proyectos */}
              <div className='bg-[#121212] px-2 pt-2'>
                <div className='bg-[#0C0C0C] p-2 px-5'>
                  <h3 className='oswald-regular uppercase mt-1 mb-1 text-[22px]'>
                    {t('projects.allOfMyProjects')}
                  </h3>
                  <div className='flex flex-row gap-3 overflow-x-scroll py-2'>
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className={`flex items-center gap-4 p-0.5 cursor-pointer select-none transition-colors ${
                          selectedProject === project.id
                            ? 'bg-[#0fa]/75'
                            : 'bg-[#070707] hover:bg-[#777]'
                        }`}
                        onClick={() => setSelectedProject(project.id)}
                        style={{
                          clipPath:
                            'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                        }}
                      >
                        <div
                          className='flex flex-row w-50 items-center gap-2 bg-[#121212]'
                          style={{
                            clipPath:
                              'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                          }}
                        >
                          <div className='w-12 h-12 overflow-hidden'>
                            <img
                              src={project.image}
                              alt={project.imageAlt}
                              style={project.imgStyle || {}}
                              className='w-12 h-12 object-cover border-[#070707] border-r-1'
                            />
                          </div>
                          <div className='max-w-34'>
                            <h5 className='font-bold text-[16px] -mt-0.5 truncate uppercase'>
                              {project.title}
                            </h5>
                            <p className='text-[10px] text-[#0fa] -mt-0.5'>
                              {project.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
