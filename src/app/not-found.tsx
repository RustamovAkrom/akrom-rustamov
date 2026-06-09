"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found">
          <div className="not-found__error">404</div>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__description">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="not-found__actions">
            <Link href="/" className="btn solid">
              ← Go Home
            </Link>
            <Link href="/blog" className="btn ghost">
              View Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
