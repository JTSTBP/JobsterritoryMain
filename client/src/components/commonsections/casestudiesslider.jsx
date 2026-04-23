import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CaseStudiesSlider({ caseStudies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  if (!caseStudies || caseStudies.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const current = caseStudies[currentIndex];

  return (
    <section className="py-24 px-4 bg-[#1B084C] text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 z-10">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <img 
                    src={current.images?.logo?.filename} 
                    alt={current.heading} 
                    className="h-8 object-contain filter brightness-0 invert"
                    onError={(e) => { e.target.src = '/images/unac.png'; }}
                  />
                </div>
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
                  {current.industry || "Case Study"}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                {current.heading}
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                {current.subtitle || current.clientBackground}
              </p>

              {/* Stats/Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {current.resultsAchieved?.slice(0, 3).map((result, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-blue-400 font-bold text-2xl">{result.title}</span>
                    <span className="text-gray-400 text-xs uppercase tracking-wider">{result.description}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={() => navigate(`/casestudy/${current.slug}`)}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-[#1B084C] rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl"
                >
                  Read Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrev}
                    className="p-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image/Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <img 
                src={current.images?.main?.filename || 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'} 
                alt={current.heading} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B084C]/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
              >
                <p className="text-white font-medium italic text-lg leading-relaxed">
                  "{current.clientTestimonial?.quote?.slice(0, 150)}..."
                </p>
                <p className="mt-4 text-blue-400 font-bold">— {current.clientTestimonial?.author}</p>
              </motion.div>
            </motion.div>
            
            {/* Background Shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[100px]"></div>
          </div>

        </div>

        {/* Counter */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="flex items-center gap-2 font-mono text-sm tracking-tighter text-gray-500">
            <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(caseStudies.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
