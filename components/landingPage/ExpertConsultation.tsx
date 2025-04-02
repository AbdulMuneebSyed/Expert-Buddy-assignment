import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import expert1 from "@/public/image.png";
import expert2 from "@/public/image (1).png";
import expert3 from "@/public/image (2).png";
import frame1 from "@/public/Frame (1).png";
import frame2 from "@/public/Frame.png";
import frame3 from "@/public/Group (2).png";
import vector from "@/public/Vector (4).png";

export default function ExpertConsultation() {
  return (
    <div className="w-full relative flex min-h-screen flex-col bg-white">
      {/* expert */}
      <div className="bg-[#F266CD] px-4 py-12 md:py-16 lg:px-12 relative overflow-hidden min-h-5/6 h-5/6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                    <span className="relative">
                      <Image
                        src={vector}
                        alt="vector"
                        className="absolute font-extrabold text-black -top-4 right-4 "
                        width={64}
                      />
                      R
                    </span>
                    each Out to the Expert Now
                  </h1>
                </div>
                <p className="text-black/80 max-w-lg">
                  Chat with the expert directly, discuss your project in detail,
                  and get professional academic assistance by the deadline.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Personal Self-Care Plan"
                    className="bg-white text-black border-0 h-12 rounded-md"
                  />
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Choose Deadline"
                      className="bg-white text-black border-0 h-12 rounded-md pl-3 pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <Button className="bg-[#111827] hover:bg-[#1f2937] text-white shadow-teal-950 shadow-2xl rounded-full px-8 py-4 h-auto font-medium ">
                    Find an Expert
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Image Collage */}
            <div className="hidden lg:flex justify-end">
              <div className="relative h-[350px] w-[300px]">
                {/* Main image */}
                <div className="absolute right-0 top-0 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={expert1}
                    alt="Expert consultant"
                    width={180}
                    height={240}
                    className="object-cover"
                  />
                </div>
                {/* Bottom image */}
                <div className="absolute right-20 bottom-0 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={expert2}
                    alt="Video call"
                    width={180}
                    height={180}
                    className="object-cover"
                  />
                </div>
                {/* Right image */}
                <div className="absolute right-0 top-1/4 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={expert3}
                    alt="Expert with headphones"
                    width={140}
                    height={140}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature wala section */}
      <div className="bg-gray-50 shadow-2xl shadow-emerald-400/70 absolute bottom-10 max-w-1/2 rounded-full left-72">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Money-Back Guarantee */}
              <div className="flex flex-col items-center space-y-3">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-purple-800">
                  <Image src={frame1} alt="" />
                </div>
                <h3 className=" font-semibold text-black/90">
                  Money-Back Guarantee
                </h3>
              </div>

              {/* Support 24/7 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-purple-800">
                  <Image src={frame2} alt="" />
                </div>
                <h3 className=" font-semibold text-black">Support 24/7</h3>
              </div>

              {/* No Hidden Charges */}
              <div className="flex flex-col items-center space-y-3">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-purple-800">
                  <Image src={frame3} alt="" />
                </div>
                <h3 className=" font-semibold text-black/90">
                  No Hidden Charges
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
