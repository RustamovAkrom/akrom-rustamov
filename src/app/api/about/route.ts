import { NextResponse } from 'next/server';
import { aboutData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(aboutData, {
        headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        },
    });
}

export const revalidate = 60;
