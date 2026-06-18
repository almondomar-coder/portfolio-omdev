import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { verticals } from '../data/verticals';

const Verticals: React.FC = () => {
  return (
    <section id="who-i-help" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Built for businesses with the most to lose
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-secondary border-l-2 border-cta pl-6">
              If your customers are high-intent and local, disappearing from AI answers costs real revenue. These are the sectors I focus on.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((v, index) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.slug} delay={index * 0.1 + 0.2} width="100%">
                <Link
                  to={v.path}
                  className="glass-card p-8 h-full flex flex-col group hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{v.name}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-8">{v.cardLine}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cta group-hover:gap-3 transition-all">
                    See how it works
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
