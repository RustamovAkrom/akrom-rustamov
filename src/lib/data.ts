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
  lead: {
    uz: 'Men ishonchlilik, xavfsizlik va puxta muhandislik tamoyillariga asoslangan backend tizimlarini yarataman.',
    ru: 'Я создаю backend-системы, уделяя особое внимание надёжности, безопасности и продуманным инженерным решениям.',
    en: 'I build backend systems with a focus on reliability, security, and thoughtful engineering.',
  },
  body: {
    uz: 'Men murakkab g‘oyalarni amaliy va puxta tuzilgan dasturiy yechimlarga aylantirishni yoqtiradigan Python backend dasturchisiman. Ishim faqat endpoint yozish bilan cheklanmaydi: tizimlar qanday muloqot qilishi, ma’lumotlar qanday oqishi, ilovalar xatolarga qanday munosabat bildirishi va bularning barchasi haqiqiy mahsulotda qanday ishlashiga e’tibor beraman.\n\nFastAPI, Django, PostgreSQL va zamonaviy infratuzilma bilan API hamda backend xizmatlarini toza arxitektura, qo‘llab-quvvatlash oson bo‘lgan mantiq va kengayish imkoniyatini hisobga olib yarataman. Kiberxavfsizlikka qiziqishim autentifikatsiya, kirish nazorati va xavfsiz tizim dizayniga yondashuvimga ham ta’sir qiladi.\n\nYaxshi muhandislik ishni keragidan ortiq murakkablashtirish emas, deb hisoblayman. Muhimi — to‘g‘ri qaror qabul qilish, haqiqiy muammolarni hal qilish va rivojlanganda ham ishonchli qoladigan dasturiy ta’minot yaratish.',
    ru: 'Я Python backend-разработчик и люблю превращать сложные идеи в практичное, хорошо структурированное ПО. Моя работа — это не только создание endpoint’ов. Я уделяю внимание взаимодействию систем, потокам данных, обработке сбоев и тому, как всё это работает в реальном продукте.\n\nИспользуя FastAPI, Django, PostgreSQL и современную инфраструктуру, я создаю API и backend-сервисы с чистой архитектурой, поддерживаемой логикой и расчётом на масштабирование. Интерес к кибербезопасности также влияет на мой подход — от аутентификации и контроля доступа до проектирования защищённых систем.\n\nЯ считаю, что хорошая инженерия — это не лишняя сложность, а верные решения, решение реальных задач и создание ПО, которое остаётся надёжным по мере развития.',
    en: 'I’m a Python Backend Developer who enjoys turning complex ideas into practical, well-structured software. My work goes beyond writing endpoints. I focus on how systems communicate, how data flows, how applications handle failures, and how everything fits together in a real product.\n\nWorking with FastAPI, Django, PostgreSQL, and modern infrastructure, I build APIs and backend services with clean architecture, maintainable logic, and scalability in mind. My interest in cybersecurity also shapes how I approach development, from authentication and access control to secure system design.\n\nI believe good engineering is not about making things unnecessarily complex. It’s about making the right decisions, solving real problems, and building software that remains dependable as it grows.',
  },
  highlights: [
    {
      title: {
        uz: 'Muhandislik tafakkuri',
        ru: 'Инженерный подход',
        en: 'Engineering mindset',
      },
      description: {
        uz: 'Toza arxitektura, samarali ma’lumotlar bilan ishlash va uzoq muddat xizmat qiladigan backend tizimlariga e’tibor beraman.',
        ru: 'Я уделяю внимание чистой архитектуре, эффективной работе с данными и backend-системам, рассчитанным на долгую работу.',
        en: 'I care about clean architecture, efficient data handling, and backend systems built to last.',
      },
    },
    {
      title: {
        uz: 'Loyihalashdan boshlab xavfsizlik',
        ru: 'Безопасность с самого начала',
        en: 'Security by design',
      },
      description: {
        uz: 'Backend muhandisligini kiberxavfsizlik bo‘yicha bilimlarim bilan uyg‘unlashtirib, xavfsizlikni ishlab chiqish jarayonining boshidanoq hisobga olaman.',
        ru: 'Я учитываю безопасность с самого начала разработки, сочетая backend-инженерию с углубляющимися знаниями в кибербезопасности.',
        en: 'I approach development with security in mind, combining backend engineering with a growing understanding of cybersecurity.',
      },
    },
    {
      title: {
        uz: 'Maqsadli yechimlar',
        ru: 'Осмысленная разработка',
        en: 'Building with purpose',
      },
      description: {
        uz: 'Amaliy yechimlar, muntazam takomillashish va g‘oyalarni ishlaydigan mahsulotlarga aylantirishga e’tibor beraman.',
        ru: 'Я сосредоточен на практичных решениях, постоянном развитии и превращении идей в работающие продукты.',
        en: 'I focus on practical solutions, continuous improvement, and turning ideas into functional products.',
      },
    },
  ],
  technicalProfile: [
    {
      title: { uz: 'Backend', ru: 'Backend', en: 'Backend' },
      technologies: ['Python', 'FastAPI', 'Django', 'DRF', 'SQLAlchemy', 'Celery', 'Aiogram'],
    },
    {
      title: { uz: 'Ma’lumotlar va xabarlar', ru: 'Данные и обмен сообщениями', en: 'Data & Messaging' },
      technologies: ['PostgreSQL', 'Redis', 'RabbitMQ', 'MinIO'],
    },
    {
      title: { uz: 'Xavfsizlik', ru: 'Безопасность', en: 'Security' },
      technologies: ['JWT', 'OAuth2', 'RBAC', 'Secure API Design'],
    },
    {
      title: { uz: 'Infratuzilma', ru: 'Инфраструктура', en: 'Infrastructure' },
      technologies: ['Docker', 'NGINX', 'Prometheus', 'Grafana', 'Sentry'],
    },
  ],
  timeline: [
    {
      role: {
        uz: 'Mustaqil backend dasturchi',
        ru: 'Независимый backend-разработчик',
        en: 'Independent Backend Developer',
      },
      year: {
        uz: '2024 — hozirgacha',
        ru: '2024 — настоящее время',
        en: '2024 — Present',
      },
      description: {
        uz: 'Shaxsiy va freelance loyihalar ustida ishlash, REST API yaratish, autentifikatsiya va avtorizatsiyani joriy etish, ma’lumotlar bazalarini optimallashtirish hamda deployment va backend infratuzilmasi bilan ishlash.',
        ru: 'Работа над личными и freelance-проектами: разработка REST API, внедрение аутентификации и авторизации, оптимизация баз данных, настройка deployment и backend-инфраструктуры.',
        en: 'Building personal and freelance projects, developing REST APIs, implementing authentication and authorization, optimizing databases, and working with deployment and backend infrastructure.',
      },
    },
    {
      role: {
        uz: 'Najot Ta’lim / Backend dasturlash',
        ru: 'Najot Ta’lim / Backend-разработка',
        en: 'Najot Ta’lim / Backend Development',
      },
      year: {
        uz: '2023 — 2024',
        ru: '2023 — 2024',
        en: '2023 — 2024',
      },
      description: {
        uz: 'Python, Django, REST API, ma’lumotlar bazasi asoslari va backend dasturlash bo‘yicha jadal ta’lim.',
        ru: 'Интенсивное обучение Python, Django, REST API, основам баз данных и backend-разработки.',
        en: 'Focused training in Python, Django, REST APIs, database fundamentals, and backend development.',
      },
    },
    {
      role: {
        uz: 'Amity University / Kiberxavfsizlik',
        ru: 'Amity University / Кибербезопасность',
        en: 'Amity University / Cybersecurity',
      },
      year: {
        uz: '2-kurs — hozirda',
        ru: '2-й курс — сейчас',
        en: '2nd year — Present',
      },
      description: {
        uz: 'Kiberxavfsizlik yo‘nalishida 2-kurs talabasi.',
        ru: 'Студент 2-го курса по направлению «Кибербезопасность».',
        en: 'Second-year student in the Cybersecurity program.',
      },
      isLive: true,
    },
    {
      role: {
        uz: 'International Digital University / Foundation',
        ru: 'International Digital University / Foundation',
        en: 'International Digital University / Foundation',
      },
      year: {
        uz: 'Tugallangan',
        ru: 'Завершено',
        en: 'Completed',
      },
      description: {
        uz: 'International Digital University’da Foundation dasturini tamomlagan.',
        ru: 'Завершил программу Foundation в International Digital University.',
        en: 'Completed the Foundation program at International Digital University.',
      },
    },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', href: 'https://www.python.org/', icon: 'PY', accent: '#3d8bfd' },
      { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/', icon: 'FA', accent: '#00c7a9' },
      { name: 'Django', href: 'https://www.djangoproject.com/', icon: 'DJ', accent: '#0ea5e9' },
      { name: 'DRF', href: 'https://www.django-rest-framework.org/', icon: 'DR', accent: '#06b6d4' },
      { name: 'Celery', href: 'https://docs.celeryq.dev/', icon: 'CL', accent: '#f59e0b' },
      { name: 'Aiogram', href: 'https://docs.aiogram.dev/', icon: 'AI', accent: '#8b5cf6' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: 'PG', accent: '#336791' },
      { name: 'Redis', href: 'https://redis.io/', icon: 'RD', accent: '#dc2626' },
      { name: 'RabbitMQ', href: 'https://www.rabbitmq.com/', icon: 'RMQ', accent: '#f97316' },
      { name: 'MinIO', href: 'https://min.io/', icon: 'MI', accent: '#14b8a6' },
    ],
  },
  {
    title: 'Security',
    items: [
      { name: 'JWT', href: 'https://jwt.io/', icon: 'JWT', accent: '#10b981' },
      { name: 'OAuth2', href: 'https://oauth.net/2/', icon: 'O2', accent: '#22c55e' },
      { name: 'RBAC', href: 'https://en.wikipedia.org/wiki/Role-based_access_control', icon: 'RB', accent: '#38bdf8' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', href: 'https://www.docker.com/', icon: 'DK', accent: '#0ea5e9' },
      { name: 'NGINX', href: 'https://nginx.org/', icon: 'NX', accent: '#009639' },
      { name: 'Prometheus', href: 'https://prometheus.io/', icon: 'PM', accent: '#e6522c' },
      { name: 'Grafana', href: 'https://grafana.com/', icon: 'GF', accent: '#f59e0b' },
      { name: 'Sentry', href: 'https://sentry.io/', icon: 'SN', accent: '#f43f5e' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', href: 'https://react.dev/', icon: 'RE', accent: '#61dafb' },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: 'NX', accent: '#ffffff' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: 'TS', accent: '#3178c6' },
      { name: 'Tailwind', href: 'https://tailwindcss.com/', icon: 'TW', accent: '#38bdf8' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: {
      uz: 'Full Stack Marketplace Platform',
      ru: 'Full Stack платформа маркетплейса',
      en: 'Full Stack Marketplace Platform',
    },
    description: {
      uz: 'FastAPI, Next.js va Aiogram3 asosida ishlab chiqilgan zamonaviy e-commerce platforma. Loyiha alohida backend, frontend va Telegram bot servislariga ajratilgan. Backend qismida async API architecture, authentication, product management, file storage va database layer ishlab chiqilgan. Docker Compose yordamida barcha servislar yagona muhitda boshqariladi.',
      ru: 'Современная e-commerce платформа, разработанная на FastAPI, Next.js и Aiogram3. Проект разделён на отдельные сервисы backend, frontend и Telegram-бота. В backend-части реализованы async API-архитектура, аутентификация, управление товарами, файловое хранилище и слой базы данных. Все сервисы управляются в едином окружении через Docker Compose.',
      en: 'A modern e-commerce platform built on FastAPI, Next.js and Aiogram3. The project is split into separate backend, frontend and Telegram bot services. The backend features async API architecture, authentication, product management, file storage and a database layer. All services are managed in a single environment via Docker Compose.',
    },
    pills: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'MinIO', 'Next.js', 'Aiogram3', 'Docker', 'NGINX'],
    hue: 210,
    github: 'https://github.com/RustamovAkrom/E-Commerce',
    isPublic: true,
  },
  {
    id: 2,
    title: 'Assets CRM System',
    subtitle: {
      uz: 'Backend Management System',
      ru: 'Система управления (Backend)',
      en: 'Backend Management System',
    },
    description: {
      uz: "Davlat tashkiloti uchun ishlab chiqilgan aktivlarni boshqarish tizimi. Tizim aktivlarni ro'yxatga olish, kuzatish va foydalanuvchi rollarini boshqarish imkoniyatlarini beradi. RBAC permission system, audit logging, background task processing va production deployment amalga oshirilgan.",
      ru: 'Система управления активами, разработанная для государственной организации. Система позволяет регистрировать, отслеживать активы и управлять ролями пользователей. Реализованы система прав RBAC, журнал аудита, фоновая обработка задач и production-развёртывание.',
      en: "An asset management system built for a government organization. The system provides the ability to register and track assets and manage user roles. It features an RBAC permission system, audit logging, background task processing and production deployment.",
    },
    pills: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'NGINX', 'Pytest'],
    hue: 160,
    github: null,
    isPublic: false,
  },
  {
    id: 3,
    title: 'Viberfy Music Platform',
    subtitle: {
      uz: 'Full Stack Music Platform',
      ru: 'Full Stack музыкальная платформа',
      en: 'Full Stack Music Platform',
    },
    description: {
      uz: 'Django REST Framework va Next.js asosida yaratilgan musiqa platformasi. Backend JWT authentication, music management, background processing va API documentation bilan ishlab chiqilgan. Celery orqali background vazifalar, Prometheus va Sentry orqali monitoring jarayonlari sozlangan.',
      ru: 'Музыкальная платформа, созданная на базе Django REST Framework и Next.js. Backend разработан с JWT-аутентификацией, управлением музыкой, фоновой обработкой и документацией API. Фоновые задачи настроены через Celery, а процессы мониторинга — через Prometheus и Sentry.',
      en: 'A music platform built on Django REST Framework and Next.js. The backend is implemented with JWT authentication, music management, background processing and API documentation. Background tasks run via Celery, and monitoring is set up through Prometheus and Sentry.',
    },
    pills: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Next.js', 'TypeScript', 'Docker', 'Prometheus', 'Sentry'],
    hue: 340,
    github: 'https://github.com/RustamovAkrom/Viberfy',
    isPublic: true,
  },
  {
    id: 4,
    title: 'FastAPI Default',
    subtitle: {
      uz: 'Production Ready Backend Template',
      ru: 'Production-ready шаблон backend',
      en: 'Production Ready Backend Template',
    },
    description: {
      uz: 'FastAPI asosida yaratilgan backend starter template. Production loyihalarni tez boshlash uchun authentication, database migration, admin panel, monitoring va Docker konfiguratsiyalari oldindan tayyorlangan. Clean project structure va scalable architecture asosida ishlab chiqilgan.',
      ru: 'Backend starter-шаблон на базе FastAPI. Для быстрого старта production-проектов заранее подготовлены аутентификация, миграции базы данных, админ-панель, мониторинг и Docker-конфигурации. Разработан на основе чистой структуры проекта и масштабируемой архитектуры.',
      en: 'A backend starter template built on FastAPI. For quickly launching production projects, authentication, database migrations, an admin panel, monitoring and Docker configuration are preconfigured. Built on a clean project structure and scalable architecture.',
    },
    pills: ['FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Redis', 'SQLAdmin', 'Docker', 'Prometheus'],
    hue: 280,
    github: 'https://github.com/RustamovAkrom/FastAPIDefault',
    isPublic: true,
  },
  {
    id: 5,
    title: 'WebRTC Video Chat',
    subtitle: {
      uz: 'Real-Time Communication',
      ru: 'Связь в реальном времени',
      en: 'Real-Time Communication',
    },
    description: {
      uz: "Real vaqt rejimidagi video aloqa tizimi. WebRTC peer-to-peer connection va WebSocket signaling mexanizmlari ishlab chiqilgan. Backend va frontend servislar alohida ajratilib Docker orqali containerization qilingan.",
      ru: 'Система видеосвязи в реальном времени. Разработаны WebRTC peer-to-peer соединение и механизмы WebSocket-сигналинга. Backend и frontend сервисы разделены и контейнеризированы через Docker.',
      en: 'A real-time video communication system. WebRTC peer-to-peer connection and WebSocket signaling mechanisms are implemented. Backend and frontend services are separated and containerized with Docker.',
    },
    pills: ['Python', 'WebRTC', 'WebSocket', 'JavaScript', 'Docker'],
    hue: 190,
    github: 'https://github.com/RustamovAkrom/WebRTC-VideoChat',
    isPublic: true,
  },
  {
    id: 6,
    title: 'DeepSeek AI Telegram Bot',
    subtitle: {
      uz: 'AI Telegram Assistant',
      ru: 'AI Telegram-ассистент',
      en: 'AI Telegram Assistant',
    },
    description: {
      uz: "DeepSeek AI modellari bilan integratsiya qilingan Telegram chatbot. Aiogram3 async architecture asosida qurilgan. User settings, conversation history management va AI model konfiguratsiyasi qo'shilgan.",
      ru: 'Telegram-чатбот, интегрированный с моделями DeepSeek AI. Построен на async-архитектуре Aiogram3. Добавлены пользовательские настройки, управление историей диалогов и конфигурация AI-модели.',
      en: 'A Telegram chatbot integrated with DeepSeek AI models. Built on the Aiogram3 async architecture. User settings, conversation history management and AI model configuration are included.',
    },
    pills: ['Python', 'Aiogram3', 'SQLAlchemy', 'PostgreSQL', 'OpenRouter API', 'Docker'],
    hue: 130,
    github: 'https://github.com/RustamovAkrom/DeepSeek_TelegramBot',
    isPublic: true,
  },
  {
    id: 7,
    title: 'JARVIS',
    subtitle: {
      uz: 'AI Assistant System',
      ru: 'Система AI-ассистента',
      en: 'AI Assistant System',
    },
    description: {
      uz: 'AI imkoniyatlari asosida ishlab chiqilgan yordamchi tizim. Loyiha sun\'iy intellekt integratsiyasi, avtomatlashtirish va foydalanuvchi buyruqlarini qayta ishlash imkoniyatlariga yo\'naltirilgan.',
      ru: 'Вспомогательная система, разработанная на базе возможностей AI. Проект ориентирован на интеграцию искусственного интеллекта, автоматизацию и обработку пользовательских команд.',
      en: 'An assistant system built around AI capabilities. The project is focused on artificial intelligence integration, automation and processing user commands.',
    },
    pills: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Redis', 'Docker'],
    hue: 320,
    github: 'https://github.com/RustamovAkrom/JARVIS',
    isPublic: true,
  },
  {
    id: 8,
    title: 'Nebula OS',
    subtitle: {
      uz: 'Operating System Experiment',
      ru: 'Экспериментальная ОС',
      en: 'Operating System Experiment',
    },
    description: {
      uz: "Operatsion tizim ishlash prinsiplarini chuqurroq o'rganish uchun yaratilgan low-level loyiha. Kernel, system architecture va computer science konseptlarini amaliy o'rganishga qaratilgan.",
      ru: 'Low-level проект, созданный для более глубокого изучения принципов работы операционных систем. Направлен на практическое изучение ядра, системной архитектуры и концепций computer science.',
      en: 'A low-level project created to explore operating system principles in depth. It focuses on hands-on study of the kernel, system architecture and computer science concepts.',
    },
    pills: ['C', 'Assembly', 'Rust', 'Makefile', 'QEMU'],
    hue: 40,
    github: 'https://github.com/RustamovAkrom/nebula-os',
    isPublic: true,
  },
];

export const servicesData: Service[] = [
  {
    id: 1,
    title: {
      uz: 'Backend Development',
      ru: 'Backend-разработка',
      en: 'Backend Development',
    },
    description: {
      uz: 'FastAPI va Django yordamida biznes talablariga mos backend tizimlar ishlab chiqish. REST API, authentication, database integration va scalable architecture asosida production-ready yechimlar yaratish.',
      ru: 'Разработка backend-систем под бизнес-требования с помощью FastAPI и Django. Создание production-ready решений на основе REST API, аутентификации, интеграции с базами данных и масштабируемой архитектуры.',
      en: 'Building backend systems tailored to business requirements using FastAPI and Django. Creating production-ready solutions based on REST API, authentication, database integration and scalable architecture.',
    },
    icon: 'code',
  },
  {
    id: 2,
    title: {
      uz: 'REST API Development',
      ru: 'Разработка REST API',
      en: 'REST API Development',
    },
    description: {
      uz: 'Toza, xavfsiz va hujjatlashtirilgan API xizmatlar yaratish. JWT/OAuth2 authentication, validation, permissions va OpenAPI documentation bilan ishlash.',
      ru: 'Создание чистых, безопасных и задокументированных API-сервисов. Работа с JWT/OAuth2 аутентификацией, валидацией, правами и документацией OpenAPI.',
      en: 'Building clean, secure and documented API services. Working with JWT/OAuth2 authentication, validation, permissions and OpenAPI documentation.',
    },
    icon: 'file',
  },
  {
    id: 3,
    title: {
      uz: 'Database Design',
      ru: 'Проектирование баз данных',
      en: 'Database Design',
    },
    description: {
      uz: "PostgreSQL asosida database structure loyihalash. SQLAlchemy ORM, migration, query optimization va ma'lumotlar bilan samarali ishlash.",
      ru: 'Проектирование структуры базы данных на основе PostgreSQL. SQLAlchemy ORM, миграции, оптимизация запросов и эффективная работа с данными.',
      en: 'Designing database structures on top of PostgreSQL. SQLAlchemy ORM, migrations, query optimization and efficient work with data.',
    },
    icon: 'database',
  },
  {
    id: 4,
    title: {
      uz: 'Telegram Bot Development',
      ru: 'Разработка Telegram-ботов',
      en: 'Telegram Bot Development',
    },
    description: {
      uz: 'Aiogram3 yordamida biznes jarayonlarini avtomatlashtiruvchi Telegram botlar ishlab chiqish. Backend API, database va tashqi servislar bilan integratsiya qilish.',
      ru: 'Разработка Telegram-ботов, автоматизирующих бизнес-процессы, с помощью Aiogram3. Интеграция с backend API, базой данных и внешними сервисами.',
      en: 'Building Telegram bots that automate business processes using Aiogram3. Integration with backend APIs, databases and external services.',
    },
    icon: 'bot',
  },
  {
    id: 5,
    title: {
      uz: 'Backend Optimization',
      ru: 'Оптимизация backend',
      en: 'Backend Optimization',
    },
    description: {
      uz: "Mavjud backend tizimlarni tahlil qilish va yaxshilash. Caching, background tasks, async processing va performance optimization yechimlarini qo'llash.",
      ru: 'Анализ и улучшение существующих backend-систем. Применение решений по кешированию, фоновым задачам, асинхронной обработке и оптимизации производительности.',
      en: 'Analyzing and improving existing backend systems. Applying caching, background tasks, async processing and performance optimization solutions.',
    },
    icon: 'zap',
  },
  {
    id: 6,
    title: {
      uz: 'Deployment & DevOps',
      ru: 'Деплой и DevOps',
      en: 'Deployment & DevOps',
    },
    description: {
      uz: 'Backend loyihalarni serverga joylash va production muhitga tayyorlash. Docker, Docker Compose, NGINX, CI/CD pipeline va monitoring sozlash.',
      ru: 'Развёртывание backend-проектов на сервере и подготовка к production-среде. Настройка Docker, Docker Compose, NGINX, CI/CD пайплайнов и мониторинга.',
      en: 'Deploying backend projects to a server and preparing them for production. Setting up Docker, Docker Compose, NGINX, CI/CD pipelines and monitoring.',
    },
    icon: 'server',
  },
  {
    id: 7,
    title: {
      uz: 'Real-Time Applications',
      ru: 'Приложения реального времени',
      en: 'Real-Time Applications',
    },
    description: {
      uz: 'WebSocket va WebRTC yordamida real vaqt rejimida ishlaydigan ilovalar yaratish. Chat, notification va video communication tizimlari bilan ishlash.',
      ru: 'Создание приложений, работающих в реальном времени, с помощью WebSocket и WebRTC. Работа с чатами, уведомлениями и системами видеосвязи.',
      en: 'Building real-time applications with WebSocket and WebRTC. Working with chat, notifications and video communication systems.',
    },
    icon: 'radio',
  },
  {
    id: 8,
    title: {
      uz: 'Third Party Integrations',
      ru: 'Сторонние интеграции',
      en: 'Third Party Integrations',
    },
    description: {
      uz: 'Tashqi API va servislarni backend tizimlarga ulash. Payment, AI API, storage va boshqa integratsiyalar bilan ishlash.',
      ru: 'Подключение внешних API и сервисов к backend-системам. Работа с платёжными системами, AI API, хранилищами и другими интеграциями.',
      en: 'Connecting external APIs and services to backend systems. Working with payments, AI APIs, storage and other integrations.',
    },
    icon: 'link',
  },
];

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: {
      uz: "Backend Python Django (Standard)",
      ru: "Backend Python Django (Standard)",
      en: "Backend Python Django (Standard)",
    },
    issuer: "Najot Ta'lim",
    description: {
      uz: "Python, Django, REST API, PostgreSQL, autentifikatsiya, joylashuv va haqiqiy loyiha ishlab chiqishga yo‘naltirilgan intensiv backend dasturlash dasturini tamomladim.",
      ru: "Я успешно завершил интенсивную программу backend-разработки, охватывающую Python, Django, REST API, PostgreSQL, аутентификацию, развёртывание и разработку реального проекта.",
      en: "I completed an intensive backend programming program focused on Python, Django, REST API, PostgreSQL, authentication, deployment and building a real-world project.",
    },
    issueDate: '2024',
    image: '/certificates/NAJOT_TALIM_CERTIFICATE.jpg',
    category: 'Backend',
    featured: true,
  },
  {
    id: 2,
    title: {
      uz: "Backend Python Django Diploma",
      ru: "Backend Python Django Diploma",
      en: "Backend Python Django Diploma",
    },
    issuer: "Najot Ta'lim",
    description: {
      uz: "Backend Python Django (Standard) dasturini muvaffaqiyatli tamomlab, barcha bitirish talablari bajarildi.",
      ru: "Я успешно окончил программу Backend Python Django (Standard) и выполнил все требования для выпуска.",
      en: "I successfully completed the Backend Python Django (Standard) program and met all graduation requirements.",
    },
    issueDate: '2024',
    image: '/certificates/NAJOT_TALIM_DIPLOM.jpg',
    category: 'Backend',
    featured: true,
  },
  {
    id: 3,
    title: {
      uz: 'International Cybersecurity CTF 2026',
      ru: 'International Cybersecurity CTF 2026',
      en: 'International Cybersecurity CTF 2026',
    },
    issuer: 'Central Asian University',
    description: {
      uz: 'Xalqaro Kibertahdid CTF musobaqasida ishtirok etib, amaliy muammolarni hal qilish va kibertahdid ko‘nikmalarini namoyish etdim.',
      ru: 'Я принял участие в международном соревновании по кибербезопасности CTF, продемонстрировав навыки решения практических задач и кибербезопасности.',
      en: 'I participated in the International Cybersecurity CTF competition, demonstrating practical problem-solving and cybersecurity skills.',
    },
    issueDate: '2026',
    image: '/certificates/CAU_TEACH_HACK_26_CERTIFICATE.jpg',
    category: 'Cybersecurity',
    featured: true,
  },
  {
    id: 4,
    title: {
      uz: 'Neurogansta Training Program',
      ru: 'Neurogansta Training Program',
      en: 'Neurogansta Training Program',
    },
    issuer: 'Neurogansta',
    description: {
      uz: 'Neurogansta sertifikatlashtirish dasturini AI va neyron tarmoqlarni amaliy ravishda sozlash hamda ishlab chiqarishga tayyor ML pipeline’lari bo‘yicha tamomladim.',
      ru: 'Я прошел программу сертификации Neurogansta по практическому конфигурированию AI и нейронных сетей, а также production-ready ML-пайплайнам.',
      en: 'I completed the Neurogansta certification program on practically configuring AI and neural networks and production-ready ML pipelines.',
    },
    issueDate: '2025',
    image: '/certificates/NEUROGANSTA_SERTIFICATE.jpg',
    category: 'AI & ML',
    featured: false,
  },
  {
    id: 5,
    title: {
      uz: 'Foundation sertifikati',
      ru: 'Сертификат Foundation',
      en: 'Foundation Certificate',
    },
    issuer: 'International Digital University',
    description: {
      uz: 'International Digital University tasdiqlangan Foundation dasturini muvaffaqiyatli tamomladim.',
      ru: 'Я успешно завершил утверждённую программу Foundation в International Digital University.',
      en: 'I successfully completed the approved Foundation Programme at International Digital University.',
    },
    issueDate: '20.07.2026',
    image: '/certificates/FOUNDATION_CERTIFICATE.jpg',
    category: 'Education',
    featured: true,
  },
];

export const contactData: ContactData = {
  description: {
    uz: 'Backend tizimlar, API xizmatlar yoki yangi imkoniyatlar bo‘yicha hamkorlik uchun bog‘lanishingiz mumkin.',
    ru: 'Вы можете связаться со мной для сотрудничества по backend-системам, API-сервисам или новым возможностям.',
    en: 'You can get in touch to collaborate on backend systems, API services, or new opportunities.',
  },
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
  {
    label: { uz: 'Yakunlangan Loyihalar', ru: 'Завершённых проектов', en: 'Completed Projects' },
    value: 8,
    suffix: { uz: '+', ru: '+', en: '+' },
    icon: 'projects',
  },
  {
    label: { uz: 'Texnologiyalar', ru: 'Технологий', en: 'Technologies' },
    value: 25,
    suffix: { uz: '+', ru: '+', en: '+' },
    icon: 'tech',
  },
  {
    label: { uz: 'Git Commits', ru: 'Git Commits', en: 'Git Commits' },
    value: 1200,
    suffix: { uz: '+', ru: '+', en: '+' },
    icon: 'git',
  },
  {
    label: { uz: 'Backend Tajriba', ru: 'Лет опыта', en: 'Years Experience' },
    value: 2,
    suffix: { uz: ' yil', ru: ' лет', en: ' yrs' },
    icon: 'exp',
  },
];

export const quoteData = {
  text: 'First, solve the problem. Then, write the code.',
  author: 'John Johnson',
};

export const githubUsername = 'RustamovAkrom';
