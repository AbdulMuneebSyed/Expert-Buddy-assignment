"use client";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import vector from "@/public/Vector-how.png";
import trust from "@/public/trust1.png";
import trust2 from "@/public/trust2.png";
import trust3 from "@/public/trust3.png";
import trust4 from "@/public/trust4.png";

export default function LandingPageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      icon: <Image src={trust || "/placeholder.svg"} alt="icon" />,
      title: "Huge Community of Experts",
      description:
        "We bring together verified college professors, practicing scientists, independent researchers, freelance journalists, essay writers, and thousands of other experts in different fields of study, not only from the USA, but from all over the world. They are ready to share their knowledge and provide you with professional assignment help.",
    },
    {
      icon: <Image src={trust2 || "/placeholder.svg"} alt="icon" />,
      title: "Affordable Prices",
      description:
        "As a strong team of developers, we use high-tech solutions such as AI-based tools to cover various parts of the process of each project. For example, we automate and optimize plagiarism checking and grammar checking, which lets us offer students assistance of exceptional quality rather than just cheap homework assignment help.",
    },
    {
      icon: <Image src={trust3 || "/placeholder.svg"} alt="icon" />,
      title: "Data Security",
      description:
        "We care about your security, therefore we encrypt all personal data to make every user feel safe while using XpertBuddy. we don't share any personal information with any third parties without your permission.",
    },
    {
      icon: <Image src={trust4 || "/placeholder.svg"} alt="icon" />,
      title: "safe Payment Methods",
      description:
        "We use fast, convenient, modern, and safe payment tools and solutions, such as paypal, payoneer, and Visa/mastercard, for payments and withdrawas. and we're constantly working on adding more options. also, you can pay the entire amount at once or in two installments if it more convenient for you.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 10000);
    };

    startAutoSlide();

    const handleMouseEnter = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!intervalRef.current) {
        startAutoSlide();
      }
    };

    const element = api?.carouselRef?.current; // Add null check for carouselRef
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [api]);

  // Update current slide index
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="bg-gray-100 text-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            <span className="relative">
              {" "}
              <Image
                src={vector || "/placeholder.svg"}
                alt="vector"
                className="absolute -top-4 right-4 "
              />
              S
            </span>
            tudybay anywhere with <br /> ExpertBuddy
          </h1>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true, // Enable infinite scrolling
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <div className="bg-white rounded-lg p-6 h-full">
                  <div className="mb-4">{slide.icon}</div>
                  <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mr-2 h-10 w-10 border-gray-300" />
            <CarouselNext className="static ml-2 h-10 w-10 border-gray-300" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
