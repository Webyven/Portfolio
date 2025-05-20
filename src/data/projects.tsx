// src/data/projects.ts
import {Globe, Monitor, Github, Download, Joystick} from 'lucide-react'
import NoiteIcon from '../assets/projects/Noite.png'
import PoolCountersIcon from '../assets/projects/PoolCounters.png'
import MultiTwitchIcon from '../assets/projects/MultiTwitch.png'
import BTCTrackerIcon from '../assets/projects/BTC Tracker.png'
import MyPortfolioIcon from '../assets/projects/MyPortfolio.png'
import AutocompleteShortcutsIcon from '../assets/projects/AutocompleteShortcuts.png'
import FilenameChangerIcon from '../assets/projects/FilenameChanger.png'
import ReworkedTuduIcon from '../assets/projects/ReworkedTudu.png'
import CopaPistonIcon from '../assets/projects/CopaPiston.png'
import GithubIcon from '../assets/projects/GitHub.png'
import GoogleCloneIcon from '../assets/projects/Google.png'
import PokeduxIcon from '../assets/projects/Pokedux.svg'
import AlternateIcon from '../assets/projects/Alternate.webp'

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
    image: NoiteIcon,
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
  },
  {
    id: 2,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: PoolCountersIcon,
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
    image: MultiTwitchIcon,
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
  },
  {
    id: 4,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: BTCTrackerIcon,
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
    image: MyPortfolioIcon,
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
  },
  {
    id: 6,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: AutocompleteShortcutsIcon,
    imageAlt: 'Autocomplete Shortcuts - Logo',
    titleKey: 'projects.autocompleteShortcuts',
    descriptionKey: 'projects.autocompleteShortcuts.description',
    longDescriptionKey: 'projects.autocompleteShortcuts.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'Windows'],
  },
  {
    id: 7,
    categoryKey: 'projects.desktopDevelopment',
    icon: <Monitor />,
    image: FilenameChangerIcon,
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
    image: ReworkedTuduIcon,
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
    image: CopaPistonIcon,
    imageAlt: 'Copa Pistón - Logo',
    titleKey: 'projects.copaPiston',
    descriptionKey: 'projects.copaPiston.description',
    longDescriptionKey: 'projects.copaPiston.longDescription',
    technologies: ['C#', '.NET Framework', 'Winforms', 'SQL', 'Windows'],
  },
  {
    id: 10,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: GithubIcon,
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
  },
  {
    id: 11,
    categoryKey: 'projects.webDevelopment',
    icon: <Monitor />,
    image: GoogleCloneIcon,
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
  },
  {
    id: 13,
    categoryKey: 'projects.gameDevelopment',
    icon: <Joystick />,
    image: AlternateIcon,
    imageAlt: 'Alternate - Logo',
    titleKey: 'projects.alternate',
    descriptionKey: 'projects.alternate.description',
    longDescriptionKey: 'projects.alternate.longDescription',
    technologies: ['C#', 'Unity', 'Windows', 'Android', 'Play Store'],
  },
]
