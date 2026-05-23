import {
  AboutData,
  SkillCategory,
  Project,
  Service,
  Certificate,
  ContactData,
  FunFact,
} from '@/types';

export const aboutData: AboutData = {
  lead: 'Software Engineer specializing in <strong>FastAPI</strong> and <strong>Django</strong>. Experienced in REST APIs, JWT/RBAC auth, and async services.',
  body: 'Focused on clean architecture, performance optimization, and secure backend design. Pursuing BSc in IT (Cybersecurity) at IDU, Tashkent.',
  stats: [
    { value: 3, label: 'Projects', isNumber: true, suffix: '+' },
    { value: 'B2', label: 'English', isNumber: false },
    { value: 2, label: 'Yrs Coding', isNumber: true, suffix: '+' },
  ],
  timeline: [
    {
      role: 'Freelance Backend Developer',
      year: '2024 – 2025',
      description: 'REST APIs, JWT/RBAC, DB optimization. FastAPI & Django for clients. Production-ready.',
    },
    {
      role: "Najot Ta'lim — Backend Course",
      year: '2023 – 2024',
      description: 'Intensive Python, Django, REST API fundamentals.',
    },
    {
      role: 'IDU Tashkent — BSc IT (Cybersecurity)',
      year: '2025 – Present',
      description: 'Information Technology, Cybersecurity track.',
      isLive: true,
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend & Core',
    pills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'SQLAlchemy' },
      { name: 'Pydantic' },
      { name: 'Aiogram 3' },
    ],
  },
  {
    title: 'Architecture',
    pills: [
      { name: 'REST API Design', highlight: true },
      { name: 'Clean Arch.', highlight: true },
      { name: 'JWT Auth' },
      { name: 'RBAC' },
      { name: 'Async Programming' },
    ],
  },
  {
    title: 'DB & Messaging',
    pills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis', highlight: true },
      { name: 'RabbitMQ' },
      { name: 'Celery' },
    ],
  },
  {
    title: 'DevOps',
    pills: [
      { name: 'Docker', highlight: true },
      { name: 'Linux', highlight: true },
      { name: 'NGINX' },
      { name: 'Git / GitHub' },
    ],
  },
  {
    title: 'Frontend (Basic)',
    pills: [
      { name: 'HTML / CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Next.js' },
    ],
  },
  {
    title: 'Languages',
    pills: [
      { name: 'Uzbek (Native)', highlight: true },
      { name: 'Russian (B2)' },
      { name: 'English (B2)' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Marketplace',
    subtitle: 'E-commerce Backend Platform',
    description: 'Scalable REST API with JWT auth, RBAC, modular architecture.',
    pills: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'RBAC'],
    hue: 210,
    github: 'https://github.com/RustamovAkrom/Marketplace-FastAPI',
  },
  {
    id: 2,
    title: 'DeepSeek Bot',
    subtitle: 'AI Telegram Assistant',
    description: 'AI Telegram bot with async architecture.',
    pills: ['Aiogram 3', 'DeepSeek API'],
    hue: 160,
    github: 'https://github.com/RustamovAkrom/DeepSeek_TelegramBot',
  },
  {
    id: 3,
    title: 'Viberfy',
    subtitle: 'Music Web App',
    description: 'Full-stack platform with Django + Next.js.',
    pills: ['Django', 'Next.js'],
    hue: 340,
    github: 'https://github.com/RustamovAkrom/Viberfy',
  },
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Backend Development',
    description: 'Production APIs with FastAPI & Django. Auth, caching, queues — built for real scale.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'API Design',
    description: 'Clean RESTful APIs, OpenAPI docs, versioning, validation. Developers will love them.',
    icon: 'file',
  },
  {
    id: 3,
    title: 'System Architecture',
    description: 'Message queues, caching layers, microservices patterns, Docker deployment pipelines.',
    icon: 'database',
  },
];

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Backend Development',
    organization: "Najot Ta'lim",
    year: '2023 – 2024',
    link: 'https://akrom-omega.vercel.app/certificates',
    badge: 'Verified',
    badgeType: 'verified',
  },
  {
    id: 2,
    title: 'Python & Django',
    organization: "Najot Ta'lim",
    year: '2023',
    link: 'https://akrom-omega.vercel.app/certificates',
    badge: 'Verified',
    badgeType: 'verified',
  },
  {
    id: 3,
    title: 'FastAPI Mastery',
    organization: 'Self-directed / GitHub',
    year: '2024',
    link: 'https://akrom-omega.vercel.app/certificates',
    badge: 'Verified',
    badgeType: 'verified',
  },
  {
    id: 4,
    title: 'BSc Information Technology',
    organization: 'IDU, Tashkent',
    year: '2025 – Present',
    link: 'https://akrom-omega.vercel.app/certificates',
    badge: 'In Progress',
    badgeType: 'prog',
    inProgress: true,
  },
];

export const contactData: ContactData = {
  description: 'Open to freelance, full-time roles, and interesting collaborations.',
  social: {
    github: {
      url: 'https://github.com/RustamovAkrom',
      username: 'github.com/RustamovAkrom',
    },
    linkedin: {
      url: 'https://linkedin.com',
      username: 'LinkedIn',
    },
    telegram: {
      url: 'https://t.me/Akrom_Rustamov',
      username: '@Akrom_Rustamov',
    },
  },
  phone: '+998 95 878 62 77',
};

export const funFactsData: FunFact[] = [
  { label: 'Cups of Coffee', value: 999, suffix: '+', icon: 'coffee' },
  { label: 'Lines of Code', value: 50, suffix: 'k+', icon: 'code' },
  { label: 'Git Commits', value: 500, suffix: '+', icon: 'git' },
  { label: 'Bugs Squashed', value: 0, suffix: '', icon: 'bug' },
];

export const quoteData = {
  text: 'First, solve the problem. Then, write the code.',
  author: 'John Johnson',
};

export const githubUsername = 'RustamovAkrom';
