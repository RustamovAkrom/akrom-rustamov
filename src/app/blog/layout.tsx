import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Python backend development, FastAPI, Django, system design, APIs, and software engineering by Akrom Rustamov.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Backend Development Blog",
    description:
      "Articles on Python, FastAPI, Django, system design, APIs, and software engineering.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
