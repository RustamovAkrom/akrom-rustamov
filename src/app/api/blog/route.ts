import { NextResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';

export async function GET(request: Request) {
  const locale = new URL(request.url).searchParams.get('locale');
  const posts = locale ? allPosts.filter((post) => post.locale === locale) : allPosts;
  return NextResponse.json(posts);
}
