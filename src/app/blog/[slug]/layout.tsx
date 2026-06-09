import { allPosts } from "contentlayer/generated";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
