import { NextResponse } from 'next/server';
import { certificatesData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(certificatesData, {
        headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        },
    });
}

