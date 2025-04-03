import React from "react";
import { Button } from "./ui/Button";

const FloatingActionButton = () => {
  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-2 bottom-20 flex flex-col space-y-3 z-50">
      {[
        { id: "how-it-works", label: "How It Works" },
        { id: "find-an-expert", label: "Find an Expert" },
        { id: "features", label: "Features" },
        { id: "claim-offer", label: "Claim Offer" },
        { id: "faq-section", label: "FAQ" },
      ].map(({ id, label }) => (
        <Button
          key={id}
          className="bg-white text-gray-800 rounded-full shadow-lg px-4 py-2 transition-all duration-300 transform translate-x-6 hover:translate-x-0 hover:shadow-xl cursor-pointer"
          onClick={() => scrollToSection(id)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default FloatingActionButton;
