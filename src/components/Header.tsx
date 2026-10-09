import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Brand from './Brand';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header container">
    <Brand />
    <button className="menu-button" type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(v => !v)}>
      {open ? <X /> : <Menu />}
    </button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navigasi utama">
      <a href="#cara-kerja" onClick={() => setOpen(false)}>Cara kerja</a>
      <a href="#kreator" onClick={() => setOpen(false)}>Untuk kreator</a>
      <a className="button button-outline" href="#akses-awal" onClick={() => setOpen(false)}>Akses awal</a>
    </nav>
  </header>;
}
