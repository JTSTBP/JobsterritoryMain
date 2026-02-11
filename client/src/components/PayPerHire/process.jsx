import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Users,
  Target,
  FileSearch,
  CheckCircle,
  Zap,
  ArrowRight,
  ClipboardList
} from "lucide-react";
import HireSection from "../commonsections/ready";

const steps = [
  {
    number: "01",
    title: "Share Requirements",
    text: "Define the role, skills, and culture fit you're looking for. Our team starts by understanding your unique DNA.",
    icon: <ClipboardList className="w-6 h-6" />,
    color: "#6366F1",
    delay: 0,
  },
  {
    number: "02",
    title: "Sourcing & Screening",
    text: "We tap into our deep network and use advanced AI screening to shortlist candidates who truly match your criteria.",
    icon: <Users className="w-6 h-6" />,
    color: "#8B5CF6",
    delay: 0.2,
  },
  {
    number: "03",
    title: "Expert Presentation",
    text: "Receive a curated list of top-tier talent, complete with detailed assessments and our professional recommendations.",
    icon: <Target className="w-6 h-6" />,
    color: "#D946EF",
    delay: 0.4,
  },
  {
    number: "04",
    title: "Collaborative Interviews",
    text: "Interview the best candidates. We coordinate schedules and provide feedback loops to ensure a seamless experience.",
    icon: <Zap className="w-6 h-6" />,
    color: "#F43F5E",
    delay: 0.6,
  },
  {
    number: "05",
    title: "Successful Placement",
    text: "Hire with confidence. You only pay the placement fee once your new team member successfully joins and integrates.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "#10B981",
    delay: 0.8,
  },
];

export default function IndustriesWeHireProcess() {
  return (
    <div className="bg-[#f8fafc]">
      <section className="relative py-24 px-6 md:px-16 overflow-hidden">

        {/* Tech Grid Background (matching banner) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="process-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1B084C" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-grid)" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#1B084C] mb-6 font-montserrat"
            >
              A Simple, Transparent <span className="text-indigo-600">Hiring Journey</span>
            </motion.h2>
            <p className="text-lg text-[#1B084C]/60 font-medium max-w-2xl mx-auto">
              We've streamlined our process to focus on speed and accuracy, ensuring you meet the right talent without the traditional recruitment hassle.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* CENTRAL CIRCUIT LINE */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-indigo-100 -translate-x-1/2 hidden md:block" />

            {/* Animated Data Pulses along the line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-px overflow-hidden">
              <motion.div
                className="w-full h-20 bg-gradient-to-b from-transparent via-indigo-600 to-transparent"
                animate={{ top: ['-20%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute' }}
              />
            </div>

            {/* Steps Rendering */}
            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className={`p-8 md:p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border-b-4 border-r-4 transition-all hover:scale-[1.03] group`}
                        style={{ borderColor: `${step.color}15` }}>

                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform"
                            style={{ background: step.color }}
                          >
                            {step.icon}
                          </div>
                          <span className="text-4xl md:text-5xl font-black opacity-5 font-montserrat" style={{ color: step.color }}>{step.number}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#1B084C] mb-4 font-montserrat">
                          {step.title}
                        </h3>
                        <p className="text-[#1B084C]/60 text-lg leading-relaxed font-medium">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white"
                      style={{ outline: `2px solid ${step.color}20` }}>
                      <motion.div
                        className="absolute inset-0"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ backgroundColor: step.color }}
                      />
                      <div className="relative z-10 w-3 h-3 rounded-full bg-white shadow-inner" />
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Ready Section */}
      <HireSection
        title="Ready to Scale?"
        highlight="Hire Better, Pay Only for Results"
        description="Experience the future of talent acquisition with Jobs Territory. Zero commitment until you find the perfect match."
        buttonText="Get Started Today"
        backgroundImage="/images/trasfrom.png"
      />
    </div>
  );
}
