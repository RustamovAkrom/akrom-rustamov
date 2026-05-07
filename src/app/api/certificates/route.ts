import { NextResponse } from 'next/server';

const certificatesData = [
    {
        id: 1,
        title: "Backend Development",
        organization: "Najot Ta'lim",
        year: "2023 – 2024",
        badge: "Verified",
        badgeType: "regular",
        link: "https://akrom-omega.vercel.app/certificates",
        inProgress: false
    },
    {
        id: 2,
        title: "Python & Django",
        organization: "Najot Ta'lim",
        year: "2023",
        badge: "Verified",
        badgeType: "regular",
        link: "https://akrom-omega.vercel.app/certificates",
        inProgress: false
    },
    {
        id: 3,
        title: "FastAPI Mastery",
        organization: "Self-directed / GitHub",
        year: "2024",
        badge: "Verified",
        badgeType: "regular",
        link: "https://akrom-omega.vercel.app/certificates",
        inProgress: false
    },
    {
        id: 4,
        title: "BSc Information Technology",
        organization: "IDU, Tashkent",
        year: "2025 – Present",
        badge: "In Progress",
        badgeType: "prog",
        link: "https://akrom-omega.vercel.app/certificates",
        inProgress: true
    },
    {
        id: 5,
        title: "New Certificate",
        organization: "Some Org",
        year: "2025",
        badge: "Verified",
        badgeType: "regular",
        link: "https://example.com",
        inProgress: false
    }

];

export async function GET() {
    return NextResponse.json(certificatesData, {
        headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        },
    });
}
