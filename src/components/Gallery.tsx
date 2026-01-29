import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
    alt: "Concert lighting setup",
    category: "Concert",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
    alt: "Conference event",
    category: "Conference",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Stage production",
    category: "Theatre",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&q=80",
    alt: "Audio equipment",
    category: "Audio",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Live band performance",
    category: "Concert",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    alt: "DJ setup with lights",
    category: "Lighting",
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
