import type { NextApiRequest, NextApiResponse } from "next";

type Project = {
  id: string;
  deadline: string;
  title: string;
  description: string;
  bidInfo?: {
    title: string;
    price: string;
    badge: string;
  };
  files?: string;
  priceRange?: string;
  request?: string;
  revision?: number;
  status?: string;
};

const mockProjects: Project[] = [
  {
    id: "1012023",
    deadline: "April 5, 2025, 11:59 PM",
    title: "Mathematics Assignment",
    description: "Solve 10 calculus problems on integration techniques.",
    bidInfo: {
      title: "2 Bids",
      price: "40",
      badge: "Best Offer",
    },
  },
  {
    id: "1023456",
    deadline: "March 28, 2025, 10:00 AM",
    title: "History Essay",
    description: "Write a 1500-word essay on the causes of World War I.",
    files: "essay_guidelines.pdf",
    priceRange: "$30-$50",
  },
  {
    id: "1037890",
    deadline: "April 2, 2025, 6:00 PM",
    title: "Computer Science Project",
    description: "Implement a simple CRUD API using Node.js and Express.",
    files: "project_requirements.docx",
    request: "Your request has been submitted. Please check for updates.",
    revision: 1,
  },
  {
    id: "1045678",
    deadline: "April 10, 2025, 3:30 PM",
    title: "Physics Lab Report",
    description:
      "Write a report on the experiment about Newton's laws of motion.",
    status: "Waiting for expert to accept the request",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mockProjects);
}
