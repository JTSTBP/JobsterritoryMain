// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Briefcase, Users, CheckCircle, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';

// const FloatingCard = ({ icon, text, position, delay }) => (
//     <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay }}
//         viewport={{ once: true }}
//         className={`absolute ${position} bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-purple-50 hover:shadow-xl transition-shadow`}
//     >
//         <div className="bg-purple-100 p-2 rounded-full">
//             {icon}
//         </div>
//         <span className="text-[#1B084C] font-bold text-sm whitespace-nowrap">{text}</span>
//     </motion.div>
// );

// const MobileCard = ({ icon, text }) => (
//     <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center gap-2 border border-purple-50">
//         <div className="bg-purple-100 p-2 rounded-full text-[#5500FE]">
//             {icon}
//         </div>
//         <span className="text-[#1B084C] font-bold text-sm">{text}</span>
//     </div>
// );

// const IndustryCTA = () => {
//     const navigate = useNavigate();

//     return (
//         <section className="relative w-full py-16 md:py-32 overflow-hidden bg-[#EFEFEF] font-poppins">

//             {/* Background Orbits */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//                     className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] border border-purple-300/80 rounded-full absolute"
//                 />
//                 <motion.div
//                     animate={{ rotate: -360 }}
//                     transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//                     className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] border border-purple-300/60 rounded-full absolute"
//                 />
//                 <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//                     className="w-[750px] h-[750px] md:w-[1050px] md:h-[1050px] border border-purple-300/60 rounded-full absolute"
//                 />
//             </div>

//             <div className="container mx-auto px-4 relative z-10">

//                 {/* Center Content */}
//                 <div className="max-w-3xl mx-auto text-center relative z-20">
//                     <h2 className="text-3xl md:text-5xl font-bold text-[#1B084C] mb-6 font-montserrat">
//                         Don’t See Your Industry?
//                     </h2>
//                     <p className="text-gray-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//                         No matter your sector, we can find the right people to drive your business forward. Let’s talk about your hiring needs.
//                     </p>
//                     <button
//                         onClick={() => navigate('/contactus')}
//                         className="bg-[#1B084C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//                     >
//                         Contact Us
//                     </button>
//                 </div>

//                 {/* Floating Info Boxes (Desktop) */}
//                 <div className="hidden xl:block">
//                     {/* Top Left */}
//                     <FloatingCard
//                         icon={<Briefcase className="text-[#5500FE]" size={20} />}
//                         text="35+ Industries Served"
//                         position="top-[15%] left-[10%]"
//                         delay={0.2}
//                     />

//                     {/* Bottom Left */}
//                     <FloatingCard
//                         icon={<Users className="text-[#5500FE]" size={20} />}
//                         text="15000+ Total Placements"
//                         position="bottom-[15%] left-[10%]"
//                         delay={0.4}
//                     />

//                     {/* Top Right */}
//                     <FloatingCard
//                         icon={<CheckCircle className="text-[#5500FE]" size={20} />}
//                         text="95% Success Rate"
//                         position="top-[15%] right-[10%]"
//                         delay={0.3}
//                     />

//                     {/* Bottom Right */}
//                     <FloatingCard
//                         icon={<Clock className="text-[#5500FE]" size={20} />}
//                         text="48Hrs Response Time"
//                         position="bottom-[15%] right-[10%]"
//                         delay={0.5}
//                     />
//                 </div>

//                 {/* Mobile/Tablet Grid */}
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 xl:hidden">
//                     <MobileCard icon={<Briefcase size={20} />} text="35+ Industries" />
//                     <MobileCard icon={<Users size={20} />} text="7000+ Placements" />
//                     <MobileCard icon={<CheckCircle size={20} />} text="95% Success" />
//                     <MobileCard icon={<Clock size={20} />} text="24h Response" />
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default IndustryCTA;

// import React from "react";
// import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";

// const IndustryCTA = () => {
//   return (
//     <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFEFEF] overflow-hidden px-4 py-16">
//       {/* ===== MAIN WRAPPER ===== */}
//       <div className="relative w-[900px] h-[900px] hidden md:flex items-center justify-center bg-[#EFEFEF]">
//         {/* ===== ORBITS (Hide below 750px) ===== */}
//         <div className="absolute w-[530px] h-[530px] rounded-full border border-gray-400/70"></div>
//         <div className="absolute w-[609px] h-[609px] rounded-full border border-gray-400/60"></div>
//         <div className="absolute w-[659px] h-[659px] rounded-full border border-gray-400/55"></div>
//         <div className="absolute w-[737px] h-[737px] rounded-full border border-gray-400/50"></div>
//         <div className="absolute w-[822px] h-[822px] rounded-full border border-gray-400/45"></div>

//         {/* ===== CENTER CIRCLE ===== */}
//         <div className="relative z-10 w-[420px] h-[420px] rounded-full flex flex-col items-center justify-center text-center bg-[#EFEFEF] shadow-[0_-20px_40px_rgba(255,255,255,0.9),0_35px_70px_rgba(0,0,0,0.25)]">
//           <h1 className="text-5xl font-bold text-gray-900">Don’t See Your</h1>
//           <h2 className="text-5xl font-bold text-blue-800 mt-2">Industry?</h2>

//           <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md px-6">
//             We're constantly expanding our expertise. Let's discuss how we can
//             help you find the right talent for your specific industry needs.
//           </p>

//           <button className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
//             Contact Us
//           </button>
//         </div>

//         {/* ===== ABSOLUTE STAT CIRCLES (Desktop Only) ===== */}
//         <StatCircle
//           className="absolute top-[192px] left-[136px]"
//           icon={<Briefcase size={22} />}
//           title="15+"
//           text="Industries"
//         />
//         <StatCircle
//           className="absolute top-[192px] right-[136px]"
//           icon={<TrendingUp size={22} />}
//           title="98%"
//           text="Success"
//         />
//         <StatCircle
//           className="absolute bottom-[188px] left-[160px]"
//           icon={<Users size={22} />}
//           title="10k+"
//           text="Placements"
//         />
//         <StatCircle
//           className="absolute bottom-[279px] right-[15px]"
//           icon={<Zap size={22} />}
//           title="12hr"
//           text="Response"
//         />
//       </div>

//       {/* ================= MOBILE VERSION ================= */}

//       {/* Center Circle (Mobile) */}
//       <div className="md:hidden w-[320px] h-[320px] rounded-full flex flex-col items-center justify-center text-center bg-[#EFEFEF] shadow-[0_-20px_40px_rgba(255,255,255,0.9),0_35px_70px_rgba(0,0,0,0.25)]">
//         <h1 className="text-2xl font-bold text-gray-900">Don’t See Your</h1>
//         <h2 className="text-2xl font-bold text-blue-800 mt-1">Industry?</h2>

//         <p className="mt-4 text-gray-600 text-sm leading-relaxed px-6">
//           Let's discuss how we can help you find the right talent.
//         </p>

//         <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white text-sm font-semibold shadow-lg">
//           Contact Us
//         </button>
//       </div>

//       {/* ===== Mobile Stat Circles Row ===== */}
//       <div className="md:hidden mt-10 flex flex-wrap justify-center gap-6 max-w-md">
//         <MobileStat
//           icon={<Briefcase size={20} />}
//           title="15+"
//           text="Industries"
//         />
//         <MobileStat
//           icon={<TrendingUp size={20} />}
//           title="98%"
//           text="Success"
//         />
//         <MobileStat icon={<Users size={20} />} title="10k+" text="Placements" />
//         <MobileStat icon={<Zap size={20} />} title="12hr" text="Response" />
//       </div>
//     </section>
//   );
// };

// /* ===== Reusable Desktop Stat Circle ===== */
// const StatCircle = ({ className, icon, title, text }) => (
//   <div
//     className={`${className} w-[120px] h-[120px] bg-[#EFEFEF] rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center p-3`}
//   >
//     <div className="text-blue-800 mb-1">{icon}</div>
//     <h3 className="text-sm font-bold">{title}</h3>
//     <p className="text-[10px] text-gray-500">{text}</p>
//   </div>
// );

// /* ===== Mobile Version Circle ===== */
// const MobileStat = ({ icon, title, text }) => (
//   <div className="w-[110px] h-[110px] bg-[#EFEFEF] rounded-full shadow-xl flex flex-col items-center justify-center text-center p-3">
//     <div className="text-blue-800 mb-1">{icon}</div>
//     <h3 className="text-sm font-bold">{title}</h3>
//     <p className="text-[10px] text-gray-500">{text}</p>
//   </div>
// );

// export default IndustryCTA;

import React from "react";
import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustryCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFEFEF] overflow-hidden ">
      {/* ===== MAIN WRAPPER ===== */}
      <div className="relative w-[900px] h-[900px] hidden md:flex items-center justify-center bg-[#EFEFEF]">
        {/* ===== ORBITS (Hide below 750px) ===== */}
        <div className="absolute w-[530px] h-[530px] rounded-full border border-gray-400/70"></div>
        <div className="absolute w-[609px] h-[609px] rounded-full border border-gray-400/60"></div>
        <div className="absolute w-[659px] h-[659px] rounded-full border border-gray-400/55"></div>
        <div className="absolute w-[737px] h-[737px] rounded-full border border-gray-400/50"></div>
        <div className="absolute w-[822px] h-[822px] rounded-full border border-gray-400/45"></div>

        {/* ===== CENTER CIRCLE ===== */}
        <div className="relative z-10 w-[420px] h-[420px] rounded-full flex flex-col items-center justify-center text-center bg-[#EFEFEF] shadow-[0_-20px_40px_rgba(255,255,255,0.9),0_35px_70px_rgba(0,0,0,0.25)]">
          <h1 className="text-5xl font-bold text-gray-900">Don’t See Your</h1>
          <h2 className="text-5xl font-bold text-blue-800 mt-2">Industry?</h2>

          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-md px-6">
            We're constantly expanding our expertise. Let's discuss how we can
            help you find the right talent for your specific industry needs.
          </p>

          <button
            onClick={() => navigate("/contactus")}
            className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* ===== ABSOLUTE STAT CIRCLES (Desktop Only) ===== */}
        <StatCircle
          className="absolute top-[192px] left-[136px]"
          icon={<Briefcase size={28} />}
          title="15+"
          text="Industries Served"
        />
        <StatCircle
          className="absolute top-[192px] right-[136px]"
          icon={<TrendingUp size={28} />}
          title="98%"
          text="Success Rate"
        />
        <StatCircle
          className="absolute bottom-[188px] left-[160px]"
          icon={<Users size={28} />}
          title="10k+"
          text="Total Placements"
        />
        <StatCircle
          className="absolute bottom-[279px] right-[15px]"
          icon={<Zap size={28} />}
          title="Rapid 12hr"
          text="Response"
        />
      </div>

      {/* ================= MOBILE VERSION ================= */}

      {/* Center Circle (Mobile) */}
      <div className="md:hidden w-[320px] h-[320px] rounded-full flex flex-col items-center justify-center text-center bg-[#EFEFEF] shadow-[0_-20px_40px_rgba(255,255,255,0.9),0_35px_70px_rgba(0,0,0,0.25)]">
        <h1 className="text-2xl font-bold text-gray-900">Don’t See Your</h1>
        <h2 className="text-2xl font-bold text-blue-800 mt-1">Industry?</h2>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed px-6">
          Let's discuss how we can help you find the right talent.
        </p>

        <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 text-white text-sm font-semibold shadow-lg">
          Contact Us
        </button>
      </div>

      {/* ===== Mobile Stat Circles Row ===== */}
      <div className="md:hidden mt-10 flex flex-wrap justify-center gap-6 max-w-md">
        <MobileStat
          icon={<Briefcase size={24} />}
          title="15+"
          text="Industries Served "
        />
        <MobileStat
          icon={<TrendingUp size={24} />}
          title="98%"
          text="Success Rate"
        />
        <MobileStat
          icon={<Users size={24} />}
          title="10k+"
          text=" Total Placements"
        />
        <MobileStat
          icon={<Zap size={24} />}
          title="Rapid 12hr"
          text="Response"
        />
      </div>
    </section>
  );
};

/* ===== Reusable Desktop Stat Circle ===== */
const StatCircle = ({ className, icon, title, text }) => (
  <div
    className={`${className} w-[130px] h-[130px] bg-[#EFEFEF] rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center p-1`}
  >
    <div className="text-blue-800 mb-1">{icon}</div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-500">{text}</p>
  </div>
);

/* ===== Mobile Version Circle ===== */
const MobileStat = ({ icon, title, text }) => (
  <div className="w-[115px] h-[115px] bg-[#EFEFEF] rounded-full shadow-xl flex flex-col items-center justify-center text-center p-1">
    <div className="text-blue-800 mb-1">{icon}</div>
    <h3 className="text-base font-bold">{title}</h3>
    <p className="text-xs text-gray-500">{text}</p>
  </div>
);

export default IndustryCTA;
