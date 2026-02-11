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
    src: "/images/pph1.jpg",
    title: "Risk-Free Model",
    text: "This is the description for the first feature.",
  },
  {
    src: "/images/pph2.jpg",
    title: "Quality Guaranteed",
    text: "This is the description for the second feature.",
  },
  {
    src: "/images/pph3.jpg",
    title: "Fast Turnaround",
    text: "This is the description for the third feature.",
  },
  {
    src: "/images/pph4.jpg",
    title: "Flexible Engagement",
    text: "This is the description for the fourth feature.",
  },
  {
    src: "/images/pph5.jpg",
    title: "Proven Results",
    text: "This is the description for the fifth feature.",
  },
];

export default function WhyChooseIndustriesWeHire() {
  // base index that selects which 3 images to display (0..IMAGES.length-1)
  const [index, setIndex] = useState(0);

  // order maps the *display slot index* -> position in POS.
  // e.g. order = [0,1,2] means currentImages[0] -> POS[0], currentImages[1] -> POS[1], ...
  // rotating this array makes the images appear to orbit.
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      // rotate the order so images move positions visually
      setOrder(([a, b, c]) => [c, a, b]);
      // advance which 3 images are active after or along with the rotation (keeps variety)
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // three images to be displayed this "frame"
  const currentImages = [
    IMAGES[index % IMAGES.length],
    IMAGES[(index + 1) % IMAGES.length],
    IMAGES[(index + 2) % IMAGES.length],
  ];

  // find which of the currentImages is currently placed at POS[1] (center)
  const middleImageIdx = order.indexOf(1); // returns 0,1 or 2
  const activeImage = currentImages[middleImageIdx];

  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-16 py-10 md:py-14 px-4 md:px-10 lg:px-20 pb-0">
      {/* LEFT side card */}
      <div
        className="relative h-[500px] w-[300px] rounded-3xl bg-cover bg-center hidden sm:block"
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
        {currentImages.map((imgObj, i) => {
          // determine which visual position this item should occupy
          const posIndex = order[i]; // 0,1 or 2
          const p = POS[posIndex];

          // add a subtle transform for the center item to emphasize it
          const extraClassForCenter =
            posIndex === 1 ? "scale-105" : "scale-100";

          return (
            <div
              key={i}
              className={[
                "absolute rounded-full overflow-hidden bg-white transition-all duration-700 ease-in-out",
                p.pos,
                p.size,
                p.ring,
                p.extra,
                extraClassForCenter,
              ].join(" ")}
            >
              <img
                src={imgObj.src}
                alt={`rotating-${i}`}
                className="h-full w-full object-cover"
              />
              {posIndex === 1 && (
                <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_8px_rgba(255,255,255,0.6)]" />
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT side text */}
      <div className="max-w-5xl flex flex-col text-center lg:text-left flex-1 lg:self-end gap-5">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1B084C] font-montserrat mb-3">
            Why Businesses Choose <span className="text-indigo-600">Us ?</span>
          </h2>
          <p className="text-base md:text-lg text-[#1B084C] mb-8">
            A results-first, cost-effective hiring model designed for companies
            that want top talent without financial risk.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center lg:items-start gap-8">
          <div className="flex-1">
            <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-[#5500FE] mb-2">
              {activeImage.title}:
            </h3>
            <p className="mt-2 text-base md:text-xl text-[#1B084C] leading-relaxed">
              "{activeImage.text}"
            </p>
          </div>

          <img src={"/images/circlewhy.png"} className="w-full max-w-[250px] md:max-w-[300px]" />
        </div>
      </div>
    </div>
  );
}
