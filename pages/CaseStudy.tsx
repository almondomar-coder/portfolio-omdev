import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { Reveal } from '../components/Reveal';
import NotFound from './NotFound';
import { getCaseStudy } from '../data/caseStudies';
import { useAudit } from '../context/AuditContext';

const CaseStudy: React.FC = () => {
  const { slug = '' } = useParams();
  const { openAudit } = useAudit();
  const c = getCaseStudy(slug);

  if (!c) return <NotFound />;

  const canonical = `https://omdev.xyz/case-studies/${c.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.metaDescription,
    author: { '@type': 'Person', name: 'Omar', url: 'https://omdev.xyz' },
    publisher: { '@type': 'Organization', name: 'OmDev', url: 'https://omdev.xyz' },
    about: { '@type': 'Organization', name: c.client },
    mainEntityOfPage: canonical,
    url: canonical,
    image: 'https://omdev.xyz/og-image.png',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://omdev.xyz/case-studies/' + c.slug },
      { '@type': 'ListItem', position: 3, name: c.client, item: canonical },
    ],
  };

  return (
    <>
      <SEO
        title={c.metaTitle}
        description={c.metaDescription}
        canonical={canonical}
        type="article"
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs uppercase tracking-widest text-cta font-bold mb-4">Case study · {c.sector} · {c.location}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-8 tracking-tight">{c.title}</h1>
          </motion.div>

          <div className="glass-card p-8 border-cta/30">
            <p className="text-xs uppercase tracking-widest text-cta font-bold mb-3">In short</p>
            <p className="text-lg text-white leading-relaxed">{c.summary}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {c.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} width="100%">
              <div className="glass-card p-6 text-center h-full">
                <p className="text-2xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 leading-tight">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="py-12 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The challenge</h2>
            {c.challenge.map((p, i) => (
              <p key={i} className="text-secondary leading-relaxed text-lg mb-4">{p}</p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">The approach</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {c.approach.map((a, i) => (
                <Reveal key={i} delay={i * 0.06} width="100%">
                  <div className="glass-card p-6 h-full">
                    <div className="w-8 h-8 rounded-full bg-cta/20 flex items-center justify-center text-cta mb-4">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{a.heading}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{a.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The result</h2>
            {c.result.map((p, i) => (
              <p key={i} className="text-secondary leading-relaxed text-lg mb-4">{p}</p>
            ))}
          </div>

          {c.quote && (
            <div className="glass-card p-8 md:p-10">
              <Quote className="w-8 h-8 text-cta mb-4" />
              <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed mb-4">“{c.quote.text}”</p>
              <p className="text-sm text-zinc-500">— {c.quote.attribution}</p>
            </div>
          )}
        </div>
      </section>

      <FAQ faqs={c.faqs} heading="Questions about this case study" />

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 container mx-auto">
        <div className="relative overflow-hidden glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-cta/5 pointer-events-none -z-10" />
          <Sparkles className="w-8 h-8 text-cta mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 tracking-tight">Want results like these?</h2>
          <p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
            Start with a free AI-Visibility Audit and see where your business stands in AI search today.
          </p>
          <button onClick={openAudit} className="btn-primary text-lg px-8 py-4 mx-auto cursor-pointer">
            Get Your Free Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
