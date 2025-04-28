import React, {createContext, useState, useContext, ReactNode} from 'react'

// Definir los idiomas disponibles
export type Language = 'en' | 'es'

// Tipo para el contexto
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home section
    'home.role': 'Software Developer',
    'home.university': 'University Programmer Analyst',
    'home.university.from': 'from the National University of La Plata',
    'home.resume': 'My Resume',

    // About section
    'about.title': '// About me',
    'about.p1':
      "Since I was a child, I've been fascinated by technology as a tool for bringing ideas to life. My path led me to graduate as an Electromechanical Technician, but it was in the world of web development where I truly found my calling.",
    'about.p2':
      "Over the past few years, I've enjoyed creating functional and engaging solutions, with a particular focus on developing dynamic user interfaces using React. I'm passionate about the logic behind code and the ability to build intuitive user experiences.",
    'about.p3':
      'In my free time, I explore new technologies and apply them to personal projects like "Noche de cine" an app that reflects my interest in collaboration and practical problem-solving.',
    'about.p4':
      'Having recently graduated as a University Programmer Analyst from the National University of La Plata (UNLP), I am actively seeking opportunities to grow as a developer, contribute my knowledge, and take on new challenges. I am convinced that my constant curiosity and dedication can be a valuable asset to any team.',

    // Projects section
    'projects.title': 'PROJECTS //',
    'projects.desktopDevelopment': 'DESKTOP DEVELOPMENT',
    'projects.webDevelopment': 'WEB DEVELOPMENT',

    'projects.cinemaNight': 'Cinema Night',
    'projects.cinemaNight.p1':
      'Voting organizer for movies with friends. Allows proposing, vetting and managing watched/unwatched lists. Made with love and care for my friends and me.',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.p1':
      'App for LoL players. Helps choosing champions, tracks enemy spells and offers customizable stats.',

    'projects.multiTwitch': 'Multi Twitch',
    'projects.multiTwitch.p1':
      'Allows viewing multiple Twitch streams at once, with keyboard shortcuts and customizable design.',

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.p1':
      'Tracks the price of Bitcoin from Binance, saves local history and allows customizing alerts.',

    'contact.title': 'Contact',
    'contact.info.title': 'Contact Information',

    'contact.info.location': 'Location',
    'contact.info.location.p1': 'La Plata, Argentina',
    'contact.info.phone': 'Phone',
    'contact.info.phone.p1': '+54 9 221 632-5117',
    'contact.info.email': 'Email',
    'contact.info.email.p1': 'llamazares.nico@gmail.com',

    'contact.message.title': 'Send me a message',
    'contact.message.name': 'Name',
    'contact.message.email': 'Email',
    'contact.message.message': 'Message',
    'contact.message.send': 'Send',

    'contact.message.success': 'Message sent!',
    'contact.message.error': 'Error sending message.',

    'contact.p1':
      'I am interested in freelance web development opportunities, either full-time or part-time.',
    'contact.p2':
      'Do you have a proposal or inquiry? Feel free to write me, I will be happy to answer.',

    'footer.my': 'My',
    'footer.portfolio': 'Portfolio',

    'footer.message': 'Thanks for visiting my portfolio! ♡',
    'footer.backToTop': 'Back to top',
  },
  es: {
    // Navbar
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Home section
    'home.role': 'Desarrollador de Software',
    'home.university': 'Analista Programador Universitario',
    'home.university.from': 'de la Universidad Nacional de La Plata',
    'home.resume': 'Currículum',

    // About section
    'about.title': '// Sobre mí',
    'about.p1':
      'Desde niño, me ha fascinado la tecnología como herramienta para dar vida a ideas. Mi camino me llevó a graduarme como Técnico Electromecánico, pero fue en el mundo del desarrollo web donde realmente encontré mi vocación.',
    'about.p2':
      'Durante los últimos años, he disfrutado creando soluciones funcionales y atractivas, con un enfoque particular en el desarrollo de interfaces de usuario dinámicas usando React. Me apasiona la lógica detrás del código y la capacidad de construir experiencias de usuario intuitivas.',
    'about.p3':
      'En mi tiempo libre, exploro nuevas tecnologías y las aplico a proyectos personales como "Noche de cine", una aplicación que refleja mi interés en la colaboración y la resolución práctica de problemas.',
    'about.p4':
      'Habiéndome graduado recientemente como Analista Programador Universitario de la Universidad Nacional de La Plata (UNLP), estoy buscando activamente oportunidades para crecer como desarrollador, aportar mis conocimientos y asumir nuevos desafíos. Estoy convencido de que mi constante curiosidad y dedicación pueden ser un activo valioso para cualquier equipo.',

    // Projects section
    'projects.title': 'PROYECTOS //',
    'projects.desktopDevelopment': 'APLICACIÓN DE ESCRITORIO',
    'projects.webDevelopment': 'APLICACIÓN WEB',

    'projects.cinemaNight': 'Noche de cine',
    'projects.cinemaNight.p1':
      'Organizador de votaciones para ver películas con amigos. Permite proponer, vetar y gestionar listas de vistas/no vistas. Hecha con mucho amor y cariño para mis amigos y yo.',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.p1':
      'App para jugadores de LoL. Ayuda a elegir campeones, trackea hechizos enemigos y ofrece stats personalizables.',

    'projects.multiTwitch': 'Multi Twitch',
    'projects.multiTwitch.p1':
      'Permite ver múltiples streamings de Twitch a la vez, con atajos de teclado y opciones de diseño personalizadas.',

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.p1':
      'Trackea el precio del Bitcoin desde Binance, guarda historial local y permite configurar alertas personalizadas.',

    'contact.title': 'Contacto',
    'contact.info.title': 'Información de contacto',

    'contact.info.location': 'Ubicación',
    'contact.info.location.p1': 'La Plata, Argentina',
    'contact.info.phone': 'Teléfono',
    'contact.info.phone.p1': '+54 9 221 632-5117',
    'contact.info.email': 'Email',
    'contact.info.email.p1': 'llamazares.nico@gmail.com',

    'contact.message.title': 'Envíame un mensaje',
    'contact.message.name': 'Nombre',
    'contact.message.email': 'Correo electrónico',
    'contact.message.message': 'Mensaje',
    'contact.message.send': 'Enviar',

    'contact.message.success': 'Mensaje enviado!',
    'contact.message.error': 'Error al enviar el mensaje.',

    'contact.p1':
      'Estoy interesado en oportunidades de desarrollo web, tanto freelance como en relación de dependencia.',
    'contact.p2':
      '¿Tenés una propuesta o consulta? No dudes en escribirme, estaré encantado de responder.',

    'footer.my': 'Mi',
    'footer.portfolio': 'Portafolio',

    'footer.message': 'Gracias por visitar mi portafolio! ♡',
    'footer.backToTop': 'Volver arriba',
  },
}

// Proveedor del contexto
export const LanguageProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en')

  // Función para obtener traducciones
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
