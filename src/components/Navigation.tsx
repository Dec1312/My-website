import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Linkedin } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Career', href: '#career' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-navy-secondary/90 backdrop-blur-md border-b border-cyan-accent/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded bg-cyan-accent flex items-center justify-center text-navy-primary font-display font-bold text-sm">
              AO
            </div>
            <span className="text-text-primary font-display font-bold text-xl tracking-tight">Ahmad</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-text-secondary hover:text-cyan-accent transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <a 
                href={ahmadData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-cyan-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={ahmadData.personal.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-accent text-navy-primary px-5 py-2 rounded-md font-semibold text-sm hover:bg-yellow-400 transition-colors"
              >
                Book Call
              </a>
              <a 
                href="#contact"
                className="bg-cyan-accent text-navy-primary px-5 py-2 rounded-md font-semibold text-sm hover:bg-cyan-400 transition-colors glow-cyan"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-primary hover:text-cyan-accent transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-navy-secondary border-b border-cyan-accent/20 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-cyan-accent transition-colors font-medium text-lg block py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            <a 
              href={ahmadData.personal.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-accent text-navy-primary px-5 py-3 rounded-md font-semibold text-center hover:bg-yellow-400 transition-colors"
            >
              Book Call
            </a>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-cyan-accent text-navy-primary px-5 py-3 rounded-md font-semibold text-center hover:bg-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
