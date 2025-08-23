import { FaUsers, FaLightbulb, FaChartLine, FaSync } from "react-icons/fa";

export default function Whysection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#1B084C] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT: Text + Features */}
        <div className="">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-museo">
              What Makes Our Fractional Hiring Different
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              We don’t just match CVs — We embed proven leaders — former CXOs,
              industry disruptors, and specialist consultants — who’ve built,
              scaled, and transformed businesses like yours.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2  border border-[#958C8C] rounded-lg overflow-hidden">
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-b  md:border-r">
              {/* <FaUsers className="text-2xl text-primary-600 mt-1" /> */}
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/fractionic1.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 font-museo">
                  Senior Expertise at a Fraction of the Cost
                </h3>
                <p className="text-gray-600">
                  Save 40–60% vs. hiring equivalent full-time leaders.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-b">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic3.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">Fast Impact</h3>
                <p className="text-gray-600">
                  Most leaders start contributing in under 10 days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-[#958C8C] md:border-r">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic2.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Custom Engagement Models
                </h3>
                <p className="text-gray-600">
                  From a few hours a week to project-based mandates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <img
                alt="JT RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic4.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  From a few hours a week to project-based mandates.
                </h3>
                <p className="text-gray-600">
                  Scale up or down without contractual lock-ins.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center">
          <img
            src="/images/whyraas.png"
            alt="JT RaaS Illustration"
            className="rounded-lg  w-full md:w-1/2 lg:w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
