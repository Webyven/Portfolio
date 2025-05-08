import React from 'react'
import {useWindowSize} from 'react-use'
import {Github, Globe, BookOpen} from 'lucide-react'

interface ProjectCardProps {
  number: string
  category: React.ReactNode
  icon: React.ReactNode
  image: string
  imageAlt: string
  title: React.ReactNode
  description: React.ReactNode
  links?: Array<{icon: React.ReactNode; onClick?: () => void}>
  imgStyle?: React.CSSProperties
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  category,
  icon,
  image,
  imageAlt,
  title,
  description,
  links = [],
  imgStyle = {},
}) => {
  const {width} = useWindowSize()

  const isMobile = width <= 768

  if (isMobile) {
    return (
      <div className='mx-6 oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start'>
        <div className='p-4 h-full'>
          <div className='flex flex-row gap-5 items-start w-full h-full'>
            <div
              className='min-w-25 max-w-25 bg-[#070707] p-1 self-center'
              style={{
                clipPath:
                  'polygon(0 0, 83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%)',
              }}
            >
              <img
                src={image}
                className='bg-[#0a0a0a] object-cover object-center p-2'
                alt={imageAlt}
                style={{
                  clipPath:
                    'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
                  ...imgStyle,
                }}
              />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <div className='flex flex-row w-full justify-between items-start'>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-xl uppercase'>{title}</h3>
                  <p className='text-[#0fa] text-xs font-[500]'>{category}</p>
                </div>
                <div className='me-2 text-[#777] flex justify-center items-center text-2xl font-normal'>
                  &gt;
                </div>
              </div>
              <p className='font-light'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='oswald-regular bg-[#000]/25 h-full border-2 border-[#000]/35 transition-all duration-400 text-start py-6'>
      <div className='px-8'>
        <div className='flex flex-row w-full justify-between items-center'>
          <div className='flex flex-col'>
            <h3 className='text-xl'>{number}</h3>
            <p className='text-[#0fa] text-xs font-[500]'>{category}</p>
          </div>
          <div className='border-3 border-[#121212] rounded-xl w-12 h-12 flex justify-center items-center'>
            {icon}
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
            src={image}
            className='w-full h-auto bg-[#0a0a0a] object-cover object-center p-4'
            alt={imageAlt}
            style={{
              clipPath:
                'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
              ...imgStyle,
            }}
          />
        </div>
        <h4 className='mt-6 uppercase'>{title}</h4>
        <p className='my-2 font-light'>{description}</p>
      </div>
      {links.length > 0 && (
        <>
          <div className='absolute bottom-10 start-0 w-full bg-[#070707] h-[2px]'>
            <div className='justify-center w-full -top-3.5 flex flex-row gap-2 items-center'></div>
          </div>
          <div className='absolute -bottom-5 end-4 w-fit h-fit flex flex-row gap-2'>
            {links.map((link, idx) => (
              <div
                key={idx}
                className='cursor-pointer select-none p-1 mt-6'
                onClick={link.onClick}
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
                    {link.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectCard
