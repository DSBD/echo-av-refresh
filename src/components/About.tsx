import { CheckCircle2 } from "lucide-react";

const features = [
  "Professional-grade equipment for any venue size",
  "Experienced technicians on-site for your event",
  "Custom solutions tailored to your vision",
  "Full setup, operation, and teardown included",
  "24/7 support before and during your event",
  "Competitive pricing with transparent quotes",
];

const About = () => {
  return (
    <section id="about" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Echo AV
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              YOUR TRUSTED <span className="gradient-text">AV PARTNER</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Based out of Hamilton, ON, EchoAV Event Productions has been delivering 
              exceptional audio-visual experiences. From intimate weddings to large-scale 
              festivals, we bring the technical expertise and premium equipment 
              needed to make your event unforgettable.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We service events in the Greater Toronto Hamilton Area and surrounding areas 
              including Niagara Region, Halton Region, Norfolk County, and Guelph.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80"
                alt="Echo AV team at work"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 max-w-xs animate-float">
              <div className="font-display text-4xl text-primary mb-1">15+</div>
              <div className="text-foreground font-medium">Years of Excellence</div>
              <div className="text-muted-foreground text-sm">
                Delivering premium AV solutions across Canada
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
