import { NextResponse } from 'next/server';

interface SkillCategory {
    id: number;
    title: string;
    pills: Array<{ name: string; highlight?: boolean }>;
}

const skillsData: SkillCategory[] = [
    {
        id: 1,
        title: "Backend & Core",
        pills: [
            { name: "Python", highlight: true },
            { name: "FastAPI", highlight: true },
            { name: "Django", highlight: true },
            { name: "SQLAlchemy", highlight: false },
            { name: "Pydantic", highlight: false },
            { name: "Aiogram 3", highlight: false }
        ]
    },
    {
        id: 2,
        title: "Architecture",
        pills: [
            { name: "REST API Design", highlight: true },
            { name: "Clean Arch.", highlight: true },
            { name: "JWT Auth", highlight: false },
            { name: "RBAC", highlight: false },
            { name: "Async Programming", highlight: false }
        ]
    },
    {
        id: 3,
        title: "DB & Messaging",
        pills: [
            { name: "PostgreSQL", highlight: true },
            { name: "Redis", highlight: true },
            { name: "RabbitMQ", highlight: false },
            { name: "Celery", highlight: false }
        ]
    },
    {
        id: 4,
        title: "DevOps",
        pills: [
            { name: "Docker", highlight: true },
            { name: "Linux", highlight: true },
            { name: "NGINX", highlight: false },
            { name: "Git / GitHub", highlight: false }
        ]
    },
    {
        id: 5,
        title: "Frontend (Basic)",
        pills: [
            { name: "HTML / CSS", highlight: false },
            { name: "JavaScript", highlight: false },
            { name: "React", highlight: false },
            { name: "Next.js", highlight: false }
        ]
    },
    {
        id: 6,
        title: "Languages",
        pills: [
            { name: "Uzbek (Native)", highlight: true },
            { name: "Russian (B2)", highlight: false },
            { name: "English (B2)", highlight: false }
        ]
    }
];

export async function GET() {
    return NextResponse.json(skillsData, {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
