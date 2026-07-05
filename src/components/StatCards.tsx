'use client';
import { Bot, ShieldAlert } from 'lucide-react';

export default function StatCards() {
  return (
    <section className="stats-grid">
      <div className="card stat-card">
        <div className="stat-header">
          <h3>Active Fleet</h3>
          <Bot className="text-accent" size={20} />
        </div>
        <p className="stat-desc">Agents currently deployed across all projects.</p>
        <div className="stat-value-container">
          <span className="pulse-dot success"></span>
          <span className="stat-value">6 Agents</span>
        </div>
      </div>
      
      <div className="card stat-card warning-glow">
        <div className="stat-header">
          <h3>Action Required</h3>
          <ShieldAlert className="text-warning" size={20} />
        </div>
        <p className="stat-desc">High-risk actions blocked in the approval queue.</p>
        <div className="stat-value-container">
          <span className="pulse-dot warning"></span>
          <span className="stat-value">0 Queued</span>
        </div>
      </div>
    </section>
  );
}
