import React from 'react'
import AvatarImage from '../assets/images/AvatarLaptopBackground.png'
import {Download, GraduationCap} from 'lucide-react'
import ButtonCut from '../components/common/ButtonCut'
import {motion} from 'framer-motion'

function Home(): React.ReactElement {
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
      <div className='text-end w-full h-screen flex flex-row items-center justify-center gap-15'>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          className='flex flex-col items-end gap-10'
        >
          <p className='uppercase font-bold leading-4 text-[12px] tracking-[5px] text-[#0fa]'>
            Software Developer
          </p>
          <div className='flex flex-col items-end justify-center oswald-regular text-xl'>
            <h1>LLAMAZARES</h1>
            <h1>NICOLAS</h1>
          </div>
          <div className='flex flex-row items-center gap-4 text-[14px]'>
            <div>
              <p>University Programmer Analyst</p>
              <p>
                from the{' '}
                <a
                  className='font-bold'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://unlp.edu.ar/'
                >
                  National University of La Plata
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
            My Resume
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
      <div>
        <h2 className='uppercase h2 font-black oswald-regular'>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
      </div>
    </>
  )
}

export default Home
