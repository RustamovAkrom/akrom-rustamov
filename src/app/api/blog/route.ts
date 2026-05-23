import { NextResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';

export async function GET() {
  return NextResponse.json(allPosts);
}
