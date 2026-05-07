import { NextResponse } from 'next/server';

// Типизация данных
interface StatItem {
    value: string | number;
    label: string;
    isNumber?: boolean;
    suffix?: string;
}

interface TimelineItem {
    role: string;
    year: string;
    description: string;
    isLive?: boolean;
}

interface AboutData {
    lead: string;
    body: string;
    stats: StatItem[];
    timeline: TimelineItem[];
}

// Данные из API - легко менять без пересборки
const aboutData: AboutData = {
    lead: 'Backend Engineer specializing in <strong>FastAPI</strong> and <strong>Django</strong>. Experienced in REST APIs, JWT/RBAC auth, and async services.',
    body: 'Focused on clean architecture, performance optimization, and secure backend design. Pursuing BSc in IT (Cybersecurity) at IDU, Tashkent.',
    stats: [
        { value: 3, label: 'Projects', isNumber: true, suffix: '+' },
        { value: 'B2', label: 'English', isNumber: false },
        { value: 2, label: 'Yrs Coding', isNumber: true, suffix: '+' }
    ],
    timeline: [
        {
            role: 'Freelance Backend Developer',
            year: '2024 – 2025',
            description: 'REST APIs, JWT/RBAC, DB optimization. FastAPI & Django for clients. Production-ready.'
        },
        {
            role: "Najot Ta'lim — Backend Course",
            year: '2023 – 2024',
            description: 'Intensive Python, Django, REST API fundamentals.'
        },
        {
            role: 'IDU Tashkent — BSc IT (Cybersecurity)',
            year: '2025 – Present',
            description: 'Information Technology, Cybersecurity track.',
            isLive: true
        }
    ]
};

// GET handler с правильными заголовками для кэширования
export async function GET() {
    return NextResponse.json(aboutData, {
        headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
    });
}

// Опционально: ревалидация через время (ISR)
export const revalidate = 60; // ревалидация каждые 60 секунд
