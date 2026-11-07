import { NextResponse } from 'next/server';
import { allPosts } from 'contentlayer/generated';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const locale = new URL(request.url).searchParams.get('locale') ?? 'uz';
  const post = allPosts.find((item) => item.slug === slug && item.locale === locale);

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
