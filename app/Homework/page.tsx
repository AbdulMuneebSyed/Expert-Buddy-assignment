"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
// import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/Homework/project-card";
import Calendar from "@/components/Homework/calender";
import { mockProjects } from "@/lib/mock-homework";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";

export default function ActiveProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(mockProjects);

  const handleSearch = () => {
    const filtered = mockProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 p-6 border-r border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                Active Projects <span className="text-gray-400 ml-2">497</span>
              </h1>
            </div>
            <div>
              <Button variant="link" className="text-sm text-gray-500">
                View all projects
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6 bg-transparent space-x-6 border-b border-gray-200 w-full justify-start rounded-none h-auto pb-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none pb-2 px-0"
              >
                All (4)
              </TabsTrigger>
              <TabsTrigger
                value="in-progress"
                className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none pb-2 px-0"
              >
                In Progress (0)
              </TabsTrigger>
              <TabsTrigger
                value="under-warranty"
                className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none pb-2 px-0"
              >
                Under Warranty (0)
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600 rounded-none pb-2 px-0"
              >
                Completed (0)
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center mb-6 gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Search by Project ID, Name or Status"
                  className="pl-3 pr-10 py-2 border border-gray-200 rounded-md w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2"
              >
                <Search className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-gray-500">Subject</span>
                <Badge variant="outline" className="rounded-md border-gray-200">
                  Math
                  <span className="ml-1">▼</span>
                </Badge>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="in-progress" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                No in-progress projects
              </div>
            </TabsContent>

            <TabsContent value="under-warranty" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                No projects under warranty
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                No completed projects
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full lg:w-80 p-6 border-l border-gray-200">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-gray-200">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Aspen Stanton"
                  />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Aspen Stanton</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Notifications</h3>
              <Button variant="link" className="text-xs text-gray-500 p-0">
                View all
              </Button>
            </div>
            <div className="text-sm text-gray-500 py-4 text-center">
              No new notifications
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">Calendar</h3>
            <Calendar />
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-4">Expert</h3>
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-10 w-10 border border-gray-200">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Hillary A"
                />
                <AvatarFallback>HA</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Hillary A</div>
              </div>
            </div>
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
              Open Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
