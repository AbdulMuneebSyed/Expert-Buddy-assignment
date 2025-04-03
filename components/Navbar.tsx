"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  ChevronDown,
  CircleDollarSign,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import logo from "@/public/logo.png";
import { Avatar, AvatarImage } from "./ui/Avatar";
import profile from "@/public/Photo by Tim Tebow Foundation (1).png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <header className="border-b sticky top-0 z-50 border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and hamburger menu */}
          <div className="flex items-center">
            <Link href="/#" className="flex items-center">
              <Image src={logo} alt="Logo" width={102} height={22} />
            </Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}

          {/* Desktop Right Side Items - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/chooseExpert"
                className="text-gray-700 hover:text-purple-600"
              >
                Find Tutor
              </Link>
              <Link
                href="/Homework"
                className="text-gray-700 hover:text-purple-600"
              >
                Homework
              </Link>
            </div>{" "}
            <div className="flex items-center text-amber-500 font-medium">
              <CircleDollarSign className="w-5 h-5 mr-1" />
              <span>0 USD</span>
            </div>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 rounded-xl px-4"
            >
              Refer a Friend
            </Button>
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
            <div className="flex items-center hover:cursor-not-allowed space-x-4">
              <MessageCircle className="w-6 h-6 text-gray-600" />
              <Bell className="w-6 h-6 text-gray-600" />
              <Avatar className="w-10 h-10">
                <AvatarImage src={profile.src} alt="profile" />
              </Avatar>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src={profile.src} alt="profile" />
            </Avatar>
            <button onClick={toggleMenu} className="text-gray-600">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-5">
            <Link
              href="/chooseExpert"
              className="block text-gray-700 hover:text-purple-600 py-2"
            >
              Find Tutor
            </Link>
            <Link
              href="/Homework"
              className="block text-gray-700 hover:text-purple-600 py-2"
            >
              Homework
            </Link>
            <div className="flex items-center text-amber-500 font-medium py-2">
              <CircleDollarSign className="w-5 h-5 mr-1" />
              <span>0 USD</span>
            </div>
            <Button
              variant="outline"
              className="w-full border-purple-600 text-purple-600 rounded-xl px-4"
            >
              Refer a Friend
            </Button>
            <div className="flex items-center text-gray-600 py-2">
              <span>English, USD</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            <div className="flex items-center space-x-6 py-2">
              <MessageCircle className="w-6 h-6 text-gray-600" />
              <Bell className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
