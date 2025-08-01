import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Hubs from '@/components/Hubs';
import Fleet from '@/components/Fleet';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Always use dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Hubs />
      <Fleet />
      <Footer />
    </div>
  );
};

export default Index;
