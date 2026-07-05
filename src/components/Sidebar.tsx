'use client';
import { LayoutDashboard, Globe, Users, ShieldAlert, FileText, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <div className="logo-container">
        <h2 className="logo-text">
          <span className="logo-accent">AI</span> Command Center
        </h2>
      </div>
      
      <nav className="nav-menu">
        <a href="#" className="nav-link active">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-link">
          <Globe size={18} />
          <span>Websites</span>
        </a>
        <a href="#" className="nav-link">
          <Users size={18} />
          <span>Active Agents</span>
        </a>
        <a href="#" className="nav-link">
          <ShieldAlert size={18} />
          <span>Approvals</span>
          <span className="badge-danger">3</span>
        </a>
        <a href="#" className="nav-link">
          <FileText size={18} />
          <span>Reports</span>
        </a>
      </nav>

      <div className="sidebar-footer">
        <a href="#" className="nav-link">
          <Settings size={18} />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
}
