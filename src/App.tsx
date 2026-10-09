import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import CreatorSection from './components/CreatorSection';
import EarlyAccess, { type Role } from './components/EarlyAccess';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [role, setRole] = useState<Role>('fan');
  useScrollReveal();
  return <div id="top">
    <a className="skip-link" href="#main">Langsung ke konten</a>
    <Header />
    <main id="main">
      <Hero />
      <Workflow />
      <CreatorSection onCreatorAccess={() => setRole('creator')} />
      <EarlyAccess role={role} onRoleChange={setRole} />
    </main>
    <Footer />
  </div>;
}
