import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogsSection({ blogs }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no blogs, don't render or show placeholder
  if (!blogs || blogs.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  // Determine which blogs to display (showing 3 at a time on desktop, 1 on mobile)
  // For simplicity in this layout, we'll use a CSS-based approach for the grid 
  // but we can also just show a window of 3.
  
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1B084C]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1B084C]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#1B084C] mb-4 tracking-tight"
            >
              Recruitment Insights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Discover the latest trends, expert advice, and best practices to help you build high-performing teams and navigate the evolving workplace.
            </motion.p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 mr-4">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full border border-gray-200 text-[#1B084C] hover:bg-[#1B084C] hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-3 rounded-full border border-gray-200 text-[#1B084C] hover:bg-[#1B084C] hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={() => navigate('/blogs')}
                className="group flex items-center gap-2 px-8 py-3.5 bg-[#1B084C] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-xl shadow-[#1B084C]/20 hover:-translate-y-1"
              >
                View All
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Blogs Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {blogs.slice(currentIndex, currentIndex + 3).concat(
              blogs.slice(0, Math.max(0, (currentIndex + 3) - blogs.length))
            ).map((blog, index) => (
              <motion.div
                key={`${blog.id}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-[#1B084C]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'; }}
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-[#1B084C] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-medium">
                    <span>5 min read</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>Trending</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1B084C] mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[#1B084C] font-semibold group-hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
