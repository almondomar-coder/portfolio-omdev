import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative max-w-md mx-auto group">
          <div className="aspect-[4/5] rounded-3xl glass-card overflow-hidden relative p-2 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="/images/omar-profile.jpg"
              alt="Omar - OMDEV"
              className="w-full h-full object-cover rounded-2xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors rounded-2xl pointer-events-none" />
          </div>

          <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:flex flex-col justify-center backdrop-blur-xl max-w-[200px] border border-white/10 rounded-3xl shadow-xl animate-fade-in-up">
            <span className="text-4xl font-bold text-white mb-2">4 Years</span>
            <span className="text-xs uppercase tracking-widest text-secondary leading-relaxed">in the tech world & web development</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Your Website, <br />
            <span className="text-zinc-400">Built With Care.</span>
          </h2>

          <div className="space-y-6 text-lg text-secondary leading-relaxed">
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

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Approach</p>
              <p className="font-medium text-white">One-to-One Collaboration</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Focus</p>
              <p className="font-medium text-white">Growth & Conversions</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Values</p>
              <p className="font-medium text-white">Trust & Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
