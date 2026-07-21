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
    uz: 'Salom, men Akrom Rustamov — <strong>Python Backend Developer</strong>.',
    ru: 'Привет, я Акром Рустамов — <strong>Python Backend Developer</strong>.',
    en: 'Hi, I’m Akrom Rustamov — <strong>Python Backend Developer</strong>.',
  },
  body: {
    uz: 'Backend tizimlarni loyihalash, REST API xizmatlarini ishlab chiqish va ilovalarni development bosqichidan production muhitigacha olib chiqishga ixtisoslashganman.\n\nFastAPI va Django frameworklari yordamida kengaytiriladigan, xavfsiz va barqaror backend servislar yarataman. Ma\'lumotlar bazasi arxitekturasi, authentication tizimlari, async processing, background tasks va real-time kommunikatsiyalar bilan ishlash tajribasiga egaman.\n\nBackend servislarni Docker orqali containerization qilish, CI/CD pipeline sozlash, monitoring va logging tizimlarini ulash bo\'yicha amaliy tajribaga egaman.\n\nAsosiy maqsadim — toza arxitektura, sifatli kod va uzoq muddat qo\'llab-quvvatlanadigan backend yechimlar yaratish.',
    ru: 'Я специализируюсь на проектировании backend-систем, разработке REST API сервисов и доведении приложений от этапа разработки до production-среды.\n\nСоздаю масштабируемые, безопасные и стабильные backend-сервисы с помощью фреймворков FastAPI и Django. Имею опыт работы с архитектурой баз данных, системами аутентификации, асинхронной обработкой, фоновыми задачами и коммуникациями в реальном времени.\n\nИмею практический опыт контейнеризации backend-сервисов через Docker, настройки CI/CD пайплайнов, подключения систем мониторинга и логирования.\n\nМоя главная цель — создавать чистую архитектуру, качественный код и долго поддерживаемые backend-решения.',
    en: 'I specialize in designing backend systems, developing REST API services and bringing applications from the development stage all the way to production.\n\nI build scalable, secure and stable backend services using the FastAPI and Django frameworks. I have experience with database architecture, authentication systems, async processing, background tasks and real-time communications.\n\nI have hands-on experience containerizing backend services with Docker, configuring CI/CD pipelines, and wiring up monitoring and logging systems.\n\nMy main goal is to create clean architecture, quality code and long-term maintainable backend solutions.',
  },
  stats: [
    { value: 3, label: { uz: 'Loyihalar', ru: 'Проекты', en: 'Projects' }, isNumber: true, suffix: { uz: '+', ru: '+', en: '+' } },
    { value: 'B2', label: { uz: 'Ingliz tili', ru: 'Английский язык', en: 'English' }, isNumber: false },
    { value: 2, label: { uz: 'Yil Tajriba', ru: 'Лет опыта', en: 'Years Experience' }, isNumber: true, suffix: { uz: '+', ru: '+', en: '+' } },
  ],
  timeline: [
    {
      role: {
        uz: 'Freelance Backend Developer',
        ru: 'Фриланс Backend-разработчик',
        en: 'Freelance Backend Developer',
      },
      year: '2024 – 2025',
      description: {
        uz: 'REST APIs, JWT/RBAC, DB optimization. FastAPI & Django uchun production-ready backendlar.',
        ru: 'REST API, JWT/RBAC, оптимизация БД. Production-ready бэкенды на FastAPI и Django.',
        en: 'REST APIs, JWT/RBAC, DB optimization. Production-ready backends for FastAPI & Django.',
      },
    },
    {
      role: {
        uz: "Najot Ta'lim — Backend Course",
        ru: "Najot Ta'lim — курс Backend",
        en: "Najot Ta'lim — Backend Course",
      },
      year: '2023 – 2024',
      description: {
        uz: 'Intensive Python, Django, REST API fundamentals.',
        ru: 'Интенсивное изучение Python, Django, основ REST API.',
        en: 'Intensive Python, Django, REST API fundamentals.',
      },
    },
    {
      role: {
        uz: 'IDU Tashkent — BSc IT (Cybersecurity)',
        ru: 'IDU Tashkent — BSc IT (Кибербезопасность)',
        en: 'IDU Tashkent — BSc IT (Cybersecurity)',
      },
      year: '2025 – Present',
      description: {
        uz: 'Information Technology, Cybersecurity track.',
        ru: 'Информационные технологии, направление кибербезопасности.',
        en: 'Information Technology, Cybersecurity track.',
      },
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
