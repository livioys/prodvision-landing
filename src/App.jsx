import React from 'react';

export default function App() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#0f172a', // Deep navy blue
      color: '#cbd5e1',           // Metallic silver
      minHeight: '100vh',
      padding: '3rem',
      textAlign: 'center',
    }}>
      <img
        src="/logo.png"
        alt="ProdVision Logo"
        style={{ maxWidth: '180px', marginBottom: '2rem' }}
      />

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#e2e8f0' }}>
        ProdVision
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#94a3b8' }}>
        Turn your existing security cameras into real-time production intelligence.
      </p>

      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
        backgroundColor: '#1e293b',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.3)',
      }}>
        <h2 style={{ color: '#38bdf8', marginBottom: '1rem' }}>What the platform does</h2>
        <ul style={{ lineHeight: '1.8rem' }}>
          <li>Detect production inefficiencies</li>
          <li>Monitor equipment usage and utilization</li>
          <li>Track safety compliance and identify risks</li>
          <li>Reduce downtime with real-time alerts</li>
          <li>Improve decision-making with AI-powered insights</li>
        </ul>

        <h2 style={{ color: '#38bdf8', margin: '2rem 0 1rem' }}>Why it matters</h2>
        <p>
          Many manufacturers face challenges like unplanned downtime, high labor costs, and shrinking margins.
          ProdVision provides affordable, actionable insights using tools you already own — your cameras.
        </p>

        <h2 style={{ color: '#38bdf8', margin: '2rem 0 1rem' }}>Who it’s for</h2>
        <p>
          Ideal for small to mid-sized manufacturers, plant managers, operations leads, and continuous improvement teams looking to optimize performance and safety.
        </p>
      </section>

      <button style={{
        marginTop: '3rem',
        backgroundColor: '#2563eb',
        color: '#f8fafc',
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
      }}>
        Request Free Demo
      </button>
    </div>
  );
}
