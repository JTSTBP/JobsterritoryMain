import React from "react";

const RecruiterPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // 👈 don’t render unless open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm text-[#1B084C]">
      <div className="bg-white rounded-xl shadow-lg p-12 px-32 w-[90%] max-w-3xl relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="flex-1 border border-indigo-900 rounded-md px-4 py-2"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="flex-1 border border-indigo-900 rounded-md px-4 py-2"
            />
          </div>

          <input
            type="email"
            placeholder="Work Email*"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Company Website*"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Please specify the position level"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-[#1B084C] text-white py-2 rounded-md hover:bg-indigo-800 transition"
          >
            Get a Dedicated Recruiter
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterPopup;
