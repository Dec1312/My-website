import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Linkedin, Calendar, Mail } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';
import { RecruiterMode } from './RecruiterMode';

export function HeroSection() {
  const [isRecruiterModeOpen, setIsRecruiterModeOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-navy-primary to-navy-secondary">
      <RecruiterMode isOpen={isRecruiterModeOpen} onClose={() => setIsRecruiterModeOpen(false)} />
      
      {/* Background Particles/Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-accent/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-display font-bold text-text-primary mb-6">
                Operational Excellence.<br />
                <span className="text-cyan-accent">Customer Experience.</span><br />
                Data Driven.
              </h1>
              <div className="w-24 h-[3px] bg-cyan-accent mb-8"></div>
              
              <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
                Helping organizations optimize operations, improve customer satisfaction, and drive measurable business results.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={ahmadData.personal.cvDownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-yellow-accent text-navy-primary px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-all hover:scale-105"
                >
                  <Download size={18} />
                  Download CV
                </a>
                <a 
                  href={ahmadData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30 px-6 py-3 rounded-md font-semibold hover:bg-cyan-accent/20 transition-all hover:scale-105 glow-cyan-border"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a 
                  href={ahmadData.personal.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-accent text-navy-primary px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition-all hover:scale-105"
                >
                  <Calendar size={18} />
                  Book Call
                </a>
                <a 
                  href="#contact"
                  className="flex items-center gap-2 bg-cyan-accent text-navy-primary px-6 py-3 rounded-md font-semibold hover:bg-cyan-400 transition-all hover:scale-105 glow-cyan"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => setIsRecruiterModeOpen(true)}
                  className="flex items-center gap-2 text-cyan-accent border-b border-cyan-accent/30 pb-1 hover:border-cyan-accent transition-colors font-medium"
                >
                  View Candidate Highlights →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side (40%) */}
          <div className="w-full lg:w-[40%] mt-12 lg:mt-0 relative">
            {/* Floating Element 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -15, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -right-4 sm:-right-10 z-20 bg-navy-secondary/90 backdrop-blur-md border border-yellow-accent/30 rounded-xl p-4 shadow-xl shadow-yellow-accent/5 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-accent/20 flex items-center justify-center text-yellow-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider font-semibold"></div>
                  <div className="font-mono font-bold text-white text-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, 15, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.7 },
                x: { duration: 0.8, delay: 0.7 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute -bottom-10 -left-4 sm:-left-10 z-20 bg-navy-secondary/90 backdrop-blur-md border border-cyan-accent/30 rounded-xl p-4 shadow-xl shadow-cyan-accent/5 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-accent/20 flex items-center justify-center text-cyan-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider font-semibold">CSAT Score</div>
                  <div className="font-mono font-bold text-white text-lg">94%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -5, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="bg-navy-secondary/80 backdrop-blur-sm border-2 border-cyan-accent/30 rounded-xl p-8 glow-cyan-border relative overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent to-blue-500"></div>
              
              <h2 className="font-mono text-cyan-accent text-sm tracking-widest uppercase mb-6 font-semibold">
                Key Metrics
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-text-secondary font-medium">Audit Compliance</span>
                  <span className="font-mono text-2xl font-bold text-white">100%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-text-secondary font-medium">Productivity Gain</span>
                  <span className="font-mono text-2xl font-bold text-yellow-accent">35%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-text-secondary font-medium">Claim Accuracy</span>
                  <span className="font-mono text-2xl font-bold text-white">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary font-medium">Response Time</span>
                  <span className="font-mono text-2xl font-bold text-cyan-accent">-60%</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-text-muted text-sm italic">
                  Scroll down to explore full impact dashboard
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
