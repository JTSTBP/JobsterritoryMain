import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../contexts/popupcontext";

const Hero = () => {
  const { openPopup } = usePopup();
  const currentSlide = 0;
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const features = [
    { icon: <Users size={18} />, text: "Expert Recruiters" },
    { icon: <TrendingUp size={18} />, text: "Fast Turnaround" },
    { icon: <Target size={18} />, text: "Perfect match" },
    { icon: <Award size={18} />, text: "Quality Assured" },
  ];


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (url) => {
    if (!url) return;
    if (url.startsWith("https")) {
      window.open(url, "_blank"); // external link
    } else {
      navigate(url); // internal route
    }
  };

  const slides = [
    {
      heading: "India’s Leading Recruitment &",
      heading1: "Workforce Solutions Company",
      paragraph:
        "Hire Smarter, Scale Faster with Talent Across India",

      // heading: "Raas - India's First Predictable",
      // heading1: "Recruitment Engine",
      // paragraph:
      //   "Stop paying 8–12% per hire. Hire smarter with Jobs Territory’s flat monthly plan — Unlimited roles, Unlimited hiring.",
      statNumber: "Pay Only",
      statLabel: "When You Hire",
      cta1: "Book a Call",
      cta2: "Start Subscription",
      nav1: "/raas",
    },
    // {
    //   heading: "Smart Hiring Zero Risks,",
    //   heading1: "Maximum Results",
    //   paragraph: "A hiring model built to match your goals, not limit them",
    //   statNumber: "10K+",
    //   statLabel: "Successful Placement",
    //   cta1: "Start Hiring",
    //   cta2: "Learn More",
    //   nav1: "https://calendly.com/jobsterritory/30min",
    // },
  ];
  const backgroundImage = "/images/herotab.png";
  const backgroundImagesmall = "/images/bgsmall.png";

  const backgroundImages = [
    {
      url: "/images/exbg12.png",
      tab: backgroundImage,
      small: backgroundImagesmall,
    },
  ];
  const currentImage =
    screenWidth >= 1024
      ? backgroundImages[currentSlide].url // Desktop
      : screenWidth >= 568
        ? backgroundImages[currentSlide].tab // Tablet
        : backgroundImages[currentSlide].small; // Mobile

  return (
    <div className="bg-[#EFEFEF] py-4 font-montserrat">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1 }}
          // ✅ static bg only
          style={{
            backgroundImage: `url(${currentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-[10px] relative w-[89%] mx-auto min-h-[500px] md:min-h-[600px] lg:min-h-[650px] text-[#240960] flex flex-col px-4 py-10 pt-16 md:pt-24 lg:pt-12 pl-4 md:pl-10 lg:pl-16 "
        >
          {/* TOP TEXT + RIGHT IMAGE */}
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 "
          >
            {/* LEFT SIDE TEXT */}
            <div className=" flex flex-col gap-5 lg:pt-20  lg:w-[50%] text-left ">
              <h1 className="whitespace-normal sm:whitespace-nowrap text-xl md:text-3xl customtext:text-4xl font-bold ">
                {slides[currentSlide].heading}
                <br />
                {slides[currentSlide].heading1}
              </h1>
              <p className="mt-2  md:text-lg w-auto font-poppins font-medium">
                {slides[currentSlide].paragraph}
              </p>
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
                className="flex flex-wrap justify-start gap-4 mb-10"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-medium flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.34)] backdrop-blur-md border border-white/30 text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                  >
                    {feature.icon}
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative w-full z-40 self-end"
              >
                <div className="flex flex-col items-start w-full max-w-[24rem] space-y-6">
                  {/* Book a Call Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openPopup}
                    className="flex items-center gap-2"
                  >
                    <button className="xl:w-[200px] whitespace-nowrap flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                      {slides[currentSlide].cta1}
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
              </motion.div>
            </div>
          </motion.div>



        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
