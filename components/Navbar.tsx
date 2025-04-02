"use client"
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  ChevronDown,
  CircleDollarSign,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import logo from "@/public/logo.png";
import { Avatar, AvatarImage } from "./ui/Avatar";
import profile from "@/public/Photo by Tim Tebow Foundation (1).png"
export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="#" className="flex items-center">
          <Image
              src={logo}
              alt="Logo"
              width={102}
              height={22}
              />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-700 hover:text-purple-600">
              Find Tutor
            </Link>
            <Link href="#" className="text-purple-600 font-medium">
              Homework
            </Link>
          </nav>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-amber-500 font-medium">
            <CircleDollarSign className="w-5 h-5 mr-1" />
            <span>0 USD</span>
          </div>

          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 rounded-full px-4"
          >
            Refer a Friend
          </Button>

          <div className="flex items-center text-gray-600">
            <span>English, USD</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <MessageCircle className="w-6 h-6 text-gray-600" />
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-10 h-10 rounded-full overflow-hidden">
             <Avatar>
              <AvatarImage src={profile.src} alt="profile"/>
             </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
