import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBurger})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase animate-fade-in">
          Hambúrgueres Artesanais
        </span>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 sm:mb-6 leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
          SABOR QUE<br />
          <span className="text-gradient">CONQUISTA</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ingredientes selecionados, carne 100% Angus e receitas exclusivas que vão 
          transformar sua experiência com hambúrgueres.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full sm:w-auto"
            onClick={() => scrollToSection('menu')}
          >
            Ver Cardápio
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl" 
            className="w-full sm:w-auto"
            onClick={() => scrollToSection('pedido')}
          >
            Fazer Pedido
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
