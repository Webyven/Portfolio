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
    'projects.gameDevelopment': 'GAME DEVELOPMENT',

    'projects.description': 'Description',
    'projects.allOfMyProjects': 'All my projects',
    'projects.technologies': 'Technologies',

    'projects.cinemaNight': 'Cinema Night',
    'projects.cinemaNight.description':
      'Voting organizer for movies with friends. Allows proposing, vetting and managing watched/unwatched lists. Made with love and care for my friends and me.',
    'projects.cinemaNight.longDescription':
      'Cinema Night is a collaborative movie voting platform made for a group of friends to decide what to watch together. Users can propose up to two movies per session, veto films they don’t want to see, and vote by ranking their interest. Once everyone has voted, the app generates a podium to declare the winner. It also includes features like auto-proposals, personalized vetoes, and persistent lists of watched and unwatched movies. The project is built with React.js and uses websockets for real-time updates. It was developed with real social use in mind and continues evolving based on group feedback.',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.description':
      'App for LoL players. Helps choosing champions, tracks enemy spells and offers customizable stats.',
    'projects.poolCounters.longDescription':
      'Pool Counters is a desktop app designed to assist League of Legends players during champion select. It offers an intuitive interface to choose counter picks against enemy champions, keeps track of summoner spell cooldowns in real time, and lets users configure custom stats and preferences. Champion data is obtained via web scrapping, ensuring the app stays up to date without relying on third-party APIs. It’s a powerful companion for competitive players who want to stay ahead with fast, relevant decisions.',

    'projects.multiTwitch': 'Multi Twitch',
    'projects.multiTwitch.description':
      'Allows viewing multiple Twitch streams at once, with keyboard shortcuts and customizable design.',
    'projects.multiTwitch.longDescription':
      "Multi-Twitch is a desktop application that allows users to watch multiple Twitch streams at once in a clean, customizable layout. It supports adding custom URLs, keyboard shortcuts to quickly mute/unmute or switch focus between streams, and layout presets to suit different preferences. Users can personalize both the Twitch embed and the app's interface to optimize their viewing experience. Perfect for esports enthusiasts or anyone who enjoys following multiple streamers simultaneously.",

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.description':
      'Tracks the price of Bitcoin from Binance, saves local history and allows customizing alerts.',
    'projects.btcTracker.longDescription':
      'BTC Tracker is a lightweight desktop utility that scrapes real-time Bitcoin price data from Binance and displays it in a clear interface. It stores daily historical prices locally for future analysis and allows users to configure alerts when the price crosses certain thresholds. The app starts with the system and runs quietly in the background, making it ideal for passive tracking. Built for personal use, it emphasizes simplicity, speed, and privacy.',

    'projects.myPortfolio': 'My Portfolio',
    'projects.myPortfolio.description':
      'My personal portfolio website. Built with Vite, React, TypeScript, Framer Motion and Tailwind CSS.',
    'projects.myPortfolio.longDescription':
      'My Portfolio is a fully responsive personal website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. It showcases my projects, skills, and contact information in a modern and animated interface. The site supports multiple languages (English/Spanish), includes subtle entrance animations for every section, and is designed with custom shapes and a consistent visual identity. It serves both as a professional presentation and as a coding project where I implemented good practices like code modularization, context usage, and component reuse.',

    'projects.autocompleteShortcuts': 'Autocomplete Shortcuts',
    'projects.autocompleteShortcuts.description':
      'Allows using autocomplete shortcuts for Windows. It allows you to create custom shortcuts for your passwords, making it easier to access them quickly and securely.',
    'projects.autocompleteShortcuts.longDescription':
      'Autocomplete Shortcuts is a Windows app that lets you create keyboard shortcuts to quickly paste text in any input field. Each shortcut has a trigger word and a value. When the trigger is typed, the app deletes it and pastes the corresponding value into the focused input. If the value contains "->", the app simulates a "tab" key press to move to the next input and continues pasting. It’s especially useful for filling login forms or entering repetitive data across apps. Users can add, remove, or copy shortcuts with ease.',

    'projects.filenameChanger': 'Filename Changer',
    'projects.filenameChanger.description':
      'A massive filename changer. Allows you to change the filename of thousands of files with a single click.',
    'projects.filenameChanger.longDescription':
      'Filename Changer is a simple bulk renamer tool for Windows. It allows selecting a folder and replacing parts of filenames based on two text inputs: the string to find and the one to replace it with. It includes two additional options to trim the beginning and/or end of filenames. While it doesn’t support regex or advanced patterns, its minimal interface makes it fast and effective for everyday file renaming tasks.',

    'projects.reworkedTudu': 'Reworked Tudu',
    'projects.reworkedTudu.description':
      'A to-do list app with a focus on simplicity and productivity.',
    'projects.reworkedTudu.longDescription':
      'Reworked Tudu is the enhanced version of my very first to-do app built with C# and WinForms. This iteration adds support for importing old task files, creating and exporting custom themes, and offers a highly customizable interface. The focus wasn’t on minimalism but on exploring features and building a more flexible system. It marks a personal milestone in my programming journey, connecting my beginnings with my growth.',

    'projects.copaPiston': 'Copa Pistón',
    'projects.copaPiston.description':
      'App to track the progress of the Copa Pistón tournament. A Karting tournament with my friends.',
    'projects.copaPiston.longDescription':
      'Copa Pistón is a Windows desktop app designed to track kart racing tournaments with friends. Users can register the top finishers of each race, log fastest laps, attach files per race, and manage all data through a cloud-hosted SQL database. It also calculates championship points and generates a leaderboard. What started as a fun way to bring structure to friendly races turned into a robust system tailored for real events.',

    'projects.githubSearcher': 'GitHub Searcher',
    'projects.githubSearcher.description':
      'A GitHub user searcher. Allows you to search for GitHub users and view their information.',
    'projects.githubSearcher.longDescription':
      'GitHub Searcher is a web app built during a Platzi course to practice consuming external APIs. It allows searching GitHub users by username and displays basic profile information such as avatar, number of repositories, and followers. It’s a straightforward project that served as an introduction to REST APIs and data handling in frontend applications.',

    'projects.googleClone': 'Google Clone',
    'projects.googleClone.description':
      'A Google clone. Allows you to search for anything on the web.',
    'projects.googleClone.longDescription':
      "Google Clone is a static replica of the original Google homepage built with HTML, CSS, and vanilla JavaScript. The search bar mimics Google's look and redirects the user to the actual search results on Google with the entered query. It was built as a layout and styling exercise and demonstrates pixel-accurate implementation with minimalist JS logic.",

    'projects.pokedux': 'Pokedux',
    'projects.pokedux.description':
      'A Pokedex app. Allows you to search for Pokémon and view their information.',
    'projects.pokedux.longDescription':
      'Pokedux is a Pokédex web application built with React and Material UI as part of a Platzi course. It fetches data from a public Pokémon API, allowing users to browse and search for Pokémon and view their basic stats and images. The project was an exercise in API consumption, component structure, and styling with a UI framework.',

    'projects.alternate': 'Alternate',
    'projects.alternate.description': 'My first game, published on Play Store.',
    'projects.alternate.longDescription':
      'Alternate is my first game, developed in Unity with C# and published on the Play Store. It combines elements from Flappy Bird and Geometry Dash—players control a ball that alternates gravity to avoid obstacles and score points. The game features Google Play achievements and leaderboards to compete with other users. With nearly 20 active players, it was a passion project that taught me about game design, physics, and mobile publishing.',

    'projects.fedeteriApp': 'FedeteriApp',

    'projects.cedicaPrivate': 'CEDICA',

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
    'projects.gameDevelopment': 'JUEGO',

    'projects.description': 'Descripción',
    'projects.allOfMyProjects': 'Todos mis proyectos',
    'projects.technologies': 'Tecnologías',

    'projects.cinemaNight': 'Noche de cine',
    'projects.cinemaNight.description':
      'Organizador de votaciones para ver películas con amigos. Permite proponer, vetar y gestionar listas de vistas/no vistas. Hecha con mucho amor y cariño para mis amigos y yo.',
    'projects.cinemaNight.longDescription':
      'Noche de Cine es una aplicación web pensada para organizar votaciones de películas entre amigos. Cada usuario puede proponer películas, vetar aquellas que no desea ver si no participa, y gestionar sus listas de películas vistas y no vistas. Durante la fase de votación, los usuarios ordenan las películas según sus preferencias, y el sistema genera un podio una vez que todos han votado. El proyecto surgió de una necesidad real con mis amigos, y fue creciendo con el tiempo hasta convertirse en una herramienta completa hecha con React y WebSockets.',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.description':
      'App para jugadores de LoL. Ayuda a elegir campeones, trackea hechizos enemigos y ofrece stats personalizables.',
    'projects.poolCounters.longDescription':
      'Pool Counters es una aplicación de escritorio creada para jugadores de League of Legends. Permite registrar campeones, configurarlos como "counters", y sugerir qué pickear según el enemigo. También incluye un sistema para hacer seguimiento del tiempo de reutilización (cooldown) de los hechizos de los enemigos, y ofrece estadísticas configurables. Fue una de mis aplicaciones más completas, con scrapping dinámico para mantener la base de datos actualizada y múltiples opciones de personalización.',

    'projects.multiTwitch': 'Multi Twitch',
    'projects.multiTwitch.description':
      'Permite ver múltiples streamings de Twitch a la vez, con atajos de teclado y opciones de diseño personalizadas.',
    'projects.multiTwitch.longDescription':
      'Multi-Twitch es una aplicación de escritorio que permite ver múltiples transmisiones de Twitch (u otras páginas) al mismo tiempo. Incluye atajos de teclado para mutear o pausar transmisiones, cambiar el diseño y ajustar la experiencia según la preferencia del usuario. También ofrece opciones para personalizar tanto la interfaz como el comportamiento de cada reproductor. Fue pensada para quienes disfrutan seguir varios streamers a la vez de forma cómoda y organizada.',

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.description':
      'Trackea el precio del Bitcoin desde Binance, guarda historial local y permite configurar alertas personalizadas.',
    'projects.btcTracker.longDescription':
      'BTC Tracker es una app de escritorio para Windows que hace scrapping del precio del Bitcoin desde la web de Binance. Se inicia automáticamente con el sistema operativo y guarda un historial local con los precios diarios. Además, permite configurar alertas que notifican al usuario cuando el precio alcanza ciertos valores definidos. Es ideal para hacer seguimiento pasivo del mercado sin necesidad de tener una app abierta constantemente.',

    'projects.myPortfolio': 'Mi Portfolio',
    'projects.myPortfolio.description':
      'Mi sitio web personal. Hecho con Vite, React, TypeScript, Framer Motion y Tailwind CSS.',
    'projects.myPortfolio.longDescription':
      'Este portafolio personal fue desarrollado desde cero con Vite, React, TypeScript, Tailwind CSS y Framer Motion. Está diseñado para mostrar mis proyectos, mis habilidades y una forma de contacto directa. Tiene soporte multilenguaje (español e inglés), animaciones de entrada, diseño personalizado con bordes en clip-path y una estructura escalable dividida en componentes. Es una de mis páginas más trabajadas, pensada tanto para reflejar mi estilo como para mejorar continuamente.',

    'projects.autocompleteShortcuts': 'Autocomplete Shortcuts',
    'projects.autocompleteShortcuts.description':
      'Permite usar atajos de teclado para Windows. Permite crear shortcuts personalizados para tus contraseñas, haciendo más fácil acceder a ellas de forma rápida y segura.',
    'projects.autocompleteShortcuts.longDescription':
      'Autocomplete Shortcuts es una aplicación para Windows que permite crear atajos de teclado personalizados para pegar texto rápidamente en cualquier campo de entrada. Cada shortcut tiene una clave y un valor. Al tipear la clave, el programa la borra y pega el valor en el input enfocado. Si el valor contiene "->", simula la tecla "Tab" para pasar al siguiente campo y continuar pegando. Es ideal para completar formularios o ingresar datos repetitivos de forma rápida. Además, permite crear, borrar o copiar shortcuts fácilmente.',

    'projects.filenameChanger': 'Filename Changer',
    'projects.filenameChanger.description':
      'Un renombrador de archivos masivo. Permite cambiar el nombre de miles de archivos con un solo click.',
    'projects.filenameChanger.longDescription':
      'Filename Changer es una herramienta simple para renombrar archivos en masa en Windows. Permite seleccionar una carpeta y reemplazar partes del nombre de los archivos usando dos campos de texto: uno para lo que se quiere buscar y otro para con qué reemplazarlo. También incluye dos opciones para recortar el principio y/o final del nombre. Aunque no soporta expresiones regulares ni patrones avanzados, su interfaz minimalista lo hace ideal para tareas rápidas y cotidianas.',

    'projects.reworkedTudu': 'Reworked Tudu',
    'projects.reworkedTudu.description':
      'Una app de lista de tareas con un enfoque en la simplicidad y la productividad.',
    'projects.reworkedTudu.longDescription':
      'Reworked Tudú es una versión mejorada de mi primera aplicación de tareas hecha en C# con WinForms. Esta versión permite importar tareas de la versión antigua, crear y exportar temas personalizados, y ofrece muchas opciones de personalización visual. No está enfocada en la simplicidad, sino en explorar funcionalidades y construir un sistema más flexible. Representa un punto de conexión entre mis primeros pasos como programador y mi evolución actual.',

    'projects.copaPiston': 'Copa Pistón',
    'projects.copaPiston.description':
      'App para trackear el progreso de la Copa Pistón. Un torneo de Karting con amigos.',
    'projects.copaPiston.longDescription':
      'Copa Pistón es una aplicación de escritorio para Windows pensada para registrar torneos de karting entre amigos. Permite guardar quiénes fueron los primeros puestos de cada carrera, quién hizo la vuelta más rápida, adjuntar archivos por carrera, y almacenar toda la información en una base de datos SQL hosteada en la nube. También calcula los puntos de cada jugador y genera una tabla de posiciones. Fue creada para llevar un mejor control de nuestras carreras y terminó siendo un proyecto divertido y útil.',

    'projects.githubSearcher': 'GitHub Searcher',
    'projects.githubSearcher.description':
      'Una app para buscar usuarios de GitHub y ver su información.',
    'projects.githubSearcher.longDescription':
      'GitHub Searcher es una página web creada durante un curso de Platzi para practicar el consumo de APIs externas. Permite buscar usuarios de GitHub por nombre de usuario y muestra información básica como avatar, cantidad de repositorios y seguidores. Es un proyecto simple que sirvió como introducción al manejo de datos externos en aplicaciones frontend.',

    'projects.googleClone': 'Google Clone',
    'projects.googleClone.description':
      'Una replica de la página principal de Google. Permite buscar en la web.',
    'projects.googleClone.longDescription':
      'Google Clone es una réplica estática de la página principal de Google hecha con HTML, CSS y JavaScript vanilla. La barra de búsqueda imita la apariencia de la original y, al usarla, redirige a los resultados reales de Google con la consulta ingresada. Fue realizada como ejercicio de maquetado y estilo, y demuestra precisión en el diseño sin necesidad de frameworks.',

    'projects.pokedux': 'Pokedux',
    'projects.pokedux.description':
      'Una Pokedex web. Permite buscar Pokémon y ver su información.',
    'projects.pokedux.longDescription':
      'Pokedux es una Pokédex web hecha con React y Material UI, desarrollada durante un curso de Platzi. Consume datos desde una API pública de Pokémon, permitiendo buscar criaturas y visualizar su información básica, como imagen, tipo y estadísticas. Fue un ejercicio de consumo de APIs y uso de componentes con una librería de diseño moderna.',

    'projects.alternate': 'Alternate',
    'projects.alternate.description':
      'Mi primer juego, publicado en Play Store.',
    'projects.alternate.longDescription':
      'Alternate fue mi primer juego, desarrollado en Unity con C# y publicado en la Play Store. Es una mezcla entre Flappy Bird y Geometry Dash, donde controlás una pelotita que alterna la gravedad para esquivar obstáculos y sumar puntos. Incluye sistema de logros y tabla de puntuaciones mediante Google Play Juegos. Fue jugado por casi 20 personas, y fue una experiencia muy valiosa que me permitió aprender sobre diseño de juegos, físicas y publicación en Android.',

    'projects.fedeteriApp': 'FedeteriApp',

    'projects.cedicaPrivate': 'CEDICA',

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
