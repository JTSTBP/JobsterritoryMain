

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search } from "lucide-react";

export default function FeaturedArticles() {
  const itemsPerPage = 9;
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Recruitment",
    "HR Trends",
    "Industry Insights",
    "Technology",
    "Career Tips",
  ];

  // Helper: convert HTML string to plain text for a safe preview
  const htmlToText = (html) => {
    if (!html) return "";
    try {
      const clean = html.replace(/\\r\\n/g, " "); // handle escaped line breaks
      const doc = new DOMParser().parseFromString(clean, "text/html");
      return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
    } catch {
      // fallback: strip tags
      return html
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/getblogs`
        );
        setArticles(res.data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Filter logic (before pagination)
  const filteredArticles = articles.filter((article) => {
 
    const matchesCategory =
      active === "All" ||
      (active === "Recruitment" &&
        article.heading.toLowerCase().includes("recruitment")) ||
      (active === "Technology" &&
        article.heading.toLowerCase().includes("tech")) ||
      (active === "Career Tips" &&
        article.heading.toLowerCase().includes("career")) ||
      (active === "Industry Insights" &&
        article.heading.toLowerCase().includes("industry")) ||
      (active === "HR Trends" &&
        article.heading.toLowerCase().includes("hr"));
      // article.category?.toLowerCase() === active.toLowerCase();

    const matchesSearch =
      article.heading.toLowerCase().includes(search.toLowerCase()) ||
      htmlToText(article.desc).toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination
  const startIndex = page * itemsPerPage;
  const currentItems = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < articles.length) setPage(page + 1);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="p-6 text-[#1B084C]">
      <div className="flex flex-col items-center text-center py-14 pt-4 px-4 text-[#1B084C]">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent leading-tight h-[10vh]">
          <span className="inline-block">Blogs</span>
        </h1>
        <p className=" text-base md:text-lg text-gray-600">
          Your Guide to Smarter Hiring and Career Growth
        </p>

        {/* Categories + Search in one row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-5xl mt-10 gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search articles..."
              onChange={(e) => {
                setPage(0); // reset to first page when searching
                setSearch(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-xl py-2.5 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition outline-none"
            />
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          </div>
          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setPage(0); // reset to first page when switching category
                  setActive(cat);
                }}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition whitespace-nowrap ${
                  active === cat
                    ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-md"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
        Featured Articles
      </h2>
      <p className="text-center mb-6 text-gray-600">
        Our most popular and insightful articles on recruitment and career
        development
      </p>

      {/* Loading state */}
      {loading && <p className="text-center">Loading articles…</p>}

      {/* Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentItems.map((item) => {
            const preview = htmlToText(item.desc).slice(0, 140);
            const hasMore = htmlToText(item.desc).length > 140;

            return (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                onClick={() => navigate(`/Blog/${item.slug}`)}
              >
                {/* Banner */}
                <div className="h-40 bg-gray-100 overflow-hidden">
                  {item.banner ? (
                    <img
                      src={item.banner}
                      alt={item.heading}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {item.heading}
                  </h3>

                  {/* Desc preview */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {preview}
                    {hasMore ? "…" : ""}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : ""}
                    </span>
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-[10px]">
                      Article
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Controls */}
      {!loading && (
        <div className="flex justify-center items-center gap-6 mt-10">
          {page > 0 && (
            <button
              onClick={handlePrev}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white shadow hover:bg-purple-700 transition"
            >
              &lt; Prev
            </button>
          )}

          {(page + 1) * itemsPerPage < articles.length && (
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white shadow hover:bg-purple-700 transition"
            >
              {page === 0 ? "View More" : "Next >"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
