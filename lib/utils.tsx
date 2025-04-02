// "use client";

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// // Function to format a date
// export function formatDate(date: string | number | Date) {
//   return new Intl.DateTimeFormat("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   }).format(new Date(date));
// }

// // Function to truncate text to a given length
// export function truncateText(text: string, length: number = 100) {
//   return text.length > length ? text.substring(0, length) + "..." : text;
// }

// // Function to safely parse JSON
// export function safeJSONParse<T>(value: string, fallback: T): T {
//   try {
//     return JSON.parse(value) as T;
//   } catch {
//     return fallback;
//   }
// }

// // Function to copy text to clipboard
// export async function copyToClipboard(text: string) {
//   try {
//     await navigator.clipboard.writeText(text);
//     return true;
//   } catch {
//     return false;
//   }
// }
