import { Plane, Package, Users, Calendar } from 'lucide-react';

const Fleet = () => {
  const boeingFleet = [
    { model: "737 MAX 8", capacity: "162-189", range: "3,550 nm" },
    { model: "737 MAX 9", capacity: "178-220", range: "3,550 nm" },
    { model: "757-200", capacity: "200-239", range: "3,915 nm" },
    { model: "757-300", capacity: "243-280", range: "3,467 nm" },
    { model: "767-300", capacity: "269-350", range: "5,980 nm" }
  ];

  const bombardierFleet = [
    { model: "Dash 8-200", capacity: "37-39", range: "1,089 nm" },
    { model: "Dash 8-400", capacity: "68-78", range: "1,200 nm" }
  ];

  const airbusFleet = [
    { model: "A320", capacity: "150-180", range: "3,300 nm" },
    { model: "A320neo", capacity: "150-180", range: "3,500 nm" },
    { model: "A321neo", capacity: "185-244", range: "4,000 nm" }
  ];

  const flightTypes = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Passenger",
      description: "Scheduled passenger services connecting the North Atlantic",
      color: "text-blue-500"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Cargo",
      description: "Essential freight services to remote island communities",
      color: "text-green-500"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Charter",
      description: "Specialized charter flights including seasonal routes",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="fleet" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Fleet Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aurora-text">
            Our Fleet
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Modern, efficient aircraft perfectly suited for North Atlantic operations and island connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Boeing Fleet */}
          <div className="aurora-card p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-aurora-primary rounded-lg text-primary-foreground">
                <Plane className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Boeing Aircraft</h3>
            </div>
            <div className="space-y-4">
              {boeingFleet.map((aircraft, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-primary">{aircraft.model}</h4>
                    <p className="text-sm text-foreground/60">Range: {aircraft.range}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">Capacity</p>
                    <p className="font-medium">{aircraft.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Airbus Fleet */}
          <div className="aurora-card p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-aurora-primary rounded-lg text-primary-foreground">
                <Plane className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Airbus Aircraft</h3>
            </div>
            <div className="space-y-4">
              {airbusFleet.map((aircraft, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-primary">{aircraft.model}</h4>
                    <p className="text-sm text-foreground/60">Range: {aircraft.range}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">Capacity</p>
                    <p className="font-medium">{aircraft.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bombardier Fleet */}
          <div className="aurora-card p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-aurora-primary rounded-lg text-primary-foreground">
                <Plane className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Bombardier Aircraft</h3>
            </div>
            <div className="space-y-4">
              {bombardierFleet.map((aircraft, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-primary">{aircraft.model}</h4>
                    <p className="text-sm text-foreground/60">Range: {aircraft.range}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">Capacity</p>
                    <p className="font-medium">{aircraft.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flight Types */}
        <div id="features">
          <h3 className="text-3xl font-bold text-center mb-12 aurora-text">
            Flight Types
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {flightTypes.map((type, index) => (
              <div 
                key={index}
                className="aurora-card p-8 rounded-lg text-center transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 bg-aurora-primary rounded-full text-primary-foreground mb-6`}>
                  {type.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{type.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;