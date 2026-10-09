import Brand from './Brand';

export default function Footer() {
  return <footer className="site-footer container">
    <div className="footer-main"><div><Brand /><p>Kreator dan penggemar, dalam satu semesta.</p></div><nav aria-label="Navigasi footer"><a href="#cara-kerja">Cara kerja</a><a href="#kreator">Untuk kreator</a><a href="#akses-awal">Akses awal</a></nav></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Orbitku</span><span>Dalam pengembangan</span></div>
  </footer>;
}
