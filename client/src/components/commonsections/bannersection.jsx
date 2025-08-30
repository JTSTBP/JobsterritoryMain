import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Bannersection = ({
  backgroundImage,
  heading,
  heading1,
  paragraph,
  features = [],
  primaryButtonText,
  secondrybuttontext,
  onPrimaryButtonClick,
  showBottomButton = true,
}) => {
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 useEffect(() => {
     const handleResize = () => setScreenWidth(window.innerWidth);
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
   }, []);
  const backgroundImagemobile = "/images/exherobg3.png";
  

   const currentImage =
     screenWidth >= 1024 ? backgroundImage : backgroundImagemobile;
  
  return (
    <div className="bg-[#EFEFEF] py-4 font-montserrat">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-[89%] mx-auto min-h-screen lg:min-h-[115vh] text-[#240960] flex flex-col px-4 py-10 pt-24 md:pt-24 lg:pt-28 pl-4 md:pl-10 lg:pl-16 xs:pt-[6.5rem] xs:pb-[10rem]"
      >
        {/* Heading and Paragraph */}
        <div className="lg:w-[50%]">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#FFFFFF]">
              {heading}
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-[#5500FF]">
              {heading1}
            </h1>
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
            className="flex flex-wrap justify-start gap-4 w-full md:w-[70%] lg:w-auto"
          >
            {/* {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.34)] backdrop-blur-md border border-white/30 text-sm font-medium shadow-sm hover:scale-105 transition-transform"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </motion.div>
          ))} */}
            <p className="text-[15px] md:text-[21px]">{paragraph}</p>
          </motion.div>
        </div>
        <div className="lg:flex-grow" />

        {/* Top Action Button */}
        {primaryButtonText && (
          <motion.div
            whileHover={{ scale: 1.05, x: 6 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 mt-5"
          >
            <button
              onClick={onPrimaryButtonClick}
              className="w-auto sm:w-[236px] flex items-center justify-center bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md"
            >
              {primaryButtonText}
            </button>
            <div className="w-1 h-0.5 bg-[#cfc0ff]" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2c1361] to-[#7300ff] border-2 border-[#cfc0ff] shadow-md">
              <ArrowUpRight size={18} strokeWidth={2} className="text-white" />
            </div>
          </motion.div>
        )}

        {/* Bottom Floating Button */}
        {showBottomButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-10 right-10 z-40 hidebuttons:hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <button className="xl:w-[236px] flex items-center justify-center bg-gradient-to-r from-[#7300ff] to-[#2c1361] text-white text-sm font-medium px-6 py-2 rounded-full border-2 border-[#cfc0ff] shadow-md">
                {secondrybuttontext}
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
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Bannersection;
