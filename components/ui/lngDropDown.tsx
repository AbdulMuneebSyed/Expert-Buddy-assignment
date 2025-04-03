"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageCurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    language: "English",
    currency: "USD",
  });

  const options = [
    { language: "English", currency: "USD" },
    { language: "Spanish", currency: "EUR" },
    { language: "French", currency: "EUR" },
    { language: "German", currency: "EUR" },
    { language: "Japanese", currency: "JPY" },
    { language: "Chinese", currency: "CNY" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

interface Option {
    language: string;
    currency: string;
}

const selectOption = (option: Option): void => {
    setSelected(option);
    setIsOpen(false);
};

  return (
    <div className="relative">
      <div
        className="flex items-center text-gray-600 py-2 cursor-pointer hover:text-gray-800"
        onClick={toggleDropdown}
      >
        <span>
          {selected.language}, {selected.currency}
        </span>
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md py-1 w-40 z-10 border border-gray-200">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
              onClick={() => selectOption(option)}
            >
              <span>
                {option.language}, {option.currency}
              </span>
              {option.language === selected.language &&
                option.currency === selected.currency && (
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageCurrencyDropdown;
