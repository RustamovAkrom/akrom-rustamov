import { NextResponse } from 'next/server';

const contactData = {
    social: {
        github: {
            url: "https://github.com/RustamovAkrom",
            username: "github.com/RustamovAkrom"
        },
        linkedin: {
            url: "https://linkedin.com/in/akrom-rustamov",
            username: "LinkedIn"
        }
    },
    phone: "+998 95 878 62 77",
    email: "akrom.rustamov@example.com",
    description: "Open to freelance, full-time roles, and interesting collaborations."
};

export async function GET() {
    return NextResponse.json(contactData, {
        headers: {
            'Cache-Control': 'public, s-maxage=86400',
        },
    });
}
