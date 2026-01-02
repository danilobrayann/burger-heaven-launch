import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl sm:text-3xl text-primary tracking-wider">
          BRASA BURGER
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Cardápio
          </a>
          <a href="#galeria" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Galeria
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Sobre
          </a>
          <a href="#pedido" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Pedido
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
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a 
              href="#menu" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </a>
            <a 
              href="#galeria" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#pedido" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pedido
            </a>
            <a 
              href="#contact" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a href="tel:+5511999999999" className="flex items-center gap-2 text-primary font-semibold py-2">
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
