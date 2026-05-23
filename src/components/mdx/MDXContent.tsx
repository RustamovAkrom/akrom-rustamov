/* eslint-disable react-hooks/static-components */
"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import type { ComponentPropsWithoutRef } from "react";

/* Custom MDX components matching existing blog styles */
const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="blog-article__h2" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="blog-article__p" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="blog-article__ul" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="blog-article__ul" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre className="blog-article__code" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="blog-article__inline-code" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong style={{ color: "var(--accent)" }} {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="blog-post-card__link"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  hr: () => <hr className="blog-article__divider" />,
};

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
