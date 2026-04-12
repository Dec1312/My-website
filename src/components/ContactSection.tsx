import { motion } from 'motion/react';
import { Mail, Linkedin, Calendar, MapPin } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-navy-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto mb-8"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Open to discussing leadership opportunities in Operations and Customer Excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <a 
            href={`mailto:${ahmadData.personal.email}`}
            className="flex flex-col items-center justify-center p-8 bg-navy-secondary/50 border border-cyan-accent/20 rounded-xl hover:border-cyan-accent/60 transition-all group"
          >
            <div className="w-12 h-12 bg-cyan-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-cyan-accent" size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-text-secondary text-sm">{ahmadData.personal.email}</p>
          </a>

          <a 
            href={ahmadData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-navy-secondary/50 border border-cyan-accent/20 rounded-xl hover:border-cyan-accent/60 transition-all group"
          >
            <div className="w-12 h-12 bg-cyan-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="text-cyan-accent" size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">LinkedIn</h3>
            <p className="text-text-secondary text-sm">Connect Professionally</p>
          </a>

          <a 
            href={ahmadData.personal.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-navy-secondary/50 border border-yellow-accent/20 rounded-xl hover:border-yellow-accent/60 transition-all group"
          >
            <div className="w-12 h-12 bg-yellow-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="text-yellow-accent" size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Calendly</h3>
            <p className="text-text-secondary text-sm">Book a 30-min Call</p>
          </a>

          <div className="flex flex-col items-center justify-center p-8 bg-navy-secondary/50 border border-orange-accent/20 rounded-xl hover:border-orange-accent/60 transition-all group">
            <div className="w-12 h-12 bg-orange-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="text-orange-accent" size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-text-secondary text-sm">{ahmadData.personal.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href={`mailto:ahmad.yamm@outlook.com`}
            className="inline-block bg-yellow-accent text-navy-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105"
          >
            Send Email
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10 pt-8 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-text-secondary text-sm mb-2">
            © 2026 Ahmad AlOmari. All rights reserved.
          </p>
          <p className="text-text-muted text-xs mb-6 font-mono">
            Operations Excellence • Customer Experience • Data-Driven Leadership
          </p>
        
          </div>
      </footer>
    </section>
  );
}
