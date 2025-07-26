import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import SkillsSection from '@/components/SkillsSection';
import VolunteeringSection from '@/components/VolunteeringSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <VolunteeringSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
