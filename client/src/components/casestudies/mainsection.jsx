// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function CaseStudiesMain() {
//   const navigate = useNavigate();
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(3); // show first 3 by default

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/api/getcasestudies`) // adjust backend URL if deployed
//       .then((res) => res.json())
//       .then((data) => setCaseStudies(data))
//       .catch((err) => console.error("Error fetching case studies:", err));
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCount(caseStudies.length); // show all
//   };

//   return (
//     <section className="py-16 text-[#1B084C]">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="md:text-4xl text-3xl font-bold font-montserrat">
//           Case Studies
//         </h2>
//         <p className="mt-2 max-w-2xl mx-auto">
//           Explore how Job Territory has helped businesses find exceptional
//           talent and transform their teams.
//         </p>
//       </div>

//       {/* Case Study List */}
//       <div className="max-w-5xl mx-auto space-y-8">
//         {caseStudies.slice(0, visibleCount).map((study, index) => (
//           <div
//             key={study._id || index}
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center"
//           >
//             {/* Left: Logo */}
//             <div className="flex-shrink-0 bg-[#D5CDFF]">
//               <img
//                 src={study?.images?.logo?.filename}
//                 alt={study.heading}
//                 className="w-40 h-40 rounded-xl object-contain p-4"
//               />
//             </div>

//             {/* Right: Content */}
//             <div className="flex flex-col justify-between gap-5">
//               <h4 className="font-medium">{study.heading}</h4>
//               <h3 className="text-xl md:text-2xl font-bold mt-1 text-[#6A1FFF]">
//                 {study.subtitle}
//               </h3>
//               <p className="mt-2 line-clamp-3">{study.clientBackground}</p>

//               {/* Button */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex items-center gap-2 mt-5 cursor-pointer"
//                 onClick={() => {
//                   navigate(`/casestudy/${study.slug}`);
//                 }}
//               >
//                 <button className="xl:w-[230px] flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
//                   View Case Study
//                 </button>
//                 <div className="w-1 h-0.5 bg-[#cfc0ff]" />
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2c1361] to-[#7300ff] border-2 border-[#cfc0ff] shadow-md">
//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={2}
//                     className="text-white"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {visibleCount < caseStudies.length && (
//         <div className="text-center mt-10">
//           <button
//             onClick={handleViewMore}
//             className="px-6 py-2 text-sm font-medium rounded-full border border-[#6A1FFF] text-[#6A1FFF] hover:bg-[#6A1FFF] hover:text-white transition"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";

export default function CaseStudiesMain() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(0);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  // Example categories — adjust based on your data
  const categories = [
    "All",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
  ];

  // Helper: short text
  const textPreview = (text, len = 140) => {
    if (!text) return "";
    const clean = text.replace(/<[^>]+>/g, " "); // strip HTML tags
    return clean.length > len ? clean.slice(0, len) + "…" : clean;
  };

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/getcasestudies`
        );
        setCaseStudies(res.data || []);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  // Filter
  const filtered = caseStudies.filter((study) => {
    const matchesCategory =
      active === "All" ||
      (study.category && study.category.toLowerCase() === active.toLowerCase());
    const matchesSearch =
      study.heading.toLowerCase().includes(search.toLowerCase()) ||
      study.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      study.clientBackground.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const startIndex = page * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < filtered.length) setPage(page + 1);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="p-6 text-[#1B084C]">
      {/* Header */}
      <div className="flex flex-col items-center text-center py-14 pt-4 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent leading-tight">
          Case Studies
        </h1>
       

        {/* Search + Categories */}
        <div className="flex md:items-center md:justify-center w-full max-w-5xl mt-10 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search case studies..."
              onChange={(e) => {
                setPage(0);
                setSearch(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          </div>
        
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <p className="text-center">Loading case studies…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentItems.map((study) => (
            <div
              key={study._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(`/casestudy/${study.slug}`)}
            >
              {/* Logo */}
              <div className="h-32 flex items-center justify-center bg-[#F3F0FF]">
                {study?.images?.logo?.filename ? (
                  <img
                    src={study.images.logo.filename}
                    alt={study.heading}
                    className="h-28 object-contain"
                  />
                ) : (
                  <span className="text-gray-400">No Logo</span>
                )}
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-[#6A1FFF]">
                  {study.subtitle}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {textPreview(study.clientBackground)}
                </p>
                <span className="text-xs text-gray-500">{study.heading}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      {!loading && filtered.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-6 mt-10">
          {page > 0 && (
            <button
              onClick={handlePrev}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white shadow"
            >
              &lt; Prev
            </button>
          )}
          {(page + 1) * itemsPerPage < filtered.length && (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white shadow"
            >
              {page === 0 ? "View More" : "Next >"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
