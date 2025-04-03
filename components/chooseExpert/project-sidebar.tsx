"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ChevronRight, Paperclip } from "lucide-react";

export function ProjectSidebar() {
  const [subjectArea, setSubjectArea] = useState("");
  const [projectType, setProjectType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [wordCount, setWordCount] = useState("500 words");

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <Paperclip className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">Attach a File</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4">
          <h3 className="font-medium text-lg mb-4">Project Details</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject Area
              </label>
              <Select value={subjectArea} onValueChange={setSubjectArea}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select subject area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Type
              </label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Enter project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="annotated">
                    Annotated Bibliography
                  </SelectItem>
                  <SelectItem value="research">Research Paper</SelectItem>
                  <SelectItem value="essay">Essay</SelectItem>
                  <SelectItem value="thesis">Thesis</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-1">
                <span>Express Project</span>
                <div className="bg-white text-purple-600 rounded-full text-xs px-1.5 py-0.5 font-bold">
                  2x
                </div>
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deadline
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="04/25/2025 12:00 PM"
                  className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of words
              </label>
              <Input
                type="text"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-purple-800">
              Need <span className="text-purple-500">More</span> Tutor Options?
            </h3>
            <div className="text-xs text-gray-500">More</div>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Invite top tutors to help with your assignment
          </p>

          <Button className="w-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center">
            <span>Invite Tutors</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4">
          <h3 className="font-medium text-center mb-1">
            Track Your Order Through The App!
          </h3>
          <p className="text-xs text-gray-600 text-center mb-4">
            Get $20 bonus on your first project via app
          </p>

          <div className="flex justify-center mb-4">
            <div className="bg-white p-2 rounded-lg border border-gray-200">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <div className="h-10 w-10 bg-purple-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-purple-600">BUDDY</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="bg-white p-2 border border-gray-200 rounded">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="QR Code"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700"
          >
            Download App
          </Button>
        </div>
      </div>
    </div>
  );
}
