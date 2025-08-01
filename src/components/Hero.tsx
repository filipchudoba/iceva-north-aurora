import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import auroraHero from '@/assets/aurora-hero.jpg';
import icevaLogo from '@/assets/iceva-logo-new.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Hubs', href: 'hubs' },
    { name: 'Fleet', href: 'fleet' },
    { name: 'Features', href: 'features' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg">
        <img 
          src={auroraHero} 
          alt="Aurora Borealis" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={icevaLogo} 
              alt="ICEva Logo" 
              className="h-16 w-auto animate-aurora-pulse"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="aurora-card border-primary/20"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 aurora-card rounded-lg border border-primary/20">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-40 flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <img 
            src={icevaLogo} 
            alt="ICEva Logo" 
            className="h-32 md:h-48 w-auto mx-auto mb-6 animate-aurora-pulse"
          />
          <p className="text-2xl md:text-3xl mb-8 text-foreground/90 font-light">
            Cooler Way to Fly
          </p>
          <p className="text-lg md:text-xl mb-12 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of North Atlantic aviation with our VAMSYS-based virtual airline. 
            Explore Iceland, the Faroe Islands, and beyond with realistic operations and stunning routes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://vamsys.io/register/iceva"
              target="_blank"
              rel="noopener noreferrer"
              className="aurora-button text-lg px-8 py-4 rounded-lg font-semibold inline-block"
            >
              Join ICEva Now
            </a>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="aurora-card border-primary/30 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="animate-float">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;