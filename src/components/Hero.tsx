import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fadeIn">
          University Film Reservations
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fadeIn opacity-90">
          Access premium films from major networks and independent creators
        </p>
        <Button 
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;