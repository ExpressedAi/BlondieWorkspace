import React, { useRef } from 'react';

export function BlondieShell({ children, right }: { children: any; right?: any }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 420px', height: '100vh' }}>
      <aside style={{ borderRight: '1px solid #eee', padding: 8, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontWeight: 700, textAlign: 'center' }}>B</div>
        <nav style={{ display: 'grid', gap: 12 }}>
          <button title="Chat">💬</button>
          <button title="Search">🔎</button>
          <button title="Tasks">✅</button>
          <button title="Files">📁</button>
          <button title="Settings">⚙️</button>
        </nav>
      </aside>
      <main style={{ overflow: 'auto' }}>{children}</main>
      <section style={{ borderLeft: '1px solid #eee', padding: 16 }}>
        <h3>Artifacts</h3>
        <p>Auxiliary work will be displayed here. As you work with Blondie, any generated artifacts like code blocks, documents, or other resources will appear in this panel for easy access and review.</p>
        {right}
      </section>
    </div>
  );
}
