import { NextResponse } from 'next/server';
import { aboutData } from '@/lib/data';
import { localize, resolveLocaleFromRequest } from '@/lib/i18n-data';

export async function GET() {
    const locale = await resolveLocaleFromRequest();
    return NextResponse.json(localize(aboutData, locale), {
        headers: {
            'Cache-Control': 'private, no-store',
        },
    });
}
