import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, Sparkles, Check } from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { Reveal } from '../components/Reveal';
import NotFound from './NotFound';
import { articles, getArticle } from '../data/articles';
import RelatedLinks from '../components/RelatedLinks';
import { useAudit } from '../context/AuditContext';

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

const Article: React.FC = () => {
  const { slug = '' } = useParams();
  const { openAudit } = useAudit();
  const a = getArticle(slug);

  if (!a) return <NotFound />;

  const canonical = `https://omdev.xyz/insights/${a.slug}`;

  const related = [
    ...articles
      .filter((x) => x.slug !== a.slug)
      .map((x) => ({ to: `/insights/${x.slug}`, title: x.title, sub: x.excerpt })),
    { to: '/case-studies/plum-pilates', title: 'Case study: +50% for Plum Pilates', sub: 'See GEO + SEO applied to a real London business.' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.date,
    dateModified: a.updated || a.date,
    author: { '@type': 'Person', name: 'Omar', url: 'https://omdev.xyz' },
    publisher: { '@type': 'Organization', name: 'OmDev', url: 'https://omdev.xyz' },
    mainEntityOfPage: canonical,
    url: canonical,
    image: 'https://omdev.xyz/og-image.png',
    articleSection: a.category,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://omdev.xyz/insights' },
      { '@type': 'ListItem', position: 3, name: a.title, item: canonical },
    ],
  };

  return (
    <>
      <SEO
        title={a.metaTitle}
        description={a.metaDescription}
        canonical={canonical}
        type="article"
        jsonLd={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <article className="pt-40 pb-12 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All insights
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6 text-xs text-zinc-500">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">{a.category}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{a.readingMins} min read</span>
              <span>Updated {fmtDate(a.updated || a.date)}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-8 tracking-tight">{a.title}</h1>
          </motion.div>

          {/* Answer-first block (built to be quoted by AI engines) */}
          <div className="glass-card p-8 mb-12 border-cta/30">
            <p className="text-xs uppercase tracking-widest text-cta font-bold mb-3">The short answer</p>
            <p className="text-lg text-white leading-relaxed">{a.answer}</p>
          </div>

          {/* Key takeaways */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-5">Key takeaways</h2>
            <ul className="space-y-3">
              {a.keyTakeaways.map((k, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-200">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-cta/20 flex items-center justify-center text-cta shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {k}
                </li>
              ))}
            </ul>
          </div>

          {/* Body */}
          <div className="space-y-12">
            {a.sections.map((s, i) => (
              <Reveal key={i} width="100%">
                <section>
                  {s.heading && <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{s.heading}</h2>}
                  {s.body?.map((p, j) => (
                    <p key={j} className="text-secondary leading-relaxed text-lg mb-4">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-3 mt-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-zinc-200">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {/* Author */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl ring-4 ring-white/10">O</div>
            <div>
              <p className="font-bold text-white">Omar</p>
              <p className="text-sm text-zinc-500">AI Search &amp; GEO Specialist, OmDev</p>
            </div>
          </div>
        </div>
      </article>

      <RelatedLinks links={related} />

      <FAQ faqs={a.faqs} heading="Frequently asked" />

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 container mx-auto">
        <div className="relative overflow-hidden glass-card p-12 md:p-16 text-center max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-cta/5 pointer-events-none -z-10" />
          <Sparkles className="w-8 h-8 text-cta mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Want this done for your business?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-xl mx-auto">
            Start with a free AI-Visibility Audit and see exactly where you stand in AI search.
          </p>
          <button onClick={openAudit} className="btn-primary text-lg px-8 py-4 mx-auto cursor-pointer">
            Get Your Free Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Article;
