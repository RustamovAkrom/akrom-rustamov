export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid var(--bd)',
          borderTopColor: 'var(--text)',
          animation: 'spin 1s linear infinite',
        }}
      />
    </div>
  );
}
