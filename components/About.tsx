import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative max-w-md mx-auto group">
          <div className="aspect-[4/5] rounded-3xl glass-card overflow-hidden relative p-2 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="/images/omar-profile.jpg"
              alt="Omar — AI Search & GEO specialist at OmDev, London"
              className="w-full h-full object-cover rounded-2xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors rounded-2xl pointer-events-none" />
          </div>

          <div className="absolute -bottom-6 -right-6 glass-card p-6 hidden md:flex flex-col justify-center backdrop-blur-xl max-w-[200px] border border-white/10 rounded-3xl shadow-xl animate-fade-in-up">
            <span className="text-4xl font-bold text-white mb-2">+50%</span>
            <span className="text-xs uppercase tracking-widest text-secondary leading-relaxed">visibility growth for Plum Pilates</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Search changed. <br />
            <span className="text-zinc-400">I make sure you don&rsquo;t disappear.</span>
          </h2>

          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              I&rsquo;m Omar. I started in tech at 16 and spent years doing SEO &mdash; getting businesses to the top of Google. But the game has changed: more and more customers now get a single AI-written answer instead of a list of links.
            </p>
            <p>
              So I built OmDev around what comes next: <span className="text-white font-medium">Generative Engine Optimisation</span>. I make sure ChatGPT, Perplexity and Google AI Overviews cite your business &mdash; while keeping your traditional SEO strong underneath it.
            </p>
            <p>
              One-to-one, no agency layers. Just direct, honest work to keep you visible as search keeps changing.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Specialism</p>
              <p className="font-medium text-white">GEO + SEO</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Focus</p>
              <p className="font-medium text-white">AI Visibility & Growth</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Based In</p>
              <p className="font-medium text-white">Bermondsey, SE16</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
