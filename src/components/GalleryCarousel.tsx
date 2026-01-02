import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBBQ from "@/assets/burger-bbq.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerMushroom from "@/assets/burger-mushroom.jpg";
import burgerSpicy from "@/assets/burger-spicy.jpg";
import burgerVeggie from "@/assets/burger-veggie.jpg";
import burgerSmash from "@/assets/burger-smash.jpg";
import burgerBlue from "@/assets/burger-blue.jpg";

const galleryImages = [
  { src: burgerClassic, alt: "Clássico Duplo" },
  { src: burgerBBQ, alt: "BBQ Bacon" },
  { src: burgerTruffle, alt: "Truffle Premium" },
  { src: burgerBacon, alt: "Bacon Lovers" },
  { src: burgerMushroom, alt: "Mushroom Swiss" },
  { src: burgerSpicy, alt: "Jalapeño Fire" },
  { src: burgerVeggie, alt: "Veggie Delight" },
  { src: burgerSmash, alt: "Triple Smash" },
  { src: burgerBlue, alt: "Blue Cheese Special" },
];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Get visible slides for desktop (3 at a time)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + galleryImages.length) % galleryImages.length;
      slides.push({ ...galleryImages[index], position: i });
    }
    return slides;
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Nossa Galeria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6">
            ARTE EM <span className="text-gradient">CADA BURGER</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Confira nossa coleção de hambúrgueres artesanais, cada um preparado com dedicação e ingredientes premium.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Carousel - 3 images */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex items-center justify-center gap-4 py-8">
              {getVisibleSlides().map((slide, idx) => (
                <div
                  key={idx}
                  className={`relative transition-all duration-500 rounded-2xl overflow-hidden shadow-card ${
                    slide.position === 0 
                      ? "w-[400px] h-[400px] z-10 scale-100" 
                      : "w-[280px] h-[280px] z-0 scale-90 opacity-60"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {slide.position === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                      <h3 className="font-display text-2xl text-foreground">{slide.alt}</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel - 1 image */}
          <div className="md:hidden overflow-hidden">
            <div className="relative w-full aspect-square max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-card">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 sm:p-6">
                <h3 className="font-display text-xl sm:text-2xl text-foreground">
                  {galleryImages[currentIndex].alt}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-primary hover:text-primary-foreground rounded-full w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-primary hover:text-primary-foreground rounded-full w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-6 sm:w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
