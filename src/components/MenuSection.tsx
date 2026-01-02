import { useState } from "react";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBBQ from "@/assets/burger-bbq.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerMushroom from "@/assets/burger-mushroom.jpg";
import burgerSpicy from "@/assets/burger-spicy.jpg";
import burgerVeggie from "@/assets/burger-veggie.jpg";
import burgerSmash from "@/assets/burger-smash.jpg";
import burgerBlue from "@/assets/burger-blue.jpg";

export interface MenuItem {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

interface MenuItemCardProps {
  item: MenuItem;
  cartItem?: CartItem;
  onAdd: (item: MenuItem) => void;
  onRemove: (itemId: string) => void;
  delay?: string;
}

const MenuItemCard = ({ item, cartItem, onAdd, onRemove, delay = "0s" }: MenuItemCardProps) => {
  const quantity = cartItem?.quantity || 0;

  return (
    <div 
      className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {item.tag && (
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2 sm:px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
          {item.tag}
        </span>
      )}
      
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">{item.name}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl sm:text-3xl text-primary">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          
          {quantity === 0 ? (
            <button 
              onClick={() => onAdd(item)}
              className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1 sm:gap-2"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Adicionar</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={() => onRemove(item.id)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-foreground min-w-[20px] text-center">{quantity}</span>
              <button 
                onClick={() => onAdd(item)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Plus className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    image: burgerClassic,
    name: "Clássico Duplo",
    description: "Dois hambúrgueres de 150g, queijo cheddar, picles, cebola e nosso molho especial da casa.",
    price: 34.90,
    tag: "Mais Pedido",
  },
  {
    id: "2",
    image: burgerBBQ,
    name: "BBQ Bacon",
    description: "Hambúrguer de 180g, bacon crocante, cebola caramelizada, cheddar e molho BBQ artesanal.",
    price: 39.90,
  },
  {
    id: "3",
    image: burgerTruffle,
    name: "Truffle Premium",
    description: "Hambúrguer de 200g, rúcula, parmesão, cogumelos salteados e aioli de trufa negra.",
    price: 49.90,
    tag: "Chef's Choice",
  },
  {
    id: "4",
    image: burgerBacon,
    name: "Bacon Lovers",
    description: "Duplo hambúrguer de 150g, bacon duplo, cheddar derretido, tomate e molho especial.",
    price: 44.90,
  },
  {
    id: "5",
    image: burgerMushroom,
    name: "Mushroom Swiss",
    description: "Hambúrguer de 180g, cogumelos salteados, queijo suíço derretido e cebola caramelizada.",
    price: 42.90,
  },
  {
    id: "6",
    image: burgerSpicy,
    name: "Jalapeño Fire",
    description: "Hambúrguer de 180g, jalapeños, pepper jack, molho sriracha e cebola crispy.",
    price: 38.90,
    tag: "Picante",
  },
  {
    id: "7",
    image: burgerVeggie,
    name: "Veggie Delight",
    description: "Hambúrguer de grão-de-bico, abacate, rúcula, tomate e maionese vegana.",
    price: 36.90,
    tag: "Vegetariano",
  },
  {
    id: "8",
    image: burgerSmash,
    name: "Triple Smash",
    description: "Três smash burgers de 100g, queijo americano, picles, cebola e molho da casa.",
    price: 46.90,
  },
  {
    id: "9",
    image: burgerBlue,
    name: "Blue Cheese Special",
    description: "Hambúrguer de 200g, queijo gorgonzola, cebola caramelizada, rúcula e mel.",
    price: 47.90,
  },
];

interface MenuSectionProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const MenuSection = ({ cart, setCart }: MenuSectionProps) => {
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast({
      title: "Adicionado ao pedido",
      description: `${item.name} foi adicionado ao seu pedido.`,
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== itemId);
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const scrollToOrder = () => {
    document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Nosso Cardápio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground mb-4 sm:mb-6">
            BURGERS EM <span className="text-gradient">DESTAQUE</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Cada hambúrguer é preparado na hora com ingredientes frescos e carne 100% Angus Black.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <MenuItemCard 
              key={item.id} 
              item={item}
              cartItem={cart.find(i => i.id === item.id)}
              onAdd={addToCart}
              onRemove={removeFromCart}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <button
            onClick={scrollToOrder}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 bg-gradient-cta px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-button hover:scale-105 transition-transform animate-fade-in"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            <div className="text-left">
              <span className="text-foreground font-bold text-sm sm:text-base">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
              <span className="text-foreground/80 text-xs sm:text-sm ml-2">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
export { menuItems };
