"use client";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import hero from "@/public/hero (1).png"
import BG from "@/public/BG.png";
import { useState } from "react";
import { Button } from "../ui/Button";
export function Hero() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className="relative text-black min-h-screen"
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container h-fit mx-auto px-4 py-14 md:py-0 flex flex-col md:flex-row">
        <div className="md:w-1/2 z-10 py-18 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            A-Plus Homework
            <br />
            Help For All
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Get personalized expert assistance in any academic field. 100+
            courses and programs covered.
          </p>

          {/* Project Description Box */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg">
            <Textarea
              placeholder="Describe your project briefly"
              className="border-0 focus:ring-0 resize-none mb-4 text-gray-700"
              rows={4}
            />
          </div>
          <div className="flex items-center space-x-4 mb-4 my-1">
            <button
              onClick={() => setEnabled(!enabled)}
              className={`relative w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition z-50 ${
                enabled ? "bg-blue-700" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-[#6B7B93] mr-2 rounded-full shadow-md transform transition ${
                  enabled ? "translate-x-6 bg-blue-500" : "translate-x-0 "
                }`}
              ></div>
            </button>{" "}
            <span className="font-semibold font-sans">Human Experts Only</span>
          </div>
          <div>
            <p className="font-sans text-[23px] mt-6 font-bold">
              Get offers <span className="text-[#A414D5]">for FREE & pay</span>{" "}
              when you accept <br /> an offer!
            </p>
          </div>
          <Button variant={"destructive"} className="w-40 h-12 rounded-4xl bg-[#A414D5] text-white p-3 mt-6 hover:cursor-pointer">
            Find An Expert
          </Button>
        </div>

        {/* Right Image - Tutor */}
        <div className="md:w-1/2 mt-0 md:mt-0 flex items-end relative mb-1">
          <div className="">
            <Image
              src={hero}
              alt="Tutor"
              width={554}
              // height={609}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
    </div>
  );
}
