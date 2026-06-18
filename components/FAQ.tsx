import React from 'react';
import { Reveal } from './Reveal';
import type { FAQ as FAQItem } from '../data/verticals';

interface FAQProps {
  faqs: FAQItem[];
  heading?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqs, heading = 'AI Search & GEO: Common Questions' }) => {
  return (
    <section id="faq" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-3xl mx-auto">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">
            {heading}
          </h2>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} width="100%">
              <details className="glass-card p-6 group" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-semibold text-white">
                  {item.q}
                  <span className="ml-4 text-cta transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-secondary leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
