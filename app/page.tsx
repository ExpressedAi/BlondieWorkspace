import { BlondieShell } from '../components/BlondieShell';

export default function Page() {
  return (
    <BlondieShell>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: 24 }}>
        <header style={{ padding: '12px 0' }}>
          <h2>Blondie</h2>
        </header>
        <section style={{ background: '#f7f7f8', borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>Thinking…</div>
          <p style={{ margin: 0 }}>
            First, quantum computing is a field that leverages quantum mechanics to process information. It's not about polarity in the traditional sense, like positive and negative charges. Instead, it deals with quantum bits, or qubits, which can exist in superpositions of states. The concept of “opposite” or “complementary polarity” might be confusing here. In quantum mechanics, there are complementary properties, like position and momentum, which cannot be measured simultaneously with arbitrary precision due to the Heisenberg uncertainty principle. But that's not exactly what the user is asking. Perhaps they're thinking about classical computing as the opposite of quantum computing. Classical computing uses bits that are either 0 or 1, while quantum computing uses qubits that can be in superpositions, entangled states, etc. So, in a way, classical computing could be seen as the “opposite” or “complementary” to quantum computing.
          </p>
        </section>
        <footer style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <input placeholder="How can Blondie help?" style={{ flex: 1, padding: 12, borderRadius: 20, border: '1px solid #ddd' }} />
          <button title="Send">🡢</button>
        </footer>
      </div>
    </BlondieShell>
  );
}
