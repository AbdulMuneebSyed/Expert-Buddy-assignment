import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import type { ProjectType } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 shadow-lg shadow-gray-400 rounded-lg p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className="bg-purple-100 text-purple-800 border-purple-200 rounded-md px-2 py-1 text-xs"
            >
              Deadline
            </span>
            <span className="text-xs text-gray-500">{project.deadline}</span>
          </div>
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.description}</p>
          {project.status && (
            <div className="text-xs text-gray-500">
              <span className="font-medium">Status:</span> {project.status}
            </div>
          )}
          {project.request && (
            <div className="text-xs text-gray-500">{project.request}</div>
          )}
          {project.revision && (
            <div className="flex items-center gap-1 text-xs">
              <span className="font-medium">Revision</span>
              <Badge
                variant="outline"
                className="rounded-full h-4 w-4 flex items-center justify-center p-0 text-[10px]"
              >
                {project.revision}
              </Badge>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-purple-100 text-purple-800 border-purple-200 rounded-md px-2 py-1 text-xs"
            >
              ID
            </Badge>
            <span className="text-xs text-gray-500">{project.id}</span>
          </div>
          {project.files && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FileText className="h-4 w-4" />
              <span>{project.files}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          {project.bidInfo && (
            <div>
              <div className="font-medium">{project.bidInfo.title}</div>
              <div className="flex items-center gap-2">
                <div className="text-sm">Price</div>
                <div className="font-medium">${project.bidInfo.price}</div>
              </div>
              {project.bidInfo.badge && (
                <Badge className="bg-green-100 text-green-800 border-green-200 rounded-md px-2 py-1 text-xs">
                  {project.bidInfo.badge}
                </Badge>
              )}
            </div>
          )}
          {project.priceRange && (
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm">Price</div>
                <div className="font-medium">{project.priceRange}</div>
              </div>
            </div>
          )}
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Check the Offers
          </Button>
        </div>
      </div>
    </div>
  );
}
