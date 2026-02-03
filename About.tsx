
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-[#FCFBF7] border border-[#E5E1D8] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/omar-dev/800/1000" 
              alt="Omar - OMDEV" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#E5E1D8]/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FCFBF7] border border-[#E5E1D8] rounded-3xl p-6 hidden md:flex flex-col justify-end">
            <span className="text-3xl font-serif font-bold text-[#1A1A1A]">16</span>
            <span className="text-xs uppercase tracking-widest text-[#555555]">Started at age</span>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1A1A1A] mb-8">
            Your Website, <br />Built With Care
          </h2>
          
          <div className="space-y-6 text-lg text-[#555555] leading-relaxed">
            <p>
              I’m a one-man team by choice. When you work with OMDEV, you work directly with me. No account managers, no layers of corporate jargon—just honest, personal collaboration.
            </p>
            <p>
              I started in tech at 16, and since then, I've poured my heart and soul into every project. I don't just build sites; I build tools for growth.
            </p>
            <p>
              My passion lies in helping local businesses and creative brands find their voice online through tailored solutions that actually work.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#E5E1D8] pt-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#999999] mb-1">Approach</p>
              <p className="font-medium text-[#1A1A1A]">One-to-One Collaboration</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#999999] mb-1">Focus</p>
              <p className="font-medium text-[#1A1A1A]">Growth & Conversions</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#999999] mb-1">Values</p>
              <p className="font-medium text-[#1A1A1A]">Trust & Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
