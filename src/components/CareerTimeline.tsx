import { motion } from 'motion/react';
import { ahmadData } from '../lib/ahmadData';

export function CareerTimeline() {
  return (
    <section id="career" className="py-24 bg-navy-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">Career Journey</h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-cyan-accent/30 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {ahmadData.career.map((job, index) => {
              const isEven = index % 2 === 0;
              
              const badgeColors = {
                yellow: 'bg-yellow-accent text-navy-primary',
                orange: 'bg-orange-accent text-navy-primary',
                cyan: 'bg-cyan-accent text-navy-primary',
              };
              
              const badgeClass = badgeColors[job.color as keyof typeof badgeColors] || badgeColors.cyan;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-accent -translate-x-1/2 mt-6 shadow-[0_0_10px_#00d9ff] z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-navy-secondary/80 backdrop-blur-sm border border-cyan-accent/20 rounded-xl p-6 glow-cyan-border transition-all duration-300 hover:scale-[1.02] hover:border-cyan-accent/60 group">
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeClass}`}>
                          {job.duration}
                        </span>
                        <span className="text-text-muted text-sm font-mono">
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors">
                        {job.title}
                      </h3>
                      <h4 className="text-lg text-text-secondary font-medium mb-4">
                        {job.company}
                      </h4>

                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-secondary">
                            <span className="text-cyan-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
