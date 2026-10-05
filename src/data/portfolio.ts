export type SkillItem = {
  name: string
  signal: 'Core focus' | 'Working knowledge' | 'CV-listed'
}

export type ScreenshotSlide = {
  src: string
  alt: string
  caption?: string
}

export type Project = {
  number: string
  title: string
  category: string
  summary: string
  contribution: string
  stack: string[]
  live?: string
  repo?: string
  visual: 'billdiv' | 'vision' | 'yatra' | 'commerce' | 'versus'
  screenshots: ScreenshotSlide[]
}

export const profile = {
  name: 'Ansh Shrestha',
  role: 'Junior Full Stack Developer',
  location: 'Kathmandu, Nepal',
  email: 'anshshrestha15@gmail.com',
  phone: '+977-9841996266',
  phoneHref: 'tel:+9779841996266',
  linkedin: 'https://linkedin.com/in/ansh-shrestha-4385ba195',
  github: 'https://github.com/D1AZ0W',
  summary:
    'Full-stack developer specializing in React and TypeScript on the frontend and Python with Django REST Framework on the backend, with working knowledge of the Node.js and JavaScript ecosystem. Comfortable specifying features, translating design files into test pages quickly, and owning problems independently.',
  resume: '/manus-storage/Ansh_Shrestha_CV_42a5d826.pdf',
} as const

export const specialtyStack = ['React', 'TypeScript', 'Django REST', 'PostgreSQL']

export const skillGroups: { title: string; items: SkillItem[] }[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', signal: 'Core focus' },
      { name: 'JavaScript', signal: 'Working knowledge' },
      { name: 'Python', signal: 'Core focus' },
      { name: 'SQL', signal: 'CV-listed' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', signal: 'Core focus' },
      { name: 'HTML / CSS', signal: 'CV-listed' },
      { name: 'TanStack Router / Query', signal: 'CV-listed' },
      { name: 'Tailwind CSS', signal: 'CV-listed' },
      { name: 'shadcn/ui', signal: 'CV-listed' },
      { name: 'Vite', signal: 'CV-listed' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Django REST Framework', signal: 'Core focus' },
      { name: 'REST API design', signal: 'CV-listed' },
      { name: 'JWT authentication', signal: 'CV-listed' },
      { name: 'Node.js', signal: 'Working knowledge' },
      { name: 'Flask', signal: 'CV-listed' },
    ],
  },
  {
    title: 'Data',
    items: [
      { name: 'PostgreSQL', signal: 'CV-listed' },
      { name: 'MySQL', signal: 'CV-listed' },
      { name: 'SQLite', signal: 'CV-listed' },
      { name: 'SQL / NoSQL fundamentals', signal: 'CV-listed' },
    ],
  },
  {
    title: 'Computer vision & OCR',
    items: [
      { name: 'YOLOv8', signal: 'CV-listed' },
      { name: 'PaddleOCR', signal: 'CV-listed' },
      { name: 'OpenCV image processing', signal: 'CV-listed' },
    ],
  },
  {
    title: 'Ways of working',
    items: [
      { name: 'Feature specification & documentation', signal: 'CV-listed' },
      { name: 'Git / GitHub workflows', signal: 'CV-listed' },
      { name: 'Independent problem ownership', signal: 'CV-listed' },
      { name: 'Frontend / backend debugging', signal: 'CV-listed' },
    ],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'BillDiv',
    category: 'Full-stack · Expense splitting',
    summary:
      'A group expense app for logging shared costs and settling balances with fewer transactions.',
    contribution:
      'Designed the full-stack workflow, built Django REST APIs with JWT authentication, modeled PostgreSQL data, and implemented a Min Heap-based settlement-simplification algorithm. Deployed the frontend to Netlify and debugged frontend/backend integration.',
    stack: ['React', 'TypeScript', 'TanStack', 'Django REST Framework', 'PostgreSQL'],
    live: 'https://billdiv.netlify.app',
    repo: 'https://github.com/D1AZ0W/Fellowship/tree/main/capstone',
    visual: 'billdiv',
    screenshots: [],
  },
  {
    number: '02',
    title: 'Helmet Detection & Fine Management',
    category: 'Final-year project · Computer vision',
    summary:
      'A computer-vision pipeline designed to detect helmet violations and identify vehicles from traffic imagery.',
    contribution:
      'Connected YOLOv8 violation detection, license-plate extraction with PaddleOCR, image processing, and a Flask backend for fine-management functionality.',
    stack: ['Python', 'YOLOv8', 'PaddleOCR', 'Flask', 'Computer vision'],
    repo: 'https://github.com/D1AZ0W/FinalYearProject',
    visual: 'vision',
    screenshots: [],
  },
  {
    number: '03',
    title: 'Yatra',
    category: 'Hackathon · Multi-role bus transit',
    summary:
      'A bus-transit app concept with Passenger, Driver, and Admin dashboards, simulated live tracking, QR ride check-in, and a digital wallet.',
    contribution:
      'Designed and built the multi-role transit app under hackathon time constraints.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Expo Router'],
    repo: 'https://github.com/D1AZ0W',
    visual: 'yatra',
    screenshots: [],
  },
  {
    number: '04',
    title: 'OnlineCom',
    category: 'Frontend · E-commerce',
    summary:
      'A modern storefront frontend using the Fake Store API, with client-side routing, debounced search, product filters, and reusable components.',
    contribution:
      'Implemented shopping-cart state and optimistic UI updates while practicing asynchronous data management and responsive interactions.',
    stack: ['React', 'TypeScript', 'TanStack Router / Query', 'shadcn/ui'],
    repo: 'https://github.com/D1AZ0W/Fellowship/tree/main/task9',
    visual: 'commerce',
    screenshots: [],
  },
  {
    number: '05',
    title: 'Pokémon Versus',
    category: 'Frontend · Stats comparison',
    summary:
      'An interactive tool for comparing Pokémon stats side by side, with data fetched dynamically from PokéAPI.',
    contribution:
      'Built a component-based, hooks-driven React app and developed UI features during the Chanakya Software internship.',
    stack: ['React', 'JavaScript', 'REST API', 'PokéAPI'],
    live: 'https://pokemon-versus.netlify.app/',
    repo: 'https://github.com/D1AZ0W/pokemon-versus',
    visual: 'versus',
    screenshots: [],
  },
]

export const experience = [
  {
    date: 'JUN — AUG 2026',
    role: 'Software Developer Intern',
    company: 'Cloco Nepal Inc.',
    location: 'Lalitpur, Nepal',
    detail:
      'Completed a two-month software development fellowship, building full-stack features with React.js, TypeScript, Django REST Framework, and PostgreSQL.',
    tag: 'Software Development Fellowship',
  },
  {
    date: 'MAR — JUN 2026',
    role: 'Frontend Developer Intern',
    company: 'Chanakya Software',
    detail:
      'Built UI features with React and modern frontend tooling. Learned Git workflows and TanStack Router/Query while working on Pokémon Versus, a React app comparing Pokémon stats via PokéAPI.',
    tag: 'React · TanStack · PokéAPI',
  },
]

export const education = {
  degree: 'BSc. CSIT',
  school: 'Tribhuvan University (TU), Nepal',
  status: 'Final semester · expected graduation 2026',
}

export const certifications = [
  'Software Development Fellowship — Cloco Nepal Inc. — Certificate of Completion',
  'Hackathon Participation Certificate — Yatra Bus Transit App (2026)',
]
