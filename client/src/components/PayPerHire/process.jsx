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
      <section className=" text-white py-16    mt-10 bg-[#EFEFEF]">
        {/* Heading */}
        <div className="  mx-auto mb-14 flex flex-col justify-center items-center text-[#1B084C]">
          <h1 className="text-3xl md:text-5xl  font-museo">
            Your Simple, Transparent Hiring Journey
          </h1>
          <p className="text-sm md:text-base mt-2 ">
            Simple, transparent process with payment only upon successful
            placement.
          </p>
        </div>

        {/* Steps
      <div className="relative max-w-5xl mx-auto">

        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-purple-500 transform -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-14 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10"></div>

        
            <div
              className={`bg-[rgba(255,255,255,0.1)] backdrop-blur-sm p-6 rounded-lg shadow-lg w-full md:w-[45%] border border-white/20 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-300 font-bold">
                  {step.number}.
                </span>
                <h3 className="font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-200">{step.text}</p>
            </div>
          </div>
        ))}
      </div> */}
        <div>
          <img src="/images/pphwhy.png" />
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
