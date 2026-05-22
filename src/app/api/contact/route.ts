import { NextResponse } from 'next/server';
import { contactData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(contactData, {
        headers: {
            'Cache-Control': 'public, s-maxage=86400',
        },
    });
}

