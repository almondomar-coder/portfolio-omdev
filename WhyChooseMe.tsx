
import React from 'react';

const reasons = [
  "Local developer you can meet",
  "Affordable premium service",
  "One-to-one support throughout",
  "Fast, honest communication",
  "Transparent & fair pricing",
  "Long-term growth focus"
];

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-12">
            Why Partner with OMDEV?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-[#E5E1D8]"></div>
                <span className="text-white/90 text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-[#E5E1D8] p-12 rounded-3xl text-[#1A1A1A] relative z-10">
            <h3 className="text-2xl font-serif font-semibold mb-6">No Agency Noise.</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-80">
              Big agencies often have overheads that drive prices up and dilute personal connection. I keep things lean, focused, and high-quality.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold">O</div>
              <div>
                <p className="font-bold">Omar</p>
                <p className="text-sm opacity-60">Founder, OMDEV</p>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#E5E1D8]/20 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-[#E5E1D8]/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
