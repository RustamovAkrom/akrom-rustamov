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
    title: 'Data',
    items: [
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: 'PG', accent: '#336791' },
      { name: 'Redis', href: 'https://redis.io/', icon: 'RD', accent: '#dc2626' },
      { name: 'RabbitMQ', href: 'https://www.rabbitmq.com/', icon: 'RMQ', accent: '#f97316' },
    ],
  },
  {
    title: 'Cybersecurity',
    items: [
      { name: 'Kali Linux', href: 'https://www.kali.org/', icon: 'KL', accent: '#557C94' },
      { name: 'Burp Suite', href: 'https://portswigger.net/burp', icon: 'BS', accent: '#FF6633' },
      { name: 'Nmap', href: 'https://nmap.org/', icon: 'NM', accent: '#4E7D96' },
      { name: 'Wireshark', href: 'https://www.wireshark.org/', icon: 'WS', accent: '#1679A1' },
      { name: 'Metasploit', href: 'https://www.metasploit.com/', icon: 'MS', accent: '#2596CD' },
      { name: 'OWASP ZAP', href: 'https://www.zaproxy.org/', icon: 'ZAP', accent: '#00549E' },
      { name: 'SQLmap', href: 'https://sqlmap.org/', icon: 'SQL', accent: '#E45B20' },
      { name: 'Gobuster', href: 'https://github.com/OJ/gobuster', icon: 'GB', accent: '#6D8E3A' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Linux', href: 'https://kernel.org/', icon: 'LX', accent: '#FCC624' },
      { name: 'Git', href: 'https://git-scm.com/', icon: 'GT', accent: '#F05032' },
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
      { name: 'HTML', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'H5', accent: '#E34F26' },
      { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'C3', accent: '#1572B6' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'JS', accent: '#F7DF1E' },
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
      uz: 'Biznes uchun sayt va landing page',
      ru: 'Сайт или landing page для бизнеса',
      en: 'Business websites and landing pages',
    },
    description: {
      uz: 'Xizmat va mahsulotlaringizni aniq ko‘rsatadigan, mobilga mos va mijozlarni murojaatga olib keladigan sayt.',
      ru: 'Покажет услуги и преимущества компании, удобно откроется на телефоне и поможет посетителю оставить заявку.',
      en: 'Present your services clearly, work smoothly on mobile, and guide visitors toward contacting your business.',
    },
    icon: 'code',
  },
  {
    id: 2,
    title: {
      uz: 'Shaxsiy portfolio va CV sayti',
      ru: 'Личный сайт-портфолио и CV',
      en: 'Personal portfolio and career website',
    },
    description: {
      uz: 'Mutaxassisligingiz, tajribangiz va loyihalaringizni bitta professional sahifada jamlab, ish beruvchi yoki mijozlarga taqdim eting.',
      ru: 'Соберу опыт, проекты и контакты в персональном сайте, который удобно отправить работодателю или потенциальному клиенту.',
      en: 'Bring your experience, projects, and contact details together in a polished site for employers and clients.',
    },
    icon: 'code',
  },
  {
    id: 3,
    title: {
      uz: 'Internet-do‘kon va buyurtmalar',
      ru: 'Интернет-магазин и приём заказов',
      en: 'Online store and order flow',
    },
    description: {
      uz: 'Mahsulot katalogi, buyurtma berish va boshqaruv paneli bilan savdoni internetga olib chiqadigan web-sayt.',
      ru: 'Каталог товаров, оформление заказов и админ-панель — чтобы начать принимать и обрабатывать продажи онлайн.',
      en: 'A product catalog, checkout flow, and admin tools to start taking and managing orders online.',
    },
    icon: 'database',
  },
  {
    id: 4,
    title: {
      uz: 'Backend-servisni noldan productiongacha yaratish',
      ru: 'Создание backend-сервиса с нуля до production',
      en: 'Build a backend service from scratch to production',
    },
    description: {
      uz: 'Talablarni aniqlashdan FastAPI yoki Django’da API, autentifikatsiya va ma’lumotlar bazasini yaratish, Docker orqali joylashtirish va production muhitiga tayyorlashgacha.',
      ru: 'От проектирования API, авторизации и базы данных на FastAPI/Django до Docker-развёртывания, документации и подготовки к production.',
      en: 'From API, authentication, and database design with FastAPI/Django to Docker deployment, documentation, and production readiness.',
    },
    icon: 'code',
  },
  {
    id: 5,
    title: {
      uz: 'Telegram-botlar va avtomatlashtirish',
      ru: 'Telegram-боты и автоматизация',
      en: 'Telegram bots and automation',
    },
    description: {
      uz: 'Buyurtmalar, bildirishnomalar va takroriy ishlarni bot orqali boshqaring. Aiogram yordamida botni API, ma’lumotlar bazasi va tashqi xizmatlarga ulayman.',
      ru: 'Заказы, уведомления и повторяющиеся задачи — в одном боте. Подключу Telegram через Aiogram к API, базе данных и нужным сервисам.',
      en: 'Handle orders, notifications, and repetitive tasks through a bot. I connect Telegram with your APIs, database, and external services using Aiogram.',
    },
    icon: 'bot',
  },
  {
    id: 6,
    title: {
      uz: 'Tashqi servislarni ulash',
      ru: 'Интеграция внешних сервисов',
      en: 'Third-party service integrations',
    },
    description: {
      uz: 'Sayt yoki backendni to‘lov, xarita, CRM, AI va boshqa API xizmatlariga ulab, ma’lumot almashinuvini avtomatlashtiraman.',
      ru: 'Подключу сайт или backend к платежам, CRM, картам, AI API и другим сервисам, чтобы данные передавались автоматически.',
      en: 'Connect your website or backend to payment providers, CRMs, maps, AI APIs, and other services.',
    },
    icon: 'link',
  },
  {
    id: 7,
    title: {
      uz: 'Mavjud backend-servisni yaxshilash',
      ru: 'Улучшение существующего backend-сервиса',
      en: 'Improve an existing backend service',
    },
    description: {
      uz: 'Mavjud kod va arxitekturani tahlil qilib, unumdorlik, barqarorlik va xavfsizlik muammolarini aniqlayman. Tuzatishlarni kiritib, servisni yaxshilayman.',
      ru: 'Проанализирую код и архитектуру, найду проблемы с производительностью, стабильностью и безопасностью, затем предложу и внесу улучшения.',
      en: 'Review the code and architecture, identify performance, reliability, and security issues, then implement practical improvements.',
    },
    icon: 'zap',
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
    hackthebox: {
      url: 'https://profile.hackthebox.com/profile/019ff68d-b399-7237-a62e-b85bbafe0582',
      username: 'Hack The Box',
    },
  },
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
