"use client";

import { useState } from "react";
import { ExpertsList } from "@/components/chooseExpert/experts-list";
import { ProjectSidebar } from "@/components/chooseExpert/project-sidebar";
// import { BuddyHeader } from "@/components/";
import { Pagination } from "@/components/chooseExpert/pagination";
import { ProjectPromotion } from "@/components/chooseExpert/project-promotion";
import { CantPickExpert } from "@/components/chooseExpert/cant-pick-expert";
import { ChatInterface } from "@/components/chooseExpert/chat-interface";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import crown from "@/public/Vector-how.png"
import supportTeam from "@/public/cc.jpeg"
export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#f5f2eee4]">
      {/* <BuddyHeader /> */}
      <Navbar />
      <div className="w-full my-5 flex justify-center items-center">
        <div className="w-3/4 flex justify-center rounded-xl px-10 py-6 bg-white">
          <ol className="flex items-center w-full">
            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 ">
              <div className="flex flex-col justify-center items-center" >

              <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <span className="text-xs w-full ">Submit a Project</span>
              </div>
            </li>
            <li className="flex w-full tems-start flex-col justify-start ">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 border-2 border-black/50 rounded-full lg:h-12 text-2xl lg:w-12 dark:bg-gray-700 shrink-0">
                2
              </span>
              <span>In Porgress</span>
            </li>
            <li className="flex items-start justify-start w-full flex-col">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 border-2 border-black/50 rounded-full lg:h-12 text-2xl lg:w-12 dark:bg-gray-700 shrink-0">
                3
              </span>
              <span>In Porgress</span>
            </li>
            <li className="flex items-start justify-start w-full flex-col">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 border-2 border-black/50 rounded-full lg:h-12 text-2xl lg:w-12 dark:bg-gray-700 shrink-0">
                4
              </span>
              <span>Under warranty</span>
            </li>
            <li className="flex items-start justify-start w-full flex-col">
              <span className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-500 border-2 border-black/50 rounded-full lg:h-12 text-2xl lg:w-12 dark:bg-gray-700 shrink-0">
                5
              </span>
              <span>Completed</span>
            </li>
          </ol>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Annotated Bibliography
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            An annotated bibliography is a list of sources (books, articles,
            documents, etc.) that includes a brief summary and evaluation of
            each source. The title "Annotated Bibliography" should reflect the
            purpose of the document: to showcase research materials along with
            explanatory and descriptive notes about their content, relevance,
            and quality.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:flex-1">
            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200 flex flex-col sm:flex-col justify-between items-start sm:items-center gap-2">
              <div className="flex items-center">
                <span className="text-4xl">
                  <span className="relative">
                    <Image
                      src={crown}
                      alt="."
                      className="absolute -top-2 right-2 "
                    />{" "}
                    C
                  </span>
                  hoose an expert for your project
                </span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-end">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  className="text-sm border-none bg-transparent font-medium text-purple-600 focus:outline-none focus:ring-0 cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Most Relevant</option>
                  <option>Lowest Price</option>
                  <option>Highest Rating</option>
                  <option>Most Reviews</option>
                </select>
              </div>
            </div>

            <ExpertsList setShowChat={setShowChat} />

            <CantPickExpert />

            <ProjectPromotion />

            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>

          <div className="lg:w-80">
            <ProjectSidebar />
          </div>
        </div>
      </main>

      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
}
