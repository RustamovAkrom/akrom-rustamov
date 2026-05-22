import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(servicesData, {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}

