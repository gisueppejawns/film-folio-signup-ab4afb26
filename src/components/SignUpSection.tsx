import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SignUpSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <section id="signup" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90">
            Sign up now to access our extensive film collection
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your university email"
              className="w-full bg-white text-gray-900"
              required
            />
            <Button className="w-full bg-white text-primary hover:bg-gray-100">
              Sign Up Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;