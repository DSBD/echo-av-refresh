import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  const getMailtoHref = () => {
    const subject = encodeURIComponent(
      eventType ? `Quote Request: ${eventType}` : "Quote Request"
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent Type: ${eventType}\n\n${message}`
    );
    return `mailto:events@echoav.ca?subject=${subject}&body=${body}`;
  };

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
            <p className="text-muted-foreground text-lg mb-4">
              Let us know if you have any questions about our services and/or if you would like to request a quote.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              We are often on job sites and running events. If we miss your call, please leave us a message or send us an email and we'll get back to you as soon as possible.
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button asChild size="lg" className="glow-primary w-full sm:w-auto group">
                <a href={getMailtoHref()}>
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:pl-12 flex">
            <div className="glass rounded-2xl p-8 flex-1">
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
                      Based out of Hamilton, ON
                    </span>
                    <p className="text-muted-foreground text-sm mt-1">
                      Serving the GTHA and surrounding areas including Niagara Region, Halton Region, Norfolk County, and Guelph.
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      If your location isn't listed, feel free to reach out and we can determine if we are able to come to your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
