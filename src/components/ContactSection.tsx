import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const openWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Gostaria de fazer uma reserva na Brasa Burger.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Visite-nos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6">
            ONDE <span className="text-gradient">ESTAMOS</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-card">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Rua dos Sabores, 123 - Vila Gastronômica<br />
                  São Paulo, SP - 01234-567
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-card">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Terça a Domingo: 18h às 23h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4 shadow-card">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-1">Contato</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  (11) 99999-9999<br />
                  contato@brasaburger.com.br
                </p>
              </div>
            </div>
            
            <Button 
              onClick={openWhatsApp}
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Fazer Reserva
            </Button>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
              <a 
                href="https://maps.google.com/?q=Rua+dos+Sabores+123+São+Paulo+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group cursor-pointer"
              >
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 animate-bounce group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground font-medium text-sm sm:text-base">
                  Clique para abrir no Google Maps
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
