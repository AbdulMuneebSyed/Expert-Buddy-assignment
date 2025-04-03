"use client"
import React, { useState } from 'react'
import { MagicCard } from '../ui/MagicCard'
// import { theme } from "next-themes";
import { Button } from '../ui/Button';
import Image from 'next/image';
import step1 from "@/public/Group 316128066.png"
import step2 from "@/public/Group 316128051.png"
import step3 from "@/public/Group 316128012.png"
import vector from "@/public/Vector-how.png"
import XpertModal from '../chooseExpert/ExpertModel';
const HowItWork = () => {
   const [isXpertModalOpen, setIsXpertModalOpen] = useState(false);
  return (
    <div className="relative my-24">
      <p className="text-5xl text-center relative text-black font-bold">
        <span className="relative">
          {" "}
          <Image
            src={vector}
            alt="vector"
            className="absolute -top-4 right-4 "
            width={44}
          />
          H
        </span>
        ow it Works
      </p>
      <div className="flex relative md:flex-row flex-col justify-evenly">
        <MagicCard gradientColor="#D9D9D955" gradientSize={200}>
          <div className="mt-8 flex flex-col w-full  max-w-[600px] min-h-[610px]  border-2 border-gray-200 shadow-2xl gap-6 justify-evenly rounded-4xl p-4">
            <div className="flex mx-auto my-10 justify-center items-start flex-row w-full max-w-[500px]">
              <div className="">
                <div className="border-[3px] border-purple-600 rounded-2xl text-center w-14 flex h-20 flex-col justify-around">
                  <div className="text-lg md:text-xl text-black font-extrabold">
                    Step
                  </div>
                  <div className="text-2xl md:text-3xl text-black font-bold">
                    01
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mx-4 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Fill in a brief
                </h1>
                <p className="text-gray-500 mb-6 text-sm md:text-base">
                  Tell us what you need help with, describe your project
                  requirements, and set the deadline.
                </p>

                <Button
                  onClick={() => setIsXpertModalOpen(true)}
                  className="bg-[#1a1e2e] hover:bg-[#2a2e3e] text-white rounded-full px-6 md:px-8 py-3 md:py-4 h-auto"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Step indicator */}
            <div className="flex justify-center items-center my-5">
              <Image
                src={step1}
                alt="step1"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </MagicCard>

        {/* connector */}
        <div className="hidden md:flex absolute top-20 items-center justify-center z-10">
          <div className="relative w-32 h-1 bg-blue-600">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>
        <MagicCard gradientColor="#000000" gradientSize={5}>
          <div className="mt-8 flex flex-col w-full max-w-[600px] min-h-[610px] border-2 border-gray-200 shadow-2xl gap-6 justify-evenly rounded-4xl p-4">
            <div className="flex mx-auto my-10 justify-center items-start flex-row w-full max-w-[500px]">
              <div className="">
                <div className="border-[3px] border-purple-600 rounded-2xl text-center w-14 flex h-20 flex-col justify-around">
                  <div className="text-lg md:text-xl text-black font-extrabold">
                    Step
                  </div>
                  <div className="text-2xl md:text-3xl text-black font-bold">
                    01
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mx-4 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Fill in a brief
                </h1>
                <p className="text-gray-500 mb-6 text-sm md:text-base">
                  Tell us what you need help with, describe your project
                  requirements, and set the deadline.
                </p>

                <Button
                  onClick={() => setIsXpertModalOpen(true)}
                  className="bg-[#1a1e2e] hover:bg-[#2a2e3e] text-white rounded-full px-6 md:px-8 py-3 md:py-4 h-auto"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Step indicator */}
            <div className="flex justify-center items-center my-5">
              <Image
                src={step2}
                alt="step1"
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </MagicCard>
        <div className="hidden md:flex absolute -bottom-15 left-30 items-center justify-center z-40">
          <div className="relative w-1 h-24 bg-blue-600">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>
        <div className="hidden md:flex absolute -bottom-15 right-30 items-center justify-center z-40">
          <div className="relative w-1 h-24 bg-blue-600">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row mx-auto w-full max-w-[1260px] min-h-fit border-2 border-gray-200 shadow-2xl gap-6 justify-evenly rounded-4xl p-4">
        <div className="flex mx-auto my-10 justify-center items-start w-full max-w-[500px]">
          <div className="">
            <div className="border-[3px] border-purple-600 rounded-2xl text-center w-14 flex h-20 flex-col justify-around">
              <div className="text-lg md:text-xl text-black font-extrabold">
                Step
              </div>
              <div className="text-2xl md:text-3xl text-black font-bold">
                03
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mx-4 text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Fill in a brief
            </h1>
            <p className="text-gray-500 mb-6 text-sm md:text-base">
              Tell us what you need help with, describe your project
              requirements, and set the deadline.
            </p>

            <Button
              onClick={() => setIsXpertModalOpen(true)}
              className="bg-[#1a1e2e] hover:bg-[#2a2e3e] text-white rounded-full px-6 md:px-8 py-3 md:py-4 w h-auto"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center items-center my-9">
          <Image
            src={step3}
            alt="step3"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
      <XpertModal isOpen={isXpertModalOpen} setIsOpen={setIsXpertModalOpen} />
    </div>
  );
}

export default HowItWork