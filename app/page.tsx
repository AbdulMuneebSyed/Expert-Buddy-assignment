import FloatingActionButton from "@/components/Floating-action";
import TestimonialSection from "@/components/landingPage/banner";
import ExpertConsultation from "@/components/landingPage/ExpertConsultation";
import { Hero } from "@/components/landingPage/Hero-section";
import HowItWork from "@/components/landingPage/HowItWork";
import {Navbar} from "@/components/Navbar";
import LandingPageCarousel from "@/components/landingPage/landingPageCrousal"
import React from 'react'
import Reviews from "@/components/landingPage/reviews";
import OfferCard from "@/components/landingPage/offercard";
import FAQSection from "@/components/landingPage/faq";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <FloatingActionButton />
      <TestimonialSection />
      <HowItWork />
      <ExpertConsultation />
      <LandingPageCarousel />
      <Reviews/>
      <OfferCard/>
      <FAQSection/>
    </div>
  );
}

export default Home