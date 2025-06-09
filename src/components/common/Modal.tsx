import {X} from 'lucide-react'
import React, {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import {motion} from 'framer-motion'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({children, onClose}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Activar la animación después de que el componente se monte
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10)

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    // Deshabilitar el scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden'

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleEscapeKey)

      // Restaurar el scroll del body cuando el modal se cierra
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return createPortal(
    <div
      className={`fixed inset-0 w-full h-full z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'
      }`}
    >
      <div
        className={`relative max-w-6xl w-full mx-4 overflow-auto transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {children}
      </div>
      <motion.div
        className={`cursor-pointer select-none flex items-center justify-center font-bold text-2xl absolute w-12 h-12 top-3 right-3 text-white hover:text-[#0fa] transition-colors ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        whileHover={{scale: 1.2}}
        transition={{duration: 0.2}}
        whileTap={{scale: 1}}
      >
        <X size={36} strokeWidth={3} />
      </motion.div>
    </div>,
    document.getElementById('portal-root') || document.body
  )
}

export default Modal
