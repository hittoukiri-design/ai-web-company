'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import CommandInput from '@/components/CommandInput';
import StatCards from '@/components/StatCards';
import TaskList from '@/components/TaskList';

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCommandSent = () => {
    // Trigger a refetch in TaskList
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="layout-grid">
      <Sidebar />

      <main className="main-content">
        <header className="page-header">
          <div>
            <h1 className="header-title">Nexus Control</h1>
            <p className="text-muted">Master Orchestrator online. Awaiting directives.</p>
          </div>
        </header>

        <CommandInput onCommandSent={handleCommandSent} />
        
        <StatCards />
        
        <TaskList refreshTrigger={refreshTrigger} />
      </main>
    </div>
  );
}
