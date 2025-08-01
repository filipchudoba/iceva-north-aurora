import { MapPin, Plane } from 'lucide-react';

const Hubs = () => {
  const hubs = [
    {
      name: "Vágár",
      country: "Faroe Islands",
      icao: "EKVG",
      iata: "FAE",
      description: "Gateway to the dramatic Faroe Islands, surrounded by stunning cliffs and Nordic beauty.",
      type: "Focus City"
    },
    {
      name: "Reykjavík",
      country: "Iceland",
      icao: "BIRK",
      iata: "RKV",
      description: "Domestic hub serving Iceland's capital region with essential inter-island connections.",
      type: "Domestic Hub"
    },
    {
      name: "Keflavík",
      country: "Iceland", 
      icao: "BIKF",
      iata: "KEF",
      description: "Iceland's primary international gateway, connecting the North Atlantic to the world.",
      type: "International Hub"
    }
  ];

  return (
    <section id="hubs" className="py-20 px-6 bg-aurora-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 aurora-text">
            Our Hubs & Focus Airports
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Operating from strategic locations across the North Atlantic, connecting remote islands to the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hubs.map((hub, index) => (
            <div 
              key={index}
              className="aurora-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="bg-aurora-primary p-6 text-primary-foreground">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium opacity-90">{hub.type}</span>
                  </div>
                  <Plane className="h-6 w-6 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{hub.name}</h3>
                <p className="text-primary-foreground/80">{hub.country}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <p className="text-sm text-foreground/60 uppercase tracking-wider">ICAO</p>
                    <p className="text-xl font-bold text-primary">{hub.icao}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-foreground/60 uppercase tracking-wider">IATA</p>
                    <p className="text-xl font-bold text-accent">{hub.iata}</p>
                  </div>
                </div>
                <p className="text-foreground/70 leading-relaxed">{hub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hubs;