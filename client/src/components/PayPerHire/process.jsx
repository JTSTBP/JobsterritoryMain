// import React from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import {
//   Users,
//   Target,
//   FileSearch,
//   CheckCircle,
//   Zap,
//   ArrowRight,
//   ClipboardList
// } from "lucide-react";
// import HireSection from "../commonsections/ready";

// const steps = [
//   {
//     number: "01",
//     title: "Share Requirements",
//     text: "Define the role, technical skills, and cultural fit for your sector. We start by analyzing your industry-specific hiring needs.",
//     icon: <ClipboardList className="w-6 h-6" />,
//     color: "#6366F1",
//     delay: 0,
//   },
//   {
//     number: "02",
//     title: "Sector-Specific Sourcing",
//     text: "We tap into our specialized talent networks and utilize role-aligned search parameters to find candidates who understand your industry.",
//     icon: <Users className="w-6 h-6" />,
//     color: "#8B5CF6",
//     delay: 0.2,
//   },
//   {
//     number: "03",
//     title: "Precision Vetting",
//     text: "Our domain experts screen and assess candidates against industry benchmarks, presenting only those who meet our gold standard.",
//     icon: <Target className="w-6 h-6" />,
//     color: "#D946EF",
//     delay: 0.4,
//   },
//   {
//     number: "04",
//     title: "Strategic Interviews",
//     text: "Engage with the top 1% of talent. We manage the entire schedule and provide comparative insights to help you decide.",
//     icon: <Zap className="w-6 h-6" />,
//     color: "#F43F5E",
//     delay: 0.6,
//   },
//   {
//     number: "05",
//     title: "Growth Integration",
//     text: "Finalize your hire with peace of mind. Our placement fee is success-linked to the candidate's successful onboarding in your team.",
//     icon: <CheckCircle className="w-6 h-6" />,
//     color: "#10B981",
//     delay: 0.8,
//   },
// ];

// export default function IndustriesWeHireProcess() {
//   return (
//     <div className="bg-[#f8fafc]">
//       <section className="relative py-24 px-6 md:px-16 overflow-hidden">

//         {/* Tech Grid Background (matching banner) */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
//           <svg width="100%" height="100%">
//             <defs>
//               <pattern id="process-grid" width="60" height="60" patternUnits="userSpaceOnUse">
//                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1B084C" strokeWidth="1" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#process-grid)" />
//           </svg>
//         </div>

//         <div className="container mx-auto relative z-10">

//           {/* Section Header */}
//           <div className="max-w-3xl mx-auto text-center mb-20">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-bold text-[#1B084C] mb-6 font-montserrat"
//             >
//               A Simple, Transparent <span className="text-indigo-600">Hiring Journey</span>
//             </motion.h2>
//             <p className="text-lg text-[#1B084C]/60 font-medium max-w-2xl mx-auto">
//               We've streamlined our process to focus on speed and accuracy, ensuring you meet the right talent without the traditional recruitment hassle.
//             </p>
//           </div>

//           {/* Timeline Container */}
//           <div className="relative max-w-5xl mx-auto">

//             {/* CENTRAL CIRCUIT LINE */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-indigo-100 -translate-x-1/2 hidden md:block" />

//             {/* Animated Data Pulses along the line */}
//             <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block w-px overflow-hidden">
//               <motion.div
//                 className="w-full h-20 bg-gradient-to-b from-transparent via-indigo-600 to-transparent"
//                 animate={{ top: ['-20%', '110%'] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//                 style={{ position: 'absolute' }}
//               />
//             </div>

//             {/* Steps Rendering */}
//             <div className="space-y-12 md:space-y-24">
//               {steps.map((step, index) => {
//                 const isEven = index % 2 === 0;
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
//                   >
//                     {/* Content Card */}
//                     <div className="w-full md:w-1/2">
//                       <div className={`p-8 md:p-10 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border-b-4 border-r-4 transition-all hover:scale-[1.03] group`}
//                         style={{ borderColor: `${step.color}15` }}>

//                         <div className="flex items-center gap-4 mb-6">
//                           <div
//                             className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform"
//                             style={{ background: step.color }}
//                           >
//                             {step.icon}
//                           </div>
//                           <span className="text-4xl md:text-5xl font-black opacity-5 font-montserrat" style={{ color: step.color }}>{step.number}</span>
//                         </div>

//                         <h3 className="text-2xl font-bold text-[#1B084C] mb-4 font-montserrat">
//                           {step.title}
//                         </h3>
//                         <p className="text-[#1B084C]/60 text-lg leading-relaxed font-medium">
//                           {step.text}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Timeline Node */}
//                     <div className="relative z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white"
//                       style={{ outline: `2px solid ${step.color}20` }}>
//                       <motion.div
//                         className="absolute inset-0"
//                         animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         style={{ backgroundColor: step.color }}
//                       />
//                       <div className="relative z-10 w-3 h-3 rounded-full bg-white shadow-inner" />
//                     </div>

//                     {/* Spacer for the other side */}
//                     <div className="hidden md:block md:w-1/2" />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Ready Section */}
//       <HireSection
//         title="Ready to Scale?"
//         highlight="Hire Better, Pay Only for Results"
//         description="Experience the future of talent acquisition with Jobs Territory. Zero commitment until you find the perfect match."
//         buttonText="Get Started Today"
//         backgroundImage="/images/trasfrom.png"
//       />
//     </div>
//   );
// }


import React from "react";
import {
  Users,
  FileText,
  ShieldCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";
import HireSection from "../commonsections/ready";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Share Requirements",
    desc: "Define the role, technical skills, and cultural fit for your sector. We start by analyzing your industry-specific hiring needs.",
    color: "#4A90E2",
    side: "right",
  },
  {
    num: "02",
    icon: Users,
    title: "Sector-Specific Sourcing",
    desc: "We tap into our specialized talent networks and utilize role-aligned search parameters to find candidates who understand your industry.",
    color: "#6C63FF",
    side: "left",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Precision Vetting",
    desc: "Our domain experts screen and assess candidates against industry benchmarks, presenting only those who meet our gold standard.",
    color: "#E2548A",
    side: "right",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Strategic Interviews",
    desc: "Engage with the top 1% of talent. We manage the entire schedule and provide comparative insights to help you decide.",
    color: "#F4734A",
    side: "left",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Growth Integration",
    desc: "Finalize your hire with peace of mind. Our placement fee is success-linked to the candidate's successful onboarding in your team.",
    color: "#22B07D",
    side: "right",
  },
];

/* ===== Orbit Dot — center connector with 3 pulsing rings ===== */
const OrbitDot = ({ color }) => (
  <div className="relative flex items-center justify-center w-6 h-6">
    {/* Ring 3 — outermost, slowest */}
    <span
      className="absolute rounded-full animate-ping opacity-20"
      style={{
        width: 40,
        height: 40,
        backgroundColor: color,
        animationDuration: "2.4s",
      }}
    />
    {/* Ring 2 — middle */}
    <span
      className="absolute rounded-full animate-ping opacity-30"
      style={{
        width: 28,
        height: 28,
        backgroundColor: color,
        animationDuration: "1.8s",
      }}
    />
    {/* Ring 1 — innermost, fastest */}
    <span
      className="absolute rounded-full animate-ping opacity-40"
      style={{
        width: 18,
        height: 18,
        backgroundColor: color,
        animationDuration: "1.2s",
      }}
    />
    {/* Solid center dot */}
    <span
      className="relative z-10 rounded-full border-2 border-white shadow-lg"
      style={{ width: 14, height: 14, backgroundColor: color }}
    />
  </div>
);

/* ===== Step Card ===== */
const StepCard = ({ step }) => {
  const Icon = step.icon;
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 shadow-md w-full"
      style={{ backgroundColor: `${step.color}12`, border: `1.5px solid ${step.color}30` }}
    >
      {/* Ghost number background */}
      <span
        className="absolute -top-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none"
        style={{ color: `${step.color}18` }}
      >
        {step.num}
      </span>

      {/* Icon circle */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-4 text-white shadow-md"
        style={{ backgroundColor: step.color }}
      >
        <Icon size={20} />
      </div>

      {/* Sub-heading */}
      <h3 className="text-base font-bold text-[#1B084C] mb-2 leading-snug">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed relative z-10">
        {step.desc}
      </p>
    </div>
  );
};

export default function IndustriesWeHireProcess() {
  return (
    <div className="bg-[#f8fafc]">
      <section className="px-4 py-16 md:py-24">

        {/* ── Header ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-20">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B084C] sm:text-4xl md:text-5xl">
            A Simple, Transparent{" "}
            <span className="text-indigo-600">Hiring Journey</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            We've streamlined our process to focus on speed and accuracy,
            ensuring you meet the right talent without the traditional
            recruitment hassle.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative mx-auto max-w-6xl">

          {/* Vertical line — desktop (center) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 md:block" />

          {/* Vertical line — mobile (left) */}
          <div className="absolute left-5 top-0 block h-full w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 md:hidden" />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex items-center gap-4 md:gap-0 md:py-8"
              >
                {/* ── Mobile dot ── */}
                <div className="relative z-10 flex-shrink-0 md:hidden">
                  <OrbitDot color={step.color} />
                </div>

                {/* ── Left slot (desktop) ── */}
                <div className="hidden w-1/2 pr-6 md:flex md:justify-end">
                  {step.side === "left" ? (
                    <StepCard step={step} />
                  ) : (
                    <div />
                  )}
                </div>

                {/* ── Center orbit dot (desktop) ── */}
                <div className="relative z-10 hidden flex-shrink-0 md:flex md:items-center md:justify-center">
                  <OrbitDot color={step.color} />
                </div>

                {/* ── Right slot (desktop) ── */}
                <div className="hidden w-1/2 pl-6 md:flex">
                  {step.side === "right" ? (
                    <StepCard step={step} />
                  ) : (
                    <div />
                  )}
                </div>

                {/* ── Mobile card ── */}
                <div className="flex-1 md:hidden">
                  <StepCard step={step} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

