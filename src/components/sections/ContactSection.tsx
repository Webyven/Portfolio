import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import {useLanguage} from '../../hooks/LanguageContext'
import {TextField} from '@mui/material'
import toast from 'react-hot-toast'
import {MapPin, Phone, Mail, Send, LoaderCircle} from 'lucide-react'
import {
  stagger,
  fadeInUp,
  slideFromLeft,
  slideFromRight,
  scaleFade,
} from '../../animations/variants'

const ContactSection: React.FC = () => {
  const {t} = useLanguage()
  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')
  const [messageInputValue, setMessageInputValue] = useState('')
  const [sending, setSending] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setSending(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Resetear el formulario después de enviar
          setNameInputValue('')
          setEmailInputValue('')
          setMessageInputValue('')
          toast.success(t('contact.message.success'))
          setSending(false)
        },
        (error) => {
          console.log(error.text)
          toast.error(t('contact.message.error'))
          setSending(false)
        }
      )
  }

  return (
    <div
      id='contact'
      className='h-[80vh] items-center justify-center flex mt-25 mx-6 lg:mx-0'
    >
      <div className='h-fit w-full'>
        <div
          className='bg-[#000]/60 w-full h-full p-1'
          style={{
            clipPath: `polygon(0% 0%, var(--clip-right-top, 93%) 0%, 100% var(--clip-angle-top, 10%), 100% 100%, var(--clip-left-bottom, 7%) 100%, 0% var(--clip-angle-bottom, 90%))`,
          }}
        >
          <div
            className='bg-[#0C0C0C] h-full w-full p-12 md:px-14 lg:p-16 lg:pt-14 flex flex-col gap-6 lg:gap-12'
            style={{
              clipPath: `polygon(0% 0%, var(--clip-right-top, 93%) 0%, 100% var(--clip-angle-top, 10%), 100% 100%, var(--clip-left-bottom, 7%) 100%, 0% var(--clip-angle-bottom, 90%))`,
            }}
          >
            <motion.div
              className='flex flex-col'
              variants={stagger}
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
            >
              <motion.h1
                className='uppercase font-bold oswald-regular'
                variants={fadeInUp}
              >
                {t('contact.title')}
              </motion.h1>

              <motion.p className='mt-4' variants={fadeInUp}>
                {t('contact.p2')}
              </motion.p>

              <motion.div
                className='w-16 bg-[#0fa]/75 h-0.5 mt-6 mx-auto rounded'
                variants={fadeInUp}
              />
            </motion.div>
            <motion.div
              variants={stagger}
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.3}}
              className='flex flex-row gap-8 h-fit lg:px-4'
            >
              <motion.div
                variants={slideFromLeft}
                className='grow-1 text-start max-w-3/8 -mt-4 flex-col gap-3 hidden lg:flex'
              >
                <h3 className='uppercase oswald-regular' style={{fontSize: 30}}>
                  {t('contact.info.title')}
                </h3>
                <p className='font-light'>{t('contact.p1')}</p>
                <div className='flex flex-col gap-4 py-3'>
                  <motion.div
                    variants={scaleFade}
                    className='flex flex-row items-center gap-4'
                  >
                    <div className='w-12 h-12 flex items-center justify-center bg-[#000]/25 border-1 border-neutral-900 text-[#0fa] rounded-lg'>
                      <MapPin size={26} />
                    </div>
                    <div className='flex flex-col gap-0'>
                      <p className='uppercase oswald-regular'>
                        {t('contact.info.location')}
                      </p>
                      <p className='font-light'>
                        {t('contact.info.location.p1')}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={scaleFade}
                    className='flex flex-row items-center gap-4'
                  >
                    <div className='w-12 h-12 flex items-center justify-center bg-[#000]/25 border-1 border-neutral-900 text-[#0fa] rounded-lg'>
                      <Mail size={26} />
                    </div>
                    <div className='flex flex-col gap-0'>
                      <p className='uppercase oswald-regular'>
                        {t('contact.info.email')}
                      </p>
                      <a
                        className='font-light'
                        href='mailto:llamazares.nico@gmail.com'
                      >
                        {t('contact.info.email.p1')}
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={scaleFade}
                    className='flex flex-row items-center gap-4'
                  >
                    <div className='w-12 h-12 flex items-center justify-center bg-[#000]/25 border-1 border-neutral-900 text-[#0fa] rounded-lg'>
                      <Phone size={26} />
                    </div>
                    <div className='flex flex-col gap-0'>
                      <p className='uppercase oswald-regular'>
                        {t('contact.info.phone')}
                      </p>
                      <a
                        className='font-light'
                        href='https://wa.me/5492216325117'
                        target='_blank'
                      >
                        {t('contact.info.phone.p1')}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.form
                method='POST'
                data-netlify='true'
                name='contact'
                ref={form}
                onSubmit={handleSubmit}
                variants={slideFromRight}
                className='grow-3 text-start flex flex-col gap-3'
              >
                <h3
                  className='uppercase oswald-regular hidden lg:block'
                  style={{fontSize: 30}}
                >
                  {t('contact.message.title')}
                </h3>
                <div className='w-full flex flex-col gap-3 pt-3'>
                  <div className='flex flex-row gap-3'>
                    <TextField
                      id='standard-multiline-static'
                      label={t('contact.message.name')}
                      type='text'
                      name='name'
                      required
                      rows={1}
                      variant='filled'
                      value={nameInputValue}
                      onChange={(e) => setNameInputValue(e.target.value)}
                      sx={{
                        width: '100%',
                        '& .MuiFilledInput-root': {
                          backgroundColor: '#00000045',
                          '&:hover': {
                            backgroundColor: '#00000075',
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#00000075',
                          },
                        },
                        '& .MuiFilledInput-underline:before': {
                          borderBottomColor: '#222',
                        },
                        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before':
                          {
                            borderBottomColor: '#0fa',
                          },
                        '& .MuiFilledInput-underline:after': {
                          borderBottomColor: '#0fa',
                        },
                        '& .MuiInputLabel-root': {
                          color: '#888',
                          fontFamily: 'Inria Sans',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {color: '#0fa'},
                        '& .MuiInputBase-input': {color: '#fff'},
                      }}
                    />
                    <TextField
                      id='standard-multiline-static'
                      label={t('contact.message.email')}
                      rows={1}
                      type='email'
                      name='email'
                      required
                      variant='filled'
                      value={emailInputValue}
                      onChange={(e) => setEmailInputValue(e.target.value)}
                      sx={{
                        width: '100%',
                        '& .MuiFilledInput-root': {
                          backgroundColor: '#00000045',
                          '&:hover': {
                            backgroundColor: '#00000075',
                          },
                          '&.Mui-focused': {
                            backgroundColor: '#00000075',
                          },
                        },
                        '& .MuiFilledInput-underline:before': {
                          borderBottomColor: '#222',
                        },
                        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before':
                          {
                            borderBottomColor: '#0fa',
                          },
                        '& .MuiFilledInput-underline:after': {
                          borderBottomColor: '#0fa',
                        },
                        '& .MuiInputLabel-root': {
                          color: '#888',
                          fontFamily: 'Inria Sans',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {color: '#0fa'},
                        '& .MuiInputBase-input': {color: '#fff'},
                      }}
                    />
                  </div>
                  <TextField
                    id='standard-multiline-static'
                    label={t('contact.message.message')}
                    multiline
                    type='text'
                    name='message'
                    required
                    rows={5}
                    variant='filled'
                    value={messageInputValue}
                    onChange={(e) => setMessageInputValue(e.target.value)}
                    sx={{
                      width: '100%',
                      '& .MuiFilledInput-root': {
                        backgroundColor: '#00000045',
                        '&:hover': {
                          backgroundColor: '#00000075',
                        },
                        '&.Mui-focused': {
                          backgroundColor: '#00000075',
                        },
                      },
                      '& .MuiFilledInput-underline:before': {
                        borderBottomColor: '#222',
                      },
                      '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before':
                        {
                          borderBottomColor: '#0fa',
                        },
                      '& .MuiFilledInput-underline:after': {
                        borderBottomColor: '#0fa',
                      },
                      '& .MuiInputLabel-root': {
                        color: '#888',
                        fontFamily: 'Inria Sans',
                      },
                      '& .MuiInputLabel-root.Mui-focused': {color: '#0fa'},
                      '& .MuiInputBase-input': {color: '#fff'},
                    }}
                  />
                </div>
                <button
                  type='submit'
                  className='cursor-pointer w-fit select-none p-0.5 self-end'
                  disabled={sending}
                >
                  <div
                    className='w-full h-auto object-cover bg-[#222] hover:bg-[#0fa] transition-colors object-center p-[1px]'
                    style={{
                      clipPath:
                        'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                    }}
                  >
                    <div
                      className='w-full flex flex-row gap-3 items-center justify-center h-10 bg-[#090909] hover:bg-[#050505] transition-colors object-center px-4 pe-5'
                      style={{
                        clipPath:
                          'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                      }}
                    >
                      {sending ? (
                        <>
                          <LoaderCircle
                            size={20}
                            color='#0fa'
                            className='animate-spin'
                          />
                          {t('contact.message.sending')}
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          {t('contact.message.send')}
                        </>
                      )}
                    </div>
                  </div>
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
