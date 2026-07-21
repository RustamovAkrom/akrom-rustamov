import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/data';
import { localize, resolveLocaleFromRequest } from '@/lib/i18n-data';

export async function GET() {
    const locale = await resolveLocaleFromRequest();
    return NextResponse.json(localize(servicesData, locale), {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
