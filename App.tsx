
import React, { useRef } from 'react';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import CaptureForm from './components/CaptureForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-azul-950 text-slate-200 selection:bg-azul-500 selection:text-white">
      <Hero onCtaClick={scrollToForm} />
      <Challenges />
      <Solutions />
      <div ref={formRef}>
        <CaptureForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
