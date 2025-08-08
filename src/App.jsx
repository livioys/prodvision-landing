import React from 'react';

export default function App() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img
        src="/logo.png"
        alt="ProdVision Logo"
        style={{ maxWidth: '180px', marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '3rem', margin: '1rem 0' }}>ProdVision</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center' }}>
        Turn your existing security cameras into real-time production intelligence.
      </p>

      <section style={{ maxWidth: '700px', textAlign: 'left', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What the Platform Does</h2>
        <ul>
          <li>Detect production inefficiencies</li>
          <li>Monitor equipment usage and utilization</li>
          <li>Track safety compliance and identify risks</li>
          <li>Reduce downtime with real-time alerts</li>
          <li>Improve decision-making with AI-powered insights</li>
        </ul>
      </section>

      <section style={{ maxWidth: '700px', textAlign: 'left', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why It Matters</h2>
        <p>
          Small and mid-sized manufacturers face increasing pressure to modernize. ProdVision helps bridge the gap by delivering affordable, AI-driven visibility into operations — without expensive hardware or lengthy setup.
        </p>
      </section>

      <section style={{ maxWidth: '700px', textAlign: 'left', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who It’s For</h2>
        <p>
          Plant managers, operations directors, and business owners who want to:
        </p>
        <ul>
          <li>Gain real-time visibility</li>
          <li>Improve training and safety</li>
          <li>Reduce costly downtime</li>
          <li>Enhance productivity without major investments</li>
        </ul>
      </section>

      <button style={{
        backgroundColor: '#1f8ef1',
        color: '#fff',
        padding: '1rem 2.5rem',
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        marginTop: '4rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}>
        Request Free Demo
      </button>
    </div>
  );
}
