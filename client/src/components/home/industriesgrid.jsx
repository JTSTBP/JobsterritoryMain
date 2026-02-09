import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const themes = [
  { bg: "/images/bg1.png", text: "text-[#FFFFFF]" }, // Dark
  { bg: "/images/bg4.png", text: "text-[#1B084C]" }, // Light
  { bg: "/images/bg6.png", text: "text-[#FFFFFF]" }, // Dark
  { bg: "/images/bg5.png", text: "text-[#1B084C]" }, // Light
  { bg: "/images/bg2.png", text: "text-[#FFFFFF]" }, // Dark
  { bg: "/images/bg8.png", text: "text-[#1B084C]" }, // Light
  { bg: "/images/bg7.png", text: "text-[#FFFFFF]" }, // Dark
  { bg: "/images/bg3.png", text: "text-[#1B084C]" }, // Light
];

const IndustriesGrid = ({
  industries,
  separate,
  title = "Your Industry, Our Expertise",
  description = "From emerging brands to industry giants, we deliver hiring solutions tailored to your sector’s challenges and ambitions.",
  showViewAll = false,
  variant = "default"
}) => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-10 md:px-8 lg:px-16 bg-[#EFEFEF] text-[#1B084C]">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 text-[#1B084C]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 160, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat inline-block pb-2">
          {title}
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mb-5 text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const theme = themes[index % themes.length];
            // Only use item specific background if it's an external URL (uploaded), 
            // otherwise use our alternating theme for consistency
            const isExternalBg = item.bg && (item.bg.startsWith('http') || item.bg.startsWith('https'));
            const effectiveBg = isExternalBg ? item.bg : theme.bg;
            const effectiveText = isExternalBg ? (item.text || "text-[#FFFFFF]") : theme.text;

            if (variant === "modern") {
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -10,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className={`bg-white rounded-3xl p-6 border border-white flex flex-col items-center text-center shadow-lg transition-all duration-300 h-full ${item.slug ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (item.slug && separate !== "true") {
                      navigate(`/industries/${item.slug}`);
                    }
                  }}
                >
                  <div className="w-20 h-20 mb-4 bg-purple-50 rounded-2xl flex items-center justify-center p-4">
                    <img src={item.img} className="w-full h-full object-contain" alt={item.title} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-montserrat">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 flex-grow line-clamp-3">{item.description}</p>

                  {separate === "true" ? (
                    <button className="text-purple-600 text-sm font-bold hover:underline">
                      Learn more →
                    </button>
                  ) : (
                    <div className="text-[#1B084C] font-montserrat">
                      <span className="block text-xl font-bold">{item.placements}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Placements</span>
                    </div>
                  )}
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                }}
                style={{
                  backgroundImage: `url(${effectiveBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`rounded-xl p-6 shadow-md transition-all duration-300 h-full flex flex-col items-center justify-between ${effectiveText} ${item.slug ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (item.slug && separate !== "true") {
                    navigate(`/industries/${item.slug}`);
                  }
                }}
              >
                <img src={item.img} className="w-36 mx-auto my-2" alt={item.title} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.description}</p>

                {separate === "true" ? (
                  <button
                    className={`py-2 px-4 border rounded-full ${effectiveText.includes("#FFFFFF")
                      ? "bg-[#FFFFFF] text-[#1B084C]"
                      : "bg-[#1B084C] text-white"
                      }`}
                  >
                    Learn more
                  </button>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: index * 0.3 + 0.4,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="bg-[rgba(255,255,255,0.34)] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
                  >
                    <h2 className="text-2xl font-bold">{item.placements}</h2>
                    <p className="text-lg">Placements</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {showViewAll && (
            <motion.div
              custom={industries.length}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
              style={{
                backgroundImage: variant === "modern" ? "none" : `url('/images/trasfrom.png')`,
                backgroundColor: variant === "modern" ? "#2D274B" : "transparent",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`rounded-xl p-6 shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center text-white cursor-pointer ${variant === "modern" ? "rounded-3xl" : ""}`}
              onClick={() => navigate("/industries")}
            >
              <div className="text-center group">
                <h3 className="text-2xl font-bold mb-4">View All Industries</h3>
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto group-hover:bg-white group-hover:text-purple-900 transition-colors">
                  <span className="text-3xl font-bold">→</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>



      <div className="relative w-[90%] my-2 mx-auto h-[300px] md:h-full rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/group.png"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#1B084C] w-[80%]">
            <h2 className="text-2xl md:text-5xl font-light mb-2">
              Don't See Your <span className="font-bold">Industry?</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
              No matter your sector, we can find the right people to drive your
              business forward. Let’s talk about your hiring needs.
            </p>
            <button
              className="bg-[#1B084C] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;
