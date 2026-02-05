import React from 'react';
import PrismBackground from './PrismBackground';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenAudit: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0">
        <PrismBackground />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-zinc-300 hover:bg-white/10 transition-colors cursor-default">
          <Sparkles className="w-3 h-3 text-cta" />
          <span>Freelance Web Developer • SEO Expert</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
          One-to-One Focus.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Business Growth.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto mb-12">
          I’m Omar. I build premium, SEO-driven websites that turn your visitors into loyal customers. No agencies, just direct expertise.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="btn-primary text-lg w-full sm:w-auto h-14 group cursor-pointer relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get a Free Website Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#services"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/10 transition-all cursor-pointer"
          >
            View Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
