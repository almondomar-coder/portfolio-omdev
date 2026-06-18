import React from 'react';
import { Bot, Search, FileCode2, BarChart3 } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    title: "Generative Engine Optimisation (GEO)",
    description: "Get cited by ChatGPT, Perplexity and Google AI Overviews when your customers ask for a recommendation.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Traditional & Local SEO",
    description: "Win classic Google rankings and the local map pack — the foundation AI engines also draw on.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Structured Data & Schema",
    description: "Machine-readable markup so AI engines can understand, trust and quote your business accurately.",
    icon: <FileCode2 className="w-6 h-6" />
  },
  {
    title: "AI-Visibility Reporting",
    description: "See where you appear across AI answers and search, and track what each month of work moves.",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              SEO and GEO, working as one
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-secondary max-w-xl border-l-2 border-cta pl-6">
              Everything needed to be found, trusted and cited — across AI answer engines and traditional search.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1 + 0.2} width="100%">
              <div className="glass-card p-8 transition-all duration-500 hover:-translate-y-2 group h-full">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
