// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: "/images/cas1.png", // Replace with actual SVG if needed
//       title: "Share JD ",
//       description:
//         "We align on role scorecards, must-haves, and nice-to-haves.",
//     },
//     {
//       icon: "/images/cas2.png",
//       title: "Get Profiles (72 hrs)",
//       description: "Pre-screened candidates delivered to your inbox and ATS.",
//     },
//     {
//       icon: "/images/cas3.png",
//       title: "Interview & Select",
//       description:
//         "We manage scheduling, feedback, and next steps end-to-end.  ",
//     },
//     {
//       icon: "/images/cas4.png",
//       title: "Closures Unlimited  ",
//       description: "Keep your pipeline full until every seat is closed.",
//     },
//   ];

//   return (
//     <section className="bg-[#D5CDFF] py-16 px-6 text-[#1B084C]">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
//             HOW RAAS WORKS
//           </h1>
//           <p className="font-medium max-w-3xl mx-auto">
//             Our rapid, precision-driven hiring process delivers the right talent
//             exactly when you need it — perfectly aligned to your culture and
//             goals — saving you weeks of effort and driving results from day one.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 place-items-center">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white/70 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 max-w-sm"
//             >
//               <div className="flex justify-center mb-5">
//                 <img
//                   className="w-20 h-20 object-contain"
//                   src={step.icon}
//                   alt={step.title}
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function HowItWorks() {
  const steps = [
    {
      icon: "/images/cas1.png",
      title: "Share JD",
      description:
        "We align on role scorecards, must-haves, and nice-to-haves.",
    },
    {
      icon: "/images/cas2.png",
      title: "Get Profiles (72 hrs)",
      description: "Pre-screened candidates delivered to your inbox and ATS.",
    },
    {
      icon: "/images/cas3.png",
      title: "Interview & Select",
      description: "We manage scheduling, feedback, and next steps end-to-end.",
    },
    {
      icon: "/images/cas4.png",
      title: "Closures Unlimited",
      description: "Keep your pipeline full until every seat is closed.",
    },
  ];

  return (
    <section className="bg-[#D5CDFF] py-16 px-6 text-[#1B084C]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">
            HOW RAAS WORKS
          </h1>
          <p className="font-medium max-w-3xl mx-auto">
            Our rapid, precision-driven hiring process delivers the right talent
            exactly when you need it — perfectly aligned to your culture and
            goals — saving you weeks of effort and driving results from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2   lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/70 rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col items-center flex-grow">
                <img
                  className="w-20 h-20 object-contain mb-5"
                  src={step.icon}
                  alt={step.title}
                />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
