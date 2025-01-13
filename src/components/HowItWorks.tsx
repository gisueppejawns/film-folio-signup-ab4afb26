const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your university account",
  },
  {
    number: "02",
    title: "Browse",
    description: "Explore our vast collection of films",
  },
  {
    number: "03",
    title: "Reserve",
    description: "Book your preferred screening time",
  },
  {
    number: "04",
    title: "Watch",
    description: "Enjoy your selected film",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;