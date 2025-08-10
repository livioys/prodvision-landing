import React from 'react';

export default function App() {
  return (
    <div style={{
      fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      background: 'linear-gradient(180deg, #071422 0%, #16324a 100%)',
      color: '#e6eef6',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
        borderRadius: '16px',
        padding: '3rem',
        boxShadow: '0 10px 30px rgba(2,6,23,0.6)',
        border: '1px solid rgba(255,255,255,0.04)'
      }}>
        <img src="/logo.png" alt="ProdVision Logo" style={{ maxWidth: 160, margin: '0 auto 1.5rem' }} />

        <h1 style={{ fontSize: '2.25rem', margin: 0, color: '#f1f5f9' }}>ProdVision</h1>
        <p style={{ marginTop: '0.5rem', color: '#cbd5e1', fontSize: '1.05rem' }}>
          AI-driven production insights for small manufacturers
        </p>

        <div style={{ marginTop: '2.25rem', padding: '1.75rem', borderRadius: 12, background: 'rgba(255,255,255,0.02)' }}>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', color: '#e6f0fb' }}>Website Under Construction</h2>
          <p style={{ color: '#9fb3c9', margin: '0 auto', maxWidth: 680 }}>
            We&rsquo;re building something useful. In the meantime, request a free demo and we&rsquo;ll get back to you with pilot details and early access.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#demo" style={{
              display: 'inline-block',
              background: '#97a6b8',
              color: '#072033',
              padding: '0.9rem 1.4rem',
              borderRadius: '999px',
              fontWeight: 600,
              textDecoration: 'none'
            }}>Request Free Demo</a>

            <a href="mailto:contact@tryprodvision.com" style={{
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#cfe7ff',
              padding: '0.9rem 1.4rem',
              borderRadius: '999px',
              textDecoration: 'none'
            }}>contact@prodvision.ai</a>
          </div>

          <small style={{ display: 'block', marginTop: '1rem', color: '#6b89a1' }}>
            Want updates? Send us an email and we&rsquo;ll add you to the early-access list.
          </small>
        </div>

        <footer style={{ marginTop: '1.75rem', color: '#6789a5', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} ProdVision — Building practical AI for manufacturing
        </footer>
      </div>
    </div>
  );
}

