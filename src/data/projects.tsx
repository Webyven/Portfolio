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
      'Swagger',
      'Supabase',
    ],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/CinemaNight',
      },
      {
        icon: <Globe size={20} />,
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
        src: 'https://i.postimg.cc/Fzg4xCY1/Screenshot-2025-05-29-at-00-06-29-Noche-de-cine.png',
        alt: 'Noche de cine - User configuration',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionUserConfig',
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
        src: 'https://i.postimg.cc/2yv49hY1/Noche-de-cine-Resultados.png',
        alt: 'Noche de cine - Results',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionResults',
      },
      {
        src: 'https://i.postimg.cc/k4LQyw0r/Noche-de-cine-Resultados-2.png',
        alt: 'Noche de cine - Results',
        descriptionKey: 'projects.cinemaNight.gallery.descriptionResults2',
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
    technologies: ['C#', '.NET Framework', 'Winforms', 'Web Scrapping'],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/tuusuario/pool-counters',
      },
      {
        icon: <Download size={20} />,
        label: 'Drive',
        url: 'https://drive.google.com/file/d/1DekcVAHEMWxEllEVrDEmsMona_bAtInH/view?usp=drive_link',
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
    technologies: ['C#', '.NET Framework', 'Winforms', 'Web Scrapping'],
    links: [
      {
        icon: <Download size={20} />,
        label: 'Drive',
        url: 'https://drive.google.com/file/d/1jpAcCNzUgzaCoO17usvMSSw6_5yO5C6e/view?usp=drive_link',
      },
    ],
  },
  {
    id: 4,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/V64ZZzGj/BTC-Tracker.webp',
    imageAlt: 'BTC Tracker - Logo',
    imgStyle: {padding: 0},
    titleKey: 'BTC Tracker',
    descriptionKey: 'projects.btcTracker.description',
    longDescriptionKey: 'projects.btcTracker.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Web Scrapping'],
  },
  // Los siguientes solo se mostrarán en el modal
  {
    id: 5,
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
  },
  {
    id: 6,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/NMQPxK4s/Autocomplete-Shortcuts.webp',
    imageAlt: 'Autocomplete Shortcuts - Logo',
    imgStyle: {padding: 7, paddingLeft: 8, paddingRight: 6},
    titleKey: 'projects.autocompleteShortcuts',
    descriptionKey: 'projects.autocompleteShortcuts.description',
    longDescriptionKey: 'projects.autocompleteShortcuts.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Windows'],
  },
  {
    id: 7,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/cCb9ZXNC/Filename-Changer.webp',
    imageAlt: 'Filename Changer - Logo',
    titleKey: 'projects.filenameChanger',
    descriptionKey: 'projects.filenameChanger.description',
    longDescriptionKey: 'projects.filenameChanger.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Windows'],
  },
  {
    id: 8,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/FHJqF5z4/Reworked-Tudu.webp',
    imageAlt: 'Reworked Tudú - Logo',
    titleKey: 'projects.reworkedTudu',
    descriptionKey: 'projects.reworkedTudu.description',
    longDescriptionKey: 'projects.reworkedTudu.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Windows'],
  },
  {
    id: 9,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/7h6spjdj/Copa-Piston.webp',
    imageAlt: 'Copa Pistón - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.copaPiston',
    descriptionKey: 'projects.copaPiston.description',
    longDescriptionKey: 'projects.copaPiston.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'SQL', 'Windows'],
  },
  {
    id: 10,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/c195Q48W/GitHub.webp',
    imageAlt: 'Github Searcher - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.githubSearcher',
    descriptionKey: 'projects.githubSearcher.description',
    longDescriptionKey: 'projects.githubSearcher.longDescription',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Github-Searcher',
      },
      {
        icon: <Globe size={20} />,
        label: 'Demo',
        url: 'https://webyven.github.io/Github-Searcher/',
      },
    ],
  },
  /*{
    id: 11,
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
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Google-Clone',
      },
      {
        icon: <Globe size={20} />,
        label: 'Demo',
        url: 'https:/webyven.github.io/Google-Clone/',
      },
    ],
    imgStyle: {padding: 7},
  },*/
  {
    id: 12,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: PokeduxIcon,
    imageAlt: 'Pokedux - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.pokedux',
    descriptionKey: 'projects.pokedux.description',
    longDescriptionKey: 'projects.pokedux.longDescription',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/Webyven/Pokedux',
      },
      {
        icon: <Globe size={20} />,
        label: 'Demo',
        url: 'https://webyven.github.io/Pokedux/',
      },
    ],
  },
  {
    id: 13,
    categoryKey: 'projects.gameDevelopment',
    icon: <Joystick />,
    image: 'https://i.postimg.cc/BvTVDT27/Alternate.webp',
    imageAlt: 'Alternate - Logo',
    titleKey: 'projects.alternate',
    descriptionKey: 'projects.alternate.description',
    longDescriptionKey: 'projects.alternate.longDescription',
    technologies: ['C#', 'Unity', 'Windows', 'Android', 'Play Store'],
  },
  {
    id: 14,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/Hsx8YBz0/Fedeteri-App.webp',
    imageAlt: 'FedeteriApp - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.fedeteriApp',
    descriptionKey: 'projects.fedeteriApp.description',
    longDescriptionKey: 'projects.fedeteriApp.longDescription',
    technologies: ['Next.JS', 'React.JS', 'Bootstrap', 'C#', '.NET', 'Swagger'],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/Grupo-41/FedeteriApp',
      },
    ],
  },
  {
    id: 15,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/htnjJsb3/Isotipo-CEDICA.webp',
    imageAlt: 'CEDICA - Logo',
    imgStyle: {padding: 5, paddingLeft: 6, paddingRight: 4},
    titleKey: 'projects.cedicaPrivate',
    descriptionKey: 'projects.cedicaPrivate.description',
    longDescriptionKey: 'projects.cedicaPrivate.longDescription',
    technologies: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: <Github size={20} />,
        label: 'GitHub',
        url: 'https://github.com/EzequielReale/Proyecto-De-Software-2024-CEDICA',
      },
    ],
  },
]
