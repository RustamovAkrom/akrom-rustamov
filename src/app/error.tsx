'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)' }}>
        Something went wrong
      </h2>
      <button
        onClick={reset}
        className="btn solid"
        style={{ cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  );
}
