import { useState } from "react";

import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";
import event7 from "@/assets/gallery/event-7.jpg";

const galleryImages = [
  {
    id: 1,
    url: event6,
    alt: "Corporate gala with uplighting",
    category: "Corporate",
  },
  {
    id: 2,
    url: event1,
    alt: "Outdoor venue lighting",
    category: "Lighting",
  },
  {
    id: 3,
    url: event5,
    alt: "Theatre stage production",
    category: "Theatre",
  },
  {
    id: 4,
    url: event4,
    alt: "Historic venue AV setup",
    category: "Conference",
  },
  {
    id: 5,
    url: event7,
    alt: "Street festival performance",
    category: "Live Music",
  },
  {
    id: 6,
    url: event3,
    alt: "Acoustic performance setup",
    category: "Concert",
  },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            FEATURED <span className="gradient-text">EVENTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the events we've helped bring to life with 
            professional AV production and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`${
                  index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-video"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300 ${
                  hoveredId === image.id ? "opacity-90" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${
                  hoveredId === image.id
                    ? "translate-y-0"
                    : "translate-y-full"
                }`}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                  {image.category}
                </span>
                <h3 className="font-display text-xl text-foreground">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
