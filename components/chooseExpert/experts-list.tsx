"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Check, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
// import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Expert = {
  id: number;
  name: string;
  image: string;
  verified: boolean;
  superTutor: boolean;
  yearsExperience: number;
  rating: number;
  reviews: number;
  price: number | null;
  priceFixed: boolean;
  degree: string;
  field: string;
  online: boolean;
  responseTime: string;
  completedAssignments: number;
  plagiarismScore: number;
  favorite: boolean;
  flag: "top-rated" | "popular" | null;
};

const experts: Expert[] = [
  {
    id: 1,
    name: "Parvipan Deep S.",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: "top-rated",
  },
  {
    id: 2,
    name: "Aspen Stanton",
    image:
      "https://s3-alpha-sig.figma.com/img/8b9f/9ccd/5acdca558657f53c10bd154375cdf1e5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rKpcONUGlF3gNzYBjuPQVS0k8RrPDxoLoESpA6S3eWARoqs9n1FmPBWBdIVGP~CXzicz3Gr9Ux4R6jC~bRxGGNpnQaS0SVplBWrMB-Eqt4my-uUZcw5Pu4GfqWcSqipj7a7c0cHYJ3IAw0sHSAIVl3TPWHi4Y6zudqBC0Jai9Dp-Di09jyw7xhKv1AqvfrteS6vDW21~jWsa1Kq5--xYoqDLce8W~S-x7huhjAtngfhh7VC7dZl~udo9YyLjbl-5C4B5cS2kyHr1s~2yDNSEuQ150IX0~FMfwQtB8sqt3FcriqUUdnCNcXQp9pF5PHjTBpKfa4O4LpnwaPJQPwhnEQ__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: null,
    priceFixed: false,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 3,
    name: "Jakob Torff",
    image:
      "https://s3-alpha-sig.figma.com/img/9a3a/aff5/bf14d1a3636fe7c3b07101be4a0d723e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KG7ZbZE3e4s0jq3ed9rZaPyTfFo5j38YFXMY442pGDvH6dVJdlgpe4WbTwX5elJLRYGUQqOaqVYs0jIi2vcZt8E5oXLAaUp~Um1xlivnfa~ma24g9aiUgsRLYAYaoa9t9TzBjxvsaZu2cXRTUd6PNVnWqBPtGFiugBZUwrBcp6Mz0gAqa7ZsnbxX8~fRdi9ujDDOISwe7vYuOwbC47MICBBUDwrOadNcb3tMkhy41thfy-M1Ar0UuXfzutZmIOWlWsZ84yuBmqEuDBNfspYKZJgZoTRfUDRTSVY6ZXze~QTfFS~hiuN~M~dxauO0XRiKmjooArLqBZ9UADL7Rgi7~g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 4.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 4,
    name: "Cooper George",
    image:
      "https://s3-alpha-sig.figma.com/img/c513/895d/aad8c9b0044f92aa382ca949e42b00bf?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RJYz6mbIV1E5CwpRqePya05W84LtX~pQXVr1Re5ywaQCLfGWNUxj2VUZ-JKIeZe3OXOdqMqzRXJzFIXU13Ak2g-OuQtyuHpIBKMUOEuXriCfKZsLQQNz-x4U~5~4v7LY35h-aJthvb1ercycq8Lgp18Pz-Z8nPW1W7WODLnebU2y-bsK6vPkHOHdIY-5B-0N6U3CY0~TdOcGKRlAo8fLq8lAb4qtqkf7~QTOvFLwjxiOYIN21HON0~-UMf8TIlomHy5EkfPrpgdZp8JKfL~BOi3cnDYePzMQXT619J4PkYsZQAf6ZQV~M2FG7yY~zlwysxA~FIPK4fFwSpZqagJ82g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 5,
    name: "Emerson Rhiel Madsen",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 6,
    name: "Parvipan Deep S.",
    image:
      "https://s3-alpha-sig.figma.com/img/8b9f/9ccd/5acdca558657f53c10bd154375cdf1e5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rKpcONUGlF3gNzYBjuPQVS0k8RrPDxoLoESpA6S3eWARoqs9n1FmPBWBdIVGP~CXzicz3Gr9Ux4R6jC~bRxGGNpnQaS0SVplBWrMB-Eqt4my-uUZcw5Pu4GfqWcSqipj7a7c0cHYJ3IAw0sHSAIVl3TPWHi4Y6zudqBC0Jai9Dp-Di09jyw7xhKv1AqvfrteS6vDW21~jWsa1Kq5--xYoqDLce8W~S-x7huhjAtngfhh7VC7dZl~udo9YyLjbl-5C4B5cS2kyHr1s~2yDNSEuQ150IX0~FMfwQtB8sqt3FcriqUUdnCNcXQp9pF5PHjTBpKfa4O4LpnwaPJQPwhnEQ__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: "popular",
  },
  {
    id: 7,
    name: "Aspen Stanton",
    image:
      "https://s3-alpha-sig.figma.com/img/9a3a/aff5/bf14d1a3636fe7c3b07101be4a0d723e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KG7ZbZE3e4s0jq3ed9rZaPyTfFo5j38YFXMY442pGDvH6dVJdlgpe4WbTwX5elJLRYGUQqOaqVYs0jIi2vcZt8E5oXLAaUp~Um1xlivnfa~ma24g9aiUgsRLYAYaoa9t9TzBjxvsaZu2cXRTUd6PNVnWqBPtGFiugBZUwrBcp6Mz0gAqa7ZsnbxX8~fRdi9ujDDOISwe7vYuOwbC47MICBBUDwrOadNcb3tMkhy41thfy-M1Ar0UuXfzutZmIOWlWsZ84yuBmqEuDBNfspYKZJgZoTRfUDRTSVY6ZXze~QTfFS~hiuN~M~dxauO0XRiKmjooArLqBZ9UADL7Rgi7~g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: null,
    priceFixed: false,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 8,
    name: "Jakob Torff",
    image:
      "https://s3-alpha-sig.figma.com/img/44e5/7bc9/2bd383b9e21b73b16b552146fab33d6a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pj~rLLYGuzoj2RLjwyAtU5oaZNjw8H~pDghDkavpLp4bgVxyEEhuMivHwiiIdMito0tBv2rOu-~oosghs6ZehCQoLIup-WYW~43upEjuO8QMV6C57DENcXqoVAMIhfLaGFgh1Ymni3qLbSKT3nABxs~3fGnO~EhibhEV8QjzcBNDqdmW6HcsvkR6DTg-nrw7XhqGkcWDkwBflAO8ZDH1swJPbzmCTO7z-li3oj0XC1WUDeT9NDXiRxmD7if0fyE4Z0PKPUty63cYBi0tJZePhgba7uwCHZwyVZXH3PNWS~s~7Hy3Rk-CLmN2hE~TIZ02dFrTNZo1BiYK0NNo31xw3A__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 4.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 9,
    name: "Cooper George",
    image:
      "https://s3-alpha-sig.figma.com/img/c513/895d/aad8c9b0044f92aa382ca949e42b00bf?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RJYz6mbIV1E5CwpRqePya05W84LtX~pQXVr1Re5ywaQCLfGWNUxj2VUZ-JKIeZe3OXOdqMqzRXJzFIXU13Ak2g-OuQtyuHpIBKMUOEuXriCfKZsLQQNz-x4U~5~4v7LY35h-aJthvb1ercycq8Lgp18Pz-Z8nPW1W7WODLnebU2y-bsK6vPkHOHdIY-5B-0N6U3CY0~TdOcGKRlAo8fLq8lAb4qtqkf7~QTOvFLwjxiOYIN21HON0~-UMf8TIlomHy5EkfPrpgdZp8JKfL~BOi3cnDYePzMQXT619J4PkYsZQAf6ZQV~M2FG7yY~zlwysxA~FIPK4fFwSpZqagJ82g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 200,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 10,
    name: "Emerson Rhiel Madsen",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA_",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
];

export function ExpertsList({
  setShowChat,
}: {
  setShowChat: (show: boolean) => void;
}) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<
    "complete" | "reviews" | "deadlines"
  >("complete");

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="space-y-4">
      {experts.map((expert) => (
        <div
          key={expert.id}
          className={cn(
            "bg-white rounded-lg border hover:shadow-md transition-shadow relative overflow-hidden",
            expert.flag === "top-rated" && "border-orange-400",
            expert.flag === "popular" && "border-green-400",
            !expert.flag && "border-gray-200"
          )}
        >
          {expert.flag && (
            <div
              className={cn(
                "absolute top-0 left-0 px-2 py-1 rounded-tl-md flex items-center gap-1 z-10",
                expert.flag === "top-rated" ? "bg-orange-400" : "bg-green-400"
              )}
            >
              <span className="text-[8px] font-bold text-white">
                {expert.flag === "top-rated" ? "TOP RATED" : "POPULAR"}
              </span>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                   <span className="bg-white rounded-full text-xs px-1 text-orange-400 cursor-pointer">?</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="bg-white rounded-xl shadow-xl shadow-black/10 w-72 p-5">
                      The best expert is picked by the system. This choice is
                      based on a combination of the expert’s offer, ratings, and
                      project history.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}

          <div className="p-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative h-20 w-20 rounded-xl overflow-hidden mt-1">
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                  {expert.online && (
                    <div className="absolute top-1 right-1 h-3 w-3 rounded bg-green-500 border-2 border-white"></div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-900">
                        {expert.name}
                      </h3>
                      {expert.verified && (
                        <div className="ml-1 bg-blue-500 text-white rounded-full p-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                      <div className="ml-1">
                        {expert.flag === "top-rated" && (
                          <span className="inline-block w-4 h-4">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                fill="#FB923C"
                              />
                            </svg>
                          </span>
                        )}
                        {expert.flag === "popular" && (
                          <span className="inline-block w-4 h-4">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                fill="#4ADE80"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center mt-1">
                      <span className="bg-purple-100 text-purple-800 border-purple-200 mr-2">
                        <span className="text-xs font-bold">SUPER TUTOR</span>
                      </span>
                      <span className="text-xs text-gray-500">
                        {expert.yearsExperience} Year of exp. overall
                      </span>
                    </div>

                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(expert.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-600">
                        {expert.rating}
                      </span>
                      <span className="ml-1 text-sm text-gray-500">
                        ({expert.reviews} Reviews)
                      </span>
                    </div>

                    {expert.degree && (
                      <div className="mt-1 flex items-center">
                        <span className="bg-pink-50 text-pink-700 border-pink-100">
                          {expert.degree}
                        </span>
                      </div>
                    )}
                    <div className="mt-2 text-xs w-96 text-gray-600">
                      <div>
                        <span className="font-medium">
                          BS/BA in Certified English File 40+ Years Exp.
                        </span>{" "}
                        MLA, APA, Chicago, Harvard, OSCOLA, Vancouver, IEEE,
                        Turabian, Oxford, CSE, APSA, Standard, Custom
                      </div>
                      <div className="mt-1">
                        <span className="font-medium">Strong Learning:</span>{" "}
                        Knowledge in Physics, MATLAB, Calculus, Chemistry,
                        Statistics, General, Business, Economics
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end">
                    <button
                      onClick={() => toggleFavorite(expert.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={cn(
                          "h-5 w-5",
                          favorites.includes(expert.id) &&
                            "fill-red-500 text-red-500"
                        )}
                      />
                    </button>

                    {expert.responseTime && (
                      <div className="mt-2 text-xs text-gray-500">
                        Answer within:{" "}
                        <span className="font-medium">
                          {expert.responseTime}
                        </span>
                      </div>
                    )}

                    <div className="mt-1">
                      <div className="text-xs text-gray-500">Price:</div>
                      <div className="font-bold text-xl">
                        {expert.price ? `$${expert.price}` : "Price Not Set"}
                      </div>
                    </div>

                    {expert.price && (
                      <div className="text-xs text-gray-500 mt-1">
                        Pay now only ${expert.price / 2}
                      </div>
                    )}
                    <div className="mt-3 flex flex-col justify-between items-center gap-5">
                      {expert.price ? (
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
                        >
                          Hire This Expert
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-purple-600 border-purple-200 hover:bg-purple-50 rounded-full px-6"
                        >
                          Request a Price
                        </Button>
                      )}

                      <Button
                        size="sm"
                        variant="outline"
                        className="text-purple-600 border-purple-200 hover:bg-purple-50 rounded-full px-6"
                        onClick={() => setShowChat(true)}
                      >
                        Chat
                      </Button>
                    </div>
                  </div>
                </div>
                {/* image ke sath */}z{" "}
                <div className="mt-3 flex items-center text-xs text-gray-500">
                  <span className="font-medium">
                    Completed {expert.completedAssignments} Cosmology projects
                    out of {expert.completedAssignments + 9}
                  </span>
                </div>
                {/* price ke sath */}
              </div>
            </div>

            {expert.id === 3 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "complete"
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("complete")}
                  >
                    Complete
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "reviews"
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "deadlines"
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("deadlines")}
                  >
                    Deadlines
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
