import React from "react";
import {
  BsCurrencyDollar,
  BsPerson,
  BsExclamationTriangle,
  BsCheckCircle,
  BsPersonCheck,
  BsClock,
  BsShieldCheck,
  BsArrowRepeat,
  BsLightningCharge,
} from "react-icons/bs";

const HiringComparison = () => {
  const stats = [
    {
      value: "70%",
      title: "Cost Savings",
      description: "Reduce hiring expenses with flat-fee pricing",
    },
    {
      value: "3x",
      title: "Faster Hiring",
      description: "Fill positions in a fraction of traditional time",
    },
    {
      value: "95%",
      title: "Success Rate",
      description: "Guaranteed closures with SLA commitments",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-[#1B084C]">
      <h2 className="text-3xl text-[#1B084C] font-bold text-center mb-8">
        Traditional Hiring vs Raas - The Smarter Way to Hire
      </h2>
      <p className="text-center mb-12">
        See how our Subscription Model stacks up against traditional Agency
        hiring.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Traditional Hiring */}
        <div className="bg-yellow-50 rounded-xl p-8 shadow-md border border-yellow-200">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
            Traditional Hiring
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <BsCurrencyDollar className="w-14 h-8 text-yellow-600 mt-1" />
              <span>
                <strong>High Cost Per Hire:</strong> Pay 8–12% of annual CTC for
                every successful placement, adding significant overhead to your
                recruitment budget.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsPersonCheck className="w-14 h-8 text-yellow-600 mt-1" />
              <span>
                <strong>Pay Per Candidate:</strong> Individual fees for each
                hire create unpredictable expenses that fluctuate with your
                hiring needs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsExclamationTriangle className="w-14 h-8 text-yellow-600 mt-1" />
              <span>
                <strong>Dropout Risk:</strong> When candidates drop out late in
                the process, you’ve already invested time and money with nothing
                to show.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsArrowRepeat className="w-14 h-8 text-yellow-600 mt-1" />
              <span>
                <strong>One-Time Transactions:</strong> Each new position
                requires restarting the entire recruitment cycle from scratch.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsClock className="w-14 h-8 text-yellow-600 mt-1" />
              <span>
                <strong>Slow Turnaround:</strong> Extended timelines mean
                positions stay vacant longer, impacting productivity.
              </span>
            </li>
          </ul>
        </div>

        {/* RAAS Model (Jobs Territory) */}
        <div className="bg-sky-100 rounded-xl p-8 shadow-md border border-sky-300">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            RAAS Model (Jobs Territory)
          </h3>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start gap-3">
              <BsCurrencyDollar className="w-10 h-8 text-sky-600 mt-1" />
              <span>
                <strong>Flat Monthly Fee:</strong> Predictable pricing
                eliminates surprise costs and financial uncertainty.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsShieldCheck className="w-10 h-8 text-sky-600 mt-1" />
              <span>
                <strong>Guaranteed Closures:</strong> We ensure successful hires
                that stick, reducing your risk exposure.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsClock className="w-10 h-8 text-sky-600 mt-1" />
              <span>
                <strong>SLA-Driven Delivery:</strong> Defined turnaround times
                and quality benchmarks with accountability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsPersonCheck className="w-10 h-8 text-sky-600 mt-1" />
              <span>
                <strong>Continuous Sourcing:</strong> Maintain a ready talent
                pipeline to fill roles quickly as needs arise.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <BsLightningCharge className="w-14 h-8 text-sky-600 mt-1" />
              <span>
                <strong>Faster Results:</strong> Streamlined processes deliver
                qualified candidates in record time with transparent,
                predictable costs.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className=" py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold text-gray-900">{stat.value}</h2>
              <h3 className="text-lg font-semibold text-gray-700 mt-1">
                {stat.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringComparison;
