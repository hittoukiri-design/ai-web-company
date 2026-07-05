'use client';
import { useState } from 'react';
import { Terminal, Send, Loader2 } from 'lucide-react';

export default function CommandInput({ onCommandSent }: { onCommandSent: () => void }) {
  const [instruction, setInstruction] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instruction.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/orchestrator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          instruction,
          owner_id: 'owner_1'
        })
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback({ type: 'success', message: 'Command accepted and delegated.' });
        setInstruction('');
        onCommandSent();
      } else {
        setFeedback({ type: 'error', message: data.message || data.error || 'Failed to dispatch command.' });
      }
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 5000);
    }
  };

  return (
    <div className="command-input-wrapper">
      <form onSubmit={handleSubmit} className="command-form glass-panel">
        <Terminal className="text-accent" size={20} />
        <input 
          type="text" 
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Delegate to AI (e.g. 'Audit articles and prep FB drafts for YaarWin')" 
          className="command-input"
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting || !instruction.trim()} className="command-btn">
          {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </form>
      {feedback && (
        <div className={`feedback-toast ${feedback.type}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}
