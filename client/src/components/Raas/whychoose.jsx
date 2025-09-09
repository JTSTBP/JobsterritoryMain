import { FaUsers, FaLightbulb, FaChartLine, FaSync } from "react-icons/fa";

export default function WhychooseRaas() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-[#1B084C] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT: Text + Features */}
        <div className="">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-montserrat">
              What Is RaaS?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl">
              RaaS — Recruitment as a Service, Reinvented for Startups & SMEs
              Get 2 dedicated recruiters + 1 account manager embedded in your
              team. We source, screen, and coordinate so you can focus on
              scaling — with precision hiring handled end-to-end
            </p>
          </div>

          {/* Features Grid */}
          <div className=" overflow-hidden">
            <div className="flex items-start gap-4 p-6 ">
              {/* <FaUsers className="text-2xl text-primary-600 mt-1" /> */}
              <img
                alt=" RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic1.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 font-montserrat">
                  Unlimited Hiring
                </h3>
                <p className="text-gray-600">Fill as many roles as you need.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 ">
              <img
                alt=" RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic3.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Fixed Monthly Cost
                </h3>
                <p className="text-gray-600">
                  Predictable spend, zero surprise fees.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 ">
              <img
                alt=" RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic2.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Industry Expert Recruiters
                </h3>
                <p className="text-gray-600">
                  Specialists who know your market.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6">
              <img
                alt=" RaaS Illustration"
                className="w-[3rem]  h-auto"
                src={"/images/raasic4.png"}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">Faster Closures</h3>
                <p className="text-gray-600">
                  First vetted profiles in 72 hours. Unlimited roles, unlimited
                  closures.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md">
              Get Recruiter
            </button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center">
          <img
            src="/images/wtraas.png"
            alt=" RaaS Illustration"
            className="rounded-lg  w-full md:w-1/2 lg:w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
