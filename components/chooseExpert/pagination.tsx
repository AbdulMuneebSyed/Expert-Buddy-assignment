"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];

    // First page
    pages.push(
      <button
        key="first"
        onClick={() => onPageChange(1)}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentPage === 1
            ? "bg-purple-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        1
      </button>
    );

    // Previous button
    if (currentPage > 1) {
      pages.unshift(
        <button
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      );
    } else {
      pages.unshift(
        <button
          key="prev-disabled"
          disabled
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      );
    }

    // Middle pages
    if (totalPages > 2) {
      if (currentPage > 2) {
        pages.push(
          <button
            key="ellipsis1"
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center"
          >
            ...
          </button>
        );
      }

      // Current page (if not first or last)
      if (currentPage > 1 && currentPage < totalPages) {
        pages.push(
          <button
            key={currentPage}
            onClick={() => onPageChange(currentPage)}
            className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center"
          >
            {currentPage}
          </button>
        );
      }

      if (currentPage < totalPages - 1) {
        pages.push(
          <button
            key="ellipsis2"
            className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center"
          >
            ...
          </button>
        );
      }
    }

    // Last page
    if (totalPages > 1) {
      pages.push(
        <button
          key="last"
          onClick={() => onPageChange(totalPages)}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentPage === totalPages
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      );
    } else {
      pages.push(
        <button
          key="next-disabled"
          disabled
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-8 gap-2">{renderPageNumbers()}</div>
  );
}
