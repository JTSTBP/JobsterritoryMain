import React from "react";
import { motion } from "framer-motion";

const HireSection = ({
  title,
  highlight,
  description,
  buttonText,
  buttontext2,
  backgroundImage = "/images/trasfrom.png",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div
        className="text-white relative overflow-hidden py-16"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
        />
        {/* Pulsing circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"
        />

        {/* Title */}
        <h3 className="text-3xl mb-4 font-montserrat font-bold">
          {title} <span className="font-normal">{highlight}</span>
        </h3>

        {/* Description */}
        <p className="text-white/90 mb-6 max-w-2xl mx-auto font-poppins">
          {description}
        </p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="text-[#1B084C] bg-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
        >
          <span>{buttonText}</span>
        </motion.button>
        {buttontext2 && (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#fff] ml-3 bg-[rgb(213_206_255/56%)] px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>{buttontext2}</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default HireSection;
