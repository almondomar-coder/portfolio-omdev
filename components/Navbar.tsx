
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenAudit: (e: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-[var(--color-primary)]">
          OMDEV<span className="text-[var(--color-secondary)] font-normal">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-[var(--color-secondary)]">
          <a href="#about" className="hover:text-[var(--color-primary)] transition-colors">About</a>
          <a href="#services" className="hover:text-[var(--color-primary)] transition-colors">Services</a>
          <a href="#work" className="hover:text-[var(--color-primary)] transition-colors">Work</a>
          <button
            onClick={onOpenAudit}
            className="btn-primary"
          >
            Get an Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
