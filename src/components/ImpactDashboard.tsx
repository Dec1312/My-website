import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, TrendingUp, CheckCircle, Clock, Users, Star } from 'lucide-react';
import { ahmadData } from '../lib/ahmadData';
import { AnimatedCounter } from './AnimatedCounter';

const iconMap: Record<string, React.ReactNode> = {
  healthcare: <HeartPulse size={32} />,
  upward: <TrendingUp size={32} />,
  checkmark: <CheckCircle size={32} />,
  downward: <Clock size={32} />,
  users: <Users size={32} />,
  star: <Star size={32} />,
};

export function ImpactDashboard() {
  return (
    <section id="impact" className="py-24 bg-navy-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">Impact Dashboard</h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ahmadData.keyMetrics.map((metric, index) => {
            const isYellow = index < 3;
            const iconColor = isYellow ? 'text-yellow-accent' : 'text-orange-accent';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-navy-primary/50 backdrop-blur-sm border border-cyan-accent/20 rounded-xl p-8 glow-cyan-border transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`mb-6 ${iconColor}`}>
                  {iconMap[metric.icon]}
                </div>
                
                <div className="font-mono text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                
                <h3 className="text-text-secondary font-medium text-lg">
                  {metric.label}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
