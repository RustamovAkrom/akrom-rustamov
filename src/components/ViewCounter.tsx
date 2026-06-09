"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Increment view
    fetch(`/api/blog/${slug}/views`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch((err) => {
        console.error("Failed to increment view:", err);
      });
  }, [slug]);

  return (
    <span className="blog-article__views mono">
      {views === null ? "..." : `${views} views`}
    </span>
  );
}
