type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const EMAIL = 'abc.defg.010505@gmail.com'

export const WEB_TITLE = 'Name - Personal Website'
export const WEB_DESCRIPTION =
  'A personal website showcasing my work and projects.'
export const FOOTER_COPYRIGHT = '© 2025 Tran Hoang Gia Bao.'
export const FOOTER_LINK = 'https://github.com/trhgbao/'

export const NAME = 'Tran Hoang Gia Bao'
export const JOB_TITLE = 'Intern'
export const DESCRIPTION =
  'I am a third-year undergraduate student at Ho Chi Minh City University of Science (HCMUS), actively seeking an internship opportunity in a corporate environment. My long-term career aspiration is to become a Data Engineer, and I am eager to apply my academic knowledge and develop practical skills in a professional setting.'

export const PROJECTS: Project[] = [
  {
    name: 'GOMOKU-PROJECT',
    description:
      'Gomuko game for project of Introduction to Information of Technology course.',
    link: 'https://github.com/trhgbao/GOMOKU-PROJECT',
    video:
      'https://www.youtube.com/watch?v=GO8P0Tah96A',
    id: 'project1',
  },
  {
    name: 'Virtual Try-On',
    description: 'This is a project for the Introduction to AI course, technology that allows users to virtually try on clothes, accessories, and cosmetics on their computer.',
    link: '',
    video:
      'https://www.youtube.com/watch?v=0Hkij4WGW3U&list=PLrsmUym_vzlWzMW7nZsP4DMGpqzE-rlGT',
    id: 'project2',
  },
  {
    name: 'MAZE-GAME-PATH-FINDING-HCMUS',
    description: 'This is a project for the programming for AI course, technology that allows users to virtually try on clothes, accessories, and cosmetics on their computer.',
    link: 'https://github.com/trhgbao/MAZE-GAME-PATH-FINDING-HCMUS',
    video:
      'https://www.youtube.com/watch?v=Vk2KEEyeuTI&t=2s',
    id: 'project3',
  },
  {
    name: 'EMAIL-CONTROLLING-PROJECT',
    description: 'This is a project for the Computer Networks course, which allows for the remote control of a computer running the Windows operating system by sending commands via a Gmail account.',
    link: 'https://github.com/trhgbao/EMAIL-CONTROLLING-PROJECT',
    video:
      'https://www.youtube.com/watch?v=AFb7PMyPbHU&t=193s',
    id: 'project4',
  },
  {
    name: 'Tiki_Product_Pipeline',
    description: 'This is a project built with Python to automatically scrape detailed product information from the e-commerce website Tiki.vn. The goal of project is to collect structured data for the purpose of analysis, statistics, or storage.',
    link: 'https://github.com/trhgbao/Tiki_Product_Pipeline',
    video:
      '',
    id: 'project5',
  },
  {
    name: 'Talent_Booking',
    description: 'Technology that allows users to virtually try on clothes, accessories, and cosmetics on their computer.',
    link: 'https://github.com/trhgbao/Talent_Booking',
    video:
      'TalentBook is a full-stack, two-sided marketplace that leverages the power of Next.js for server-side rendering and Supabase for its integrated database, authentication, storage, and real-time capabilities, creating a streamlined, Airbnb-like experience for booking creative talent.',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
]

export const BLOG_POSTS: BlogPost[] = [

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/trhgbao',
  },
    {
    label: 'Facebook',
    link: 'https://www.facebook.com/ne.bao.5851/',
  },
    {
    label: 'Youtube',
    link: 'https://www.youtube.com/@T--TranHoangGiaBao',
  },
]
