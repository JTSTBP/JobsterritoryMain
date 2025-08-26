// // import React, { useEffect, useState } from "react";

// // const WhyChoosePayPerHire = () => {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const checkMobile = () => {
// //       setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
// //     };

// //     checkMobile();
// //     window.addEventListener("resize", checkMobile);

// //     return () => {
// //       window.removeEventListener("resize", checkMobile);
// //     };
// //   }, []);

// //   const images = [
// //     "/images/pph1.png",
// //     "/images/pph2.png",
// //     "/images/pph3.png",
// //     "/images/pph4.png",
// //     "/images/pph5.png",
// //     "/images/pph6.png",
// //   ];

// //   // order determines which image is at (top, middle, bottom)
// //   const [order, setOrder] = useState([0, 1, 2]);

// //   useEffect(() => {
// //     const id = setInterval(() => {
// //       setOrder((prev) => {
// //         const next = [...prev];
// //         next.unshift(next.pop()); // rotate positions
// //         return next;
// //       });
// //     }, 3000); // change every 3 sec
// //     return () => clearInterval(id);
// //   }, []);

// //   // Tailwind classes for the three "stops"
// //   const POS = [
// //     {
// //       pos: "top-4 left-28", // top small
// //       size: "w-16 h-16",
// //       ring: "",
// //       extra: "",
// //     },
// //     {
// //       pos: "top-32 left-32", // middle big
// //       size: "w-28 h-28",
// //       ring: "ring-4 ring-white",
// //       extra: "shadow-2xl",
// //     },
// //     {
// //       pos: "top-64 left-24", // bottom small
// //       size: "w-16 h-16",
// //       ring: "",
// //       extra: "",
// //     },
// //   ];
// //   return (
// //     <section
// //       className="bg-cover bg-center bg-no-repeat py-8 px-4 md:px-12 h-auto sm:h-[112vh]"
// //       style={{
// //         backgroundImage: isMobile ? "none" : "url('/images/pph.png')",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <div className="max-w-[45rem] mx-auto text-center mr-0 md:mr-5 lg:mr-10">
// //         <h2 className="text-2xl md:text-4xl font-bold text-[#1B084C] font-playfair">
// //           Why Choose Pay Per Hire?
// //         </h2>
// //         <p className="mt-4 text-base md:text-lg text-[#1B084C]">
// //           Perfect for companies looking for cost-effective, risk-free
// //           recruitment solutions.
// //         </p>
// //       </div>

// //       <div className="max-w-[32rem] xl:max-w-[45rem] mx-auto mt-24 mr-0 md:mr-1 lg:mr-10 ">
// //         <h3 className="text-lg md:text-xl font-semibold text-[#5500FE]">
// //           No Upfront Costs :
// //         </h3>
// //         <p className="mt-2 text-base md:text-lg text-[#1B084C]">
// //           "Start with Zero Upfront Costs — Pay Only After We Successfully Place
// //           the Right Candidate for You!"
// //         </p>
// //       </div>

// //       <div className="w-full">
// //         <div className="relative mx-auto h-[420px] w-[260px] overflow-hidden rounded-3xl bg-gray-50">
// //           {/* background circle */}
// //           <div className="pointer-events-none absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent_60%)]" />

// //           {/* orbit lines */}
// //           <svg
// //             className="pointer-events-none absolute inset-0 opacity-30"
// //             viewBox="0 0 260 420"
// //             preserveAspectRatio="none"
// //           >
// //             <path
// //               d="M15,30 C120,100 140,210 240,270"
// //               fill="none"
// //               stroke="rgb(226,232,240)"
// //               strokeWidth="1.2"
// //             />
// //             <path
// //               d="M15,110 C120,170 140,280 240,340"
// //               fill="none"
// //               stroke="rgb(226,232,240)"
// //               strokeWidth="1"
// //             />
// //           </svg>

// //           {/* 3 rotating circles */}
// //           {images.map((src, i) => {
// //             const p = POS[order[i]];
// //             return (
// //               <div
// //                 key={i}
// //                 className={[
// //                   "absolute rounded-full overflow-hidden bg-white transition-all duration-700 ease-in-out",
// //                   p.pos,
// //                   p.size,
// //                   p.ring,
// //                   p.extra,
// //                 ].join(" ")}
// //               >
// //                 <img
// //                   src={src}
// //                   alt={`rotating-${i}`}
// //                   className="h-full w-full object-cover"
// //                 />
// //                 {/* halo effect on center image */}
// //                 {order[i] === 1 && (
// //                   <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
// //                 )}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChoosePayPerHire;

// import React, { useEffect, useState } from "react";

// const WhyChoosePayPerHire = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint is 640px
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   const images = [
//     "/images/pph1.png",
//     "/images/pph2.png",
//     "/images/pph3.png",
//     "/images/pph4.png",
//     "/images/pph5.png",
//     "/images/pph6.png",
//   ];

//   // which set (0 = first 3, 1 = second 3)
//   const [setIndex, setSetIndex] = useState(0);

//   // which order the 3 images appear in (top, middle, bottom)
//   const [order, setOrder] = useState([0, 1, 2]);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setOrder((prev) => {
//         const next = [...prev];
//         next.unshift(next.pop()); // rotate positions
//         return next;
//       });
//     }, 3000); // rotate within the set
//     return () => clearInterval(id);
//   }, []);

//   // switch between the two sets every 9 seconds
//   useEffect(() => {
//     const id = setInterval(() => {
//       setSetIndex((prev) => (prev === 0 ? 1 : 0));
//     }, 9000);
//     return () => clearInterval(id);
//   }, []);

//   // Tailwind classes for positions
//   const POS = [
//     {
//       pos: "top-4 left-28", // top small
//       size: "w-16 h-16",
//       ring: "",
//       extra: "",
//     },
//     {
//       pos: "top-32 left-32", // middle big
//       size: "w-28 h-28",
//       ring: "ring-4 ring-white",
//       extra: "shadow-2xl",
//     },
//     {
//       pos: "top-64 left-24", // bottom small
//       size: "w-16 h-16",
//       ring: "",
//       extra: "",
//     },
//   ];

//   // pick 3 images depending on setIndex
//   const currentImages = images.slice(setIndex * 3, setIndex * 3 + 3);

//   return (
//     <section
//       className="bg-cover bg-center bg-no-repeat py-8 px-4 md:px-12 h-auto sm:h-[112vh]"
//       style={{
//         backgroundImage: isMobile ? "none" : "url('/images/pph.png')",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="max-w-[45rem] mx-auto text-center mr-0 md:mr-5 lg:mr-10">
//         <h2 className="text-2xl md:text-4xl font-bold text-[#1B084C] font-playfair">
//           Why Choose Pay Per Hire?
//         </h2>
//         <p className="mt-4 text-base md:text-lg text-[#1B084C]">
//           Perfect for companies looking for cost-effective, risk-free
//           recruitment solutions.
//         </p>
//       </div>

//       <div className="max-w-[32rem] xl:max-w-[45rem] mx-auto mt-24 mr-0 md:mr-1 lg:mr-10 ">
//         <h3 className="text-lg md:text-xl font-semibold text-[#5500FE]">
//           No Upfront Costs :
//         </h3>
//         <p className="mt-2 text-base md:text-lg text-[#1B084C]">
//           "Start with Zero Upfront Costs — Pay Only After We Successfully Place
//           the Right Candidate for You!"
//         </p>
//       </div>

//       <div className="w-full">
//         <div
//           className="relative mx-auto h-[420px] w-[260px] overflow-hidden rounded-3xl bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/halfcurve.png')" }}
//         >
//           {/* background circle */}
//           <div className="pointer-events-none absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent_60%)]" />

//           {/* orbit lines */}
//           <svg
//             className="pointer-events-none absolute inset-0 opacity-30"
//             viewBox="0 0 260 420"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M15,30 C120,100 140,210 240,270"
//               fill="none"
//               stroke="rgb(226,232,240)"
//               strokeWidth="1.2"
//             />
//             <path
//               d="M15,110 C120,170 140,280 240,340"
//               fill="none"
//               stroke="rgb(226,232,240)"
//               strokeWidth="1"
//             />
//           </svg>

//           {/* 3 rotating circles */}
//           {currentImages.map((src, i) => {
//             const p = POS[order[i]];
//             return (
//               <div
//                 key={i}
//                 className={[
//                   "absolute rounded-full overflow-hidden bg-white transition-all duration-700 ease-in-out",
//                   p.pos,
//                   p.size,
//                   p.ring,
//                   p.extra,
//                 ].join(" ")}
//               >
//                 <img
//                   src={src}
//                   alt={`rotating-${i}`}
//                   className="h-full w-full object-cover"
//                 />
//                 {order[i] === 1 && (
//                   <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoosePayPerHire;

// import React, { useEffect, useState } from "react";

// const POS = [
//   {
//     pos: "top-10 left-1/2 -translate-x-1/2",
//     size: "h-16 w-16",
//     ring: "ring-2 ring-indigo-200",
//     extra: "z-10",
//   },
//   {
//     pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
//     size: "h-28 w-28",
//     ring: "ring-4 ring-indigo-400",
//     extra: "z-20",
//   },
//   {
//     pos: "bottom-10 left-1/2 -translate-x-1/2",
//     size: "h-20 w-20",
//     ring: "ring-2 ring-indigo-200",
//     extra: "z-10",
//   },
// ];

// const IMAGES = [
//   {
//     src: "/images/pph1.png",
//     title: "First Feature",
//     text: "This is the description for the first feature.",
//   },
//   {
//     src: "/images/pph2.png",
//     title: "Second Feature",
//     text: "This is the description for the second feature.",
//   },
//   {
//     src: "/images/pph3.png",
//     title: "Third Feature",
//     text: "This is the description for the third feature.",
//   },
//   {
//     src: "/images/pph4.png",
//     title: "Fourth Feature",
//     text: "This is the description for the fourth feature.",
//   },
//   {
//     src: "/images/pph5.png",
//     title: "Fifth Feature",
//     text: "This is the description for the fifth feature.",
//   },
//   {
//     src: "/images/pph6.png",
//     title: "Sixth Feature",
//     text: "This is the description for the sixth feature.",
//   },
// ];

// export default function WhyChoosePayPerHire() {
//   const [index, setIndex] = useState(0); // which set of 3 is showing
//   const [order, setOrder] = useState([0, 1, 2]);

//   // rotate every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOrder(([a, b, c]) => [c, a, b]); // rotate order
//       setIndex((prev) => (prev + 1) % IMAGES.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentImages = [
//     IMAGES[index % IMAGES.length].src,
//     IMAGES[(index + 1) % IMAGES.length].src,
//     IMAGES[(index + 2) % IMAGES.length].src,
//   ];

//   // middle one is the active
//   const activeImage = IMAGES[(index + 1) % IMAGES.length];

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-10">
//       {/* LEFT side card */}
//       <div
//         className="relative h-[420px] w-[260px] overflow-hidden rounded-3xl bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/halfcurve.png')" }}
//       >
//         {/* background circle */}
//         <div className="pointer-events-none absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent_60%)]" />

//         {/* orbit lines */}
//         <svg
//           className="pointer-events-none absolute inset-0 opacity-30"
//           viewBox="0 0 260 420"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M15,30 C120,100 140,210 240,270"
//             fill="none"
//             stroke="rgb(226,232,240)"
//             strokeWidth="1.2"
//           />
//           <path
//             d="M15,110 C120,170 140,280 240,340"
//             fill="none"
//             stroke="rgb(226,232,240)"
//             strokeWidth="1"
//           />
//         </svg>

//         {/* rotating circles */}
//         {currentImages.map((src, i) => {
//           const p = POS[order[i]];
//           return (
//             <div
//               key={i}
//               className={[
//                 "absolute rounded-full overflow-hidden bg-white transition-all duration-700 ease-in-out",
//                 p.pos,
//                 p.size,
//                 p.ring,
//                 p.extra,
//               ].join(" ")}
//             >
//               <img
//                 src={src}
//                 alt={`rotating-${i}`}
//                 className="h-full w-full object-cover"
//               />
//               {order[i] === 1 && (
//                 <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* RIGHT side text */}
//       <div className="max-w-md text-center md:text-left">
//         <h2 className="text-2xl font-bold text-gray-800 mb-3">
//           {activeImage.title}
//         </h2>
//         <p className="text-gray-600">{activeImage.text}</p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

const POS = [
  {
    pos: "top-[0rem] left-1/2 -translate-x-1/2",
    size: "h-20 w-20",
    ring: "ring-2 ring-indigo-200",
    extra: "z-10",
  },
  {
    pos: "top-1/2 left-[15rem] -translate-x-1/2 -translate-y-1/2",
    size: "h-28 w-28",
    ring: "ring-4 ring-indigo-400",
    extra: "z-20",
  },
  {
    pos: "bottom-[0rem] left-1/2 -translate-x-1/2",
    size: "h-24 w-24",
    ring: "ring-2 ring-indigo-200",
    extra: "z-10",
  },
];

const IMAGES = [
  {
    src: "/images/pph1.png",
    title: "No Upfront Costs",
    text: "This is the description for the first feature.",
  },
  {
    src: "/images/pph2.png",
    title: "Risk-Free Model",
    text: "This is the description for the second feature.",
  },
  {
    src: "/images/pph3.png",
    title: "Quality Guaranteed",
    text: "This is the description for the third feature.",
  },
  {
    src: "/images/pph4.png",
    title: "Fast Turnaround",
    text: "This is the description for the fourth feature.",
  },
  {
    src: "/images/pph5.png",
    title: "Flexible Engagement",
    text: "This is the description for the fifth feature.",
  },
  {
    src: "/images/pph6.png",
    title: "Proven Results",
    text: "This is the description for the sixth feature.",
  },
];

export default function RotatingCardWithText() {
  const [index, setIndex] = useState(0); // which set of 3 is showing
  const [order, setOrder] = useState([0, 1, 2]);

  // rotate every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(([a, b, c]) => [c, a, b]); // rotate order
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentImages = [
    IMAGES[index % IMAGES.length].src,
    IMAGES[(index + 1) % IMAGES.length].src,
    IMAGES[(index + 2) % IMAGES.length].src,
  ];

  // middle one is the active
  const activeImage = IMAGES[(index + 1) % IMAGES.length];
  console.log(activeImage, "activeImage");

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between gap-16 py-14 pb-0">
      {/* LEFT side card (unchanged images & animation) */}
      <div
        className="relative h-[500px] w-[300px] rounded-3xl bg-cover bg-center  hidden sm:block "
        style={{ backgroundImage: "url('/images/halfcurve.png')" }}
      >
        <div className="pointer-events-none absolute -left-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.12),transparent_60%)]" />

        {/* orbit lines */}
        <svg
          className="pointer-events-none absolute inset-0 opacity-30"
          viewBox="0 0 260 420"
          preserveAspectRatio="none"
        >
          <path
            d="M15,30 C120,100 140,210 240,270"
            fill="none"
            stroke="rgb(226,232,240)"
            strokeWidth="1.2"
          />
          <path
            d="M15,110 C120,170 140,280 240,340"
            fill="none"
            stroke="rgb(226,232,240)"
            strokeWidth="1"
          />
        </svg>

        {/* rotating circles */}
        {currentImages.map((src, i) => {
          const p = POS[order[i]];
          return (
            <div
              key={i}
              className={[
                "absolute rounded-full overflow-hidden bg-white transition-all duration-700 ease-in-out",
                p.pos,
                p.size,
                p.ring,
                p.extra,
              ].join(" ")}
            >
              <img
                src={src}
                alt={`rotating-${i}`}
                className="h-full w-full object-cover"
              />
              {order[i] === 1 && (
                <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT side text */}
      <div className="max-w-5xl flex flex-col text-center md:text-left flex-1 self-end">
        <div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B084C] font-playfair mb-3">
            Why Businesses Choose Pay Per Hire
          </h2>

          {/* Subheading */}
          <p className=" text-base md:text-lg text-[#1B084C] mb-8">
            A results-first, cost-effective hiring model designed for companies
            that want top talent without financial risk.
          </p>

          {/* Highlighted Feature */}
          <h3 className="font-playfair text-lg md:text-xl font-semibold text-[#5500FE] mb-2">
            {activeImage.title}:
          </h3>

          {/* Feature description */}
          <p className="mt-2 text-base md:text-lg text-[#1B084C] leading-relaxed">
            "{activeImage.text}"
          </p>
        </div>
        <img src={"/images/circlewhy.png"} className="w-[300px] self-end" />
      </div>
    </div>
  );
}
