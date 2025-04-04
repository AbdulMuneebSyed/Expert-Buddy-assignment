"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Paperclip } from "lucide-react";
// import { format } from "date-fns";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import Link from "next/link";
import DatePickerExpert  from "@/components/chooseExpert/datepicker";

interface XpertModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function XpertModal({ isOpen, setIsOpen }: XpertModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    type: "Essay",
    subject: "Others",
    wordCount: 1100,
    budget: 65,
    deadline: new Date(),
    attachedFile: null as File | null,
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const incrementValue = (
    field: string,
    increment: number,
    min: number,
    max: number
  ) => {
    setFormData((prev) => {
      const newValue = Math.min(
        Math.max(
          typeof prev[field as keyof typeof prev] === "number"
            ? (prev[field as keyof typeof prev] as number) + increment
            : min,
          min
        ),
        max
      );
      return {
        ...prev,
        [field]: newValue,
      };
    });
  };

  const handleFileAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        attachedFile: e.target.files ? e.target.files[0] : null,
      }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl p-0 text-black overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col md:flex-row">
          {/* Left side of the Form */}
          <div className="w-full md:w-1/2 p-4 bg-white">
            <DialogHeader className="mb-2">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-xl font-bold">
                  Welcome XpertBuddy
                </DialogTitle>
              </div>
            </DialogHeader>

            <div className="space-y-3">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  placeholder="I need help in java tutors for online test"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <Textarea
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  className="min-h-[80px] text-sm"
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                />
                <div className="text-xs text-gray-500 mt-0.5">
                  Minimum 15 characters
                </div>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200 h-8"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <Paperclip className="h-3 w-3 mr-1" />
                  Attach a File
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileAttachment}
                />
                {formData.attachedFile && (
                  <div className="mt-1 text-xs truncate max-w-full">
                    File attached: {formData.attachedFile.name}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => handleInputChange("type", value)}
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Essay">Essay</SelectItem>
                      <SelectItem value="Research">Research</SelectItem>
                      <SelectItem value="Assignment">Assignment</SelectItem>
                      <SelectItem value="Project">Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Others">Others</SelectItem>
                      <SelectItem value="Computer Science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Word Count and Deadline in same row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Word Count */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Numbers of Words
                  </label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-purple-100 text-purple-800 h-6 w-6"
                      onClick={() =>
                        incrementValue("wordCount", -100, 100, 10000)
                      }
                    >
                      <span className="font-bold text-xs">-</span>
                    </Button>
                    <div className="flex-1 text-center font-medium text-sm">
                      {formData.wordCount}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-purple-100 text-purple-800 h-6 w-6"
                      onClick={() =>
                        incrementValue("wordCount", 100, 100, 10000)
                      }
                    >
                      <span className="font-bold text-xs">+</span>
                    </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">4 pages</div>
                </div>

                {/* Deadline - Popover Calendar */}
                <div>
                  <label className="text-sm font-medium mb-1">Deadline</label>
                  <DatePickerExpert
                    value={
                      formData.deadline
                        ? dayjs(formData.deadline).toISOString()
                        : null
                    }
                    setValue={(newValue) =>
                      setFormData((prev) => ({
                        ...prev,
                        deadline: newValue ? new Date(newValue) : new Date(),
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Budget and Info */}
          <div className="w-full md:w-1/2 p-4 bg-gray-50">
            {/* Budget */}
            <div className="mb-4">
              <h3 className="font-medium mb-2 text-sm">
                Set an Approximate Budget
              </h3>
              <div className="flex items-center mb-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-purple-100 text-purple-800 h-6 w-6"
                  onClick={() => incrementValue("budget", -5, 5, 1000)}
                >
                  <span className="font-bold text-xs">-</span>
                </Button>
                <div className="flex-1 text-center">
                  <span className="font-medium">$ {formData.budget}</span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-purple-100 text-purple-800 h-6 w-6"
                  onClick={() => incrementValue("budget", 5, 5, 1000)}
                >
                  <span className="font-bold text-xs">+</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* Choose Expert Button wala section*/}
            <Button className="w-full hover:cursor-pointer rounded-4xl bg-purple-600 hover:bg-purple-700 text-white py-2 mb-4">
              <Link href={"/chooseExpert"} className="w-full">
                Choose An Expert
              </Link>
            </Button>

            {/* Process Steps */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="bg-red-100 p-1 rounded-md flex-shrink-0">
                  <span role="img" aria-label="describe" className="text-base">
                    🔍
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Describe your project</h4>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-1 rounded-md flex-shrink-0">
                  <span role="img" aria-label="experts" className="text-base">
                    👨‍💼
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Choose an Expert</h4>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-1 rounded-md flex-shrink-0">
                  <span role="img" aria-label="payment" className="text-base">
                    💳
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Pay for the project</h4>
                  <p className="text-xs text-gray-600">
                    prepay 30% or full price
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-yellow-100 p-1 rounded-md flex-shrink-0">
                  <span role="img" aria-label="warranty" className="text-base">
                    🎁
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">
                    Get your project done and get a 20-days warranty period
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-purple-100 p-1 rounded-md flex-shrink-0">
                  <span role="img" aria-label="ai" className="text-base">
                    🤖
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">AI Free</h4>
                  <p className="text-xs text-gray-600">
                    Our Experts do not use ai in completing projects, and those
                    verified by us have the{" "}
                    <span className="bg-purple-600 text-white rounded-4xl text-xs py-0 px-1">
                      AI Free
                    </span>{" "}
                    badge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="bg-orange-100 p-1 rounded-md flex-shrink-0">
                  <span
                    role="img"
                    aria-label="protection"
                    className="text-base"
                  >
                    🔒
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Payment Protection</h4>
                  <p className="text-xs text-gray-600">
                    The deposit remains on your balance until your order is
                    ready and you're satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
