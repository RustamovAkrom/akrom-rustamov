import { NextResponse } from 'next/server';

const servicesData = [
    {
        id: 1,
        title: "Backend Development",
        description: "Production APIs with FastAPI & Django. Auth, caching, queues — built for real scale.",
        icon: "code"
    },
    {
        id: 2,
        title: "API Design",
        description: "Clean RESTful APIs, OpenAPI docs, versioning, validation. Developers will love them.",
        icon: "file"
    },
    {
        id: 3,
        title: "System Architecture",
        description: "Message queues, caching layers, microservices patterns, Docker deployment pipelines.",
        icon: "database"
    }
];

export async function GET() {
    return NextResponse.json(servicesData, {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
