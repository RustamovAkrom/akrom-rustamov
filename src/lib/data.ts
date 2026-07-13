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
  lead: 'Salom, men Akrom Rustamov — <strong>Python Backend Developer</strong>.',
  body: 'Backend tizimlarni loyihalash, REST API xizmatlarini ishlab chiqish va ilovalarni development bosqichidan production muhitigacha olib chiqishga ixtisoslashganman.\n\nFastAPI va Django frameworklari yordamida kengaytiriladigan, xavfsiz va barqaror backend servislar yarataman. Ma\'lumotlar bazasi arxitekturasi, authentication tizimlari, async processing, background tasks va real-time kommunikatsiyalar bilan ishlash tajribasiga egaman.\n\nBackend servislarni Docker orqali containerization qilish, CI/CD pipeline sozlash, monitoring va logging tizimlarini ulash bo\'yicha amaliy tajribaga egaman.\n\nAsosiy maqsadim — toza arxitektura, sifatli kod va uzoq muddat qo\'llab-quvvatlanadigan backend yechimlar yaratish.',
  stats: [
    { value: 3, label: 'Loyihalar', isNumber: true, suffix: '+' },
    { value: 'B2', label: 'Ingliz tili', isNumber: false },
    { value: 2, label: 'Yil Tajriba', isNumber: true, suffix: '+' },
  ],
  timeline: [
    {
      role: 'Freelance Backend Developer',
      year: '2024 – 2025',
      description: 'REST APIs, JWT/RBAC, DB optimization. FastAPI & Django uchun production-ready backendlar.',
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
    title: 'Backend',
    pills: [
      { name: 'Python', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'Django REST Framework' },
      { name: 'SQLAlchemy' },
      { name: 'Alembic' },
      { name: 'Pydantic v2' },
      { name: 'Celery' },
      { name: 'Aiogram3' },
      { name: 'REST API' },
      { name: 'WebSocket' },
      { name: 'WebRTC' },
    ],
  },
  {
    title: 'Database',
    pills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis', highlight: true },
      { name: 'RabbitMQ' },
      { name: 'MinIO' },
    ],
  },
  {
    title: 'Authentication',
    pills: [
      { name: 'JWT', highlight: true },
      { name: 'OAuth2' },
      { name: 'RBAC' },
    ],
  },
  {
    title: 'DevOps',
    pills: [
      { name: 'Docker', highlight: true },
      { name: 'Docker Compose' },
      { name: 'NGINX' },
      { name: 'GitHub Actions' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
      { name: 'Loki' },
      { name: 'Sentry' },
    ],
  },
  {
    title: 'Frontend',
    pills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Marketplace Platform',
    description: 'FastAPI, Next.js va Aiogram3 asosida ishlab chiqilgan zamonaviy e-commerce platforma. Loyiha alohida backend, frontend va Telegram bot servislariga ajratilgan. Backend qismida async API architecture, authentication, product management, file storage va database layer ishlab chiqilgan. Docker Compose yordamida barcha servislar yagona muhitda boshqariladi.',
    pills: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'MinIO', 'Next.js', 'Aiogram3', 'Docker', 'NGINX'],
    hue: 210,
    github: 'https://github.com/RustamovAkrom/E-Commerce',
    isPublic: true,
  },
  {
    id: 2,
    title: 'Assets CRM System',
    subtitle: 'Backend Management System',
    description: 'Davlat tashkiloti uchun ishlab chiqilgan aktivlarni boshqarish tizimi. Tizim aktivlarni ro\'yxatga olish, kuzatish va foydalanuvchi rollarini boshqarish imkoniyatlarini beradi. RBAC permission system, audit logging, background task processing va production deployment amalga oshirilgan.',
    pills: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'NGINX', 'Pytest'],
    hue: 160,
    github: null,
    isPublic: false,
  },
  {
    id: 3,
    title: 'Viberfy Music Platform',
    subtitle: 'Full Stack Music Platform',
    description: 'Django REST Framework va Next.js asosida yaratilgan musiqa platformasi. Backend JWT authentication, music management, background processing va API documentation bilan ishlab chiqilgan. Celery orqali background vazifalar, Prometheus va Sentry orqali monitoring jarayonlari sozlangan.',
    pills: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Next.js', 'TypeScript', 'Docker', 'Prometheus', 'Sentry'],
    hue: 340,
    github: 'https://github.com/RustamovAkrom/Viberfy',
    isPublic: true,
  },
  {
    id: 4,
    title: 'FastAPI Default',
    subtitle: 'Production Ready Backend Template',
    description: 'FastAPI asosida yaratilgan backend starter template. Production loyihalarni tez boshlash uchun authentication, database migration, admin panel, monitoring va Docker konfiguratsiyalari oldindan tayyorlangan. Clean project structure va scalable architecture asosida ishlab chiqilgan.',
    pills: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Redis', 'SQLAdmin', 'Docker', 'Prometheus'],
    hue: 280,
    github: 'https://github.com/RustamovAkrom/FastAPIDefault',
    isPublic: true,
  },
  {
    id: 5,
    title: 'WebRTC Video Chat',
    subtitle: 'Real-Time Communication',
    description: 'Real vaqt rejimidagi video aloqa tizimi. WebRTC peer-to-peer connection va WebSocket signaling mexanizmlari ishlab chiqilgan. Backend va frontend servislar alohida ajratilib Docker orqali containerization qilingan.',
    pills: ['Python', 'WebRTC', 'WebSocket', 'JavaScript', 'Docker'],
    hue: 190,
    github: 'https://github.com/RustamovAkrom/WebRTC-VideoChat',
    isPublic: true,
  },
  {
    id: 6,
    title: 'DeepSeek AI Telegram Bot',
    subtitle: 'AI Telegram Assistant',
    description: 'DeepSeek AI modellari bilan integratsiya qilingan Telegram chatbot. Aiogram3 async architecture asosida qurilgan. User settings, conversation history management va AI model konfiguratsiyasi qo\'shilgan.',
    pills: ['Python', 'Aiogram3', 'SQLAlchemy', 'PostgreSQL', 'OpenRouter API', 'Docker'],
    hue: 130,
    github: 'https://github.com/RustamovAkrom/DeepSeek_TelegramBot',
    isPublic: true,
  },
  {
    id: 7,
    title: 'JARVIS',
    subtitle: 'AI Assistant System',
    description: 'AI imkoniyatlari asosida ishlab chiqilgan yordamchi tizim. Loyiha sun\'iy intellekt integratsiyasi, avtomatlashtirish va foydalanuvchi buyruqlarini qayta ishlash imkoniyatlariga yo\'naltirilgan.',
    pills: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Redis', 'Docker'],
    hue: 320,
    github: 'https://github.com/RustamovAkrom/JARVIS',
    isPublic: true,
  },
  {
    id: 8,
    title: 'Nebula OS',
    subtitle: 'Operating System Experiment',
    description: 'Operatsion tizim ishlash prinsiplarini chuqurroq o\'rganish uchun yaratilgan low-level loyiha. Kernel, system architecture va computer science konseptlarini amaliy o\'rganishga qaratilgan.',
    pills: ['C', 'Assembly', 'Rust', 'Makefile', 'QEMU'],
    hue: 40,
    github: 'https://github.com/RustamovAkrom/nebula-os',
    isPublic: true,
  },
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Backend Development',
    description: 'FastAPI va Django yordamida biznes talablariga mos backend tizimlar ishlab chiqish. REST API, authentication, database integration va scalable architecture asosida production-ready yechimlar yaratish.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'REST API Development',
    description: 'Toza, xavfsiz va hujjatlashtirilgan API xizmatlar yaratish. JWT/OAuth2 authentication, validation, permissions va OpenAPI documentation bilan ishlash.',
    icon: 'file',
  },
  {
    id: 3,
    title: 'Database Design',
    description: 'PostgreSQL asosida database structure loyihalash. SQLAlchemy ORM, migration, query optimization va ma\'lumotlar bilan samarali ishlash.',
    icon: 'database',
  },
  {
    id: 4,
    title: 'Telegram Bot Development',
    description: 'Aiogram3 yordamida biznes jarayonlarini avtomatlashtiruvchi Telegram botlar ishlab chiqish. Backend API, database va tashqi servislar bilan integratsiya qilish.',
    icon: 'bot',
  },
  {
    id: 5,
    title: 'Backend Optimization',
    description: 'Mavjud backend tizimlarni tahlil qilish va yaxshilash. Caching, background tasks, async processing va performance optimization yechimlarini qo\'llash.',
    icon: 'zap',
  },
  {
    id: 6,
    title: 'Deployment & DevOps',
    description: 'Backend loyihalarni serverga joylash va production muhitga tayyorlash. Docker, Docker Compose, NGINX, CI/CD pipeline va monitoring sozlash.',
    icon: 'server',
  },
  {
    id: 7,
    title: 'Real-Time Applications',
    description: 'WebSocket va WebRTC yordamida real vaqt rejimida ishlaydigan ilovalar yaratish. Chat, notification va video communication tizimlari bilan ishlash.',
    icon: 'radio',
  },
  {
    id: 8,
    title: 'Third Party Integrations',
    description: 'Tashqi API va servislarni backend tizimlarga ulash. Payment, AI API, storage va boshqa integratsiyalar bilan ishlash.',
    icon: 'link',
  },
];

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Backend Python Django (Standard)",
    issuer: "Najot Ta'lim",
    description:
      "Python, Django, REST API, PostgreSQL, autentifikatsiya, joylashuv va haqiqiy loyiha ishlab chiqishga yo‘naltirilgan intensiv backend dasturlash dasturini tamomladim.",
    issueDate: '2024',
    image: '/certificates/NAJOT_TALIM_CERTIFICATE.jpg',
    category: 'Backend',
    featured: true,
  },
  {
    id: 2,
    title: "Backend Python Django Diploma",
    issuer: "Najot Ta'lim",
    description:
      "Backend Python Django (Standard) dasturini muvaffaqiyatli tamomlab, barcha bitirish talablari bajarildi.",
    issueDate: '2024',
    image: '/certificates/NAJOT_TALIM_DIPLOM.jpg',
    category: 'Backend',
    featured: true,
  },
  {
    id: 3,
    title: 'International Cybersecurity CTF 2026',
    issuer: 'Central Asian University',
    description:
      'Xalqaro Kibertahdid CTF musobaqasida ishtirok etib, amaliy muammolarni hal qilish va kibertahdid ko‘nikmalarini namoyish etdim.',
    issueDate: '2026',
    image: '/certificates/CAU_TEACH_HACK_26_CERTIFICATE.jpg',
    category: 'Cybersecurity',
    featured: true,
  },
  {
    id: 4,
    title: 'Neurogansta Training Program',
    issuer: 'Neurogansta',
    description:
      'Neurogansta sertifikatlashtirish dasturini AI va neyron tarmoqlarni amaliy ravishda sozlash hamda ishlab chiqarishga tayyor ML pipeline’lari bo‘yicha tamomladim.',
    issueDate: '2025',
    image: '/certificates/NEUROGANSTA_SERTIFICATE.jpg',
    category: 'AI & ML',
    featured: false,
  },
];

export const contactData: ContactData = {
  description: 'Backend tizimlar, API xizmatlar yoki yangi imkoniyatlar bo‘yicha hamkorlik uchun bog‘lanishingiz mumkin.',
  social: {
    github: {
      url: 'https://github.com/RustamovAkrom',
      username: 'github.com/RustamovAkrom',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/akrom-rustamov',
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
  { label: 'Yakunlangan Loyihalar', value: 8, suffix: '+', icon: 'projects' },
  { label: 'Texnologiyalar', value: 25, suffix: '+', icon: 'tech' },
  { label: 'Git Commits', value: 1200, suffix: '+', icon: 'git' },
  { label: 'Backend Tajriba', value: 2, suffix: ' yil', icon: 'exp' },
];

export const quoteData = {
  text: 'First, solve the problem. Then, write the code.',
  author: 'John Johnson',
};

export const githubUsername = 'RustamovAkrom';
