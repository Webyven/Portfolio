import React, {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'

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

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className={`fixed inset-0 w-full h-full z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isOpen ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'
      }`}
    >
      <div
        className={`relative bg-[#0C0C0C] border-2 border-[#000]/60 max-w-5xl w-full mx-4 overflow-auto transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {children}
      </div>
      <div
        className={`cursor-pointer select-none flex items-center justify-center font-bold text-2xl absolute w-12 h-12 top-3 right-3 text-white hover:text-[#0fa] transition-colors ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      >
        x
      </div>
    </div>,
    document.getElementById('portal-root') || document.body
  )
}

export default Modal
