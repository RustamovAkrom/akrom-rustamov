import { NextResponse } from 'next/server';
import { projectsData } from '@/lib/data';
import { localize, resolveLocaleFromRequest } from '@/lib/i18n-data';

export async function GET() {
    const locale = await resolveLocaleFromRequest();
    return NextResponse.json(localize(projectsData, locale), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
