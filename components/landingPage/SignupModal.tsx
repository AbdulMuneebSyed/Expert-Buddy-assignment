// components/SignUpModal.jsx
import { useState, useRef, useEffect } from "react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  setExpertModel: (value: boolean) => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  setExpertModel,
}) => {
  const [email, setEmail] = useState("");
  const [acceptedAgreement, setAcceptedAgreement] = useState(false);
  const [optOutMarketing, setOptOutMarketing] = useState(false);
  const modalRef = useRef(null);

  const handleSignup = () => {
    onClose();
    setExpertModel(true);
  };
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

  return (
    <div className="fixed inset-0 bg-black/50  flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-md relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4">Sign Up XpertBuddy</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="wadawarren@gmail.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Checkboxes */}
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <input
              type="checkbox"
              id="agreement"
              checked={acceptedAgreement}
              onChange={() => setAcceptedAgreement(!acceptedAgreement)}
              className="mt-1"
            />
            <label htmlFor="agreement" className="ml-2 text-sm">
              I accept <span className="text-purple-600">User Agreement</span>
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketing"
              checked={optOutMarketing}
              onChange={() => setOptOutMarketing(!optOutMarketing)}
              className="mt-1"
            />
            <label htmlFor="marketing" className="ml-2 text-sm">
              I don't want to receive marketing messages from{" "}
              <span className="text-purple-600">XpertBuddy</span>
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          className="w-36 shadow-xl shadow-black/40 bg-purple-600 text-white py-2 px-4 rounded-full font-medium hover:bg-purple-700 transition-colors hover:cursor-pointer"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        {/* Login Link */}
        <div className="text-center mt-4 text-sm">
          Already registered?{" "}
          <a href="#" className="text-purple-600">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
