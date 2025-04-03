export function ProjectPromotion() {
  return (
    <div className="my-8 bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3">
          <div className="text-2xl font-bold text-purple-600">2x</div>
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-1">
            Get More Offers With a Project Promotion!
          </h3>
          <p className="text-sm text-gray-600">
            Use a Project Promotion to bring in twice the offers.
          </p>
        </div>

        <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
          Get More Offers
        </button>
      </div>
    </div>
  );
}
