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
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.languageChange': 'Mostrar página en Español',

    // Home section
    'home.role': 'Software Developer',
    'home.university': 'Future University Programmer Analyst',
    'home.university.from': 'from the National University of La Plata',
    'home.university.remaining':
      '3 remaining subjects to complete - 90% completed',
    'home.resume': 'My Resume',

    // About section
    'about.title': '// About me',
    'about.p1':
      "Since I was a child, I've been fascinated by technology as a tool for bringing ideas to life. My path led me to graduate as an <b>Electromechanical Technician</b>, but it was in the world of web development where I truly found my calling.",
    'about.p2':
      "Over the past few years, I've enjoyed creating functional and engaging solutions, with a particular focus on developing dynamic user interfaces using <b>React</b>. I'm passionate about the logic behind code and the ability to build intuitive user experiences.",
    'about.p3':
      'In my free time, I explore new technologies and apply them to personal projects like <b>Noche de cine</b> an app that reflects my interest in collaboration and practical problem-solving.',
    'about.p4':
      'Being close to graduating as a <b>University Programmer Analyst</b> from the National University of La Plata (UNLP), I am actively seeking opportunities to grow as a developer, contribute my knowledge and take on new challenges. I am convinced that my constant curiosity and dedication can be a valuable asset to any team.',

    // Projects section
    'projects.title': 'PROJECTS >>',
    'projects.desktopDevelopment': 'DESKTOP DEVELOPMENT',
    'projects.webDevelopment': 'WEB DEVELOPMENT',
    'projects.gameDevelopment': 'GAME DEVELOPMENT',

    'projects.description': 'Description',
    'projects.allOfMyProjects': 'More projects',
    'projects.technologies': 'Technologies',
    'projects.links': 'Links',

    'projects.cinemaNight': 'Cinema Night',
    'projects.cinemaNight.description':
      'Voting organizer for movies with friends. Allows proposing, vetting and managing watched/unwatched lists. Made with love and care for my friends and me.',
    'projects.cinemaNight.longDescription':
      'Cinema Night is a collaborative movie voting platform made for a group of friends to decide what to watch together. Users can propose up to two movies per session, veto films they don’t want to see, and vote by ranking their interest. Once everyone has voted, the app generates a podium to declare the winner. It also includes features like auto-proposals, personalized vetoes, and persistent lists of watched and unwatched movies. The project is built with React.js and uses websockets for real-time updates. It was developed with real social use in mind and continues evolving based on group feedback.',
    'projects.cinemaNight.gallery.descriptionHome':
      'Home screen - With statistics about sessions and movie catalog',
    'projects.cinemaNight.gallery.descriptionMobileHome':
      'Mobile home screen - Adaptable design for mobile devices',
    'projects.cinemaNight.gallery.descriptionMovies':
      'Movie description screen, with synopsis, genres and more',
    'projects.cinemaNight.gallery.descriptionMovies2':
      'Movie catalog screen, allows searching and filtering movies',
    'projects.cinemaNight.gallery.descriptionUserConfig':
      'User configuration screen - Allows configuring auto-proposals and vetoes',
    'projects.cinemaNight.gallery.descriptionProposals':
      'Proposals screen - Allows proposing movies',
    'projects.cinemaNight.gallery.descriptionVotation':
      'Voting screen - Allows voting by ordering movies according to interest',
    'projects.cinemaNight.gallery.descriptionMobileVotation':
      'Mobile voting screen - Adaptable design for mobile devices',
    'projects.cinemaNight.gallery.descriptionResults':
      'Results screen - Shows the podium with the most voted movies',
    'projects.cinemaNight.gallery.descriptionResults2':
      'Results screen - Winner description and total votes',
    'projects.cinemaNight.gallery.descriptionAdminLogin':
      'Administration subsystem - Login screen',
    'projects.cinemaNight.gallery.descriptionAdminUsers':
      'Administration subsystem - Users screen',
    'projects.cinemaNight.gallery.descriptionAdminMovies':
      'Administration subsystem - Movies screen',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.description':
      'App for LoL players. Helps choosing champions, tracks enemy spells and offers customizable stats.',
    'projects.poolCounters.longDescription':
      'Pool Counters is a desktop app designed to assist League of Legends players during champion select. It offers an intuitive interface to choose counter picks against enemy champions, keeps track of summoner spell cooldowns in real time, and lets users configure custom stats and preferences. Champion data is obtained via web scrapping, ensuring the app stays up to date without relying on third-party APIs. It’s a powerful companion for competitive players who want to stay ahead with fast, relevant decisions.',
    'projects.poolCounters.gallery.descriptionHome':
      "Main screen - Where counters are calculated for each champion entered based on the user's pool",
    'projects.poolCounters.gallery.descriptionPoolScreen':
      "User's pool - Allows the user to view and keep track of all champions they use",
    'projects.poolCounters.gallery.descriptionCountersConfigScreen':
      'Champion counters - Allows the user to configure which champions are "counters" for each champion',
    'projects.poolCounters.gallery.descriptionPoolConfigScreen':
      'Pool configuration - Allows the user to configure the champion pool they use',
    'projects.poolCounters.gallery.descriptionChampionUpdaterScreen':
      'Champion updater - Allows the user to update the champion database',

    'projects.multiTwitch': 'Multi-Twitch',
    'projects.multiTwitch.description':
      'Allows viewing multiple Twitch streams at once, with keyboard shortcuts and customizable design.',
    'projects.multiTwitch.longDescription':
      "Multi-Twitch is a desktop application that allows users to watch multiple Twitch streams at once in a clean, customizable layout. It supports adding custom URLs, keyboard shortcuts to quickly mute/unmute or switch focus between streams, and layout presets to suit different preferences. Users can personalize both the Twitch embed and the app's interface to optimize their viewing experience. Perfect for esports enthusiasts or anyone who enjoys following multiple streamers simultaneously.",
    'projects.multiTwitch.gallery.descriptionHome':
      'Main screen - Where streams are displayed',
    'projects.multiTwitch.gallery.descriptionTwoStreams':
      'Main screen with 2 streams',
    'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPage':
      'Main screen with streams and page - Allows opening any other page, like a browser',
    'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPageAndAChat':
      'Main screen with streams, pages and pinned chat - Allows pinning streamer chats to keep them in view',
    'projects.multiTwitch.gallery.descriptionAboutScreen':
      'Information screen - Allows viewing information about the application',
    'projects.multiTwitch.gallery.descriptionTutorialScreen':
      'Tutorial - Has a tutorial so users can learn how to use the application',
    'projects.multiTwitch.gallery.descriptionShortcutsScreen':
      'Keyboard shortcuts - Allows users to configure keyboard shortcuts to mute or pause streams',

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.description':
      'Tracks the price of Bitcoin from Binance, saves local history and allows customizing alerts.',
    'projects.btcTracker.longDescription':
      'BTC Tracker is a lightweight desktop utility that scrapes real-time Bitcoin price data from Binance and displays it in a clear interface. It stores daily historical prices locally for future analysis and allows users to configure alerts when the price crosses certain thresholds. The app starts with the system and runs quietly in the background, making it ideal for passive tracking. Built for personal use, it emphasizes simplicity, speed, and privacy.',
    'projects.btcTracker.gallery.descriptionHome':
      'Main screen, which allows viewing history and configuring alerts',
    'projects.btcTracker.gallery.descriptionAlert':
      'Alert screen, as an example',
    'projects.btcTracker.gallery.descriptionDiscordNotifications':
      'Notifications through Discord, using Webhooks',

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
    'projects.autocompleteShortcuts.gallery.descriptionHome':
      'Main screen - Where shortcuts can be configured. Not very pretty... but functional',
    'projects.autocompleteShortcuts.gallery.descriptionPreview':
      'Example - With the word "preview" as trigger, it gets deleted and autocompletes with what is set in the application',

    'projects.filenameChanger': 'Filename Changer',
    'projects.filenameChanger.description':
      'A massive filename changer. Allows you to change the filename of thousands of files with a single click.',
    'projects.filenameChanger.longDescription':
      'Filename Changer is a simple bulk renamer tool for Windows. It allows selecting a folder and replacing parts of filenames based on two text inputs: the string to find and the one to replace it with. It includes two additional options to trim the beginning and/or end of filenames. While it doesn’t support regex or advanced patterns, its minimal interface makes it fast and effective for everyday file renaming tasks.',
    'projects.filenameChanger.gallery.descriptionHome':
      'Main screen - Allows selecting the folder and text fields for renaming',
    'projects.filenameChanger.gallery.descriptionSuccessExample':
      'Success screen, with the number of renamed files',

    'projects.reworkedTudu': 'Reworked Tudu',
    'projects.reworkedTudu.description':
      'A to-do list app with a focus on simplicity and productivity.',
    'projects.reworkedTudu.longDescription':
      'Reworked Tudu is the enhanced version of my very first to-do app built with C# and WinForms. This iteration adds support for importing old task files, creating and exporting custom themes, and offers a highly customizable interface. The focus wasn’t on minimalism but on exploring features and building a more flexible system. It marks a personal milestone in my programming journey, connecting my beginnings with my growth.',
    'projects.reworkedTudu.gallery.descriptionHome':
      'Main screen - Allows adding, editing and deleting tasks',
    'projects.reworkedTudu.gallery.descriptionThemes':
      'Themes screen - Allows creating, editing, exporting and importing themes',
    'projects.reworkedTudu.gallery.descriptionPresets':
      'Presets - The application already has some presets, and allows users to create their own',
    'projects.reworkedTudu.gallery.descriptionCustomColors':
      'Main screen - But with custom colors',
    'projects.reworkedTudu.gallery.descriptionEditTask':
      'Task editing screen - Allows editing tasks',

    'projects.copaPiston': 'Copa Pistón',
    'projects.copaPiston.description':
      'App to track the progress of the Copa Pistón tournament. A Karting tournament with my friends.',
    'projects.copaPiston.longDescription':
      'Copa Pistón is a Windows desktop app designed to track kart racing tournaments with friends. Users can register the top finishers of each race, log fastest laps, attach files per race, and manage all data through a cloud-hosted SQL database. It also calculates championship points and generates a leaderboard. What started as a fun way to bring structure to friendly races turned into a robust system tailored for real events.',
    'projects.copaPiston.gallery.descriptionLoading': 'Loading screen',
    'projects.copaPiston.gallery.descriptionRanking':
      'Ranking screen - Showing the championship podium and detailed points for each driver',
    'projects.copaPiston.gallery.descriptionRaces':
      'Race information and management - Allows viewing, creating, editing and deleting races',
    'projects.copaPiston.gallery.descriptionDrivers':
      'Driver information and management - Allows viewing, creating and editing drivers',
    'projects.copaPiston.gallery.descriptionLogin':
      'Ranking configuration and login',

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
    'projects.alternate.gallery.descriptionHome':
      'Main screen - Where the game starts',
    'projects.alternate.gallery.descriptionCustomization':
      'Customization screen - Where the player can customize the game changing the colors',
    'projects.alternate.gallery.descriptionGameplay':
      'PC Gameplay - Recorded on PC for better quality',
    'projects.alternate.gallery.descriptionGooglePlayAchievements':
      'Integration with Google Play Achievements, where the player can earn achievements',
    'projects.alternate.gallery.descriptionGooglePlayLeaderboards':
      'Integration with Google Play Leaderboards, where the player can compete with other players',

    'projects.fedeteriApp': 'FedeteriApp',
    'projects.fedeteriApp.description':
      'FedeteriApp is a web application developed as a final project for Software Engineering II. The system was designed for a fictional hardware store chain called Fedetería, with the goal of increasing sales through a barter system. Users can post personal items to exchange with others, but the exchange must take place in physical company branches, which encouraged cross-selling of actual store products.',
    'projects.fedeteriApp.longDescription':
      'FedeteriApp is a web application developed as a final project for Software Engineering II. The system was designed for a fictional hardware store chain called Fedetería, with the goal of increasing sales through a barter system. Users can post personal items to exchange with others, but the exchange must take place in physical company branches, which encouraged cross-selling of actual store products.',
    'projects.fedeteriApp.gallery.descriptionHome':
      'Home screen - Where user posts and latest trades appear',
    'projects.fedeteriApp.gallery.descriptionSearch':
      'Search screen - Where users can search for items by name or brand',
    'projects.fedeteriApp.gallery.descriptionFilters':
      'Search screen - Users can also filter items by brand and/or condition',
    'projects.fedeteriApp.gallery.descriptionBranches':
      'Branches screen - Shows company branches, their addresses and business hours',
    'projects.fedeteriApp.gallery.descriptionEmployeeSignUp':
      'Employee registration screen - One of the many forms in the application',
    'projects.fedeteriApp.gallery.descriptionYourProducts':
      'Your posts - Where users can view their posts, edit them, delete them or pay to highlight them',
    'projects.fedeteriApp.gallery.descriptionYourTrades':
      'Trade history - Allows users to view their completed and incomplete trades',
    'projects.fedeteriApp.gallery.descriptionQualifications':
      'After making a trade, users can rate both the branch and the other user',
    'projects.fedeteriApp.gallery.descriptionUserProfile':
      'You can view user profiles to see their posts, trades and reputation',
    'projects.fedeteriApp.gallery.descriptionUserTrades':
      "You can also view another user's trade history",
    'projects.fedeteriApp.gallery.descriptionStatistics':
      'Statistics - Allows viewing sales, trades, ratings of branches and earnings from featured items',

    'projects.cedica': 'CEDICA',
    'projects.cedica.description':
      'System developed for CEDICA as a final project for the "Proyecto de Software" subject, a real foundation dedicated to equine therapy',
    'projects.cedica.longDescription':
      'System developed for CEDICA as a final project for the "Proyecto de Software" subject, a real foundation dedicated to equine therapy. The goal was to create a comprehensive solution that included: <ul class="list-disc list-inside mt-1"><li class="mb-1">A private management panel to track horses, trainers, patients (riders), documentation and payments.</li><li class="mb-1">A public institutional portal with information about the foundation and its activities, including a contact form linked to the internal system.</li></ul>This experience was very significant for me, as it represented my first approach to a real project with a database and a complex user interface. Given the size of the system, only some of the most representative screens are shown in this portfolio, in which I worked exclusively.',
    'projects.cedica.gallery.descriptionPublicHome':
      'Public home - Information about the foundation and its activities',
    'projects.cedica.gallery.descriptionPublicContact':
      'Public contact - Contact form linked to the internal system',
    'projects.cedica.gallery.descriptionHome':
      'Private home - Where horses, trainers, patients, documentation and payments are managed',
    'projects.cedica.gallery.descriptionEcuestre':
      'Horse management - Where horses of the institution are managed',
    'projects.cedica.gallery.descriptionHorseRegistration':
      'Horse registration - Where horses are registered',
    'projects.cedica.gallery.descriptionHorseRegistration2':
      'Second part of the horse registration - Here it is possible to assign activities and members',
    'projects.cedica.gallery.descriptionViewHorse':
      'Horse view - Where the horse information is displayed',
    'projects.cedica.gallery.descriptionPublicContent':
      'Public content - Where the articles of the portal are managed',
    'projects.cedica.gallery.descriptionViewArticle':
      'Article view - Displays the complete article in markdown format',
    'projects.cedica.gallery.descriptionEditArticle':
      'Article editing - Allows editing the article content, with real-time preview',
    'projects.cedica.gallery.descriptionProfile':
      'Profile - Allows viewing user information',

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
    'contact.message.sending': 'Sending...',

    'contact.message.success':
      'Mensaje recibido. Muchas gracias por contactarte!',
    'contact.message.error':
      'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',

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
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.languageChange': 'Show page in English',

    // Home section
    'home.role': 'Desarrollador de Software',
    'home.university': 'Futuro Analista Programador Universitario',
    'home.university.from': 'de la Universidad Nacional de La Plata',
    'home.university.remaining': '3 materias restantes - 90% completado',
    'home.resume': 'Currículum',

    // About section
    'about.title': '// Sobre mí',
    'about.p1':
      'Desde niño, me ha fascinado la tecnología como herramienta para dar vida a ideas. Mi camino me llevó a graduarme como <b>Técnico Electromecánico</b>, pero fue en el mundo del desarrollo web donde realmente encontré mi vocación.',
    'about.p2':
      'Durante los últimos años, he disfrutado creando soluciones funcionales y atractivas, con un enfoque particular en el desarrollo de interfaces de usuario dinámicas usando <b>React</b>. Me apasiona la lógica detrás del código y la capacidad de construir experiencias de usuario intuitivas.',
    'about.p3':
      'En mi tiempo libre, exploro nuevas tecnologías y las aplico a proyectos personales como <b>Noche de cine</b>, una aplicación que refleja mi interés en la colaboración y la resolución práctica de problemas.',
    'about.p4':
      'Estando a poco de graduarme como <b>Analista Programador Universitario</b> de la Universidad Nacional de La Plata (UNLP), estoy buscando activamente oportunidades para crecer como desarrollador, aportar mis conocimientos y asumir nuevos desafíos. Estoy convencido de que mi constante curiosidad y dedicación pueden ser un activo valioso para cualquier equipo.',

    // Projects section
    'projects.title': 'PROYECTOS >>',
    'projects.desktopDevelopment': 'APLICACIÓN DE ESCRITORIO',
    'projects.webDevelopment': 'APLICACIÓN WEB',
    'projects.gameDevelopment': 'JUEGO',

    'projects.description': 'Descripción',
    'projects.allOfMyProjects': 'Más proyectos',
    'projects.technologies': 'Tecnologías',
    'projects.links': 'Enlaces',

    'projects.cinemaNight': 'Noche de cine',
    'projects.cinemaNight.description':
      'Organizador de votaciones para ver películas con amigos. Permite proponer, vetar y gestionar listas de vistas/no vistas. Hecha con mucho amor y cariño para mis amigos y yo.',
    'projects.cinemaNight.longDescription':
      'Noche de Cine es una aplicación web pensada para organizar votaciones de películas entre amigos. Cada usuario puede proponer hasta 2 películas por votación, vetar aquellas que no desea ver si no participa, y gestionar sus listas de películas vistas y no vistas. Durante la fase de votación, los usuarios ordenan las películas según sus preferencias, y el sistema genera un podio una vez que todos han votado. El proyecto surgió de una necesidad real con mis amigos, y fue creciendo con el tiempo hasta convertirse en una herramienta completa hecha con React y WebSockets.',
    'projects.cinemaNight.gallery.descriptionHome':
      'Pantalla principal - Con estadísticas sobre las sesiones y el catálogo de películas',
    'projects.cinemaNight.gallery.descriptionMobileHome':
      'Pantalla principal móvil - Diseño adaptable para dispositivos móviles',
    'projects.cinemaNight.gallery.descriptionMovies':
      'Pantalla de descripción películas, con sinopsis, géneros y más',
    'projects.cinemaNight.gallery.descriptionMovies2':
      'Pantalla de catálogo de películas, permite buscar y filtrar películas',
    'projects.cinemaNight.gallery.descriptionUserConfig':
      'Pantalla de configuración de usuario - Permite configurar auto-propuestas y vetos',
    'projects.cinemaNight.gallery.descriptionProposals':
      'Pantalla de propuestas - Permite proponer películas',
    'projects.cinemaNight.gallery.descriptionVotation':
      'Pantalla de votación - Permite votar ordenando las películas según su interés',
    'projects.cinemaNight.gallery.descriptionMobileVotation':
      'Pantalla de votación móvil - Diseño adaptable para dispositivos móviles',
    'projects.cinemaNight.gallery.descriptionResults':
      'Pantalla de resultados - Muestra el podio con las películas más votadas',
    'projects.cinemaNight.gallery.descriptionResults2':
      'Pantalla de resultados - Descripción del ganador y votos totales',
    'projects.cinemaNight.gallery.descriptionAdminLogin':
      'Subsistema de administración - Pantalla de inicio de sesión',
    'projects.cinemaNight.gallery.descriptionAdminUsers':
      'Subsistema de administración - Pantalla de usuarios',
    'projects.cinemaNight.gallery.descriptionAdminMovies':
      'Subsistema de administración - Pantalla de películas',

    'projects.poolCounters': 'Pool Counters',
    'projects.poolCounters.description':
      'App para jugadores de LoL. Ayuda a elegir campeones, trackea hechizos enemigos y ofrece stats personalizables.',
    'projects.poolCounters.longDescription':
      'Pool Counters es una aplicación de escritorio creada para jugadores de League of Legends. Permite registrar campeones, configurarlos como "counters", y sugerir qué pickear según el enemigo. También incluye un sistema para hacer seguimiento del tiempo de reutilización (cooldown) de los hechizos de los enemigos, y ofrece estadísticas configurables. Fue una de mis aplicaciones más completas, con scrapping dinámico para mantener la base de datos actualizada y múltiples opciones de personalización.',
    'projects.poolCounters.gallery.descriptionHome':
      'Pantalla principal - Donde se calculan los counters de cada campeón ingresado según la pool del usuario',
    'projects.poolCounters.gallery.descriptionPoolScreen':
      'Pool del usuario - Permite al usuario ver y tener en cuenta todos los campeones que utiliza',
    'projects.poolCounters.gallery.descriptionCountersConfigScreen':
      'Counters de campeones - Permite al usuario configurar qué campeones son "counters" para cada campeón',
    'projects.poolCounters.gallery.descriptionPoolConfigScreen':
      'Configuración de la pool - Permite al usuario configurar la pool de campeones que utiliza',
    'projects.poolCounters.gallery.descriptionChampionUpdaterScreen':
      'Actualizador de campeones - Permite al usuario actualizar la base de datos de campeones',

    'projects.multiTwitch': 'Multi-Twitch',
    'projects.multiTwitch.description':
      'Permite ver múltiples streamings de Twitch a la vez, con atajos de teclado y opciones de diseño personalizadas.',
    'projects.multiTwitch.longDescription':
      'Multi-Twitch es una aplicación de escritorio que permite ver múltiples transmisiones de Twitch (u otras páginas) al mismo tiempo. Incluye atajos de teclado para mutear o pausar transmisiones, cambiar el diseño y ajustar la experiencia según la preferencia del usuario. También ofrece opciones para personalizar tanto la interfaz como el comportamiento de cada reproductor. Fue pensada para quienes disfrutan seguir varios streamers a la vez de forma cómoda y organizada.',
    'projects.multiTwitch.gallery.descriptionHome':
      'Pantalla principal - Donde se muestran los streams',
    'projects.multiTwitch.gallery.descriptionTwoStreams':
      'Pantalla principal con 2 streams',
    'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPage':
      'Pantalla principal con streams y página - Permite abrir cualquier otra página, como si fuera un navegador',
    'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPageAndAChat':
      'Pantalla principal con streams, páginas y chat anclado - Permite anclar chats de streamers para no perderlos de vista',
    'projects.multiTwitch.gallery.descriptionAboutScreen':
      'Pantalla de información - Permite ver información sobre la aplicación',
    'projects.multiTwitch.gallery.descriptionTutorialScreen':
      'Tutorial - Posee un tutorial para que el usuario pueda aprender a usar la aplicación',
    'projects.multiTwitch.gallery.descriptionShortcutsScreen':
      'Atajos de teclado - Permite al usuario configurar atajos de teclado para mutear o pausar transmisiones',

    'projects.btcTracker': 'BTC Tracker',
    'projects.btcTracker.description':
      'Trackea el precio del Bitcoin desde Binance, guarda historial local y permite configurar alertas personalizadas.',
    'projects.btcTracker.longDescription':
      'BTC Tracker es una app de escritorio para Windows que hace scrapping del precio del Bitcoin desde la web de Binance. Se inicia automáticamente con el sistema operativo y guarda un historial local con los precios diarios. Además, permite configurar alertas que notifican al usuario cuando el precio alcanza ciertos valores definidos. Es ideal para hacer seguimiento pasivo del mercado sin necesidad de tener una app abierta constantemente.',
    'projects.btcTracker.gallery.descriptionHome':
      'Pantalla principal, que permite visualizar el historial y configurar alertas',
    'projects.btcTracker.gallery.descriptionAlert':
      'Pantalla de alerta, a modo de ejemplo',
    'projects.btcTracker.gallery.descriptionDiscordNotifications':
      'Notificaciones a través de Discord, utilizando Webhooks',

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
    'projects.autocompleteShortcuts.gallery.descriptionHome':
      'Pantalla principal - Donde se pueden configurar los shortcuts. No es muy linda... pero es funcional',
    'projects.autocompleteShortcuts.gallery.descriptionPreview':
      'Ejemplo - Con la palabra "preview" como trigger, se borra y autocompleta con lo establecido en la aplicación',

    'projects.filenameChanger': 'Filename Changer',
    'projects.filenameChanger.description':
      'Un renombrador de archivos masivo. Permite cambiar el nombre de miles de archivos con un solo click.',
    'projects.filenameChanger.longDescription':
      'Filename Changer es una herramienta simple para renombrar archivos en masa en Windows. Permite seleccionar una carpeta y reemplazar partes del nombre de los archivos usando dos campos de texto: uno para lo que se quiere buscar y otro para con qué reemplazarlo. También incluye dos opciones para recortar el principio y/o final del nombre. Aunque no soporta expresiones regulares ni patrones avanzados, su interfaz minimalista lo hace ideal para tareas rápidas y cotidianas.',
    'projects.filenameChanger.gallery.descriptionHome':
      'Pantalla principal - Permite seleccionar la carpeta y los campos de texto para el renombre',
    'projects.filenameChanger.gallery.descriptionSuccessExample':
      'Pantalla de éxito, con la cantidad de archivos renombrados',

    'projects.reworkedTudu': 'Reworked Tudu',
    'projects.reworkedTudu.description':
      'Una app de lista de tareas con un enfoque en la simplicidad y la productividad.',
    'projects.reworkedTudu.longDescription':
      'Reworked Tudú es una versión mejorada de mi primera aplicación de tareas hecha en C# con WinForms. Esta versión permite importar tareas de la versión antigua, crear y exportar temas personalizados, y ofrece muchas opciones de personalización visual. No está enfocada en la simplicidad, sino en explorar funcionalidades y construir un sistema más flexible. Representa un punto de conexión entre mis primeros pasos como programador y mi evolución actual.',
    'projects.reworkedTudu.gallery.descriptionHome':
      'Pantalla principal - Permite agregar, editar y eliminar tareas',
    'projects.reworkedTudu.gallery.descriptionThemes':
      'Pantalla de temas - Permite crear, editar, exportar e importar temas',
    'projects.reworkedTudu.gallery.descriptionPresets':
      'Presets - La aplicación ya tiene algunos presets, y permite al usuario crear los suyos',
    'projects.reworkedTudu.gallery.descriptionCustomColors':
      'Pantalla principal - Pero con colores personalizados',
    'projects.reworkedTudu.gallery.descriptionEditTask':
      'Pantalla de edición de tareas - Permite editar las tareas',

    'projects.copaPiston': 'Copa Pistón',
    'projects.copaPiston.description':
      'App para trackear el progreso de la Copa Pistón. Un torneo de Karting con amigos.',
    'projects.copaPiston.longDescription':
      'Copa Pistón es una aplicación de escritorio para Windows pensada para registrar torneos de karting entre amigos. Permite guardar quiénes fueron los primeros puestos de cada carrera, quién hizo la vuelta más rápida, adjuntar archivos por carrera, y almacenar toda la información en una base de datos SQL hosteada en la nube. También calcula los puntos de cada jugador y genera una tabla de posiciones. Fue creada para llevar un mejor control de nuestras carreras y terminó siendo un proyecto divertido y útil.',
    'projects.copaPiston.gallery.descriptionLoading': 'Pantalla de carga',
    'projects.copaPiston.gallery.descriptionRanking':
      'Pantalla de clasificación - Muestra el podio del campeonato y los puntos detallados de cada piloto',
    'projects.copaPiston.gallery.descriptionRaces':
      'Información y administración de las carreras - Permite ver, crear, editar y eliminar carreras',
    'projects.copaPiston.gallery.descriptionDrivers':
      'Información y administración de los pilotos - Permite ver, crear y editar pilotos',
    'projects.copaPiston.gallery.descriptionLogin':
      'Configuración de la clasificación e inicio de sesión',

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
    'projects.alternate.gallery.descriptionHome':
      'Pantalla principal - Donde comienza el juego',
    'projects.alternate.gallery.descriptionCustomization':
      'Pantalla de personalización - Donde el jugador puede personalizar el juego cambiando los colores',
    'projects.alternate.gallery.descriptionGameplay':
      'Gameplay en PC - Grabado en PC para mejor calidad',
    'projects.alternate.gallery.descriptionGooglePlayAchievements':
      'Integración con logros de Google Play, donde el jugador puede ganar logros',
    'projects.alternate.gallery.descriptionGooglePlayLeaderboards':
      'Integración con tablas de clasificación de Google Play, donde el jugador puede competir con otros jugadores',

    'projects.fedeteriApp': 'FedeteriApp',
    'projects.fedeteriApp.description':
      'FedeteriApp es una aplicación web desarrollada como proyecto final para la materia Ingeniería de Software II. El sistema fue diseñado para una cadena ficticia de ferreterías llamada Fedetería, con el objetivo de aumentar sus ventas mediante un sistema de trueques. Los usuarios pueden publicar objetos personales para intercambiarlos con otros, pero el intercambio debe realizarse en sucursales físicas de la empresa, lo que incentivaba la venta cruzada de productos reales en tienda.',
    'projects.fedeteriApp.longDescription':
      'FedeteriApp es una aplicación web desarrollada como proyecto final para la materia Ingeniería de Software II. El sistema fue diseñado para una cadena ficticia de ferreterías llamada Fedetería, con el objetivo de aumentar sus ventas mediante un sistema de trueques. Los usuarios pueden publicar objetos personales para intercambiarlos con otros, pero el intercambio debe realizarse en sucursales físicas de la empresa, lo que incentivaba la venta cruzada de productos reales en tienda.',
    'projects.fedeteriApp.gallery.descriptionHome':
      'Pantalla principal - Donde aparecen las publicaciones de los usuarios y los últimos trueques realizados',
    'projects.fedeteriApp.gallery.descriptionSearch':
      'Pantalla de búsqueda - Donde el usuario puede buscar objetos por nombre o marca',
    'projects.fedeteriApp.gallery.descriptionFilters':
      'Pantalla de búsqueda - El usuario también puede filtrar objetos por marca y/o estado',
    'projects.fedeteriApp.gallery.descriptionBranches':
      'Pantalla de sucursales - Muestra las sucursales de la empresa, sus direcciones y sus horarios de atención',
    'projects.fedeteriApp.gallery.descriptionEmployeeSignUp':
      'Pantalla de registro de empleados - Uno de los tantos formularios de la aplicación',
    'projects.fedeteriApp.gallery.descriptionYourProducts':
      'Tus publicaciones - Donde el usuario puede ver sus publicaciones, editarlas, eliminarlas o pagar para destacarlas',
    'projects.fedeteriApp.gallery.descriptionYourTrades':
      'Historial de trueques - Permite al usuario ver sus trueques realizados y no realizados',
    'projects.fedeteriApp.gallery.descriptionQualifications':
      'Luego de hacer un trueque, el usuario puede calificar tanto a la sucursal como al usuario',
    'projects.fedeteriApp.gallery.descriptionUserProfile':
      'Es posible ver los perfiles de los usuarios para ver sus publicaciones, sus trueques y su reputación',
    'projects.fedeteriApp.gallery.descriptionUserTrades':
      'También se puede ver el historial de trueques de otro usuario',
    'projects.fedeteriApp.gallery.descriptionStatistics':
      'Estadísticas - Permite ver ventas, trueques, calificaciones de las sucursales y gananacias por artículos destacados',

    'projects.cedica': 'CEDICA',
    'projects.cedica.description':
      'Sistema desarrollado para CEDICA como proyecto final de la materia "Proyecto de Software", una fundación real dedicada a la equinoterapia',
    'projects.cedica.longDescription':
      'Sistema desarrollado para CEDICA como proyecto final de la materia "Proyecto de Software", una fundación real dedicada a la equinoterapia. El objetivo fue crear una solución integral que incluyera: <ul class="list-disc list-inside mt-1"><li class="mb-1">Un panel privado de gestión para llevar el seguimiento de caballos, entrenadores, pacientes (jinetes y amazonas), documentación y pagos.</li><li class="mb-1">Un portal público institucional con información sobre la fundación y sus actividades, incluyendo un formulario de contacto vinculado al sistema interno.</li></ul>Esta experiencia fue muy significativa para mí, ya que representó mi primer acercamiento a un proyecto real con base de datos y una interfaz de usuario compleja. Dado el tamaño del sistema, en este portafolio se muestran solo algunas de las pantallas más representativas, en las que trabajé de forma exclusiva.',
    'projects.cedica.gallery.descriptionPublicHome':
      'Pantalla principal del portal público - Información sobre la fundación y sus actividades',
    'projects.cedica.gallery.descriptionPublicContact':
      'Pantalla de contacto del portal público - Formulario de contacto vinculado al sistema interno',
    'projects.cedica.gallery.descriptionHome':
      'Pantalla principal del panel privado - Donde se gestionan los caballos, entrenadores, pacientes, documentación y pagos',
    'projects.cedica.gallery.descriptionEcuestre':
      'Pantalla de ecuestre - Donde se gestionan los caballos de la institución',
    'projects.cedica.gallery.descriptionHorseRegistration':
      'Pantalla de registro de caballos - Donde se registran los caballos',
    'projects.cedica.gallery.descriptionHorseRegistration2':
      'Segunda parte del registro de caballos - Aquí es posible asignarle actividades y miembros',
    'projects.cedica.gallery.descriptionViewHorse':
      'Pantalla de vista de caballos - Donde se puede ver la información de los caballos',
    'projects.cedica.gallery.descriptionPublicContent':
      'Pantalla de contenido del portal público - Donde se gestionan los artículos del portal',
    'projects.cedica.gallery.descriptionViewArticle':
      'Pantalla de vista de artículos - Muestra el artículo completo con formato markdown',
    'projects.cedica.gallery.descriptionEditArticle':
      'Pantalla de edición de artículos - Permite editar el contenido de los artículos, con preview en tiempo real',
    'projects.cedica.gallery.descriptionProfile':
      'Pantalla de perfil - Permite ver la información del usuario',

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
    'contact.message.sending': 'Enviando...',
    'contact.message.success':
      'Mensaje recibido. Muchas gracias por contactarte!',
    'contact.message.error':
      'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',

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
