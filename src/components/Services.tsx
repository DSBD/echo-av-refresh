import { Volume2, Monitor, Lightbulb, Theater, Music2, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Volume2,
    title: "AUDIO",
    description:
      "Small to medium scale PA systems suitable for concerts, conferences, weddings, and more.",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Monitor,
    title: "VIDEO",
    description:
      "Indoor projection screens and projectors for keynote speeches, movie nights, multi-cam feeds.",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "LIGHTING",
    description:
      "Full scale lighting rigs for theatre, concerts, up-lighting, ambient effects, and follow spots.",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Theater,
    title: "THEATRE",
    description:
      "Wireless microphones, stage lighting, drape/backdrops, and staging for amazing performances.",
    gradient: "from-accent/20 to-transparent",
  },
  {
    icon: Music2,
    title: "CONCERTS",
    description:
      "Backline, PA systems, microphones, lighting, and staging for local and touring concerts.",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Users,
    title: "CONFERENCES",
    description:
      "Live-streaming, hybrid event technology, and everything for seamless corporate events.",
    gradient: "from-accent/20 to-transparent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            FULL-SERVICE <span className="gradient-text">AV SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to large-scale productions, we provide comprehensive 
            audio-visual services tailored to your unique event needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
