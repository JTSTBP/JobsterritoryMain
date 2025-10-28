import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Crown,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
import HireSection from "../commonsections/ready";

const steps = [
  {
    number: "01",
    title: "Share Your Requirements",
    text: "Tell us about the role, required skills, experience level, and company culture fit you’re looking for.",
  },
  {
    number: "02",
    title: "We Source & Screen",
    text: "Our team sources candidates from our network and screens them thoroughly against your criteria.",
  },
  {
    number: "03",
    title: "Candidate Presentation",
    text: "We present only the most qualified candidates with detailed profiles and our assessment.",
  },
  {
    number: "04",
    title: "Interview & Selection",
    text: "You interview the candidates and make your selection. We support throughout the process.",
  },
  {
    number: "05",
    title: "Successful Placement",
    text: "Once the candidate joins and completes probation, you pay our success fee. That’s it!",
  },
];

export default function PayPerHireProcess() {
  return (
    <div>
      {/* <section className=" text-white py-16    bg-[#EFEFEF]">
    
        <div className="  mx-auto mb-14 flex flex-col justify-center items-center text-[#1B084C]">
          <h1 className="text-3xl md:text-5xl  font-montserrat">
            Your Simple, Transparent Hiring Journey
          </h1>
          <p className="text-sm md:text-base mt-2 ">
            Simple, transparent process with payment only upon successful
            placement.
          </p>
        </div>

        <div>
          <img src="/images/pphwhy.png" />
        </div>
      </section> */}

      <section className="relative  from-[#E5D9FF] to-[#C7B8FF]  pt-3 pb-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 ">
          Your Simple, Transparent Hiring Journey
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8E78FF] to-[#5A5EFF] rounded-full"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:w-1/2 bg-white shadow-md rounded-2xl p-6 relative z-10 transition-transform hover:scale-[1.02] ${
                  index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                }`}
              >
                <h3 className="text-2xl font-bold text-[#5A5EFF]">
                  {step.number}{" "}
                  <span className=" text-[#3A2D7D]">{step.title}</span>
                </h3>
                <p className="text-gray-600 mt-2 text-md font-semibold md:text-base">
                  {step.text}
                </p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#5A5EFF] w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </section>
      <HireSection
        title="Hire Smarter"
        highlight="Pay Only for Results"
        description="Pay Only for Results."
        buttonText="Start Hiring Now"
        backgroundImage="/images/trasfrom.png"
      />
    </div>
  );
}
