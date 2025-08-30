
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
    size: "h-32 w-32",
    ring: "ring-[20px] ring-[#E3E3E3]",
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
      <div className="max-w-5xl flex flex-col text-center md:text-left flex-1 self-end gap-5">
        <div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B084C] font-montserrat mb-3">
            Why Businesses Choose Pay Per Hire
          </h2>

          {/* Subheading */}
          <p className=" text-base md:text-lg text-[#1B084C] mb-8">
            A results-first, cost-effective hiring model designed for companies
            that want top talent without financial risk.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
        
            {/* Highlighted Feature */}
            <h3 className="font-montserrat text-XL md:text-3xl font-semibold text-[#5500FE] mb-2">
              {activeImage.title}:
            </h3>
            {/* Feature description */}
            <p className="mt-2 text-base md:text-xl text-[#1B084C] leading-relaxed">
              "{activeImage.text}"
            </p>
          </div>

          <img src={"/images/circlewhy.png"} className="w-[300px] self-end" />
        </div>
      </div>
    </div>
  );
}
