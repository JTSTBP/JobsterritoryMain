import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModernBanner = ({
    heading,
    paragraph,
    primaryButtonText,
    onPrimaryButtonClick,
    industries = []
}) => {
    // Hexagon shape clip-path
    const hexagonClip = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
    const navigate = useNavigate();
    // Standard Industry labels if none provided
    const defaultIndustries = [
        { label: "Logistics", img: "/images/logis.png" },
        { label: "Healthcare", img: "/images/health.png" },
        { label: "Technology", img: "/images/infor.png" },
        { label: "Media", img: "/images/media.png" },
        { label: "Finance", img: "/images/bussi.png" },
        { label: "Energy", img: "/images/chemi.png" },
        { label: "Aviation", img: "/images/trans.png" },
        { label: "Agriculture", img: "/images/agri.png" },
        { label: "education", img: "/images/edu.png" }
    ];

    const displayIndustries = industries.length > 0 ? industries : defaultIndustries;

    // Grid coordinates (percentage-based relative to right-side container)
    // Tighter cluster, larger size (125px), shifted UP (~6%) and RIGHT (~2%)
    const hexPositions = [
        { top: '2%', left: '37%', size: '125px', delay: 0 },       // 0: Top Center
        { top: '19%', left: '16%', size: '125px', delay: 0.1 },    // 1: Mid Left-Top
        { top: '19%', left: '58%', size: '125px', delay: 0.2 },    // 2: Mid Right-Top
        { top: '36%', left: '37%', size: '125px', delay: 0.15 },   // 3: CENTER HUB
        { top: '36%', left: '-6%', size: '125px', delay: 0.3 },   // 4: Far Left Center
        { top: '36%', left: '80%', size: '125px', delay: 0.4 },    // 5: Far Right Center
        { top: '53%', left: '16%', size: '125px', delay: 0.25 },   // 6: Mid Left-Bottom
        { top: '53%', left: '58%', size: '125px', delay: 0.35 },   // 7: Mid Right-Bottom
        { top: '70%', left: '37%', size: '125px', delay: 0.5 }      // 8: Bottom Center
    ];

    // Connection definitions [startIndex, endIndex]
    const connections = [
        [0, 1], [0, 2],
        [1, 4], [1, 3],
        [2, 5], [2, 3],
        [4, 6], [5, 7],
        [3, 6], [3, 7],
        [6, 8], [7, 8]
    ];

    // Helper to get center percentage of a hex
    const getHexCenter = (index) => {
        const pos = hexPositions[index];
        // Adjusted center calculation for larger size
        return {
            x: parseFloat(pos.left) + 12 + '%',
            y: parseFloat(pos.top) + 12 + '%'
        };
    };

    return (
        <div className="relative overflow-hidden bg-white min-h-[500px] lg:min-h-[600px] font-montserrat flex items-center">

            {/* Background Tech Patterns */}
            <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
                <svg width="100%" height="100%" className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366F1" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Decorative Background Elements (Balloons/Circles) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* ENHANCED Top-Left Gradient Orb - Larger and deeper */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[100px]"
                />

                {/* NEW Secondary Left-Side Orb for depth behind text */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-indigo-100/60 rounded-full blur-[80px]"
                />

                {/* Decorative Geometric Shapes for Left Side */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] left-[5%] text-indigo-200/40 text-8xl font-bold select-none"
                    style={{ zIndex: 1 }}
                >+</motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[60%] left-[8%] w-6 h-6 border-4 border-purple-200/30 rounded-full"
                />

                <motion.div
                    animate={{ x: [0, 15, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] left-[20%] w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-indigo-200/30 border-r-[10px] border-r-transparent"
                />

                {/* Right Side Background Elements */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl opacity-50"
                />

                {/* Floating "Balloons" */}
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[30%] left-[45%] w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-indigo-500/10 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[10%] left-[40%] w-8 h-8 bg-yellow-300/20 rounded-full blur-md"
                />
            </div>

            {/* Background Split Decor */}
            <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-[#f3e8ff]/50 to-[#e0e7ff]/50 clip-path-curve hidden lg:block"
                style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}></div>

            <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-12 py-16">

                {/* Left Content */}
                <div className="lg:w-[44%] text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-purple-100 text-purple-700 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6 w-fit shadow-sm"
                        >
                            Strategic Logistics & Beyond
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#1B084C] leading-[1.1] mb-6 drop-shadow-sm">
                            {heading}
                        </h1>
                        <p className="text-lg md:text-xl text-[#1B084C]/70 mb-10 max-w-lg leading-relaxed">
                            {paragraph}
                        </p>

                        {primaryButtonText && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onPrimaryButtonClick}
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-all group shrink-0"
                                >
                                    {primaryButtonText}
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => {
                                        navigate("/industries-we-serve");
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full text-[#1B084C] font-bold border-2 border-purple-100 hover:bg-purple-50 transition-colors shadow-sm"
                                >
                                    Explore Sectors
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Right Honeycomb Grid Cluster */}
                <div className="lg:w-[56%] relative w-full h-[450px] md:h-[600px] flex justify-center items-center">
                    <div className="relative w-full max-w-[600px] h-full flex items-center justify-center">

                        {/* Central Glow Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-[#8B5CF6]/15 to-[#6366F1]/15 rounded-full blur-[100px] -z-10 animate-pulse"></div>

                        {/* Modern Connection Lines (The Web) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {connections.map(([start, end], idx) => {
                                const p1 = getHexCenter(start);
                                const p2 = getHexCenter(end);
                                return (
                                    <React.Fragment key={idx}>
                                        {/* Main Trace */}
                                        <motion.line
                                            x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                                            stroke="#6366F1" strokeWidth="2" opacity="0.2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: idx * 0.1 }}
                                        />

                                        {/* Traveling Data Pulse */}
                                        <motion.circle
                                            r="4"
                                            fill="#6366F1"
                                            className="shadow-[0_0_12px_#6366F1]"
                                            initial={{ offsetDistance: "0%" }}
                                            animate={{ offsetDistance: "100%" }}
                                            transition={{
                                                duration: 2 + Math.random(),
                                                repeat: Infinity,
                                                delay: idx * 0.2,
                                                ease: "linear"
                                            }}
                                            style={{
                                                offsetPath: `path('M ${parseFloat(p1.x) * 6} ${parseFloat(p1.y) * 6} L ${parseFloat(p2.x) * 6} ${parseFloat(p2.y) * 6}')`,
                                                // Note: Scaling factor for SVG mapping simplified.
                                            }}
                                        >
                                            <animateMotion
                                                path={`M ${parseFloat(p1.x) * 6},${parseFloat(p1.y) * 6} L ${parseFloat(p2.x) * 6},${parseFloat(p2.y) * 6}`}
                                                dur={`${2 + Math.random()}s`}
                                                repeatCount="indefinite"
                                            />
                                        </motion.circle>
                                    </React.Fragment>
                                );
                            })}

                            {/* Circuit nodes at hex corners */}
                            {hexPositions.map((pos, i) => {
                                const center = getHexCenter(i);
                                return (
                                    <motion.circle
                                        key={`node-${i}`}
                                        cx={center.x} cy={center.y} r="6"
                                        fill="white" stroke="#6366F1" strokeWidth="1.5"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ delay: pos.delay + 0.5 }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Hexagon Grid Rendering */}
                        {hexPositions.map((pos, i) => {
                            const data = displayIndustries[i] || displayIndustries[i % displayIndustries.length];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        delay: pos.delay
                                    }}
                                    className="absolute group cursor-pointer drop-shadow-xl"
                                    style={{
                                        top: pos.top,
                                        left: pos.left,
                                        width: pos.size,
                                        height: pos.size,
                                        zIndex: i === 3 ? 20 : 10 // center hub stays on top
                                    }}
                                >
                                    {/* OUTER BLUE BORDER (Advanced Glow) */}
                                    <div
                                        className="absolute inset-[-8px] bg-[#6366F1]/40 group-hover:bg-[#6366F1] transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]"
                                        style={{ clipPath: hexagonClip }}
                                    ></div>

                                    {/* WHITE INNER BORDER */}
                                    <div
                                        className="absolute inset-[-4px] bg-white pointer-events-none"
                                        style={{ clipPath: hexagonClip }}
                                    ></div>

                                    {/* Main Image Container */}
                                    <div
                                        className="absolute inset-0 overflow-hidden bg-[#1B084C]"
                                        style={{ clipPath: hexagonClip }}
                                    >
                                        <motion.img
                                            src={data.img}
                                            alt={data.label}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                                        />

                                        {/* Modern Shimmer (Diagonal Sweep) */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none -translate-x-full"
                                            animate={{ translateX: ['-100%', '250%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                                        />

                                        {/* Dynamic text overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B084C] via-[#1B084C]/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity"></div>

                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
                                            <span className="text-white text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-110">
                                                {data.label}
                                            </span>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileHover={{ width: '60%' }}
                                                className="h-[3px] bg-white mt-1.5 rounded-full shadow-[0_0_10px_#fff]"
                                            />
                                        </div>
                                    </div>

                                    {/* Sparkle Points at Corners (Large pulsing nodes) */}
                                    {[
                                        { top: '0%', left: '25%' },
                                        { top: '0%', left: '75%' },
                                        { top: '50%', left: '100%' },
                                        { top: '100%', left: '75%' },
                                        { top: '100%', left: '25%' },
                                        { top: '50%', left: '0%' }
                                    ].map((corner, cIdx) => (
                                        <motion.div
                                            key={cIdx}
                                            className="absolute w-2.5 h-2.5 bg-white rounded-full blur-[1px] opacity-0 group-hover:opacity-100 shadow-[0_0_10px_#fff]"
                                            style={{ top: corner.top, left: corner.left, transform: 'translate(-50%, -50%)', zIndex: 30 }}
                                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: (i + cIdx) * 0.2 }}
                                        />
                                    ))}
                                </motion.div>
                            );
                        })}

                        {/* Floating Tech Particles (Ambient environment) */}
                        <div className="absolute inset-0 pointer-events-none overflow-visible">
                            {[...Array(25)].map((_, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-[1px] opacity-60"
                                    initial={{
                                        opacity: 0,
                                        x: Math.random() * 700 - 50,
                                        y: -20
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        y: [0, 800],
                                        x: [null, sIdx % 2 === 0 ? '+=20' : '-=20'],
                                        scale: [0.5, 1.5, 0.5]
                                    }}
                                    transition={{
                                        duration: 5 + Math.random() * 5,
                                        repeat: Infinity,
                                        delay: -Math.random() * 10,
                                        ease: "linear"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModernBanner;
