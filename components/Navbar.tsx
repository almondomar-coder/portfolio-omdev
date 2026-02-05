import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenAudit: (e: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
  ];

  return (
    <nav className={cn(
      "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-7xl px-4",
      scrolled ? "top-4" : "top-6"
    )}>
      <div className={cn(
        "flex justify-between items-center rounded-full px-6 transition-all duration-300",
        scrolled ? "glass py-3 shadow-lg bg-surface/80" : "bg-transparent py-4"
      )}>
        <a href="#" className="text-xl font-bold tracking-tighter text-white z-50 relative">
          OMDEV<span className="text-cta">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenAudit}
            className="btn-primary py-2 px-5 text-sm cursor-pointer"
          >
            Get an Audit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white cursor-pointer p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-cta transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              onOpenAudit(e);
            }}
            className="btn-primary text-lg px-8 py-3"
          >
            Get an Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
