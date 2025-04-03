"use client";
import FloatingActionButton from "@/components/Floating-action";
import TestimonialSection from "@/components/landingPage/banner";
import ExpertConsultation from "@/components/landingPage/ExpertConsultation";
import { Hero } from "@/components/landingPage/Hero-section";
import HowItWork from "@/components/landingPage/HowItWork";
import { Navbar } from "@/components/Navbar";
import LandingPageCarousel from "@/components/landingPage/landingPageCrousal";
import React, { useState } from "react";
import Reviews from "@/components/landingPage/reviews";
import OfferCard from "@/components/landingPage/offercard";
import FAQSection from "@/components/landingPage/faq";

const Home = () => {
  const [isLogged, setIsLogged] = useState(() => {
    return JSON.parse(localStorage.getItem("isLogged") || "false");
  });

  return (
    <div className="bg-white max-w-screen overflow-clip">
      <Navbar />
      <Hero />
      <FloatingActionButton />
      <div id="how-it-works">
        <HowItWork />
      </div>
      <div id="find-an-expert">
        <ExpertConsultation />
      </div>
      <div id="features">
        <LandingPageCarousel />
      </div>
      <TestimonialSection />
      <Reviews />
      <div id="claim-offer">
        <OfferCard />
      </div>
      <div id="faq-section">
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
