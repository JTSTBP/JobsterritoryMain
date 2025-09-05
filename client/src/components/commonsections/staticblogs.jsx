import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogsSection({ blogs }) {
  const navigate = useNavigate();
  // Group blogs into sets of 2
  const groupedBlogs = [];
  for (let i = 0; i < blogs.length; i += 2) {
    groupedBlogs.push(blogs.slice(i, i + 2));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % groupedBlogs.length);
    }, 4000); // every 4s
    return () => clearInterval(interval);
  }, [groupedBlogs.length]);

  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [currentIndex]);

  return (
    <div
      className="py-16 sm:px-6 relative w-full"
      style={{
        backgroundImage: "url(/images/processbg.png)",
        backgroundSize: "cover",
        minHeight: (containerHeight ? containerHeight + 150 : 600) + "px",
      }}
    >
      {groupedBlogs.map((group, index) => (
        <div
          key={index}
          ref={currentIndex === index ? containerRef : null}
          className={`absolute transition-all duration-700 ease-in-out w-[97%] flex justify-center ${
            currentIndex === index
              ? "z-20 scale-100 opacity-100"
              : currentIndex === (index + 1) % groupedBlogs.length
              ? "z-10 scale-95 opacity-70 translate-y-8"
              : currentIndex === (index + 2) % groupedBlogs.length
              ? "z-0 scale-90 opacity-50 translate-y-14"
              : "hidden"
          }`}
        >
          {/* Main Card Container */}
          <div className="rounded-3xl shadow-lg p-8 w-[83%] bg-white max-w-5xl mx-auto">
            {/* Top Row */}
            <div className="flex md:flex-row flex-col gap-3 md:justify-between items-start mb-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-semibold mb-2 font-montserrat"
                  style={{ color: "#1B084C" }}
                >
                  Recruitment insights
                </h2>
                <p className="text-gray-700 max-w-lg">
                  Explore helpful resources on recruitment, hiring trends, and
                  workplace tips.
                </p>
              </div>
              <a
                href="/blogs"
                className="flex items-center gap-1 text-sm font-semibold"
                style={{ color: "#1B084C" }}
              >
                See Our Blogs <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Blog Cards (2 per slide) */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:justify-evenly">
              {group.map((blog) => (
                <div
                  key={blog.id}
                  className="relative sm:w-[320px] sm:h-[420px] rounded-2xl overflow-hidden"
                  onClick={() => navigate(`/blogs/${blog.title}`)}
                >
                  {/* Full image */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="max-w-[300px]  md:max-w-auto w-full h-full object-cover"
                  />

                  {/* Bottom-left text */}
                  <div className="absolute bottom-4 left-4 text-left w-[156px]">
                    <button
                      className={`${
                        blog.bg === "#1B084C"
                          ? "bg-[#1B084C] text-white"
                          : "bg-white text-[#1B084C]"
                      } text-sm font-medium px-4 py-1 rounded-full mb-2 shadow-md`}
                    >
                      Read More
                    </button>
                    <p
                      className={`${
                        blog.bg === "#1B084C" ? "text-[#1B084C]" : "text-white"
                      } text-lg font-semibold leading-snug`}
                    >
                      {blog.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
