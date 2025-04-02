import React from 'react'
import { Button } from './ui/Button';

const FloatingActionButton = () => {
  return (
    <div className="fixed right-4 bottom-20 flex flex-col space-y-2 z-50">
      <Button className="bg-white text-gray-800 rounded-full shadow-lg px-4 py-2">
        How It Works
      </Button>
      <Button className="bg-white text-gray-800 rounded-full shadow-lg px-4 py-2">
        Find an Expert
      </Button>
      <Button className="bg-white text-gray-800 rounded-full shadow-lg px-4 py-2">
        Features
      </Button>
      <Button
        variant="outline"
        className="bg-white text-gray-800 rounded-full shadow-lg w-10 h-10 flex items-center justify-center"
      >
        ?
      </Button>
    </div>
  );
}

export default FloatingActionButton