import React from 'react';
import { Search, Repeat, ArrowRight, Check } from 'lucide-react';
import { Reveal } from './Reveal';
import { useAudit } from '../context/AuditContext';

const auditIncludes = [
  "Where ChatGPT, Perplexity & Google AI currently send your customers",
  "Whether AI engines can find, trust and cite your site",
  "Your visibility vs. local competitors in AI answers",
  "A prioritised, plain-English action list",
];

const retainerIncludes = [
  "Ongoing GEO: content & entities AI engines cite",
  "Traditional SEO: rankings, technical health, local",
  "Schema & structured data for machine readability",
  "Monthly visibility reporting across AI + search",
];

const Offer: React.FC = () => {
  const { openAudit } = useAudit();

  return (
    <section id="offer" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Start with an audit. Grow on a retainer.
            </h2>
          </Reveal>
          <Reveal delay={0.3} width="100%">
            <p className="text-lg text-secondary">
              One clear path: find out if AI search can see you, then make sure it keeps choosing you.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Front door */}
          <Reveal width="100%">
            <div className="glass-card p-10 h-full flex flex-col">
              <span className="text-xs uppercase tracking-widest text-cta font-bold mb-6">Step 1 · The Front Door</span>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cta mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Visibility Audit</h3>
              <p className="text-secondary leading-relaxed mb-8">
                A focused snapshot of how visible you are across ChatGPT, Perplexity and Google AI Overviews &mdash; and exactly what&rsquo;s holding you back.
              </p>
              <ul className="space-y-3 mb-10">
                {auditIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-cta/20 flex items-center justify-center text-cta shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={openAudit} className="btn-primary mt-auto w-full py-4 text-base cursor-pointer">
                Get Your Free AI-Visibility Audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* Destination */}
          <Reveal delay={0.2} width="100%">
            <div className="glass-card p-10 h-full flex flex-col border-cta/30">
              <span className="text-xs uppercase tracking-widest text-cta font-bold mb-6">Step 2 · The Destination</span>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cta mb-6">
                <Repeat className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Monthly GEO + SEO Retainer</h3>
              <p className="text-secondary leading-relaxed mb-8">
                Continuous work to keep you cited, ranked and chosen as AI search keeps changing the rules. SEO and GEO managed as one strategy.
              </p>
              <ul className="space-y-3 mb-10">
                {retainerIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-cta/20 flex items-center justify-center text-cta shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:omar@omdev.xyz?subject=GEO%20%2B%20SEO%20Retainer%20enquiry" className="mt-auto w-full py-4 text-base flex items-center justify-center gap-2 border border-white/15 bg-white/5 rounded-full text-white font-medium hover:bg-white/10 transition-all cursor-pointer">
                Talk About a Retainer
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Offer;
