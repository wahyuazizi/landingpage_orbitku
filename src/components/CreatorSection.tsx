import { ArrowRight, CalendarDays, Link } from 'lucide-react';

type Props = { onCreatorAccess: () => void };

export default function CreatorSection({ onCreatorAccess }: Props) {
  return <section id="kreator" className="creator-section container" aria-labelledby="creator-title">
    <div className="profile-preview reveal">
      <div className="profile-address"><span className="tiny-orbit" aria-hidden="true" /><span>orbitku <span>/ hoshi-miu</span></span><span className="profile-dots" aria-hidden="true">•••</span></div>
      <div className="profile-body"><div className="avatar pink">HM</div><div><h3>Hoshi Miu</h3><p>Illustrator & virtual creator</p></div></div>
      <div className="profile-links" aria-label="Contoh tautan profil"><span><svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" /><path d="m10 9 6 3-6 3V9Z" fill="#111a2b" /></svg>YouTube</span><span><Link size={18} />Portfolio</span></div>
      <div className="profile-schedule"><span>Live berikutnya</span><strong><CalendarDays size={16} />Besok, 19.00 WIB</strong></div>
      <p className="preview-caption">Contoh halaman kreator</p>
    </div>
    <div className="creator-copy reveal"><h2 id="creator-title">Ruang kecil.<br /><span>Identitas</span> yang besar.</h2><p>Satu halaman untuk profil, tautan, dan jadwalmu. Supaya penggemar tahu ke mana harus kembali.</p><a className="text-link" href="#akses-awal" onClick={onCreatorAccess}>Aku seorang kreator<ArrowRight size={21} /></a></div>
  </section>;
}
