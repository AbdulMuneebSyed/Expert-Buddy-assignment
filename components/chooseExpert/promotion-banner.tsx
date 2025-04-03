export function PromotionBanner() {
  return (
    <div className="bg-purple-50 rounded-lg border border-purple-100 p-4">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
          <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-purple-800">
            Get More Offers With a Project Promotion!
          </h3>
          <p className="text-xs text-gray-600">
            Boost your project visibility to receive more offers.
          </p>
        </div>

        <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
}
