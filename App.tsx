import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import PrismBackground from './components/PrismBackground';
import ScrollProgress from './components/ScrollProgress';
import SEO from './components/SEO';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openAudit = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsAuditModalOpen(true);
  };

  return (
    <HelmetProvider>
      <SEO />
      <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} relative text-primary`}>
        <ScrollProgress />
        <div className="fixed inset-0 z-[-1]">
          <PrismBackground />
        </div>

        <Navbar onOpenAudit={openAudit} />
        <main>
          <Hero onOpenAudit={openAudit} />
          <About />
          <Services />
          <WhyChooseMe />
          <Testimonials />
          <ContactCTA />
        </main>
        <Footer />

        <AuditModal
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
        />
      </div>
    </HelmetProvider>
  );
};

export default App;
