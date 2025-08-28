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

const IndustriesGrid = ({ industries, separate }) => {
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
          Your Industry, Our Expertise
        </h2>
        <p className="mt-2">
          From emerging brands to industry giants, we deliver hiring solutions
          tailored to your sector’s challenges and ambitions.
        </p>
      </motion.div>

      {/* First 6 Cards */}
      <div className="mb-5 text-center">
        <div className="columns-1 md:columns-3 gap-6 space-y-6">
          {(!separate ? industries.slice(0, 6) : industries).map(
            (item, index) => (
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
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`rounded-xl p-6 shadow-md break-inside-avoid ${item.text}`}
              >
                <img src={item.img} className="w-36 mx-auto my-2" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.description}</p>

                {separate === "true" ? (
                  <button
                    className={`py-2 px-4 border rounded-full ${
                      item.text.includes("#FFFFFF")
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
            )
          )}
        </div>
      </div>

      {!separate && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center">
          {/* Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="md:col-span-2"
          >
            <div
              style={{
                backgroundImage: `url(${industries[6].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`rounded-xl p-6 shadow-md ${industries[6].text}`}
            >
              <h3 className="text-xl font-bold mb-2">{industries[6].title}</h3>
              <p className="text-sm mb-4">{industries[6].description}</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.7, type: "spring" }}
                className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
              >
                <h2 className="text-white text-3xl font-bold">
                  {industries[6].placements}
                </h2>
                <p className="text-white text-lg">Placements</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Normal Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div
              style={{
                backgroundImage: `url(${industries[7].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`rounded-xl p-6 shadow-md ${industries[7].text}`}
            >
              <h3 className="text-xl font-bold mb-2">{industries[7].title}</h3>
              <p className="text-sm mb-4">{industries[7].description}</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, type: "spring" }}
                className="bg-[#2E1B56] rounded-2xl px-10 py-1 text-center w-fit mx-auto"
              >
                <h2 className="text-white text-3xl font-bold">
                  {industries[7].placements}
                </h2>
                <p className="text-white text-lg">Placements</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Last 2 Cards */}

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
            <h2 className="text-2xl md:text-4xl font-light mb-2">
              Don't See Your <span className="font-bold">Industry?</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base">
              No matter your sector, we can find the right people to drive your
              business forward. Let’s talk about your hiring needs.
            </p>
            <button
              className="bg-[#1B084C] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
              onClick={() => {
                navigate("/ContactUs");
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
