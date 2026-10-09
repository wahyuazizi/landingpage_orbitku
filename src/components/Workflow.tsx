import { useState, type KeyboardEvent } from 'react';
import { ArrowRight, Check, Heart } from 'lucide-react';
import { creators } from '../data/creators';
import DashboardPreview from './DashboardPreview';

const steps = [
  { name: 'Temukan kreatormu', title: 'Kenalan dengan kreator baru.', body: 'Jelajahi profil, tautan, dan jadwal live mereka dalam satu tempat.', action: 'Coba ikuti kreator' },
  { name: 'Ikuti yang kamu suka', title: 'Yang kamu suka, lebih dekat.', body: 'Pilih kreator yang ingin kamu ikuti. Kamu yang menentukan isi semestamu.', action: 'Buka semestamu' },
  { name: 'Buka semestamu', title: 'Satu tempat untuk kembali.', body: 'Kabar dan jadwal dari kreator pilihanmu berkumpul di dashboard pribadi.', action: 'Gabung orbit pertama' },
];

export default function Workflow() {
  const [step, setStep] = useState(0);
  const [followed, setFollowed] = useState<string[]>(['hoshi', 'raka']);
  const current = steps[step];
  const followedCreators = creators.filter(creator => followed.includes(creator.id));

  function toggleFollow(id: string) {
    setFollowed(previous => previous.includes(id) ? previous.filter(value => value !== id) : [...previous, id]);
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % steps.length;
    else if (event.key === 'ArrowLeft') next = (index + steps.length - 1) % steps.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = steps.length - 1;
    else return;
    event.preventDefault();
    setStep(next);
    document.getElementById(`step-${next}`)?.focus();
  }

  return <section id="cara-kerja" className="workflow container" aria-labelledby="workflow-title">
    <div className="section-heading reveal">
      <h2 id="workflow-title">Dari menemukan,<br />jadi <span>terhubung.</span></h2>
      <p>Mulai dari satu kreator.<br />Bangun semesta yang terasa milikmu.</p>
    </div>
    <div className="step-rail reveal" role="tablist" aria-label="Coba alur Orbitku">
      {steps.map((item, index) => <button type="button" id={`step-${index}`} key={item.name} role="tab" aria-selected={step === index} aria-controls="workflow-panel" tabIndex={step === index ? 0 : -1} className={step === index ? 'step-tab active' : 'step-tab'} onClick={() => setStep(index)} onKeyDown={event => handleTabKey(event, index)}>
        <span className="step-number">0{index + 1}</span><span>{item.name}</span>
      </button>)}
    </div>
    <div className="workflow-stage reveal" id="workflow-panel" role="tabpanel" aria-labelledby={`step-${step}`} tabIndex={0}>
      <div className="workflow-explanation" key={step}>
        <h3>{current.title}</h3><p>{current.body}</p>
        {step === 2 ? <a className="button button-primary" href="#akses-awal">{current.action}<ArrowRight size={20} /></a> : <button className="button button-primary" type="button" onClick={() => setStep(step + 1)}>{current.action}<ArrowRight size={20} /></button>}
      </div>
      <div className="workflow-demo" key={`demo-${step}`}>
        {step < 2 ? <div className="creator-selection">
          {creators.map(creator => <button key={creator.id} className={`creator-tile ${step === 1 && followed.includes(creator.id) ? 'following' : ''}`} type="button" aria-pressed={step === 1 ? followed.includes(creator.id) : undefined} aria-label={step === 0 ? `Coba ikuti ${creator.name}` : `${followed.includes(creator.id) ? 'Berhenti mengikuti' : 'Ikuti'} ${creator.name}`} onClick={() => { if (step === 0) setStep(1); else toggleFollow(creator.id); }}>
            <div className={`creator-monogram ${creator.color}`}><span>{creator.initials}</span></div>
            <strong>{creator.name}</strong><span className="creator-category">{creator.id === 'hoshi' ? 'Ilustrasi' : creator.id === 'raka' ? 'Gaming' : 'Musik'}</span>
            {step === 1 ? <span className="follow-label">{followed.includes(creator.id) ? <><Check size={15} />Diikuti</> : <><Heart size={15} />Ikuti</>}</span> : null}
          </button>)}
        </div> : followedCreators.length > 0 ? <DashboardPreview items={followedCreators} compact /> : <div className="empty-universe"><Heart size={32} /><h3>Semestamu masih kosong.</h3><p>Pilih setidaknya satu kreator untuk mencoba dashboard.</p><button className="text-link" type="button" onClick={() => setStep(1)}>Pilih kreator <ArrowRight size={18} /></button></div>}
      </div>
    </div>
    <p className="workflow-footnote">Simulasi produk · pilihanmu hanya berlaku di halaman ini.</p>
  </section>;
}
