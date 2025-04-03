import supportTeam from "@/public/cc.jpeg"
export function CantPickExpert() {
  return (
    <div className="my-8">
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-50 px-4 text-base font-medium text-gray-900">
            Can't Pick the Right Expert?
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-32 h-32">
            <img
              src={supportTeam.src}
              alt="Support team illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">
            Our support team is here to help you make this decision{" "}
            <span className="text-yellow-500">👋</span>
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
