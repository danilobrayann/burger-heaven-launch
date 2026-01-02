import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBBQ from "@/assets/burger-bbq.jpg";
import burgerTruffle from "@/assets/burger-truffle.jpg";

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  delay?: string;
}

const MenuItem = ({ image, name, description, price, tag, delay = "0s" }: MenuItemProps) => {
  return (
    <div 
      className="group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {tag && (
        <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent text-foreground text-xs font-bold uppercase rounded-full">
          {tag}
        </span>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl text-primary">{price}</span>
          <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuSection = () => {
  const menuItems = [
    {
      image: burgerClassic,
      name: "Clássico Duplo",
      description: "Dois hambúrgueres de 150g, queijo cheddar, picles, cebola e nosso molho especial da casa.",
      price: "R$ 34,90",
      tag: "Mais Pedido",
    },
    {
      image: burgerBBQ,
      name: "BBQ Bacon",
      description: "Hambúrguer de 180g, bacon crocante, cebola caramelizada, cheddar e molho BBQ artesanal.",
      price: "R$ 39,90",
    },
    {
      image: burgerTruffle,
      name: "Truffle Premium",
      description: "Hambúrguer de 200g, rúcula, parmesão, cogumelos salteados e aioli de trufa negra.",
      price: "R$ 49,90",
      tag: "Chef's Choice",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Nosso Cardápio
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            BURGERS EM <span className="text-gradient">DESTAQUE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada hambúrguer é preparado na hora com ingredientes frescos e carne 100% Angus Black.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem 
              key={item.name} 
              {...item} 
              delay={`${index * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
