
import React from 'react';
import BlobAnimation from './BlobAnimation';

interface HeroProps {
  onOpenAudit: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left fade-in-up z-10">
          <div className="inline-block px-4 py-1.5 mb-6 border border-[var(--color-secondary)] rounded-full text-xs font-medium tracking-widest uppercase text-[var(--color-secondary)] opacity-80">
            Freelance Web Developer • SEO Expert
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] leading-[1.1] mb-6 tracking-tight">
            One-to-One <br /> Web Development <br />
            <span className="text-[var(--color-secondary)] text-4xl md:text-6xl">For Business Growth</span>
          </h1>

          <p className="text-xl text-[var(--color-secondary)] leading-relaxed max-w-lg mx-auto md:mx-0 mb-10">
            I’m Omar, a freelance web developer specialising in SEO-driven websites that turn new visitors into loyal customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={onOpenAudit}
              className="btn-primary w-full sm:w-auto text-lg px-8 py-4"
            >
              Get a Free Website Audit
            </button>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--color-secondary)] text-[var(--color-primary)] rounded-full text-lg font-medium hover:bg-[var(--color-secondary)]/10 transition-all text-center">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
          <BlobAnimation />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-cta)]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-cta)]/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
