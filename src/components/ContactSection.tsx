import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Visite-nos
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            ONDE <span className="text-gradient">ESTAMOS</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-2xl flex items-start gap-4 shadow-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua dos Sabores, 123 - Vila Gastronômica<br />
                  São Paulo, SP - 01234-567
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-2xl flex items-start gap-4 shadow-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Terça a Domingo: 18h às 23h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-2xl flex items-start gap-4 shadow-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Contato</h3>
                <p className="text-muted-foreground">
                  (11) 99999-9999<br />
                  contato@brasaburger.com.br
                </p>
              </div>
            </div>
            
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Fazer Reserva
            </Button>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-card">
            <div className="absolute inset-0 bg-gradient-card flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                <p className="text-muted-foreground font-medium">
                  Clique para abrir no Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
