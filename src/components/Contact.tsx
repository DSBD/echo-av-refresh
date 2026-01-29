import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6">
              LET'S CREATE <span className="gradient-text">TOGETHER</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to bring your event to life? Fill out the form below and 
              we'll get back to you with a custom quote within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-foreground mb-2">
                  Event Type
                </label>
                <Input
                  id="event-type"
                  type="text"
                  placeholder="Concert, Wedding, Conference, etc."
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Event
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your event, date, venue, and any specific requirements..."
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button asChild size="lg" className="glow-primary w-full sm:w-auto group">
                <a href="mailto:events@echoav.ca">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:pl-12">
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="font-display text-2xl mb-6 text-foreground">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:events@echoav.ca" className="text-foreground hover:text-primary transition-colors">
                      events@echoav.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a href="tel:+19055152954" className="text-foreground hover:text-primary transition-colors">
                      (905) 515-2954
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Location</div>
                    <span className="text-foreground">
                      Greater Toronto Hamilton Area
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 p-8 border border-primary/20">
              <h3 className="font-display text-2xl mb-2 text-foreground">
                NEED URGENT SUPPORT?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our team is available 24/7 for emergency support during your event.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Call Emergency Line
              </Button>

              {/* Decorative */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
