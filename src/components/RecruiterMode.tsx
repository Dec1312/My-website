import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Trophy, Briefcase, TrendingUp } from 'lucide-react';

interface RecruiterModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterMode({ isOpen, onClose }: RecruiterModeProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-primary/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-navy-secondary border border-cyan-accent/30 rounded-2xl shadow-2xl glow-cyan-border scrollbar-hide"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-navy-secondary/90 backdrop-blur-md border-b border-cyan-accent/20 p-6 flex justify-between items-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-3">
              <Trophy className="text-yellow-accent" size={28} />
              Why Ahmad is a Strong Hire
            </h2>
            <button 
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-10">
            {/* Key Attributes */}
            <section>
              <h3 className="text-xl font-bold text-cyan-accent mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Key Attributes
              </h3>
              <ul className="space-y-3">
                {[
                  "10+ years of progressive operations and customer excellence leadership",
                  "Certified expertise in Six Sigma, data analytics, and project management",
                  "Proven track record of delivering measurable business results",
                  "Cross-industry experience (healthcare, insurance, logistics, customer service)"
                ].map((attr, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle className="text-cyan-accent shrink-0 mt-0.5" size={18} />
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Achievements */}
            <section>
              <h3 className="text-xl font-bold text-yellow-accent mb-4 flex items-center gap-2">
                <Trophy size={20} />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { metric: "100%", text: "regulatory audit compliance" },
                  { metric: "35%", text: "team productivity improvement" },
                  { metric: "98%", text: "claim approval accuracy" },
                  { metric: "60%", text: "faster customer response time" },
                  { metric: "90%", text: "customer retention" },
                  { metric: "94%", text: "customer satisfaction score" }
                ].map((ach, i) => (
                  <div key={i} className="bg-navy-primary/50 border border-white/10 rounded-lg p-4 flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-white">{ach.metric}</span>
                    <span className="text-sm text-text-secondary leading-tight">{ach.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Transformation Examples */}
            <section>
              <h3 className="text-xl font-bold text-orange-accent mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Transformation Examples
              </h3>
              <div className="space-y-4">
                {[
                  { company: "Alia Hospital", action: "Implemented compliance framework", result: "100% audit success" },
                  { company: "Eon Aligner", action: "Customer experience transformation", result: "CSAT 82% → 94%" },
                  { company: "Aramex", action: "Operations optimization", result: "35% productivity gain" }
                ].map((ex, i) => (
                  <div key={i} className="bg-navy-primary/50 border border-white/10 rounded-lg p-5">
                    <div className="font-bold text-white mb-1">{ex.company}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                      <span className="text-text-secondary">{ex.action}</span>
                      <span className="hidden sm:inline text-cyan-accent">→</span>
                      <span className="font-bold text-cyan-accent">{ex.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Footer */}
          <div className="sticky bottom-0 bg-navy-secondary/90 backdrop-blur-md border-t border-cyan-accent/20 p-6 flex justify-end">
            <button 
              onClick={onClose}
              className="bg-cyan-accent text-navy-primary px-6 py-2 rounded-md font-bold hover:bg-cyan-400 transition-colors"
            >
              Close Highlights
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
