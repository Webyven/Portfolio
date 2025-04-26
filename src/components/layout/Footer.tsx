import React from 'react'
import {motion} from 'framer-motion'

function Footer(): React.ReactElement {
  return (
    <div
      className='w-full -mt-28 pt-1 h-32 bg-[#000]/60'
      style={{
        clipPath:
          'polygon(0% 0%, calc(14% + 25px) 0, 20% 50%, 100% 50%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div
        className='w-full h-full relative flex flex-row bg-[#111]/60'
        style={{
          clipPath:
            'polygon(0% 0%, calc(14% + 23px) 0, calc(20% - 2px) calc(50% + 2px), 100% calc(50% + 2px), 100% 100%, 100% 100%, 0% 100%, 0% 100%)',
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
          <div className='flex flex-row h-16 items-center px-12 pt-14'>
            <div className='anton-regular relative h-min text-neutral-900 bg-white rounded leading-none text-center m-0 p-2 font-bold text-5xl z-5'>
              NL
            </div>
            <div className='relative flex items-center ps-5 text-start uppercase h-full text-white font-bold leading-5 text-[16px] tracking-[4px]'>
              My
              <br />
              portfolio
            </div>
          </div>
        </motion.div>
        <p className='absolute inset-x-0 bottom-4.5 text-center font-bold text-[#777]'>
          Thanks for visiting!
        </p>
        <p className='absolute end-5 bottom-4.5 text-center font-bold text-[#777]'>
          Back to top
        </p>
      </div>
    </div>
  )
}

export default Footer
