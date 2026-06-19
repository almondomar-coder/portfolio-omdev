import React, { useState, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrismBackground from './components/PrismBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollManager from './components/ScrollManager';
import { AuditProvider } from './context/AuditContext';
import Home from './pages/Home';

// Code-split: secondary routes + the heavy audit modal (Gemini + Supabase)
// load on demand, keeping the initial bundle small for fast first paint.
const VerticalPage = lazy(() => import('./pages/VerticalPage'));
const Insights = lazy(() => import('./pages/Insights'));
const Article = lazy(() => import('./pages/Article'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AuditModal = lazy(() => import('./components/AuditModal'));

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
            <Suspense fallback={<div className="min-h-screen" />}>
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
            </Suspense>
          </main>
          <Footer />

          {/* Only mounted once opened, so its chunk loads on demand */}
          {isAuditModalOpen && (
            <Suspense fallback={null}>
              <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
            </Suspense>
          )}
        </div>
      </AuditProvider>
    </HelmetProvider>
  );
};

export default App;
