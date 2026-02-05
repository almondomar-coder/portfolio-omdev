import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 container mx-auto">
      <div className="relative overflow-hidden glass-card p-12 md:p-24 text-center max-w-5xl mx-auto">
        {/* Ambient glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-cta/5 pointer-events-none -z-10" />

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Let’s Build Something <br />
          <span className="text-cta">That Works.</span>
        </h2>
        <p className="text-xl text-secondary mb-12 max-w-xl mx-auto">
          No strings attached. Just a conversation about where you are now and how we can get you where you want to be.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:hello@omdev.co" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 cursor-pointer">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free Call
          </a>
          <a href="mailto:hello@omdev.co" className="group flex items-center gap-2 text-white font-medium hover:text-cta transition-colors cursor-pointer">
            <Mail className="w-5 h-5" />
            hello@omdev.co
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
