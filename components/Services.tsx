import React from 'react';
import { Layout, TrendingUp, Share2, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    title: "Web Design & Development",
    description: "Modern, fast, and mobile-friendly websites built with the latest technology.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "SEO Optimisation",
    description: "Rank higher on Google and get found by the customers who are looking for you.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Social Media Setup",
    description: "Consistent branding and basic setup to support your long-term growth.",
    icon: <Share2 className="w-6 h-6" />
  },
  {
    title: "Website Maintenance",
    description: "Ongoing technical support and updates so you can focus on your business.",
    icon: <Wrench className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Comprehensive Web Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-secondary max-w-xl border-l-2 border-cta pl-6">
              Everything you need to establish a premium online presence and convert visitors into loyal customers.
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
