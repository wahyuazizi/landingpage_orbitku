import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Info, LoaderCircle } from 'lucide-react';

export type Role = 'fan' | 'creator';
type Props = { role: Role; onRoleChange: (role: Role) => void };
const configuredEndpoint = (import.meta.env.VITE_WAITLIST_ENDPOINT ?? '').trim();
const endpoint = configuredEndpoint.startsWith('/') && !configuredEndpoint.startsWith('//') || configuredEndpoint.startsWith('https://') ? configuredEndpoint : '';

export default function EarlyAccess({ role, onRoleChange }: Props) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const noticeRef = useRef<HTMLParagraphElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) {
      setMessage('Pendaftaran belum dibuka. Saat kanal akses awal siap, kamu bisa mendaftar langsung di halaman ini.');
      requestAnimationFrame(() => noticeRef.current?.focus());
      return;
    }
    if (state === 'loading') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState('loading');
    setMessage('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: String(data.get('email')).trim(), role, consent: data.get('consent') === 'on' }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error('Request failed');
      setState('success');
      form.reset();
    } catch {
      setState('error');
      setMessage('Belum berhasil mengirim. Coba lagi sebentar, ya.');
    }
  }

  return <section id="akses-awal" className="early-access container" aria-labelledby="access-title">
    <div className="access-copy reveal"><h2 id="access-title">Jadi bagian dari<br /><span>orbit pertama.</span></h2><p>Orbitku sedang dibangun. Ceritakan apa yang kamu cari, dan bantu kami membentuk ruang yang lebih dekat dengan kreator.</p></div>
    <div className="access-form-wrap reveal">
      <div className="access-orbit" aria-hidden="true"><i /><i /></div>
      {state === 'success' ? <div className="access-success" role="status"><CheckCircle2 size={38} /><h3>Kamu masuk orbit pertama.</h3><p>Kabar akses awal akan dikirim ke alamat email yang kamu daftarkan.</p><button className="text-link" type="button" onClick={() => setState('idle')}>Kembali<ArrowRight size={18} /></button></div> : <form className="access-form" onSubmit={submit}>
        <h3>Dapatkan kabar akses awal</h3>
        <div className="role-switch" role="group" aria-label="Kamu ingin menggunakan Orbitku sebagai">
          <button type="button" aria-pressed={role === 'fan'} className={role === 'fan' ? 'selected' : ''} onClick={() => onRoleChange('fan')}>Penggemar</button>
          <button type="button" aria-pressed={role === 'creator'} className={role === 'creator' ? 'selected' : ''} onClick={() => onRoleChange('creator')}>Kreator</button>
        </div>
        <label htmlFor="access-email">Alamat email</label>
        <input id="access-email" name="email" type="email" autoComplete="email" placeholder="kamu@email.com" maxLength={254} required={Boolean(endpoint)} disabled={!endpoint || state === 'loading'} aria-describedby="access-notice" />
        {endpoint ? <label className="consent"><input type="checkbox" name="consent" required disabled={state === 'loading'} /><span>Saya bersedia menerima email tentang akses awal Orbitku. Email hanya digunakan untuk kabar ini.</span></label> : null}
        <button className="button button-primary submit-button" type="submit" disabled={state === 'loading'}>{state === 'loading' ? <>Mengirim…<LoaderCircle className="spinner" size={21} /></> : <>Kabari aku saat rilis<ArrowRight size={21} /></>}</button>
        <p id="access-notice" className={`access-notice ${state === 'error' ? 'error' : ''}`} ref={noticeRef} tabIndex={-1} role="status"><Info size={17} /><span>{message || (endpoint ? 'Kamu akan menerima kabar saat akses awal tersedia.' : 'Pendaftaran akan dibuka setelah kanal akses awal terhubung.')}</span></p>
      </form>}
    </div>
    <p className="roadmap-note reveal">Rencana awal: profil kreator, integrasi YouTube, dan dashboard penggemar.</p>
  </section>;
}
