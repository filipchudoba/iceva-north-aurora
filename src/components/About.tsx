import { CheckCircle, Plane, Globe, Users, Award, Headphones, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Custom Soundpacks",
      description: "Immersive airline-specific audio experience"
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Realistic Fleet",
      description: "Authentic aircraft operations and maintenance"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Challenges & Awards",
      description: "Earn recognition for your flying achievements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Active Community",
      description: "Connect with fellow virtual aviators"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Regional Variety",
      description: "Explore unique North Atlantic destinations"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Real-world Operations",
      description: "Authentic schedules and procedures"
    }
  ];

  const offerings = [
    "Achievements System",
    "Special Events",
    "Real-world Schedules",
    "Aircraft Maintenance",
    "SimBrief Integration",
    "Discord Community",
    "Guided Tours",
    "Pilot Rankings",
    "Real-time Flight Tracking"
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 aurora-text">
              About ICEva
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
                ICEva is a VAMSYS-based virtual airline simulating real-world operations from Iceland and the Faroe Islands, 
                including cargo, charters, and seasonal routes like Fly Khiva. 
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We focus on realism and regional variety, bringing you the authentic experience of North Atlantic aviation 
                with modern technology and an active community of aviation enthusiasts.
              </p>
            </div>
          </div>

          {/* What Makes Us Special */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 aurora-text">
              What Makes Us Special
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="aurora-card p-6 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-aurora-primary rounded-lg text-primary-foreground">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 aurora-text">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 aurora-card rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;