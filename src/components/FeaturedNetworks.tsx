import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const networks = [
  {
    name: "Major Studios",
    description: "Access blockbuster films from leading studios",
    icon: "🎬",
  },
  {
    name: "Independent Films",
    description: "Discover unique independent productions",
    icon: "🎥",
  },
  {
    name: "Documentary Network",
    description: "Educational and informative content",
    icon: "📹",
  },
  {
    name: "Student Productions",
    description: "Support and watch student-made films",
    icon: "🎨",
  },
];

const FeaturedNetworks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Available Networks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {networks.map((network) => (
            <Card key={network.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <span>{network.icon}</span>
                  {network.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{network.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNetworks;