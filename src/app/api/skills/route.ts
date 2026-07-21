import { NextResponse } from 'next/server';
import { skillsData } from '@/lib/data';
import { localize, resolveLocaleFromRequest } from '@/lib/i18n-data';

export async function GET() {
    const locale = await resolveLocaleFromRequest();
    return NextResponse.json(localize(skillsData, locale), {
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
