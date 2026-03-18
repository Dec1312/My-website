import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ImpactDashboard } from './components/ImpactDashboard';
import { CareerTimeline } from './components/CareerTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { RecruiterAssistant } from './components/RecruiterAssistant';
import { FloatingFeatures } from './components/FloatingFeatures';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-primary text-text-primary font-sans selection:bg-cyan-accent/30 selection:text-white">
      <Navigation />
      <FloatingFeatures />
      <main>
        <HeroSection />
        <ImpactDashboard />
        <CareerTimeline />
        <SkillsSection />
        <ContactSection />
      </main>
      <RecruiterAssistant />
    </div>
  );
}
