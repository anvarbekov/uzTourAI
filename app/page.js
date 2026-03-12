import MainLayout from './MainLayout';
import HeroSection from '../components/home/HeroSection';
import RegionsSection from '../components/home/RegionsSection';
import EventsSection from '../components/home/EventsSection';
import AISection from '../components/home/AISection';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <RegionsSection />
      <EventsSection />
      <AISection />
    </MainLayout>
  );
}
