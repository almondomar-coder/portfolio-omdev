import React from 'react';
import { Code2, FileText, Bot, Gauge, ListTree, MessageSquareQuote } from 'lucide-react';
import { Reveal } from './Reveal';

const items = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Structured data on every page',
    body: 'ProfessionalService, Service, Article, FAQ and Breadcrumb schema so AI engines understand and quote us accurately.',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'AI crawlers explicitly welcomed',
    body: 'Our robots.txt invites GPTBot, PerplexityBot, ClaudeBot and Google-Extended in — you can’t be cited if you’re not crawled.',
    link: { href: '/robots.txt', label: 'View robots.txt' },
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'An llms.txt map for AI',
    body: 'A machine-readable guide to our most useful pages — the emerging GEO standard, implemented here.',
    link: { href: '/llms.txt', label: 'View llms.txt' },
  },
  {
    icon: <MessageSquareQuote className="w-5 h-5" />,
    title: 'Answer-first content',
    body: 'Every guide opens with a clear, quotable answer — exactly the kind of passage AI engines lift into their responses.',
  },
  {
    icon: <ListTree className="w-5 h-5" />,
    title: 'Clean sitemap & semantics',
    body: 'A full XML sitemap and proper heading structure so search and AI crawlers can map the whole site.',
    link: { href: '/sitemap.xml', label: 'View sitemap.xml' },
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: 'Fast, lightweight, accessible',
    body: 'An adaptive build tuned for Core Web Vitals on mobile and desktop — speed is a trust signal for engines and people.',
  },
];

const BuiltGeoFirst: React.FC = () => {
  return (
    <section id="built-geo-first" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-cta font-bold mb-4">This site is the demo</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Built GEO-first — see for yourself
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-secondary border-l-2 border-cta pl-6">
              I practise exactly what I&rsquo;d do for you. Everything that makes a site visible to AI engines is implemented right here — and you can inspect the files yourself.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08} width="100%">
              <div className="glass-card p-7 h-full flex flex-col">
                <div className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center text-cta mb-5">
                  {it.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{it.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-4">{it.body}</p>
                {it.link && (
                  <a
                    href={it.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium text-cta hover:underline"
                  >
                    {it.link.label} →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltGeoFirst;
