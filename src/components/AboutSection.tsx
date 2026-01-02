import { Flame, Leaf, Award, Clock } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const Feature = ({ icon, title, description, delay = "0s" }: FeatureProps) => {
  return (
    <div 
      className="text-center p-6 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Grelhado na Brasa",
      description: "Cada hambúrguer é grelhado no carvão para um sabor defumado único.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ingredientes Frescos",
      description: "Vegetais orgânicos e ingredientes selecionados diariamente.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Carne Premium",
      description: "100% Angus Black, maturada por 21 dias para máximo sabor.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Feito na Hora",
      description: "Preparamos cada pedido na hora, garantindo frescor e qualidade.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
            Por que escolher a gente
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            NOSSA <span className="text-gradient">ESSÊNCIA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desde 2018 servindo os melhores hambúrgueres artesanais da cidade, 
            com amor, dedicação e muito sabor.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={feature.title} 
              {...feature} 
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
