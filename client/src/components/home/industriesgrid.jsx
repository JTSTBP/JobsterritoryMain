import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import IndustryCTA from "./industrycta";

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
        <section className="bg-[#EFEFEF] py-12 text-[#1B084C]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {/* Heading */}
                <motion.div
                    className="text-center mb-12"
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
                                            y: -5,
                                            boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                                        }}
                                        className={`bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col shadow-lg transition-all duration-300 h-full ${item.slug ? 'cursor-pointer' : ''}`}
                                        onClick={() => {
                                            if (item.slug && separate !== "true") {
                                                navigate(`/industries-we-serve/${item.slug}`);
                                            }
                                        }}
                                    >
                                        <div className="w-full h-56 relative overflow-hidden group">
                                            <img
                                                src={item.img}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                alt={item.title}
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                                        </div>

                                        <div className="p-6 pt-0 flex flex-col flex-grow items-center text-center">
                                            <h3 className="text-xl font-bold mb-2 font-montserrat text-[#1B084C]">{item.title}</h3>
                                            <p className="text-sm text-gray-500 mb-6 flex-grow line-clamp-2 px-2">{item.description}</p>

                                            {separate === "true" ? (
                                                <button className="py-2 px-6 bg-[#1B084C] text-white rounded-full text-sm font-semibold hover:bg-purple-900 transition-colors duration-200 shadow-md">
                                                    Explore Industry
                                                </button>
                                            ) : (
                                                <div className="text-[#1B084C] font-montserrat bg-purple-50/50 w-full py-4 rounded-2xl border border-purple-100/50">
                                                    <span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{item.placements}</span>
                                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">Success Placements</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            }

                            if (variant === "elegant") {
                                return (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0px 15px 35px rgba(0,0,0,0.08)",
                                        }}
                                        className={`bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col shadow-sm transition-all duration-300 h-full ${item.slug ? 'cursor-pointer' : ''}`}
                                        onClick={() => {
                                            if (item.slug && separate !== "true") {
                                                navigate(`/industries-we-serve/${item.slug}`);
                                            }
                                        }}
                                    >
                                        <div className="w-full h-48 relative overflow-hidden">
                                            <img
                                                src={item.img}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                alt={item.title}
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-grow text-left">
                                            <h3 className="text-lg font-bold text-[#1B084C] mb-2 font-montserrat tracking-tight">{item.title}</h3>
                                            <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow line-clamp-3">
                                                {item.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                                <div className="flex flex-col">
                                                    <span className="text-xl font-bold text-purple-600 leading-none">{item.placements}</span>
                                                    <span className="text-[9px] text-gray-400 uppercase font-semibold tracking-wider">Hires</span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                                </div>
                                            </div>
                                        </div>
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
                                            navigate(`/industries-we-serve/${item.slug}`);
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
                                onClick={() => navigate("/industries-we-serve")}
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
            </div>

            <IndustryCTA />
        </section>
    );
};

export default IndustriesGrid;
