import Hero from "@/components/Hero";
import FeaturedNetworks from "@/components/FeaturedNetworks";
import HowItWorks from "@/components/HowItWorks";
import SignUpSection from "@/components/SignUpSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedNetworks />
      <HowItWorks />
      <SignUpSection />
      <Footer />
    </div>
  );
};

export default Index;