"use client";

import type React from "react";

import { useState } from "react";
import vector from "@/public/Vector-how.png";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function OfferCard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      // In a real app, you would send the data to your backend
      console.log("Submitted:", { countryCode, phoneNumber });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-[#EABAFF] text-[#16192C] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="relative">
                {" "}
                <Image
                  src={vector}
                  alt="vector"
                  className="absolute -top-2 right-2 "
                  width={44}
                />
                C
              </span>
              laim Your Offer
            </h2>
          </div>

          <p className="text-purple-950 mb-6">
            Hello, we have a special ongoing offer for our new customers to
            avail 30% OFF & 150% Cashback on their first assignment with us. We
            are committed to delivering the premium service despite an
            affordable price. Enter your phone number below to get the coupon
            code. (we do not spam)
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#16192C]">Susan White</h3>
            <p className="text-[#16192C]">Head Of sales Departments</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#16192C] mb-4">
            30% OFF & 150% Cashback
            <br />
            On Your First Order!
          </h2>

          <p className="text-[#16192C] mb-4">
            Type your WhatsApp Number to get an exclusive Code.
          </p>

          {isSuccess ? (
            <div className="bg-purple-200 p-4 rounded-lg text-[#16192C] mb-4">
              Thank you! Your code has been sent to your WhatsApp.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 mb-4">
                <div className="w-20 bg-amber-50">
                  <Select defaultValue="+1" onValueChange={setCountryCode}>
                    <SelectTrigger className="bg-white h-12 border-0">
                      <SelectValue>
                        <div className="flex items-center">
                          <span className="mr-1">🇺🇸</span>
                          <span>{countryCode}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#16192C]">
                      <SelectItem value="+1">
                        <div className="flex items-center">
                          <span className="mr-2">🇺🇸</span>
                          <span>+1</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+44">
                        <div className="flex items-center">
                          <span className="mr-2">🇬🇧</span>
                          <span>+44</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+91">
                        <div className="flex items-center">
                          <span className="mr-2">🇮🇳</span>
                          <span>+91</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+61">
                        <div className="flex items-center">
                          <span className="mr-2">🇦🇺</span>
                          <span>+61</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="+33">
                        <div className="flex items-center">
                          <span className="mr-2">🇫🇷</span>
                          <span>+33</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter your whatsapp number"
                  className="flex-1 h-12 bg-white border-0"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full h-12"
                disabled={isSubmitting || !phoneNumber}
              >
                {isSubmitting ? "Sending..." : "Get Offer on WhatsApp"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
