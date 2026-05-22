import { NextResponse } from 'next/server';
import { skillsData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(skillsData, {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}

