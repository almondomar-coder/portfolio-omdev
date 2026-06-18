import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './Reveal';

const reasons = [
  "GEO + SEO under one strategy",
  "Proven: +50% visibility for Plum Pilates",
  "One-to-one, no agency layers",
  "Plain-English reporting, no jargon",
  "London-based, locally focused",
  "Fast, honest communication"
];

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden relative container mx-auto">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Why partner with OmDev?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center text-cta shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-200 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={0.3}>
            <div className="glass-card p-12 rounded-3xl text-white relative z-10 backdrop-blur-3xl border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Ahead of the curve, not behind it.</h3>
              <p className="text-lg leading-relaxed mb-8 text-secondary">
                Most agencies are still selling 2015 SEO. I work where your customers actually are now &mdash; inside the AI answer &mdash; while keeping your search foundations solid.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl ring-4 ring-white/10">O</div>
                <div>
                  <p className="font-bold">Omar</p>
                  <p className="text-sm opacity-60">Founder, OmDev</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
