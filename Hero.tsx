
import React from 'react';

interface HeroProps {
  onOpenAudit: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-40 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-8 border border-[#E5E1D8] rounded-full text-xs font-medium tracking-widest uppercase text-[#555555]">
          Freelance Web Developer • SEO Expert
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[#1A1A1A] leading-[1.1] mb-8">
          One-to-One Web Development <br className="hidden md:block" />
          That Helps Your Business Grow
        </h1>
        
        <p className="text-xl md:text-2xl text-[#555555] leading-relaxed max-w-2xl mx-auto mb-12">
          I’m Omar, a freelance web developer specialising in SEO-driven websites that turn visitors into customers.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:scale-105 transition-transform cursor-pointer"
          >
            Get a Free Website Audit
          </button>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#E5E1D8] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-[#E5E1D8]/20 transition-all">
            View My Work
          </a>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E5E1D8]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E5E1D8]/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
