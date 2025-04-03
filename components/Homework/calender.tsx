"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11)); // December 2024

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Fill the remaining cells to complete the grid
  const totalCells = Math.ceil(days.length / 7) * 7;
  for (let i = days.length; i < totalCells; i++) {
    days.push(null);
  }

  // Split days into weeks
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-medium">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevMonth}
            className="h-6 w-6"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextMonth}
            className="h-6 w-6"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        <div className="text-gray-500">Su</div>
        <div className="text-gray-500">Mo</div>
        <div className="text-gray-500">Tu</div>
        <div className="text-gray-500">We</div>
        <div className="text-gray-500">Th</div>
        <div className="text-gray-500">Fr</div>
        <div className="text-gray-500">Sa</div>

        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`
                h-7 w-7 flex items-center justify-center rounded-full
                ${day === 24 ? "bg-purple-600 text-white" : ""}
                ${day && day !== 24 ? "hover:bg-gray-100 cursor-pointer" : ""}
                ${day === null ? "text-gray-300" : "text-gray-700"}
              `}
            >
              {day !== null ? day : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
