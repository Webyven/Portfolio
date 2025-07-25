// src/data/projects.ts
import {Globe, Monitor, Github, Download, Joystick} from 'lucide-react'
import PokeduxIcon from '../assets/projects/Pokedux.svg'

export interface ProjectLink {
  icon: React.ReactNode
  url?: string
  onClick?: () => void
  label?: string
}

export interface GalleryImage {
  src: string
  alt: string
  descriptionKey?: string
  style?: React.CSSProperties
  thumbnailSrc?: string
}

export interface Project {
  id: number
  categoryKey: string
  icon: React.ReactNode
  image: string
  imageAlt: string
  imgStyle?: React.CSSProperties
  titleKey: string
  descriptionKey: string
  longDescriptionKey?: string
  technologies?: string[]
  links?: ProjectLink[]
  gallery?: GalleryImage[]
}

export const projectsData: Project[] = [
  {
    id: 1,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/kBrTRGGd/Noite.webp',
    imageAlt: 'Noche de cine - Logo',
    imgStyle: {padding: 7},
    titleKey: 'projects.cinemaNight',
    descriptionKey: 'projects.cinemaNight.description',
    longDescriptionKey: 'projects.cinemaNight.longDescription',
    technologies: [
      'Next.JS',
      'React.JS',
      'Framer Motion',
      'Bootstrap',
      'C#',
      '.NET',
      'REST API',
      'Entity Framework',
      'CRUD',
      'Swagger',
      'Supabase',
      'PostgreSQL',
    ],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/CinemaNight',
      },
      {
        icon: <Globe size={18} />,
        label: 'Demo',
        url: 'https://noche-de-cine.vercel.app',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/fWxDZy8Z/Screenshot-2025-05-29-at-00-06-17-Noche-de-cine.png',
        alt: 'Noche de cine - Home',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/Qdk52sWM/Whats-App-Image-2025-06-02-at-16-29-37-1.jpg',
        alt: 'Noche de cine - Mobile Home',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionMobileHome',
      },
      {
        src: 'https://i.postimg.cc/bJZ0b4FH/Noche-de-cine-Pel-culas.png',
        alt: 'Noche de cine - Movies',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionMovies',
      },
      {
        src: 'https://i.postimg.cc/vmqL4GXZ/Noche-de-cine-Pel-culas-3.png',
        alt: 'Noche de cine - Movies',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionMovies2',
      },
      {
        src: 'https://i.postimg.cc/Fzg4xCY1/Screenshot-2025-05-29-at-00-06-29-Noche-de-cine.png',
        alt: 'Noche de cine - User configuration',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionUserConfig',
      },
      {
        src: 'https://i.postimg.cc/13R9vScS/Screenshot-2025-05-29-at-00-21-19-Noche-de-cine.png',
        alt: 'Noche de cine - Proposals',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionProposals',
      },
      {
        src: 'https://i.postimg.cc/vHs86f4c/Screenshot-2025-05-29-at-00-23-16-Noche-de-cine.png',
        alt: 'Noche de cine - Votation',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionVotation',
      },
      {
        src: 'https://i.postimg.cc/fRhmqkyF/Whats-App-Image-2025-06-02-at-16-29-37.jpg',
        alt: 'Noche de cine - Mobile Votation',
        descriptionKey:
          'projects.cinemaNight.gallery.descriptionMobileVotation',
      },
      {
        src: 'https://i.postimg.cc/2yv49hY1/Noche-de-cine-Resultados.png',
        alt: 'Noche de cine - Results',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionResults',
      },
      {
        src: 'https://i.postimg.cc/k4LQyw0r/Noche-de-cine-Resultados-2.png',
        alt: 'Noche de cine - Results',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionResults2',
      },
      {
        src: 'https://i.postimg.cc/d1CvhVv2/Screenshot-2025-05-29-at-00-07-46-Noche-de-cine-Admin.png',
        alt: 'Noche de cine - Admin Login Page',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionAdminLogin',
        style: {objectFit: 'cover'},
      },
      {
        src: 'https://i.postimg.cc/VNpmsCys/Screenshot-2025-05-29-at-00-08-58-Noche-de-cine-Admin.png',
        alt: 'Noche de cine - Admin Users Page',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionAdminUsers',
      },
      {
        src: 'https://i.postimg.cc/Z5fJgQVd/Screenshot-2025-05-29-at-00-09-57-Noche-de-cine-Admin.png',
        alt: 'Noche de cine - Admin Movies Page',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionAdminMovies',
      },
    ],
  },
  {
    id: 2,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/s2dLv6GZ/Pool-Counters.webp',
    imageAlt: 'Pool Counters - Logo',
    imgStyle: {padding: 0},
    titleKey: 'Pool Counters',
    descriptionKey: 'projects.poolCounters.description',
    longDescriptionKey: 'projects.poolCounters.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'Web Scrapping'],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/PoolCounters',
      },
      {
        icon: <Download size={18} />,
        label: 'Drive',
        url: 'https://drive.google.com/file/d/1DekcVAHEMWxEllEVrDEmsMona_bAtInH/view?usp=drive_link',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/wMkR2gCS/Pool-Counters-a3-A5fp6u-Sg.png',
        alt: 'Pool Counters - Home',
        descriptionKey: 'projects.poolCounters.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/mZ39ByP8/Pool-Counters-FJCIf-Anc-GM.png',
        alt: 'Pool Counters - Pool Screen',
        descriptionKey: 'projects.poolCounters.gallery.descriptionPoolScreen',
      },
      {
        src: 'https://i.postimg.cc/T1hv7cFf/Pool-Counters-Kfqvbrj-EB0.png',
        alt: 'Pool Counters - Counters Configuration Screen',
        descriptionKey:
          'projects.poolCounters.gallery.descriptionCountersConfigScreen',
      },
      {
        src: 'https://i.postimg.cc/HnKDfy15/Pool-Counters-Rjz-Dy-Ktybr.png',
        alt: 'Pool Counters - Pool Configuration Screen',
        descriptionKey:
          'projects.poolCounters.gallery.descriptionPoolConfigScreen',
      },
      {
        src: 'https://i.postimg.cc/h43BJHQj/Pool-Counters-XFe1jtwp-QU.png',
        alt: 'Pool Counters - Champion Updater Screen',
        descriptionKey:
          'projects.poolCounters.gallery.descriptionChampionUpdaterScreen',
      },
    ],
  },
  {
    id: 3,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/HsFZhZ2P/Multi-Twitch.webp',
    imageAlt: 'Multi Twitch - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'Multi-Twitch',
    descriptionKey: 'projects.multiTwitch.description',
    longDescriptionKey: 'projects.multiTwitch.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'Web Scrapping'],
    links: [
      {
        icon: <Download size={18} />,
        label: 'Drive',
        url: 'https://drive.google.com/file/d/1jpAcCNzUgzaCoO17usvMSSw6_5yO5C6e/view?usp=drive_link',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/FHK2VwGf/Multi-Twitch-48j7g-Jb-Ami.png',
        alt: 'Multi-Twitch - Home',
        descriptionKey: 'projects.multiTwitch.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/prxShSpL/Multi-Twitch-Bnc-Qx5-ZRya.png',
        alt: 'Multi-Twitch - Two Streams',
        descriptionKey: 'projects.multiTwitch.gallery.descriptionTwoStreams',
      },
      {
        src: 'https://i.postimg.cc/HxbKLmWN/Multi-Twitch-e-Xuxc79-Sgb.png',
        alt: 'Multi-Twitch - Two Streams and a page',
        descriptionKey:
          'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPage',
      },
      {
        src: 'https://i.postimg.cc/YCVyf0hV/Multi-Twitch-5-PYFNDA5-G3.png',
        alt: 'Multi-Twitch - Two Streams, a page and a chat',
        descriptionKey:
          'projects.multiTwitch.gallery.descriptionTwoStreamsAndAPageAndAChat',
      },
      {
        src: 'https://i.postimg.cc/Dy7QWXP6/Multi-Twitch-pxq-SOwh-GHZ.png',
        alt: 'Multi-Twitch - About Screen',
        descriptionKey: 'projects.multiTwitch.gallery.descriptionAboutScreen',
      },
      {
        src: 'https://i.postimg.cc/RVG7wZPB/Multi-Twitch-M36-UGG6-Xx7.png',
        alt: 'Multi-Twitch - Tutorial Screen',
        descriptionKey:
          'projects.multiTwitch.gallery.descriptionTutorialScreen',
      },
      {
        src: 'https://i.postimg.cc/KcPrvNB4/Multi-Twitch-pkf-Ye-Ct-UGg.png',
        alt: 'Multi-Twitch - Shortcuts Screen',
        descriptionKey:
          'projects.multiTwitch.gallery.descriptionShortcutsScreen',
      },
    ],
  },
  {
    id: 4,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/7YMYCXZm/Isotipo-CEDICA.webp',
    imageAlt: 'CEDICA - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.cedica',
    descriptionKey: 'projects.cedica.description',
    longDescriptionKey: 'projects.cedica.longDescription',
    technologies: [
      'Vue.JS',
      'Flask',
      'Python',
      'CRUD',
      'PostgreSQL',
      'SQLAlchemy',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/EzequielReale/Proyecto-De-Software-2024-CEDICA',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/vHwpVs1d/Screenshot-2025-06-09-at-14-33-57-CEDICA.png',
        alt: 'CEDICA Public - Home',
        descriptionKey: 'projects.cedica.gallery.descriptionPublicHome',
      },
      {
        src: 'https://i.postimg.cc/rwQb3Rf8/Screenshot-2025-06-09-at-14-33-50-CEDICA.png',
        alt: 'CEDICA Public - Contact',
        descriptionKey: 'projects.cedica.gallery.descriptionPublicContact',
      },
      {
        src: 'https://i.postimg.cc/L5Lwbyb7/Screenshot-2025-06-09-at-14-35-27-CEDICA-Home.png',
        alt: 'CEDICA Private - Home',
        descriptionKey: 'projects.cedica.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/d00MVjhk/Screenshot-2025-06-09-at-14-36-03-CEDICA-Ecuestre.png',
        alt: 'CEDICA Private - Equestrian',
        descriptionKey: 'projects.cedica.gallery.descriptionEcuestre',
      },
      {
        src: 'https://i.postimg.cc/K8xSd2F5/Screenshot-2025-06-09-at-14-36-33-Registro-de-caballos.png',
        alt: 'CEDICA Private - Horse Registration',
        descriptionKey: 'projects.cedica.gallery.descriptionHorseRegistration',
      },
      {
        src: 'https://i.postimg.cc/RVrzLtDy/Screenshot-2025-06-09-at-14-36-40-Registro-de-caballos.png',
        alt: 'CEDICA Private - Horse Registration',
        descriptionKey: 'projects.cedica.gallery.descriptionHorseRegistration2',
      },
      {
        src: 'https://i.postimg.cc/cLhyWbLG/Screenshot-2025-06-09-at-14-36-15-CEDICA-Ver-caballo.png',
        alt: 'CEDICA Private - View Horse',
        descriptionKey: 'projects.cedica.gallery.descriptionViewHorse',
      },
      {
        src: 'https://i.postimg.cc/65dxj3s3/Screenshot-2025-06-09-at-14-36-57-CEDICA-Contenido-p-blico.png',
        alt: 'CEDICA Private - Public Content',
        descriptionKey: 'projects.cedica.gallery.descriptionPublicContent',
      },
      {
        src: 'https://i.postimg.cc/gjhbPcng/Screenshot-2025-06-09-at-14-37-10-CEDICA-Ver-art-culo.png',
        alt: 'CEDICA Private - View Article',
        descriptionKey: 'projects.cedica.gallery.descriptionViewArticle',
      },
      {
        src: 'https://i.postimg.cc/WpqvZ8X0/Screenshot-2025-06-09-at-14-37-23-Edici-n-de-art-culos.png',
        alt: 'CEDICA Private - Edit Article',
        descriptionKey: 'projects.cedica.gallery.descriptionEditArticle',
      },
      {
        src: 'https://i.postimg.cc/k4zPZRXV/Screenshot-2025-06-09-at-14-37-31-Edici-n-de-art-culos.png',
        alt: 'CEDICA Private - Edit Article',
        descriptionKey: 'projects.cedica.gallery.descriptionEditArticle',
      },
      {
        src: 'https://i.postimg.cc/yYXcVm4z/Screenshot-2025-06-09-at-19-20-42-CEDICA-Perfil.png',
        alt: 'CEDICA Private - Profile',
        descriptionKey: 'projects.cedica.gallery.descriptionProfile',
      },
    ],
  },
  // A partir de acá, los proyectos se muestran en el modal
  {
    id: 5,
    categoryKey: 'projects.gameDevelopment',
    icon: <Joystick />,
    image: 'https://i.postimg.cc/BvTVDT27/Alternate.webp',
    imageAlt: 'Alternate - Logo',
    titleKey: 'projects.alternate',
    descriptionKey: 'projects.alternate.description',
    longDescriptionKey: 'projects.alternate.longDescription',
    technologies: ['C#', 'Unity', 'Windows', 'Android', 'Play Store'],
    gallery: [
      {
        src: 'https://i.postimg.cc/cHwHk6MC/Whats-App-Image-2025-06-02-at-16-29-38.jpg',
        alt: 'Alternate - Home',
        descriptionKey: 'projects.alternate.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/XYGsP0hm/Alternate-py-CU7-NYlx8.png',
        alt: 'Alternate - Customization',
        descriptionKey: 'projects.alternate.gallery.descriptionCustomization',
      },
      {
        src: 'https://i.imgur.com/MhL4y4I.mp4',
        alt: 'Alternate - Gameplay',
        descriptionKey: 'projects.alternate.gallery.descriptionGameplay',
        thumbnailSrc: 'https://i.postimg.cc/R0x2QFFX/MhL4y4I.jpg',
      },
      {
        src: 'https://i.postimg.cc/GmWXw5n2/Whats-App-Image-2025-06-02-at-16-29-37-2.jpg',
        alt: 'Alternate - Pause Screen',
      },
      {
        src: 'https://i.postimg.cc/SKcDyfmG/Whats-App-Image-2025-06-02-at-16-29-38-1.jpg',
        alt: 'Alternate - Google Play Achievements',
        descriptionKey:
          'projects.alternate.gallery.descriptionGooglePlayAchievements',
      },
      {
        src: 'https://i.postimg.cc/NM4DXG99/Whats-App-Image-2025-06-02-at-16-29-38-2.jpg',
        alt: 'Alternate - Google Play Leaderboards',
        descriptionKey:
          'projects.alternate.gallery.descriptionGooglePlayLeaderboards',
      },
    ],
    links: [
      {
        icon: <Download size={18} />,
        label: 'Drive (Windows)',
        url: 'https://drive.google.com/file/d/12bFzV9VU826R0_Y_qlxvQdwTAhwl0Kmt/view?usp=sharing',
      },
      {
        icon: <Download size={18} />,
        label: 'APKPure (Android)',
        url: 'https://apkpure.com/es/alternate/com.WUG.Studios.Alternate/',
      },
    ],
  },
  {
    id: 6,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/Hsx8YBz0/Fedeteri-App.webp',
    imageAlt: 'FedeteriApp - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.fedeteriApp',
    descriptionKey: 'projects.fedeteriApp.description',
    longDescriptionKey: 'projects.fedeteriApp.longDescription',
    technologies: [
      'Next.JS',
      'React.JS',
      'Bootstrap',
      'C#',
      '.NET',
      'WebAPI',
      'CRUD',
      'Swagger',
    ],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Grupo-41/FedeteriApp',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/XvTL6WQZ/Screenshot-2025-06-06-at-20-58-57-Fedeteri-App.png',
        alt: 'FedeteriApp - Home',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/QNc4sBLj/Screenshot-2025-06-06-at-21-12-26-Fedeteri-App.png',
        alt: 'FedeteriApp - Search',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionSearch',
      },
      {
        src: 'https://i.postimg.cc/3w6SrmJx/Screenshot-2025-06-06-at-21-12-39-Fedeteri-App.png',
        alt: 'FedeteriApp - Filters',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionFilters',
      },
      {
        src: 'https://i.postimg.cc/hGJsYvbW/Screenshot-2025-06-06-at-21-01-25-Fedeteri-App.png',
        alt: 'FedeteriApp - Branches',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionBranches',
      },
      {
        src: 'https://i.postimg.cc/Wbn5FQbK/Screenshot-2025-06-06-at-21-08-32-Fedeteri-App.png',
        alt: 'FedeteriApp - Employee Sign Up',
        descriptionKey:
          'projects.fedeteriApp.gallery.descriptionEmployeeSignUp',
      },
      {
        src: 'https://i.postimg.cc/RhxgKmtr/Screenshot-2025-06-06-at-21-10-59-Fedeteri-App.png',
        alt: 'FedeteriApp - Your products',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionYourProducts',
      },
      {
        src: 'https://i.postimg.cc/7ZZmgm5L/Screenshot-2025-06-06-at-21-09-00-Fedeteri-App.png',
        alt: 'FedeteriApp - Your trades',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionYourTrades',
      },
      {
        src: 'https://i.postimg.cc/NfYN0gYm/Screenshot-2025-06-06-at-21-09-15-Fedeteri-App.png',
        alt: 'FedeteriApp - Qualifications',
        descriptionKey:
          'projects.fedeteriApp.gallery.descriptionQualifications',
      },
      {
        src: 'https://i.postimg.cc/zBgdyvVS/Screenshot-2025-06-06-at-21-10-06-Fedeteri-App.png',
        alt: 'FedeteriApp - User profile',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionUserProfile',
      },
      {
        src: 'https://i.postimg.cc/hv8p0Y8X/Screenshot-2025-06-06-at-21-09-47-Fedeteri-App.png',
        alt: 'FedeteriApp - User trades',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionUserTrades',
      },
      {
        src: 'https://i.postimg.cc/XY1xxd5k/Screenshot-2025-06-06-at-20-58-587-Fedeteri-App.png',
        alt: 'FedeteriApp - Statistics',
        descriptionKey: 'projects.fedeteriApp.gallery.descriptionStatistics',
      },
    ],
  },
  {
    id: 7,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/7h6spjdj/Copa-Piston.webp',
    imageAlt: 'Copa Pistón - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.copaPiston',
    descriptionKey: 'projects.copaPiston.description',
    longDescriptionKey: 'projects.copaPiston.longDescription',
    technologies: [
      'C#',
      '.NET Framework',
      'WinForms',
      'SQL',
      'CRUD',
      'Windows',
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/rs7N68nz/Copa-Pist-n-ac-ZQYci-Qe2.png',
        alt: 'Copa Pistón - Loading Screen',
        descriptionKey: 'projects.copaPiston.gallery.descriptionLoading',
        style: {padding: '70px'},
      },
      {
        src: 'https://i.postimg.cc/RCYRJRS9/Copa-Pist-n-Erp4-FZq-IKJ.png',
        alt: 'Copa Pistón - Ranking Screen',
        descriptionKey: 'projects.copaPiston.gallery.descriptionRanking',
        style: {padding: '70px'},
      },
      {
        src: 'https://i.postimg.cc/Z58FgzrK/Copa-Pist-n-Wag-Wt-Ucra4.png',
        alt: 'Copa Pistón - Races Screen',
        descriptionKey: 'projects.copaPiston.gallery.descriptionRaces',
        style: {padding: '70px'},
      },
      {
        src: 'https://i.postimg.cc/htW1ptQ5/Copa-Pist-n-Pk-EMc8-NIdc.png',
        alt: 'Copa Pistón - Drivers Screen',
        descriptionKey: 'projects.copaPiston.gallery.descriptionDrivers',
        style: {padding: '70px'},
      },
      {
        src: 'https://i.postimg.cc/DybcrX0G/Copa-Pist-n-se-EBf-BZHyn.png',
        alt: 'Copa Pistón - Login & Config Screen',
        descriptionKey: 'projects.copaPiston.gallery.descriptionLogin',
        style: {padding: '70px'},
      },
    ],
  },
  {
    id: 8,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/0N48kBN7/Dn-D-Spell-Card-Generator.webp',
    imageAlt: 'D&D Spell Card Generator - Logo',
    imgStyle: {padding: 7},
    titleKey: 'projects.dndSpellCardGenerator',
    descriptionKey: 'projects.dndSpellCardGenerator.description',
    longDescriptionKey: 'projects.dndSpellCardGenerator.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'JSON', 'Windows'],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/DnD-Spell-Card-Generator',
      },
    ],
  },
  {
    id: 9,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/V64ZZzGj/BTC-Tracker.webp',
    imageAlt: 'BTC Tracker - Logo',
    imgStyle: {padding: 0},
    titleKey: 'BTC Tracker',
    descriptionKey: 'projects.btcTracker.description',
    longDescriptionKey: 'projects.btcTracker.longDescription',
    technologies: [
      'C#',
      '.NET Framework',
      'WinForms',
      'Web Scrapping',
      'Webhooks',
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/vZsSDzhT/BTC-Tracking-wqo7-QXRVy1.png',
        alt: 'BTC Tracker - Home',
        descriptionKey: 'projects.btcTracker.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/13r7Fq7H/BTC-Tracking-8-Zv4a1z-Xve.png',
        alt: 'BTC Tracker - Alert',
        descriptionKey: 'projects.btcTracker.gallery.descriptionAlert',
      },
      {
        src: 'https://i.postimg.cc/Gp37xmZ1/image.png',
        alt: 'BTC Tracker - Discord Notifications',
        descriptionKey:
          'projects.btcTracker.gallery.descriptionDiscordNotifications',
      },
    ],
  },
  {
    id: 10,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/c1XPXB2V/My-Portfolio.webp',
    imageAlt: 'Portfolio - Logo',
    imgStyle: {padding: 3},
    titleKey: 'projects.myPortfolio',
    descriptionKey: 'projects.myPortfolio.description',
    longDescriptionKey: 'projects.myPortfolio.longDescription',
    technologies: [
      'Vite',
      'React',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
    ],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Portfolio/',
      },
    ],
  },
  {
    id: 11,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: PokeduxIcon,
    imageAlt: 'Pokedux - Logo',
    imgStyle: {
      padding: 5,
      paddingLeft: 6,
      paddingRight: 4,
    },
    titleKey: 'projects.pokedux',
    descriptionKey: 'projects.pokedux.description',
    longDescriptionKey: 'projects.pokedux.longDescription',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API Consumption'],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Pokedux',
      },
      {
        icon: <Globe size={18} />,
        label: 'Demo',
        url: 'https://webyven.github.io/Pokedux/',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/nc8mtwVs/Screenshot-2025-06-01-at-19-25-20-Pokedux.png',
        alt: 'Pokedux - Home',
      },
    ],
  },
  {
    id: 12,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/NMQPxK4s/Autocomplete-Shortcuts.webp',
    imageAlt: 'Autocomplete Shortcuts - Logo',
    imgStyle: {padding: 7, paddingLeft: 8, paddingRight: 6},
    titleKey: 'projects.autocompleteShortcuts',
    descriptionKey: 'projects.autocompleteShortcuts.description',
    longDescriptionKey: 'projects.autocompleteShortcuts.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'Windows'],
    gallery: [
      {
        src: 'https://i.postimg.cc/XJ6YZtrm/Autocomplete-Shortcuts-n-Ao-Vy-Bfsu-M.png',
        alt: 'Autocomplete Shortcuts - Home',
        descriptionKey:
          'projects.autocompleteShortcuts.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/LsYJgzNY/Preview-Auto-Complete.gif',
        alt: 'Autocomplete Shortcuts - Preview',
        descriptionKey:
          'projects.autocompleteShortcuts.gallery.descriptionPreview',
      },
    ],
  },
  {
    id: 13,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/cCb9ZXNC/Filename-Changer.webp',
    imageAlt: 'Filename Changer - Logo',
    titleKey: 'projects.filenameChanger',
    descriptionKey: 'projects.filenameChanger.description',
    longDescriptionKey: 'projects.filenameChanger.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'Windows'],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/FilenameChanger',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/9M7Gd3Fh/Filename-Changer-p-Sttm284-FQ.png',
        alt: 'Filename Changer - Home',
        descriptionKey: 'projects.filenameChanger.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/SK56YQ4d/Filename-Changer-Dpo-LFXCHq-B.png',
        alt: 'Filename Changer - Success Message',
        descriptionKey:
          'projects.filenameChanger.gallery.descriptionSuccessExample',
      },
    ],
  },
  {
    id: 14,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/FHJqF5z4/Reworked-Tudu.webp',
    imageAlt: 'Reworked Tudú - Logo',
    titleKey: 'projects.reworkedTudu',
    descriptionKey: 'projects.reworkedTudu.description',
    longDescriptionKey: 'projects.reworkedTudu.longDescription',
    technologies: ['C#', '.NET Framework', 'WinForms', 'Windows'],
    links: [
      {
        icon: <Download size={18} />,
        label: 'Drive',
        url: 'https://drive.google.com/file/d/1LPPJVgo7zKaLFaHq3lmOphTzNVHSFk1Z/view?usp=drive_link',
      },
    ],
    gallery: [
      {
        src: 'https://i.postimg.cc/GpFnrPrD/Reworked-Tud-u-TP98-EE3y-Q.png',
        alt: 'Reworked Tudú - Home',
        descriptionKey: 'projects.reworkedTudu.gallery.descriptionHome',
      },
      {
        src: 'https://i.postimg.cc/bw2jVcB3/Reworked-Tud-R6ndv-Aw-Qbs.png',
        alt: 'Reworked Tudú - Themes',
        descriptionKey: 'projects.reworkedTudu.gallery.descriptionThemes',
      },
      {
        src: 'https://i.postimg.cc/KzQX3Z1v/Reworked-Tud-O4-HVNv-Dn6-O.png',
        alt: 'Reworked Tudú - Presets',
        descriptionKey: 'projects.reworkedTudu.gallery.descriptionPresets',
      },
      {
        src: 'https://i.postimg.cc/pdbMgcNx/Reworked-Tud-TKmg-Sdd-Jy-X.png',
        alt: 'Reworked Tudú - Custom Colors',
        descriptionKey: 'projects.reworkedTudu.gallery.descriptionCustomColors',
      },
      {
        src: 'https://i.postimg.cc/9FkhBFJD/Reworked-Tud-Gd-V4-Yo24b6.png',
        alt: 'Reworked Tudú - Edit Task',
        descriptionKey: 'projects.reworkedTudu.gallery.descriptionEditTask',
      },
    ],
  },
  {
    id: 15,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/c195Q48W/GitHub.webp',
    imageAlt: 'Github Searcher - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.githubSearcher',
    descriptionKey: 'projects.githubSearcher.description',
    longDescriptionKey: 'projects.githubSearcher.longDescription',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'HTML',
      'CSS',
      'API Consumption',
    ],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Github-Searcher',
      },
      {
        icon: <Globe size={18} />,
        label: 'Demo',
        url: 'https://webyven.github.io/Github-Searcher/',
      },
    ],
  },
  /*{
    id: 16,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/8P7XwQh6/Google.webp',
    imageAlt: 'Google Clone - Logo',
    titleKey: 'projects.googleClone',
    descriptionKey: 'projects.googleClone.description',
    longDescriptionKey: 'projects.googleClone.longDescription',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    links: [
      {
        icon: <Github size={18} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Google-Clone',
      },
      {
        icon: <Globe size={18} />,
        label: 'Demo',
        url: 'https:/webyven.github.io/Google-Clone/',
      },
    ],
    imgStyle: {padding: 7},
  },*/
]
