import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const navigate = useNavigate();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const features = [
    { icon: <Users size={18} />, text: "Expert Recruiters" },
    { icon: <TrendingUp size={18} />, text: "Fast Turnaround" },
    { icon: <Target size={18} />, text: "Perfect match" },
    { icon: <Award size={18} />, text: "Quality Assured" },
  ];

  const slides = [
    {
      heading: "Great Companies Deserve Great Leaders",
      paragraph:
        "We don’t just fill roles—we connect you with visionaries who ignite change",
      statNumber: "30+",
      statLabel: "Successful Placement",
    },
    {
      heading: "Hire Smarter, Grow Faster",
      paragraph:
        "Connect with top-tier candidates across India via our cutting-edge recruitment expertise.",
      statNumber: "500+",
      statLabel: "Successful Placement",
    },
    {
      heading: "Pay Per Hire Success",
      paragraph:
        "Risk-free hiring—pay only when your new team member is on board.",
      statNumber: "48hr",
      statLabel: "Average Response Time",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#EFEFEF] py-4 font-montserrat">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[89%] mx-auto min-h-screen text-[#240960] flex flex-col lg:flex-row items-center px-4 py-10 pt-24 md:pt-24 lg:pt-28 xs:pt-[6.5rem] xs:pb-[10rem] 
                     bg-[rgba(255,255,255,0.85)] backdrop-blur-md rounded-2xl shadow-lg"
        >
          {/* Left Content */}

          {/* Left Content */}
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center items-start relative">
            {/* Blur background like Services */}
            <div
              className="blur c-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>

            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-left"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                {slides[currentSlide].heading}
              </h1>
              <p className="mt-2 md:text-lg w-auto lg:w-[80%] font-poppins">
                {slides[currentSlide].paragraph}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="flex flex-wrap justify-start gap-4 mb-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.5)] backdrop-blur-md border border-white/30 text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats + Slider Controls */}
            <div className="flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[rgba(255,255,255,0.5)] backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/40 text-center"
              >
                <div className="text-3xl font-bold">
                  {slides[currentSlide].statNumber}
                </div>
                <div className="text-sm font-medium font-poppins">
                  {slides[currentSlide].statLabel}
                </div>
              </motion.div>

              {/* Slider Buttons */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-10 h-10 bg-[rgba(178,164,249,0.59)] rounded-full flex items-center justify-center shadow-md hover:bg-[#a855f7]/70 transition"
                >
                  <ChevronLeft size={20} className="text-[#240960]" />
                </motion.button>

                <div className="flex space-x-3">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                        currentSlide === index ? "bg-[#5f00f5]" : "bg-[#a47ff5]"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-10 h-10 bg-[rgba(178,164,249,0.59)] rounded-full flex items-center justify-center shadow-md hover:bg-[#a855f7]/70 transition"
                >
                  <ChevronRight size={20} className="text-[#240960]" />
                </motion.button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/ContactUs");
                }}
                className="flex items-center gap-2"
              >
                <button className="xl:w-[200px] flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                  Hire Now
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

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    "https://calendly.com/jobsterritory/30min",
                    "_blank"
                  )
                }
                className="flex items-center gap-2"
              >
                <button className="xl:w-[200px] flex items-center justify-center bg-gradient-to-r from-[#7300ff] to-[#2c1361] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                  Book a Demo
                </button>
                <div className="w-1 h-0.5 bg-[#cfc0ff]" />
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#7300ff] to-[#2c1361] border-2 border-[#cfc0ff] shadow-md">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side Special Image */}
          <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 self-start">
            <img
              src="/images/exhero1.png"
              alt="Special Hero"
              className="max-w-[90%] lg:max-w-[80%] rounded-xl drop-shadow-lg"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
