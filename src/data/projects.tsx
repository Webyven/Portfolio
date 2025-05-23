// src/data/projects.ts
import {Globe, Monitor, Github, Download, Joystick} from 'lucide-react'
import PokeduxIcon from '../assets/projects/Pokedux.svg'

export interface ProjectLink {
  icon: React.ReactNode
  url?: string
  onClick?: () => void
  label?: string
}

export interface Project {
  id: number
  categoryKey: string
  icon: React.ReactNode
  image: string
  imageAlt: string
  titleKey: string
  descriptionKey: string
  longDescriptionKey?: string
  technologies?: string[]
  links?: ProjectLink[]
  imgStyle?: React.CSSProperties
}

export const projectsData: Project[] = [
  {
    id: 1,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/kBrTRGGd/Noite.webp',
    imageAlt: 'Noche de cine - Logo',
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
        url: 'https://github.com/Webyven/noche-de-cine',
      },
      {
        icon: <Globe size={20} />,
        label: 'Demo',
        url: 'https://noche-de-cine.vercel.app',
      },
    ],
    imgStyle: {padding: 7},
  },
  {
    id: 2,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/s2dLv6GZ/Pool-Counters.webp',
    imageAlt: 'Pool Counters - Logo',
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
    imgStyle: {padding: 0},
  },
  {
    id: 3,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/HsFZhZ2P/Multi-Twitch.webp',
    imageAlt: 'Multi Twitch - Logo',
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
    imgStyle: {padding: 3},
  },
  {
    id: 4,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/V64ZZzGj/BTC-Tracker.webp',
    imageAlt: 'BTC Tracker - Logo',
    titleKey: 'BTC Tracker',
    descriptionKey: 'projects.btcTracker.description',
    longDescriptionKey: 'projects.btcTracker.longDescription',
    imgStyle: {padding: 0},
    technologies: ['C#', '.NET Framework', 'Winforms', 'Web Scrapping'],
  },
  // Los siguientes solo se mostrarán en el modal
  {
    id: 5,
    categoryKey: 'projects.webDevelopment',
    icon: <Globe />,
    image: 'https://i.postimg.cc/c1XPXB2V/My-Portfolio.webp',
    imageAlt: 'Portfolio - Logo',
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
    imgStyle: {padding: 3},
  },
  {
    id: 6,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/NMQPxK4s/Autocomplete-Shortcuts.webp',
    imageAlt: 'Autocomplete Shortcuts - Logo',
    titleKey: 'projects.autocompleteShortcuts',
    descriptionKey: 'projects.autocompleteShortcuts.description',
    longDescriptionKey: 'projects.autocompleteShortcuts.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Windows'],
    imgStyle: {padding: 7},
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
    titleKey: 'projects.copaPiston',
    descriptionKey: 'projects.copaPiston.description',
    longDescriptionKey: 'projects.copaPiston.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'SQL', 'Windows'],
    imgStyle: {padding: 5},
  },
  {
    id: 10,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: 'https://i.postimg.cc/c195Q48W/GitHub.webp',
    imageAlt: 'Github Searcher - Logo',
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
    imgStyle: {padding: 3},
  },
  {
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
  },
  {
    id: 12,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: PokeduxIcon,
    imageAlt: 'Pokedux - Logo',
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
    imgStyle: {padding: 3},
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
]
