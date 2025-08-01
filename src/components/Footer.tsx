import { ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import icevaLogo from '@/assets/iceva-logo.png';

const Footer = () => {
  return (
    <footer className="bg-aurora-secondary border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={icevaLogo} 
                alt="ICEva Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold aurora-text">ICEva</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              Experience the cooler way to fly with authentic North Atlantic virtual aviation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Hubs', 'Fleet', 'Features'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Join Actions */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Join ICEva</h4>
            <div className="space-y-3">
              <Button className="w-full aurora-button">
                <MessageSquare className="h-4 w-4 mr-2" />
                Join Discord
              </Button>
              <Button variant="outline" className="w-full aurora-card border-primary/30">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} ICEva Virtual Airline. Experience the aurora of aviation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;