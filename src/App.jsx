import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '3rem' }}>
      <img src="/logo.png" alt="ProdVision Logo" style={{ maxWidth: '200px' }} />
      <h1>ProdVision</h1>
      <p>Turn your existing security cameras into real-time production intelligence.</p>
      <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '2rem auto' }}>
        <li>Detect production inefficiencies</li>
        <li>Monitor equipment usage and utilization</li>
        <li>Track safety compliance and identify risks</li>
        <li>Reduce downtime with real-time alerts</li>
        <li>Improve decision-making with AI-powered insights</li>
      </ul>
      <button style={{
        backgroundColor: '#0070f3',
        color: 'white',
        padding: '1rem 2rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Request Free Demo
      </button>
    </div>
  );
}