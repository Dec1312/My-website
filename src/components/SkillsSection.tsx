import { motion } from 'motion/react';
import { Award, Code, Users } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-navy-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">Skills & Certifications</h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Column */}
          <div className="space-y-12">
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Code className="text-cyan-accent" />
              Core Competencies
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-cyan-accent mb-4 uppercase tracking-wider text-sm">Operations Leadership</h4>
                <div className="flex flex-wrap gap-3">
                  {ahmadData.skills.operationsLeadership.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-navy-primary/50 border border-cyan-accent/30 rounded-full text-sm text-white hover:border-cyan-accent/80 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-yellow-accent mb-4 uppercase tracking-wider text-sm">Customer Experience Strategy</h4>
                <div className="flex flex-wrap gap-3">
                  {ahmadData.skills.customerExperience.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-navy-primary/50 border border-yellow-accent/30 rounded-full text-sm text-white hover:border-yellow-accent/80 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-orange-accent mb-4 uppercase tracking-wider text-sm">Process Optimization & Data Analytics</h4>
                <div className="flex flex-wrap gap-3">
                  {ahmadData.skills.processOptimization.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-navy-primary/50 border border-orange-accent/30 rounded-full text-sm text-white hover:border-orange-accent/80 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-yellow-accent" />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {ahmadData.certifications.map((cert, index) => {
                const badgeColors = {
                  yellow: 'border-yellow-accent/30 group-hover:border-yellow-accent/80',
                  orange: 'border-orange-accent/30 group-hover:border-orange-accent/80',
                  cyan: 'border-cyan-accent/30 group-hover:border-cyan-accent/80',
                };
                
                const iconColors = {
                  yellow: 'text-yellow-accent',
                  orange: 'text-orange-accent',
                  cyan: 'text-cyan-accent',
                };

                const badgeClass = badgeColors[cert.color as keyof typeof badgeColors] || badgeColors.cyan;
                const iconClass = iconColors[cert.color as keyof typeof iconColors] || iconColors.cyan;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className={`bg-navy-primary/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 group ${badgeClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 ${iconClass}`}>
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-accent transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-text-muted text-sm font-mono">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
