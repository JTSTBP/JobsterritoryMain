// import { useState, useEffect, useRef } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function BlogsSection({ blogs }) {
//   const navigate = useNavigate();
//   // Group blogs into sets of 2
//   const groupedBlogs = [];
//   for (let i = 0; i < blogs.length; i += 2) {
//     groupedBlogs.push(blogs.slice(i, i + 2));
//   }

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % groupedBlogs.length);
//     }, 4000); // every 4s
//     return () => clearInterval(interval);
//   }, [groupedBlogs.length]);

//   const [containerHeight, setContainerHeight] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerHeight(containerRef.current.offsetHeight);
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       className="py-12 px-4 sm:px-6 relative w-full"
//       style={{
//         backgroundImage: "url(/images/processbg.png)",
//         backgroundSize: "cover",
//         minHeight: (containerHeight ? containerHeight + 100 : 600) + "px",
//       }}
//     >
//       {groupedBlogs.map((group, index) => (
//         <div
//           key={index}
//           ref={currentIndex === index ? containerRef : null}
//           className={`absolute transition-all duration-700 ease-in-out w-full left-0 flex justify-center ${currentIndex === index
//               ? "z-20 scale-100 opacity-100"
//               : currentIndex === (index + 1) % groupedBlogs.length
//                 ? "z-10 scale-95 opacity-70 translate-y-8"
//                 : currentIndex === (index + 2) % groupedBlogs.length
//                   ? "z-0 scale-90 opacity-50 translate-y-14"
//                   : "hidden"
//             }`}
//         >
//           {/* Main Card Container */}
//           <div className="rounded-3xl shadow-lg p-6 md:p-8 w-[95%] sm:w-[90%] bg-white max-w-5xl mx-auto">
//             {/* Top Row */}
//             <div className="flex md:flex-row flex-col gap-3 md:justify-between items-start mb-8">
//               <div>
//                 <h2
//                   className="text-3xl md:text-4xl font-semibold mb-2 font-montserrat"
//                   style={{ color: "#1B084C" }}
//                 >
//                   Recruitment insights
//                 </h2>
//                 <p className="text-gray-700 max-w-lg">
//                   Explore helpful resources on recruitment, hiring trends, and
//                   workplace tips.
//                 </p>
//               </div>
//               <a
//                 href="/blogs"
//                 className="flex items-center gap-1 text-sm font-semibold"
//                 style={{ color: "#1B084C" }}
//               >
//                 See Our Blogs <ArrowUpRight size={16} />
//               </a>
//             </div>

//             <div className="flex md:flex-row flex-col justify-center items-center gap-6 md:justify-evenly">
//               {group.map((blog) => (
//                 <div
//                   key={blog.id}
//                   className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
//                   onClick={() => navigate(`/blogs/${blog.slug}`)}
//                 >
//                   {/* Full image */}
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="max-w-[300px]  md:max-w-auto w-full h-full object-cover"
//                   />

//                   {/* Bottom-left text */}
//                   <div className="absolute bottom-4 left-4 text-left right-4">
//                     <button
//                       className=


//                       "bg-white text-[#1B084C] text-sm font-medium px-4 py-1 rounded-full mb-2 shadow-md"
//                     >
//                       Read More
//                     </button>
//                     <p
//                       className={"text-lg font-semibold leading-snug text-white"}
//                     >
//                       {blog.title}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogsSection({ blogs }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const totalSlides = Math.ceil(blogs.length / 2);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const contentRef = useRef(null);

  const triggerShuffle = useCallback(() => {
    setIsShuffling(true);
    setTimeout(() => setIsShuffling(false), 700);
  }, []);

  const next = useCallback(() => {
    triggerShuffle();
    setTimeout(() => setCurrent((p) => (p + 1) % totalSlides), 350);
  }, [totalSlides, triggerShuffle]);

  const prev = useCallback(() => {
    triggerShuffle();
    setTimeout(() => setCurrent((p) => (p - 1 + totalSlides) % totalSlides), 350);
  }, [totalSlides, triggerShuffle]);

  const goTo = useCallback((i) => {
    if (i === current) return;
    triggerShuffle();
    setTimeout(() => setCurrent(i), 350);
  }, [current, triggerShuffle]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const leftBlog = blogs[current * 2];
  const rightBlog = blogs[current * 2 + 1];

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Stacked card wrapper */}
        <div className="relative mx-auto" style={{ maxWidth: 960 }}>

          {/* Back layer 2 */}
          <div
            ref={layer2Ref}
            className="absolute -inset-4 rounded-2xl bg-[#1B084C]/10 border border-[#1B084C]/20"
            style={{
              transform: isShuffling
                ? "rotate(-2deg) translate(-10px, -8px) scale(0.98)"
                : "rotate(4deg) translate(16px, 12px) scale(1.02)",
              zIndex: 0,
              transition: "transform 0.35s ease",
            }}
          />

          {/* Back layer 1 */}
          <div
            ref={layer1Ref}
            className="absolute -inset-2 rounded-2xl bg-[#1B084C]/5 border border-[#1B084C]/15"
            style={{
              transform: isShuffling
                ? "rotate(2deg) translate(8px, -6px) scale(0.99)"
                : "rotate(-3deg) translate(-10px, 10px) scale(1.01)",
              zIndex: 1,
              transition: "transform 0.35s ease 0.05s",
            }}
          />

          {/* Main card */}
          <div className="relative z-10 rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden">
            {/* Corner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#1B084C]/10 to-transparent rounded-bl-full pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B084C]">Recruitment Insights</h2>
                <p className="text-gray-500 mt-1 text-sm md:text-base max-w-md">
                  Explore helpful resources on recruitment, hiring trends, and workplace tips.
                </p>
              </div>
              <a
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#1B084C] font-semibold hover:gap-3 transition-all"
              >
                See Our Blogs <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Blog cards */}
            <div ref={contentRef} className="px-6 md:px-8 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-center">

                {/* Left card — larger */}
                {leftBlog && (
                  <div
                    className="md:col-span-3 group cursor-pointer"
                    onClick={() => navigate(`/blogs/${leftBlog.slug}`)}
                  >
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      <img
                        src={leftBlog.image}
                        alt={leftBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-medium text-white bg-[#1B084C]/80 px-3 py-1 rounded-full">
                          Read More
                        </span>
                        <h3 className="text-white text-lg font-semibold mt-2 leading-snug">
                          {leftBlog.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right card — smaller */}
                {rightBlog && (
                  <div
                    className="md:col-span-2 group cursor-pointer relative"
                    onClick={() => navigate(`/blogs/${rightBlog.slug}`)}
                  >
                    <div
                      className="relative overflow-hidden aspect-square"
                      style={{
                        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75'%3E%3Crect x='45' y='0' width='55' height='75' rx='14' fill='black'/%3E%3Crect x='0' y='22' width='55' height='31' rx='12' fill='black'/%3E%3C/svg%3E")`,
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 75'%3E%3Crect x='45' y='0' width='55' height='75' rx='14' fill='black'/%3E%3Crect x='0' y='22' width='55' height='31' rx='12' fill='black'/%3E%3C/svg%3E")`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    >
                      <img
                        src={rightBlog.image}
                        alt={rightBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Button now sits directly above the title text */}
                    <div className="mt-3">
                      <span className="text-xs font-medium text-white bg-[#1B084C] px-3 py-1 rounded-full shadow-md inline-block">
                        Read More
                      </span>
                    </div>

                    <h3 className="text-[#1B084C] font-semibold mt-2 text-sm leading-snug">
                      {rightBlog.title}
                    </h3>
                  </div>
                )}

              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 pb-6">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-[#1B084C]" />
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all ${i === current ? "bg-[#1B084C] w-6" : "bg-[#1B084C]/30 w-2.5"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-[#1B084C]" />
              </button>
            </div>

            {/* Mobile link */}
            <a
              href="/blogs"
              className="md:hidden flex items-center justify-center gap-2 text-[#1B084C] font-semibold pb-6"
            >
              See Our Blogs <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

