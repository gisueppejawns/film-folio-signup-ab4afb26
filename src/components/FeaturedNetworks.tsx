import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

const featuredContent = [
  {
    title: "Major Studio Releases",
    duration: "2:31",
    views: "799",
    likes: "294",
    thumbnail: "/placeholder.svg",
    type: "Watch the Official Trailer",
  },
  {
    title: "Independent Films Showcase",
    duration: "3:15",
    views: "543",
    likes: "189",
    thumbnail: "/placeholder.svg",
    type: "Behind the Scenes",
  },
  {
    title: "Documentary Premieres",
    duration: "1:58",
    views: "423",
    likes: "156",
    thumbnail: "/placeholder.svg",
    type: "Official Selection",
  },
];

const upNext = [
  {
    title: "Student Film Festival 2024",
    duration: "7:16",
    views: "299",
    likes: "94",
    thumbnail: "/placeholder.svg",
    type: "Preview",
  },
  {
    title: "Experimental Film Showcase",
    duration: "2:20",
    views: "245",
    likes: "123",
    thumbnail: "/placeholder.svg",
    type: "Trailer",
  },
];

const FeaturedNetworks = () => {
  return (
    <section className="py-10 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Featured Content */}
          <div className="lg:col-span-3">
            <Carousel className="relative">
              <CarouselContent>
                {featuredContent.map((content, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group cursor-pointer">
                      <img
                        src={content.thumbnail}
                        alt={content.title}
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-16 h-16 text-primary" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {content.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span>{content.duration}</span>
                          <span>👁 {content.views}</span>
                          <span>❤️ {content.likes}</span>
                        </div>
                        <p className="text-primary mt-2">{content.type}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2" />
              <CarouselNext className="absolute right-4 top-1/2" />
            </Carousel>
          </div>

          {/* Up Next Section */}
          <div className="lg:col-span-1">
            <h2 className="text-primary font-bold mb-4">Up next</h2>
            <div className="space-y-4">
              {upNext.map((content, index) => (
                <Card
                  key={index}
                  className="bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="relative">
                      <img
                        src={content.thumbnail}
                        alt={content.title}
                        className="w-full aspect-video object-cover rounded"
                      />
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                        {content.duration}
                      </span>
                    </div>
                    <h3 className="font-semibold mt-2">{content.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <span>👁 {content.views}</span>
                      <span>❤️ {content.likes}</span>
                    </div>
                    <p className="text-primary-light text-sm mt-1">
                      {content.type}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNetworks;