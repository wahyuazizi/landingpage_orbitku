import { useState } from 'react';
import { CalendarDays, ChevronRight, Radio } from 'lucide-react';
import type { Creator } from '../data/creators';

type Props = { items: Creator[]; compact?: boolean };
const filters = ['Semua', 'Live', 'Terjadwal'] as const;

export default function DashboardPreview({ items, compact = false }: Props) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Semua');
  const [expanded, setExpanded] = useState<string | null>(null);
  const visible = items.filter(item => filter === 'Semua' || (filter === 'Live' ? item.live : !item.live));

  return <div className={`dashboard-preview ${compact ? 'compact' : ''}`}>
    <div className="window-bar" aria-hidden="true"><i /><i /><i /><span>orbitku / semestamu</span></div>
    <div className="dashboard-inner">
      <div className="dashboard-heading"><h3>Semestamu</h3><span className="tiny-orbit" aria-hidden="true" /></div>
      <div className="filter-list" role="group" aria-label="Filter contoh dashboard">
        {filters.map(item => <button type="button" key={item} aria-pressed={filter === item} className={filter === item ? 'selected' : ''} onClick={() => { setFilter(item); setExpanded(null); }}>{item}</button>)}
      </div>
      <div className="feed" aria-live="polite">
        {visible.length === 0 ? <p className="feed-empty">Belum ada {filter === 'Live' ? 'contoh live' : 'jadwal'} dari kreator yang kamu pilih.</p> : visible.map(item => <div className="feed-item" key={item.id}>
          <button type="button" className="feed-row" aria-expanded={expanded === item.id} onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
            <span className={`avatar ${item.color}`}>{item.initials}</span>
            <span className="feed-copy"><strong>{item.name}</strong><span>{item.title}</span></span>
            <span className={item.live ? 'live-status' : 'schedule-status'}>
              {item.live ? <><Radio size={13} /><span>LIVE</span></> : <><CalendarDays size={14} /><span>{item.schedule}</span></>}
            </span>
            <ChevronRight size={17} className={expanded === item.id ? 'chevron expanded' : 'chevron'} />
          </button>
          {expanded === item.id ? <p className="feed-detail">{item.specialty}. Profil dan jadwal ini adalah data contoh untuk mencoba konsep Orbitku.</p> : null}
        </div>)}
      </div>
      <p className="preview-caption">Preview interaktif · data contoh</p>
    </div>
  </div>;
}
