import Image from "next/image";
import trustpilot from "@/public/Group 4.png"
import ExpertBuddy from "@/public/unnamed 2.png"
import Sitejabber from "@/public/Vector (1).png"
export default function TestimonialSection() {
  return (
    <div className="bg-gray-50 text-black py-12 px-4 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Students Count */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900">150+ Students</h3>
          <p className="text-sm text-gray-700">
            Trusted Us To Write Their Papers
          </p>
        </div>

        {/* Trustpilot */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="bg-[#00b67a] rounded">
              <Image src={trustpilot} alt="trustpilot" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium">Trustpilot</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#00b67a"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
              <div className="text-sm font-medium">4.7</div>
            </div>
          </div>
        </div>

        {/* Sitejabber */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded">
              <Image src={Sitejabber} alt="Sitejabber" width={44} height={44} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-extrabold text-left text-black ">
              Sitejabber
            </div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-[#FF7A00] rounded-full mx-0.5 ">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
              ))}
              <div className="bg-[#ffd7b1] rounded-full mx-0.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    fill="#E0E0E0"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium text-black"> 4.0</div>
            </div>
          </div>
        </div>

        {/* ExpertBuddy */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded">
              <Image
                src={ExpertBuddy}
                alt="ExpertBuddy"
                width={44}
                height={44}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium">ExpertBuddy</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#FFC107"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            <div className="text-sm font-medium">5.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
