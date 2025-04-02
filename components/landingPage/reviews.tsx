import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Star } from "lucide-react";
import Image from "next/image";
import expertBuddy from "@/public/unnamed 2.png"
import trustpilot from "@/public/Group 4.png"
import sitejabber from "@/public/Vector (1).png"
import review from "@/public/review.io.png"
import reviewLogo from "@/public/logo 1.png"
export default function Reviews() {
  const platforms = [
    {
      name: "ExpertBuddy",
      rating: 5.0,
      icon: expertBuddy,
      color: "purple",
    },
    {
      name: "Trustpilot",
      rating: 4.7,
      icon: trustpilot,
      color: "green",
    },
    {
      name: "Sitejabber",
      rating: 4.0,
      icon: sitejabber,
      color: "orange",
    },
    {
      name: "Reviews.io",
      rating: 5.0,
      icon: review,
      color: "yellow",
    },
    {
      name: "Review Centre",
      rating: 5.0,
      icon: reviewLogo,
      color: "yellow",
    },
  ];

  const reviews = [
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: expertBuddy,
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: review,
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: sitejabber,
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: trustpilot,
    },
    {
      name: "John B.",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Proin ipsum aliquam neque lobortis. Arcu libero elementum diam eu mollis adipiscing eget. Est a odio viverra bibendum nibh etiasdm. Consequat...",
      platform: reviewLogo,
    },
  ];

  return (
    <div className="w-full text-black max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Crown className="w-6 h-6 text-purple-600 mr-2" />
        <h2 className="text-3xl font-bold text-gray-900">
          Reviews from XpertBuddy Community
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex items-center gap-2">
            <Image src={platform.icon} alt="logo" width={40} />{" "}
            <Image src={platform.icon} alt="logo" width={40} />
            <div className="flex flex-col">
              <p>{platform.name}</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4  ${
                      i < Math.floor(platform.rating)
                        ? "fill-current"
                        : "fill-none"
                    }`}
                  />
                ))}
                <span className="text-sm font-medium">{platform.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3">
              <Card className="border-2 border-b-4 border-zinc-400 rounded-xl overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 text-yellow-400 ${
                              i < Math.floor(review.rating)
                                ? "fill-current"
                                : "fill-none"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm">{review.rating}</span>
                      </div>
                    </div>
                    <Image src={review.platform} alt="logo" width={40} />
                  </div>
                  <p className="text-sm text-gray-700 mt-4">{review.text}</p>
                  <button className="text-sm text-purple-600 mt-2 hover:underline">
                    Show more
                  </button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 -translate-x-1/2" />
        <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </Carousel>
    </div>
  );
}