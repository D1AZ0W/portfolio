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
  frame?: 'wide' | 'tall'
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
    screenshots: [
      { src: '/project-screenshots/billdiv/01-landing.webp', alt: 'BillDiv landing screen splitting a sample cafe bill of Rs. 1,520 three ways between Bigyan, Niyukta and Ansh.', caption: 'LANDING / SPLIT PREVIEW' },
      { src: '/project-screenshots/billdiv/02-register.webp', alt: 'BillDiv registration form with username, email, first name, last name and password fields.', caption: 'REGISTER / ACCOUNT' },
      { src: '/project-screenshots/billdiv/03-dashboard.webp', alt: 'BillDiv dashboard showing two groups, amounts owed and owed, a net balance of minus Rs. 34,250, and pending settlements.', caption: 'DASHBOARD / NET BALANCE' },
      { src: '/project-screenshots/billdiv/04-activity.webp', alt: 'BillDiv activity feed listing settlements, added expenses such as Restaurant and Roller Coaster, and added group members.', caption: 'ACTIVITY FEED' },
      { src: '/project-screenshots/billdiv/05-profile.webp', alt: 'BillDiv profile page with email, username, first and last name, and a change-password action.', caption: 'PROFILE' },
      { src: '/project-screenshots/billdiv/06-group-balance.webp', alt: 'BillDiv group page for China Trip showing an owed balance of Rs. 40,000, the settlement owed to Ram Kumar, and group members.', caption: 'GROUP / SETTLEMENTS' },
    ],
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
    screenshots: [
      { src: '/project-screenshots/helmet-detection/01-access-control.webp', alt: 'HelmDetect access-control sign-in page reserved for authorised government personnel, with username and password fields.', caption: 'ACCESS CONTROL / SIGN IN' },
      { src: '/project-screenshots/helmet-detection/02-live-stream.webp', alt: 'HelmDetect control center showing camera controls and a live violation stream from a selected video source.', caption: 'LIVE VIOLATION STREAM' },
      { src: '/project-screenshots/helmet-detection/03-fine-queue.webp', alt: 'HelmDetect dashboard listing the latest case, pending fines, a working camera and a queue of active cases in review.', caption: 'CASE QUEUE / FINES' },
      { src: '/project-screenshots/helmet-detection/04-record-lookup.webp', alt: 'HelmDetect manual record lookup table of registered citizens with plate number, name, violations and total due.', caption: 'PLATE RECORD LOOKUP' },
      { src: '/project-screenshots/helmet-detection/05-citizen-search.webp', alt: 'HelmDetect fines view with a search field for looking up citizens and their assigned fines.', caption: 'CITIZEN / FINE SEARCH' },
      { src: '/project-screenshots/helmet-detection/06-case-closed.webp', alt: 'HelmDetect control center confirming a fine was assigned and a case closed, with lookup and close actions on the queued case.', caption: 'CASE CLOSED / FINE' },
    ],
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
    frame: 'tall',
    screenshots: [
      { src: '/project-screenshots/yatra/01-role-select.webp', alt: 'Yatra role screen offering Passenger, Driver / Conductor and Admin roles for a smart public transport app.', caption: 'ROLE SELECT' },
      { src: '/project-screenshots/yatra/02-passenger-home.webp', alt: 'Passenger home screen greeting Ram Passenger with active buses, total routes and available routes such as Ratnapark - Kalanki.', caption: 'PASSENGER HOME' },
      { src: '/project-screenshots/yatra/03-live-tracking.webp', alt: 'Live route tracking screen with a map and a list of routes including Ratnapark - Kalanki and Ring Road Circle.', caption: 'LIVE TRACKING MAP' },
      { src: '/project-screenshots/yatra/04-qr-check-in.webp', alt: 'QR check-in screen with a scanner view and an option to enter the bus code manually.', caption: 'QR CHECK-IN' },
      { src: '/project-screenshots/yatra/05-digital-wallet.webp', alt: 'Digital payment screen asking the passenger to choose a wallet provider, showing eSewa and Khalti options.', caption: 'DIGITAL WALLET' },
      { src: '/project-screenshots/yatra/06-conductor-dashboard.webp', alt: 'Conductor dashboard for bus BUS-101 showing three boarded passengers, one added manually.', caption: 'CONDUCTOR DASHBOARD' },
      { src: '/project-screenshots/yatra/07-admin-console.webp', alt: 'Admin console for Yatra Central showing route, bus and conductor management plus critical system alerts.', caption: 'ADMIN CONSOLE' },
    ],
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
    screenshots: [
      { src: '/project-screenshots/onlinecom/01-storefront.webp', alt: 'OnlineCom storefront home with the OnlineCom wordmark and entries for Home and Products.', caption: 'STOREFRONT' },
      { src: '/project-screenshots/onlinecom/02-product-grid.webp', alt: 'OnlineCom products grid with a product search field, category filters and product cards with ratings and add-to-cart buttons.', caption: 'CATALOG / SEARCH + FILTERS' },
      { src: '/project-screenshots/onlinecom/03-product-detail.webp', alt: 'OnlineCom product detail page for Mens Casual Premium Slim Fit T-Shirts with its description and price.', caption: 'PRODUCT DETAIL' },
      { src: '/project-screenshots/onlinecom/04-order-summary.webp', alt: 'OnlineCom cart page showing the order summary and a clear-cart action.', caption: 'CART / ORDER SUMMARY' },
    ],
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
    screenshots: [
      { src: '/project-screenshots/pokemon-versus/01-versus-select.webp', alt: 'Pokémon Versus screen asking for two Pokémon to compare, with height, weight and type comparison for each side.', caption: 'PICK TWO / COMPARE' },
      { src: '/project-screenshots/pokemon-versus/02-stats-comparison.webp', alt: 'Pokémon Versus stats comparison listing HP, attack, defense, special attack, special defense and speed for both Pokémon, plus their types.', caption: 'STATS COMPARISON' },
    ],
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
