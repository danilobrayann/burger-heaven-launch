import { useState } from "react";
import { Trash2, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { CartItem } from "./MenuSection";

interface OrderSectionProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const OrderSection = ({ cart, setCart }: OrderSectionProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [observations, setObservations] = useState("");

  const updateQuantity = (itemId: string, change: number) => {
    setCart(prev => {
      const item = prev.find(i => i.id === itemId);
      if (!item) return prev;

      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        return prev.filter(i => i.id !== itemId);
      }
      return prev.map(i => i.id === itemId ? { ...i, quantity: newQuantity } : i);
    });
  };

  const removeItem = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao seu pedido antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    if (!name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive",
      });
      return;
    }

    if (!address.trim()) {
      toast({
        title: "Endereço obrigatório",
        description: "Por favor, informe seu endereço para entrega.",
        variant: "destructive",
      });
      return;
    }

    // Build WhatsApp message
    let message = `🍔 *NOVO PEDIDO - BRASA BURGER* 🍔\n\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📍 *Endereço:* ${address}\n\n`;
    message += `📋 *ITENS DO PEDIDO:*\n`;
    message += `${'─'.repeat(25)}\n`;

    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `\n• *${item.name}*\n`;
      message += `  Qtd: ${item.quantity} x R$ ${item.price.toFixed(2).replace('.', ',')} = R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
    });

    message += `\n${'─'.repeat(25)}\n`;
    message += `💰 *TOTAL: R$ ${totalPrice.toFixed(2).replace('.', ',')}*\n`;

    if (observations.trim()) {
      message += `\n📝 *Observações:* ${observations}\n`;
    }

    message += `\n⏰ Aguardo confirmação do pedido!`;

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "5571996738280";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Pedido enviado!",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  return (
    <section id="pedido" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Faça Seu Pedido
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6">
            PEÇA VIA <span className="text-gradient">WHATSAPP</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Selecione seus itens no cardápio, preencha seus dados e envie diretamente para nosso WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Cart Items */}
          <div className="bg-gradient-card rounded-2xl p-4 sm:p-6 shadow-card">
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Seu Pedido
            </h3>

            {cart.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Seu carrinho está vazio.<br />
                  Adicione itens do cardápio acima!
                </p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4 max-h-[350px] sm:max-h-[400px] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 sm:gap-4 bg-background/50 rounded-xl p-3 sm:p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">{item.name}</h4>
                      <p className="text-primary font-bold text-sm sm:text-base">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <span className="font-bold text-foreground min-w-[20px] text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/20 flex items-center justify-center hover:bg-destructive transition-colors ml-1 sm:ml-2"
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm sm:text-base">Total do Pedido</span>
                  <span className="font-display text-2xl sm:text-3xl text-primary">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Order Form */}
          <div className="bg-gradient-card rounded-2xl p-4 sm:p-6 shadow-card">
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 flex items-center gap-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Dados para Entrega
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Seu Nome *
                </label>
                <Input
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Endereço de Entrega *
                </label>
                <Textarea
                  placeholder="Rua, número, bairro, complemento..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-background/50 border-border min-h-[80px] sm:min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Observações (opcional)
                </label>
                <Textarea
                  placeholder="Sem cebola, ponto da carne, troco para..."
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  className="bg-background/50 border-border min-h-[60px] sm:min-h-[80px]"
                />
              </div>

              <Button
                onClick={sendToWhatsApp}
                variant="hero"
                size="xl"
                className="w-full mt-2 sm:mt-4"
                disabled={cart.length === 0}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Pedido no WhatsApp
              </Button>

              <p className="text-muted-foreground text-xs sm:text-sm text-center">
                Ao clicar, você será redirecionado para o WhatsApp com seu pedido formatado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
