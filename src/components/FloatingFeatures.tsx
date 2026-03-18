import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Mail, Calendar, Download, ArrowUp } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';

export function FloatingFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Social Bar (Desktop Only) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 bg-navy-secondary/80 backdrop-blur-md p-3 rounded-r-2xl border border-l-0 border-cyan-accent/30 shadow-lg shadow-cyan-accent/10"
      >
        <a 
          href={ahmadData.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-text-secondary hover:text-cyan-accent hover:bg-cyan-accent/10 rounded-xl transition-all hover:scale-110 group relative"
        >
          <Linkedin size={22} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-navy-secondary border border-cyan-accent/30 text-cyan-accent text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            LinkedIn
          </span>
        </a>
        <a 
          href="#contact"
          className="p-2 text-text-secondary hover:text-yellow-accent hover:bg-yellow-accent/10 rounded-xl transition-all hover:scale-110 group relative"
        >
          <Mail size={22} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-navy-secondary border border-yellow-accent/30 text-yellow-accent text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Email Me
          </span>
        </a>
        <a 
          href={ahmadData.personal.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-text-secondary hover:text-orange-accent hover:bg-orange-accent/10 rounded-xl transition-all hover:scale-110 group relative"
        >
          <Calendar size={22} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-navy-secondary border border-orange-accent/30 text-orange-accent text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Book Call
          </span>
        </a>
        <div className="w-full h-px bg-white/10 my-1"></div>
        <a 
          href={ahmadData.personal.cvDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-110 group relative"
        >
          <Download size={22} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-navy-secondary border border-white/30 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Download CV
          </span>
        </a>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 sm:bottom-6 sm:right-6 z-40 p-3 bg-cyan-accent/10 border border-cyan-accent/50 text-cyan-accent rounded-full shadow-lg shadow-cyan-accent/20 hover:bg-cyan-accent hover:text-navy-primary transition-all hover:scale-110 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
