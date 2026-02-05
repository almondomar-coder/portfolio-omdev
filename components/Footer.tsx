import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-[var(--color-primary)] block mb-6">
              OMDEV<span className="text-[var(--color-secondary)] font-normal">.</span>
            </a>
            <p className="text-[var(--color-secondary)] max-w-xs leading-relaxed">
              Local Web Developer & SEO Specialist focused on building trust-driven, growth-focused websites for passionate businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-primary)] mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li><a href="#about" className="hover:text-[var(--color-primary)] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[var(--color-primary)] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[var(--color-primary)] transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-primary)] mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@omdev.co" className="hover:text-[var(--color-primary)] transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[var(--color-secondary)] tracking-widest uppercase">
          <p>© {currentYear} OMDEV. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with care by OMDEV</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
