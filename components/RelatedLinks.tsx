import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export interface RelatedLink {
  to: string;
  title: string;
  sub: string;
}

interface RelatedLinksProps {
  heading?: string;
  links: RelatedLink[];
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({ heading = 'Related reading', links }) => {
  if (!links.length) return null;
  return (
    <section className="py-12 px-6 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-8 tracking-tight">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((l, i) => (
            <Reveal key={l.to + i} delay={i * 0.06} width="100%">
              <Link to={l.to} className="glass-card p-6 h-full flex flex-col group hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-white mb-2 leading-snug">{l.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{l.sub}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cta group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
