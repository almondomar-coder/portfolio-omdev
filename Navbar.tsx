
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FCFBF7]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-[#1A1A1A]">
          OMDEV<span className="text-[#555555] font-normal">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#555555]">
          <a href="#about" className="hover:text-[#1A1A1A] transition-colors">About</a>
          <a href="#services" className="hover:text-[#1A1A1A] transition-colors">Services</a>
          <a href="#work" className="hover:text-[#1A1A1A] transition-colors">Work</a>
          <button 
            onClick={onOpenAudit}
            className="px-5 py-2.5 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333333] transition-all cursor-pointer"
          >
            Get an Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
