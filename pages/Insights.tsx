import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { articles } from '../data/articles';

const Insights: React.FC = () => {
  const canonical = 'https://omdev.xyz/insights';

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'OmDev Insights — AI Search & GEO',
    description: 'Guides and references on Generative Engine Optimisation (GEO), AI search and SEO.',
    url: canonical,
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `https://omdev.xyz/insights/${a.slug}`,
      datePublished: a.date,
      dateModified: a.updated || a.date,
      author: { '@type': 'Person', name: 'Omar' },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://omdev.xyz/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: canonical },
    ],
  };

  return (
    <>
      <SEO
        title="AI Search & GEO Insights | OmDev"
        description="Guides and references on Generative Engine Optimisation (GEO), getting cited by ChatGPT, Perplexity and Google AI, and modern SEO."
        canonical={canonical}
        jsonLd={[blogSchema, breadcrumbSchema]}
      />

      <section className="pt-40 pb-12 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs uppercase tracking-widest text-cta font-bold mb-4">Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              AI search, GEO &amp; SEO — explained
            </h1>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
              Practical, no-jargon guides on getting your business cited by AI engines. Written to be useful — and to demonstrate exactly how I&rsquo;d build content for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 container mx-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08} width="100%">
              <Link to={`/insights/${a.slug}`} className="glass-card p-8 h-full flex flex-col group hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-3 mb-5 text-xs text-zinc-500">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">{a.category}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{a.readingMins} min</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white">{a.title}</h2>
                <p className="text-zinc-400 leading-relaxed text-sm mb-8">{a.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cta group-hover:gap-3 transition-all">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;
