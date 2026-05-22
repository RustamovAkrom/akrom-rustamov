import { NextResponse } from 'next/server';
import { projectsData } from '@/lib/data';

export async function GET() {
    return NextResponse.json(projectsData, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
