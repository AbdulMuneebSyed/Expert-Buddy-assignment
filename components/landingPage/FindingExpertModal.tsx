// components/WelcomeModal.jsx
import { useState, useRef, useEffect } from "react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [budget, setBudget] = useState(65);
  const [wordCount, setWordCount] = useState(1100);
  const [selectedDate, setSelectedDate] = useState(null);
  const modalRef = useRef(null);

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Handle clicks outside the modal
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Get days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get first day of month
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    const weekdays = ["M", "TU", "W", "T", "FR", "SA", "S"];

    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <div className="flex">
            <button className="mr-1 text-gray-400">«</button>
            <button className="mr-1 text-gray-400">‹</button>
          </div>
          <div>December 2024</div>
          <div className="flex">
            <button className="ml-1 text-gray-400">›</button>
            <button className="ml-1 text-gray-400">»</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {weekdays.map((day) => (
            <div key={day} className="py-1">
              {day}
            </div>
          ))}

          {Array(firstDayOfMonth - 1)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`}></div>
            ))}

          {days.map((day) => (
            <div
              key={day}
              className={`py-1 cursor-pointer hover:bg-gray-100 ${
                day === 30 ? "bg-purple-100 text-purple-600" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg w-full max-w-4xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold p-6 pb-4">Welcome XpertBuddy</h2>

        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="p-6 pt-0 w-full md:w-1/2">
            {/* Title Field */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="I need help in java tutors for online test"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Content Field Section*/}
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
              />
              <div className="text-xs text-gray-500 mt-1">
                Minimum 15 characters
              </div>
            </div>

            {/* Attach File Section*/}
            <div className="mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </div>
              <span className="font-medium">Attach a File</span>
            </div>

            {/* Type and Subject Section*/}
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select className="w-full p-2 border border-gray-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Essay</option>
                </select>
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full p-2 border border-gray-300 rounded appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Others</option>
                </select>
              </div>
            </div>

            {/* Numbers of Words Sections*/}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numbers of Words
              </label>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                  onClick={() => setWordCount(Math.max(0, wordCount - 100))}
                >
                  -
                </button>
                <div className="flex-1 text-center font-medium">
                  {wordCount}
                </div>
                <button
                  className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                  onClick={() => setWordCount(wordCount + 100)}
                >
                  +
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-1">4 pages</div>
            </div>

            {/* Deadline */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              {renderCalendar()}
            </div>
          </div>

          {/* Right Column */}
          <div className="p-6 pt-0 w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200">
            {/* Budget Section*/}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set an Approximate Budget
              </label>
              <div className="flex items-center">
                <button
                  className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                  onClick={() => setBudget(Math.max(0, budget - 5))}
                >
                  -
                </button>
                <div className="flex-1 text-center font-medium">$ {budget}</div>
                <button
                  className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
                  onClick={() => setBudget(budget + 5)}
                >
                  +
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>

            {/* Choose an Expert Button */}
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-full font-medium hover:bg-purple-700 transition-colors mb-6">
              Choose An Expert
            </button>

            {/* Steps */}
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="write" className="text-2xl">
                    🖋️
                  </span>
                </div>
                <div>
                  <div className="font-medium">Describe your project</div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="expert" className="text-2xl">
                    👨‍💼
                  </span>
                </div>
                <div>
                  <div className="font-medium">Choose and Experts</div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="payment" className="text-2xl">
                    💳
                  </span>
                </div>
                <div>
                  <div className="font-medium">Pay for the project,</div>
                  <div className="text-sm">prepay 30% or full price</div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="warranty" className="text-2xl">
                    📅
                  </span>
                </div>
                <div>
                  <div className="font-medium">
                    Get your project done and get a 20-days warranty period
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="ai" className="text-2xl">
                    🤖
                  </span>
                </div>
                <div>
                  <div className="font-medium">AI Free</div>
                  <div className="text-sm">
                    Our Experts do not use ai in completing projects, and those
                    verified by us have the{" "}
                    <span className="text-purple-600 font-medium">
                      "AI Free"
                    </span>{" "}
                    badge.
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <span role="img" aria-label="protection" className="text-2xl">
                    🔒
                  </span>
                </div>
                <div>
                  <div className="font-medium">Payment Protection</div>
                  <div className="text-sm">
                    The deposit remains on your balance until your order is
                    ready and you're satisfied.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
