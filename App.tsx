import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import PrismBackground from './components/PrismBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollManager from './components/ScrollManager';
import { AuditProvider } from './context/AuditContext';
import Home from './pages/Home';
import VerticalPage from './pages/VerticalPage';
import Insights from './pages/Insights';
import Article from './pages/Article';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsAuditModalOpen(true);
  };

  return (
    <HelmetProvider>
      <AuditProvider value={{ openAudit }}>
        <ScrollManager />
        <div className="min-h-screen relative text-primary">
          <ScrollProgress />
          <div className="fixed inset-0 z-[-1]">
            <PrismBackground />
          </div>

          <Navbar onOpenAudit={openAudit} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ai-visibility-wellness" element={<VerticalPage slug="wellness" />} />
              <Route path="/ai-visibility-professional-services" element={<VerticalPage slug="professional-services" />} />
              <Route path="/ai-visibility-multi-location" element={<VerticalPage slug="multi-location" />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<Article />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />

          <AuditModal
            isOpen={isAuditModalOpen}
            onClose={() => setIsAuditModalOpen(false)}
          />
        </div>
      </AuditProvider>
    </HelmetProvider>
  );
};

export default App;
