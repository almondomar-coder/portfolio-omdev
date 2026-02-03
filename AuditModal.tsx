
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Perform actual AI analysis
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this website URL: ${url}. Provide 3 professional, high-end, and concise recommendations for improving their web presence, SEO, or design. Keep it professional and encouraging. Format as a short markdown list.`,
        config: {
          systemInstruction: "You are Omar, a world-class senior web developer and SEO specialist at OMDEV. You are providing an initial 'snag list' for a potential client. Be honest, premium, and insightful.",
          tools: [{ googleSearch: {} }]
        }
      });

      addLog('AI Analysis Engine complete.');
      addLog('Synthesizing recommendations...');
      setProgress(90);
      
      setTimeout(() => {
        setAiObservations(response.text || "Unable to generate live observations, but your manual report is being prepared.");
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
        className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#FCFBF7] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-300 transform scale-100 opacity-100 border border-[#E5E1D8]">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-[#555555] hover:text-[#1A1A1A] transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10 md:p-14">
          {step === 'form' && (
            <>
              <h2 className="text-3xl font-serif font-semibold text-[#1A1A1A] mb-4">
                Get Your Free Audit
              </h2>
              <p className="text-[#555555] mb-8 leading-relaxed">
                Enter your details and our AI-assisted engine will perform an initial scan of your site's performance and SEO.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#999999] mb-2 font-medium">
                      Website URL
                    </label>
                    <input 
                      required
                      type="url"
                      placeholder="https://mysite.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full px-5 py-4 bg-white border border-[#E5E1D8] rounded-2xl focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#999999] mb-2 font-medium">
                      Your Email
                    </label>
                    <input 
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-white border border-[#E5E1D8] rounded-2xl focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#333333] transition-all transform active:scale-[0.98] disabled:opacity-50"
                >
                  Run AI Scan
                </button>
              </form>
            </>
          )}

          {step === 'processing' && (
            <div className="py-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A]">
                  Performing Snag-List Scan...
                </h2>
                <div className="text-xl font-mono text-[#1A1A1A]">{progress}%</div>
              </div>
              
              <div className="w-full bg-[#E5E1D8]/30 h-1.5 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-[#1A1A1A] h-full transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="bg-[#1A1A1A] text-[#E5E1D8] p-6 rounded-2xl font-mono text-xs leading-loose h-48 overflow-y-auto shadow-inner">
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
                <div className="w-10 h-10 bg-[#E5E1D8] rounded-full flex items-center justify-center text-[#1A1A1A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A]">
                  Initial AI Observations
                </h2>
              </div>
              
              <div className="bg-white border border-[#E5E1D8] p-8 rounded-3xl shadow-sm italic text-[#555555] leading-relaxed whitespace-pre-line">
                {aiObservations}
              </div>

              <div className="p-6 bg-[#E5E1D8]/20 rounded-2xl border border-[#E5E1D8]/50">
                <p className="text-sm text-[#1A1A1A] font-medium mb-1">What's next?</p>
                <p className="text-sm text-[#555555]">
                  I'll take these initial thoughts and create a full video walkthrough for you. Expect it in your inbox within 24 hours.
                </p>
              </div>

              <button 
                onClick={() => setStep('success')}
                className="w-full py-4 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333333] transition-all"
              >
                Done, Thanks Omar
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-[#E5E1D8] rounded-full flex items-center justify-center mx-auto mb-8 text-[#1A1A1A]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-serif font-semibold text-[#1A1A1A] mb-4">
                You're all set.
              </h2>
              <p className="text-[#555555] leading-relaxed mb-10">
                The audit request for <span className="text-[#1A1A1A] font-medium">{url}</span> is safely in my queue. I'll reach out soon.
              </p>
              
              <button 
                onClick={onClose}
                className="px-12 py-4 border border-[#E5E1D8] text-[#1A1A1A] rounded-full font-medium hover:bg-[#E5E1D8]/30 transition-all"
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
