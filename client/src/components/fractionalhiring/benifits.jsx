// import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function BenefitsCard() {
//   const textRef = useRef(null);
//   const text = "HELLO WORLD";

//   const benefits = [
//     {
//       title: "Cost Efficiency",
//       text: "Save 40-60% compared to full-time hires while getting the same level of expertise.",
//     },
//     {
//       title: "Immediate Impact",
//       text: "Experienced professionals who can contribute from day one without lengthy onboarding.",
//     },
//     {
//       title: "Flexibility",
//       text: "Scale up or down based on project needs and business requirements.",
//     },
//     {
//       title: "Access to Top Talent",
//       text: "Attract senior professionals who prefer flexible work arrangements.",
//     },
//   ];

//   const stats = [
//     { value: "40-60%", label: "Cost Reduction vs Full-time" },
//     { value: "2-3 weeks", label: "Cost Reduction vs Full-time" },
//     { value: "95%", label: "Project Success Rate" },
//     { value: "80%", label: "Convert to Full-time" },
//   ];

//  useEffect(() => {
//    const text = "Fractional Hiring • Success Metrics • ";
//    const element = textRef.current;
//    if (!element) return; // prevent null crash

//    element.innerHTML = text
//      .split("")
//      .map(
//        (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
//      )
//      .join("");
//  }, []);

//   return (
//       <div className="bg-white">
//         <motion.div
//           className="text-center  text-[#1B084C]"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <div className="flex justify-center mb-6"></div>
//           <h2 className="text-3xl md:text-4xl font-bold font-museo inline-block pb-2">
//             Benefits of Fractional Hiring
//           </h2>
//           <p className="mt-2">
//             Why companies choose fractional hiring over traditional employment
//           </p>
//         </motion.div>
//         <div className="bg-white flex flex-wrap gap-3 px-5 justify-evenly py-6">
//           <div className="relative max-w-xl bg-white  rounded-t-xl rounded-bl-xl overflow-hidden my-10">
//             <div className="bg-white p-6 border border-purple-500 rounded-t-xl rounded-bl-xl   shadow-lg ">
//               {benefits.map((item, index) => (
//                 <div key={index} className="flex items-start mb-6 last:mb-0">
//                   <CheckCircleIcon className="w-6 h-6 text-[#2B0099] mt-1 flex-shrink-0" />
//                   <div className="ml-3">
//                     <h3 className="font-semibold text-lg text-[#240960]">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#2B0099] text-sm">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Inverted corner */}
//             <span
//               className="
//               hidden sm:block
//           absolute
//           -bottom-10
//           -right-10
//           w-32 h-32

//           rounded-[30px]
//           bg-white
//           border-t border-l border-purple-500
//         "
//               aria-hidden="true"
//             />
//           </div>

//           <div className="relative bg-[#E7E4FF]  max-w-xl rounded-t-xl rounded-br-xl my-10 ">
//             <div className="p-8  p-6  rounded-t-xl rounded-br-xl   ">
//               {/* Stats Grid */}
//               <div className="grid grid-cols-2 gap-4">
//                 {stats.map((item, i) => (
//                   <div
//                     key={i}
//                     className="bg-white rounded-md shadow-md p-4 text-center"
//                   >
//                     <p className="text-2xl font-bold text-purple-600">
//                       {item.value}
//                     </p>
//                     <p className="text-sm text-gray-600">{item.label}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Title */}
//               <div className="mt-8 font-museo">
//                 <h2 className=" text-2xl md:text-4xl font-bold text-purple-600 text-right">
//                   Success Metrics
//                 </h2>
//               </div>
//             </div>

//             {/* Inverted Bottom-Left Curve */}
//             <span
//               className="
//               hidden sm:block
//       absolute
//       -bottom-8
//       -left-8
//       w-32
//       h-32
//       bg-white
//       rounded-tr-[40px]

//     "
//               aria-hidden="true"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
//           <div className="relative w-[250px] h-[250px]">
//             {text.split("").map((letter, i) => (
//               <span
//                 key={i}
//                 className="absolute left-1/2 top-1/2 animate-orbit origin-[0_0]"
//                 style={{
//                   transform: `rotate(${
//                     (360 / text.length) * i
//                   }deg) translateX(100px)`,
//                   animationDelay: `${i * 0.2}s`,
//                 }}
//               >
//                 {letter}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

 
//   );
// }


import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function BenefitsCard() {
  const text = "gniriH lanoitcarF  ";

 const benefits = [
   {
     title: "Cost Efficiency Without Compromise",
     text: "Save 40–60% vs. full-time hires while getting boardroom level expertise that delivers real results.",
   },
   {
     title: "Day-One Impact",
     text: "Battle tested leaders who step in, take charge, and deliver wins immediately.",
   },
   {
     title: "Agility On Demand",
     text: "Scale talent up or down instantly to match projects or market shifts.",
   },
   {
     title: "Elite Talent Network",
     text: "Direct access to ex CXOs, specialists, and transformation leaders who choose high impact, flexible roles.",
   },
 ];


  const stats = [
    { value: "40-60%", label: "Cost Reduction vs Full-time" },
    { value: "2-3 weeks", label: "Time to Onboard" },
    { value: "95%", label: "Project Success Rate" },
    { value: "80%", label: "Convert to Full-time" },
  ];

  return (
    <div className="bg-white relative py-16">
      <motion.div
        className="text-center text-[#1B084C]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-museo inline-block pb-2">
          Why Businesses Keep Coming Back to Us
        </h2>
        <p className="mt-2">
          Why companies choose fractional hiring over traditional employment
        </p>
      </motion.div>

      <div className="bg-white flex flex-col lg:flex-row justify-center gap-3 px-5  lg:justify-evenly items-center py-6 relative ">
        {/* Left Card */}
        <div className="relative max-w-xl w-full lg:w-[45%] bg-white rounded-t-xl rounded-bl-xl overflow-hidden my-10">
          <div className="bg-white p-6 border border-purple-500 rounded-t-xl rounded-bl-xl shadow-lg">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start mb-6 last:mb-0">
                <CheckCircleIcon className="w-6 h-6 text-[#2B0099] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold text-lg text-[#240960]">
                    {item.title}
                  </h3>
                  <p className="text-[#2B0099] text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Inverted corner */}
          <span
            className="hidden sm:block absolute -bottom-10 -right-10 w-32 h-32 rounded-[30px] bg-white border-t border-l border-purple-500"
            aria-hidden="true"
          />
        </div>

        {/* Right Card */}
        <div className="relative bg-[#E7E4FF] max-w-xl w-full lg:w-[45%] rounded-t-xl rounded-br-xl my-10">
          <div className="p-8 rounded-t-xl rounded-br-xl">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-md shadow-md p-4 text-center"
                >
                  <p className="text-2xl font-bold text-purple-600">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 font-museo">
              <h2 className="text-2xl md:text-4xl font-bold text-purple-600 text-right">
                Success Metrics
              </h2>
            </div>
          </div>
          {/* Inverted Bottom-Left Curve */}
          <span
            className="hidden sm:block absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-tr-[40px]"
            aria-hidden="true"
          />
        </div>

        <div className="absolute bottom-[-34px] left-[51%] transform -translate-x-1/2 hidden lg:block">
          
          <div className="flex justify-center items-center h-[1vh]]">
            <div className="circle">
              {text.split("").map((char, index) => {
                const rotate = index * (360 / text.length);
                return (
                  <span
                    key={index}
                    className="circle-text"
                    style={{
                      transform: `rotate(${rotate}deg) translate(5rem) rotate(-${rotate}deg)`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
