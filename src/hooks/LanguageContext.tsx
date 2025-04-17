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
