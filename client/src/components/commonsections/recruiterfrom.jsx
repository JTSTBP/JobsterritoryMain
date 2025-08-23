import React from "react";

export default function RecruiterForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="w-full max-w-lg space-y-4">
        {/* Row 1 - Name & Phone */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="Name*"
            className="flex-1 rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="flex-1 rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
          />
        </div>

        {/* Row 2 - Work Email */}
        <input
          type="email"
          placeholder="Work Email*"
          className="w-full rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
        />

        {/* Row 3 - Company Website */}
        <input
          type="url"
          placeholder="Company Website*"
          className="w-full rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
        />

        {/* Row 4 - What are you looking for? */}
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="w-full rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
        />

        {/* Row 5 - Position Level */}
        <input
          type="text"
          placeholder="Please Specify the position level"
          className="w-full rounded-md border border-[#1A004E] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1A004E]"
        />

        {/* Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#1A004E] text-white font-medium rounded-md hover:bg-[#2b0075] transition"
          >
            Get a Dedicated Recruiter
          </button>
        </div>
      </form>
    </div>
  );
}
