import { useState, useEffect } from 'react';
import AutomateFlowNavbar from './components/AutomateFlowNavbar';
import AutomateFlowHero from './components/AutomateFlowHero';
import ProblemSection from './components/ProblemSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import AllFeaturesSection from './components/AllFeaturesSection';
import SocialProofSection from './components/SocialProofSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import NeuralNetworkCanvas from './components/NeuralNetworkCanvas';
import LegalModals from './components/LegalModals';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('automateflow-theme');
    return saved ? saved : 'dark'; // Dark mode by default
  });

  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    localStorage.setItem('automateflow-theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-background min-h-screen text-foreground transition-colors duration-500 relative">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* ── Cinematic atmospheric overlays (fog, beams, particles, neural) ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="cinematic-fog-layer" />
        <div className="cinematic-light-beam" />
        <NeuralNetworkCanvas theme={theme} />
        <div className="cinematic-particle-field">
          <div className="cinematic-particle cinematic-particle-1" />
          <div className="cinematic-particle cinematic-particle-2" />
          <div className="cinematic-particle cinematic-particle-3" />
          <div className="cinematic-particle cinematic-particle-4" />
          <div className="cinematic-particle cinematic-particle-5" />
          <div className="cinematic-particle cinematic-particle-6" />
        </div>
      </div>

      <AutomateFlowNavbar theme={theme} toggleTheme={toggleTheme} />
      <AutomateFlowHero theme={theme} />
      <ProblemSection />
      <CapabilitiesSection />
      <AllFeaturesSection theme={theme} />
      <SocialProofSection />
      <PricingSection theme={theme} />
      <FAQSection />
      <FinalCTASection />
      <Footer theme={theme} onOpenModal={(type) => setLegalModal(type)} />

      {/* Premium Legal Modals */}
      <LegalModals 
        isOpen={legalModal !== null} 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
      />
    </div>
  );
}