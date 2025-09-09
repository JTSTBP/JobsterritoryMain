

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import axios from "axios";

export default function ArticlePage() {
  const { slug } = useParams(); // slug from URL
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch single blog by slug
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!blog) return <p className="text-center mt-10">Loading...</p>;
  
  const clean = blog.desc
    .replace(/\\r\\n/g, " ") // remove line breaks
    .replace(/(font-family|font-size|color):[^;"]*;?/gi, ""); // remove font-family, font-size, color

  return (
    <div className="max-w-7xl mx-auto p-6 text-[#1B084C]">
      <div className="p-6">
        <img
          src={blog.banner}
          alt={blog.heading}
          className="w-full rounded-xl"
        />

        {/* Title with left border */}
        <h1 className="text-3xl font-bold leading-snug border-l-4 border-purple-600 pl-3 mt-8">
          {blog.heading}
        </h1>

        {/* Action Icons */}
        <div className="flex gap-4 mt-6">
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Heart className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <MessageCircle className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Share2 className="w-5 h-5 " />
          </button>
          <button className="p-2 bg-purple-200 rounded-xl hover:bg-purple-100 transition">
            <Bookmark className="w-5 h-5 " />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Blog Content */}
        <div
          className="space-y-5 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: clean }}
        />

        {/* Sidebar */}
        <div className="max-w-sm mx-auto space-y-6 p-4">
          {/* Need Hiring Help Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-gradient-to-r from-purple-200 to-purple-300">
            <h2 className="text-lg font-semibold text-gray-900">
              Need Hiring Help?
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Get expert recruitment assistance tailored to your needs.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition"
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                Hire Now
              </button>
              <button className="px-5 py-2 bg-white text-purple-700 rounded-full font-medium hover:bg-purple-100 transition">
                Whatsapp
              </button>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-white">
            <h2 className="text-lg font-semibold text-gray-900">
              Related Articles
            </h2>
            <div className="flex justify-center items-center my-4">
              <div className="w-12 h-12 bg-purple-200 rounded-md"></div>
            </div>
            <button
              className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition"
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Email Us
            </button>
          </div>

          {/* Stay Updated Section */}
          <div className="rounded-2xl p-6 text-center shadow-md bg-white">
            <h2 className="text-lg font-semibold text-gray-900">
              Stay Updated
            </h2>
            <p className="text-sm text-gray-700 mt-1">
              Get the latest insights delivered to your inbox.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="px-6 py-2 bg-purple-200 text-gray-900 rounded-full font-medium hover:bg-purple-300 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
