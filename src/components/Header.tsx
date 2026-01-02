import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-3xl text-primary tracking-wider">
          BRASA BURGER
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Cardápio
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Sobre
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+5511999999999" className="hidden sm:flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
