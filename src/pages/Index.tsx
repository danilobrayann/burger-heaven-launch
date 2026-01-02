import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection, { CartItem } from "@/components/MenuSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import OrderSection from "@/components/OrderSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MenuSection cart={cart} setCart={setCart} />
        <GalleryCarousel />
        <OrderSection cart={cart} setCart={setCart} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
