import React from "react";
import {
  BsCurrencyDollar,
  BsPerson,
  BsExclamationTriangle,
  BsCheckCircle,
} from "react-icons/bs";

const HiringComparison = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-[#1B084C]">
      <h2 className="text-3xl text-[#1B084C] font-bold text-center mb-8">
        Hiring Made Simple: Agency vs Subscription
      </h2>
      <p className="text-center mb-12">
        See how our Subscription Model stacks up against traditional Agency
        hiring.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Agency Mode Card */}
        <div className="bg-pink-200 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center text-[#1B084C]">
            Agency Mode
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <BsCurrencyDollar className=" w-5 h-5" />
              8–12% of CTC per hire
            </li>
            <li className="flex items-center gap-3">
              <BsPerson className=" w-5 h-5" />
              Pay per candidate
            </li>
            <li className="flex items-center gap-3">
              <BsExclamationTriangle className=" w-5 h-5" />
              High dropout cost
            </li>
            <li className="flex items-center gap-3">
              <BsCheckCircle className=" w-5 h-5" />
              One-off hiring
            </li>
          </ul>
        </div>

        {/* Subscription Model Card */}
        <div className="bg-purple-200 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center text-[#1B084C]">
            Subscription Model
          </h3>
          <ul className="space-y-4">
            <li>Flat monthly subscription</li>
            <li>Unlimited roles</li>
            <li>Continuous sourcing</li>
            <li>Scalable pods</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HiringComparison;
