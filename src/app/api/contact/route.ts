import { NextResponse } from 'next/server';
import { contactData } from '@/lib/data';
import { localize, resolveLocaleFromRequest } from '@/lib/i18n-data';

export async function GET() {
    const locale = await resolveLocaleFromRequest();
    return NextResponse.json(localize(contactData, locale), {
        headers: {
            'Cache-Control': 'public, s-maxage=86400',
        },
    });
}
