export default function Home() {
  return (
    <div className="layout-grid">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em', color: '#fff' }}>
          <span style={{ color: 'var(--accent)' }}>AI</span> Command Center
        </h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a href="#" style={{ padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 500 }}>Dashboard</a>
          <a href="#" className="text-muted" style={{ padding: '8px 12px', borderRadius: '8px' }}>Websites</a>
          <a href="#" className="text-muted" style={{ padding: '8px 12px', borderRadius: '8px' }}>Active Agents</a>
          <a href="#" className="text-muted" style={{ padding: '8px 12px', borderRadius: '8px' }}>Approvals <span style={{ background: 'var(--accent)', color: '#000', padding: '2px 8px', borderRadius: '12px', fontSize: '12px', marginLeft: 'auto', fontWeight: 800 }}>3</span></a>
          <a href="#" className="text-muted" style={{ padding: '8px 12px', borderRadius: '8px' }}>Reports</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 className="header-title">Command Overview</h1>
            <p className="text-muted">Master Orchestrator is running smoothly. 3 approvals pending.</p>
          </div>
          <button className="btn-primary">
            + Delegate New Task
          </button>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '8px' }}>YaarWin Team</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>SEO Agent is auditing new articles. FB Agent just created a draft.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', alignSelf: 'center' }}></span>
              <span style={{ fontSize: '0.85rem' }}>6 Agents Active</span>
            </div>
          </div>
          
          <div className="card" style={{ borderColor: 'var(--border-focus)', boxShadow: '0 8px 32px var(--accent-glow)' }}>
            <h3 style={{ marginBottom: '8px' }}>Pending Approvals</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>High-risk actions require your final review before execution.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', alignSelf: 'center' }}></span>
              <span style={{ fontSize: '0.85rem' }}>3 Actions Queued</span>
            </div>
          </div>
        </section>

        <section className="glass-panel" style={{ padding: '24px' }}>
          <h2 style={{ marginBottom: '16px' }}>Task Execution Log</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Analyze URL Status in GSC</strong>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>SEO Agent • yaarwinapp.co</span>
              </div>
              <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>Completed</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Draft Cricket Promotion</strong>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>Marketing Agent • yaarwinapp.co</span>
              </div>
              <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>Awaiting Approval</span>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
