import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block mb-6 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide uppercase animate-fade-in">
          Hambúrgueres Artesanais
        </span>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
          SABOR QUE<br />
          <span className="text-gradient">CONQUISTA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ingredientes selecionados, carne 100% Angus e receitas exclusivas que vão 
          transformar sua experiência com hambúrgueres.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl">
            Ver Cardápio
          </Button>
          <Button variant="heroOutline" size="xl">
            Fazer Pedido
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
