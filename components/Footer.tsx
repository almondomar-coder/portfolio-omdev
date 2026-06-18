import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { verticals } from '../data/verticals';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-[var(--color-primary)] block mb-6">
              OMDEV<span className="text-[var(--color-secondary)] font-normal">.</span>
            </Link>
            <p className="text-[var(--color-secondary)] max-w-xs leading-relaxed">
              AI Search & GEO specialist in Bermondsey, SE16. I get London businesses cited by ChatGPT, Perplexity and Google AI — alongside traditional SEO.
            </p>
            <a href="mailto:omar@omdev.xyz" className="inline-flex items-center gap-2 mt-6 text-[var(--color-primary)] hover:text-white transition-colors">
              <Mail size={20} />
              omar@omdev.xyz
            </a>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-primary)] mb-6">Who I Help</h4>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              {verticals.map((v) => (
                <li key={v.slug}>
                  <Link to={v.path} className="hover:text-[var(--color-primary)] transition-colors">{v.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[var(--color-primary)] mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li><Link to="/#offer" className="hover:text-[var(--color-primary)] transition-colors">How It Works</Link></li>
              <li><Link to="/#services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link to="/#faq" className="hover:text-[var(--color-primary)] transition-colors">FAQ</Link></li>
              <li><a href="mailto:omar@omdev.xyz" className="hover:text-[var(--color-primary)] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[var(--color-secondary)] tracking-widest uppercase">
          <p>© {currentYear} OmDev. All rights reserved.</p>
          <p className="mt-4 md:mt-0">GEO · SEO · London &amp; SE16</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
