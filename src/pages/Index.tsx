import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <BookingSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
