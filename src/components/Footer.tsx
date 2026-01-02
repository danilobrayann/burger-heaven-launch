import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-2xl sm:text-3xl text-primary tracking-wider">
              BRASA BURGER
            </a>
            <p className="text-muted-foreground text-sm sm:text-base mt-1 sm:mt-2">
              Hambúrgueres artesanais desde 2018
            </p>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2024 Brasa Burger. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
