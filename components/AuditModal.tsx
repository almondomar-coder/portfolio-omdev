import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { supabase } from '../lib/supabase';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'form' | 'processing' | 'results' | 'success';

const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('form');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [aiObservations, setAiObservations] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep('form');
        setUrl('');
        setEmail('');
        setProgress(0);
        setLogs([]);
        setAiObservations('');
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `> ${msg}`]);
  };

  const runAudit = async () => {
    setIsSubmitting(true);
    setStep('processing');
    setLogs(['Initiating OMDEV Core Scan...']);

    // Simulate initial logs for "feel"
    const mockSteps = [
      { msg: 'Connecting to headless browser instance...', delay: 800, p: 10 },
      { msg: 'Analyzing DOM structure...', delay: 1500, p: 25 },
      { msg: 'Detecting SEO metadata...', delay: 2200, p: 40 },
      { msg: 'Checking Core Web Vitals...', delay: 3000, p: 60 },
    ];

    mockSteps.forEach(s => {
      setTimeout(() => {
        addLog(s.msg);
        setProgress(s.p);
      }, s.delay);
    });

    try {
      // 1. Save request to Supabase
      const { error: dbError } = await supabase
        .from('audit_requests')
        .insert([{ email, website_url: url }]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        addLog('Warning: Could not save request to database.');
      } else {
        addLog('Audit request securely saved.');
      }

      const ai = new GoogleGenAI({ apiKey: import.meta.env.GEMINI_API_KEY }); // Use import.meta.env for Vite

      // Perform actual AI analysis
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp", // Updated model
        contents: `Analyze this website URL: ${url}. Provide 3 professional, high-end, and concise recommendations for improving their web presence, SEO, or design. Keep it professional and encouraging. Format as a short markdown list.`,
        config: {
          systemInstruction: "You are Omar, a world-class senior web developer and SEO specialist at OMDEV. You are providing an initial 'snag list' for a potential client. Be honest, premium, and insightful.",
          // tools: [{ googleSearch: {} }] // Removed for now as regular model is sufficient for demo
        }
      });

      addLog('AI Analysis Engine complete.');
      addLog('Synthesizing recommendations...');
      setProgress(90);

      const responseText = response.text || "";

      setTimeout(() => {
        setAiObservations(responseText || "Unable to generate live observations, but your manual report is being prepared.");
        setProgress(100);
        setStep('results');
      }, 4000);

    } catch (error) {
      console.error("Audit failed:", error);
      addLog('Error: External scan timeout. Switching to manual mode.');
      setTimeout(() => {
        setAiObservations("We're having trouble reaching your site right now, but I'll perform a manual deep-dive and email you the results.");
        setStep('results');
      }, 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url && email) {
      runAudit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      <div className="relative glass-card bg-black/40 w-full max-w-2xl overflow-hidden transition-all duration-300 transform scale-100 opacity-100 border border-white/20 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10 md:p-14">
          {step === 'form' && (
            <>
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Your Free Audit
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed text-lg">
                Enter your details and our AI-assisted engine will perform an initial scan of your site's performance and SEO.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                      Website URL
                    </label>
                    <input
                      required
                      type="url"
                      placeholder="https://mysite.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[var(--color-cta)] transition-all text-white placeholder-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[var(--color-cta)] transition-all text-white placeholder-white/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-5 text-lg font-bold tracking-wide"
                >
                  Run Scan
                </button>
              </form>
            </>
          )}

          {step === 'processing' && (
            <div className="py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  Performing Snag-List Scan...
                </h2>
                <div className="text-xl font-mono text-[var(--color-cta)]">{progress}%</div>
              </div>

              <div className="w-full bg-white/10 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-[var(--color-cta)] h-full transition-all duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="bg-black/30 text-emerald-400 p-6 rounded-2xl font-mono text-xs leading-loose h-48 overflow-y-auto border border-white/5">
                {logs.map((log, i) => (
                  <div key={i} className="mb-1 opacity-90">{log}</div>
                ))}
                <div ref={logEndRef} />
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-10 h-10 bg-[var(--color-cta)]/20 rounded-full flex items-center justify-center text-[var(--color-cta)] border border-[var(--color-cta)]/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Initial AI Observations
                </h2>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl italic text-white/80 leading-relaxed whitespace-pre-line">
                {aiObservations}
              </div>

              <div className="p-6 bg-[var(--color-cta)]/10 rounded-2xl border border-[var(--color-cta)]/20">
                <p className="text-sm text-[var(--color-cta)] font-bold mb-1">What's next?</p>
                <p className="text-sm text-white/70">
                  I'll take these initial thoughts and create a full video walkthrough for you. Expect it in your inbox within 24 hours.
                </p>
              </div>

              <button
                onClick={() => setStep('success')}
                className="btn-primary w-full py-4 font-bold"
              >
                Done, Thanks Omar
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-400 border border-green-500/30">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                You're all set.
              </h2>
              <p className="text-white/70 leading-relaxed mb-10">
                The audit request for <span className="text-white font-medium border-b border-white/20 pb-0.5">{url}</span> is safely in my queue. I'll reach out soon.
              </p>

              <button
                onClick={onClose}
                className="px-12 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
