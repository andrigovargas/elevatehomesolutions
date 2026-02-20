import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BookingSection from "@/components/BookingSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
