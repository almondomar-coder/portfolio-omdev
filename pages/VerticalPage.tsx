import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, AlertTriangle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { Reveal } from '../components/Reveal';
import NotFound from './NotFound';
import RelatedLinks from '../components/RelatedLinks';
import { getVertical } from '../data/verticals';
import { useAudit } from '../context/AuditContext';

interface VerticalPageProps {
  slug: string;
}

const VerticalPage: React.FC<VerticalPageProps> = ({ slug }) => {
  const { openAudit } = useAudit();
  const v = getVertical(slug);

  if (!v) return <NotFound />;

  const canonical = `https://omdev.xyz${v.path}`;
  const Icon = v.icon;

  const related = [
    { to: '/insights/geo-vs-seo', title: 'GEO vs SEO: what’s the difference', sub: 'Why you need both AI-answer visibility and traditional rankings.' },
    { to: '/insights/how-to-get-cited-by-ai-search', title: 'How to get cited by AI search', sub: 'The practical levers that make AI engines cite your business.' },
    { to: '/case-studies/plum-pilates', title: 'Case study: +50% for Plum Pilates', sub: 'How GEO + SEO grew a London studio’s visibility.' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Generative Engine Optimisation (GEO) & SEO',
    name: v.title,
    description: v.metaDescription,
    provider: { '@type': 'ProfessionalService', name: 'OmDev', url: 'https://omdev.xyz' },
    areaServed: ['London', 'United Kingdom'],
    url: canonical,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: v.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://omdev.xyz/' },
      { '@type': 'ListItem', position: 2, name: v.name, item: canonical },
    ],
  };

  return (
    <>
      <SEO
        title={v.metaTitle}
        description={v.metaDescription}
        canonical={canonical}
        jsonLd={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-zinc-300">
              <Icon className="w-3 h-3 text-cta" />
              <span>{v.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              {v.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              {v.intro}
            </p>
            <button onClick={openAudit} className="btn-primary text-lg h-14 px-8 mx-auto cursor-pointer">
              Get Your Free AI-Visibility Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* The fear / problem */}
      <section className="py-16 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Reveal width="100%">
            <div className="glass-card p-10 border-cta/20">
              <div className="flex items-center gap-3 mb-4 text-cta">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">The risk</span>
              </div>
              <p className="text-xl text-white leading-relaxed">{v.fear}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal width="100%">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Who this is for</h2>
            <p className="text-lg text-secondary leading-relaxed">{v.examples}</p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight text-center">
              What GEO + SEO delivers for you
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {v.outcomes.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} width="100%">
                <div className="flex items-start gap-4 p-6 glass-card h-full">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center text-cta shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-zinc-200 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (with schema) */}
      <FAQ faqs={v.faqs} heading={`${v.name}: AI Search Questions`} />

      <RelatedLinks links={related} />

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 container mx-auto">
        <div className="relative overflow-hidden glass-card p-12 md:p-20 text-center max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-cta/5 pointer-events-none -z-10" />
          <Sparkles className="w-8 h-8 text-cta mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            See if AI search can find you.
          </h2>
          <p className="text-lg text-secondary mb-10 max-w-xl mx-auto">
            Start with a free AI-Visibility Audit. No obligation — just a clear picture of where you stand and what to fix first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={openAudit} className="btn-primary text-lg px-8 py-4 cursor-pointer">
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/" className="text-white font-medium hover:text-cta transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerticalPage;
