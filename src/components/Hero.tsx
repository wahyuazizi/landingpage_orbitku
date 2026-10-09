import { ArrowRight, CalendarDays, Play } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
import { creators } from '../data/creators';

export default function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <h1 id="hero-title">Kreator favoritmu.<br /><span>Satu semesta.</span><br />Lebih dekat.</h1>
      <p className="hero-description">Tempat untuk mengikuti kabar, jadwal live, dan karya kreator yang kamu suka. Tanpa berpindah-pindah platform.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#cara-kerja">Jelajahi Orbitku <ArrowRight size={22} /></a>
        <a className="play-link" href="#cara-kerja"><span><Play size={14} /></span>Lihat cara kerja</a>
      </div>
      <p className="development-note">Sedang dikembangkan. Dibangun untuk kreator dan penggemar.</p>
    </div>
    <div className="hero-visual">
      <div className="orbit-system" aria-hidden="true">
        <div className="orbit-track track-one"><i /></div>
        <div className="orbit-track track-two"><i /></div>
        <div className="orbit-track track-three"><i /></div>
      </div>
      <div className="hero-dashboard"><DashboardPreview items={creators.slice(0, 2)} /></div>
      <div className="next-live"><span>Live berikutnya</span><strong><CalendarDays size={18} />Besok, 19.00 WIB</strong></div>
    </div>
    <div className="hero-divider"><span>Kabar terbaru. Jadwal live. Kreator favorit.</span></div>
  </section>;
}
