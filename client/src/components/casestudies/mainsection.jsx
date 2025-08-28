import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CaseStudiesMain() {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // show first 3 by default

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/getcasestudies`) // adjust backend URL if deployed
      .then((res) => res.json())
      .then((data) => setCaseStudies(data))
      .catch((err) => console.error("Error fetching case studies:", err));
  }, []);

  const handleViewMore = () => {
    setVisibleCount(caseStudies.length); // show all
  };

  return (
    <section className="py-16 text-[#1B084C]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="md:text-4xl text-3xl font-bold font-montserrat">
          Case Studies
        </h2>
        <p className="mt-2 max-w-2xl mx-auto">
          Explore how Job Territory has helped businesses find exceptional
          talent and transform their teams.
        </p>
      </div>

      {/* Case Study List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {caseStudies.slice(0, visibleCount).map((study, index) => (
          <div
            key={study._id || index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Left: Logo */}
            <div className="flex-shrink-0 bg-[#D5CDFF]">
              <img
                src={study?.images?.logo?.filename}
                alt={study.heading}
                className="w-40 h-40 rounded-xl object-contain p-4"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between gap-5">
              <h4 className="font-medium">{study.heading}</h4>
              <h3 className="text-xl md:text-2xl font-bold mt-1 text-[#6A1FFF]">
                {study.subtitle}
              </h3>
              <p className="mt-2 line-clamp-3">{study.clientBackground}</p>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 mt-5 cursor-pointer"
                onClick={() => {
                  navigate(`/casestudy/${study.slug}`);
                }}
              >
                <button className="xl:w-[230px] flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                  View Case Study
                </button>
                <div className="w-1 h-0.5 bg-[#cfc0ff]" />
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2c1361] to-[#7300ff] border-2 border-[#cfc0ff] shadow-md">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < caseStudies.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 text-sm font-medium rounded-full border border-[#6A1FFF] text-[#6A1FFF] hover:bg-[#6A1FFF] hover:text-white transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
