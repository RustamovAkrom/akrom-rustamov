import { NextResponse } from 'next/server';

export async function GET() {
    const projectsData = [
        {
            id: 1,
            title: "Marketplace",
            subtitle: "E-commerce Backend Platform",
            description: "Scalable REST API with JWT auth, RBAC, modular architecture.",
            pills: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "RBAC"],
            hue: 210,
            github: "https://github.com/RustamovAkrom/Marketplace-FastAPI"
        },
        {
            id: 2,
            title: "DeepSeek Bot",
            subtitle: "AI Telegram Assistant",
            description: "AI Telegram bot with async architecture.",
            pills: ["Aiogram 3", "DeepSeek API"],
            hue: 160,
            github: "https://github.com/RustamovAkrom/DeepSeek_TelegramBot"
        },
        {
            id: 3,
            title: "Viberfy",
            subtitle: "Music Web App",
            description: "Full-stack platform with Django + Next.js.",
            pills: ["Django", "Next.js"],
            hue: 340,
            github: "https://github.com/RustamovAkrom/Viberfy"
        }
    ];

    return NextResponse.json(projectsData, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
