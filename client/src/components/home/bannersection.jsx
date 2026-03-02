import { motion } from "framer-motion";
import { ArrowUpRight, Users, TrendingUp, Target, Award } from "lucide-react";
import { usePopup } from "../../contexts/popupcontext";

const features = [
    { icon: <Users size={16} />, label: "Expert Recruiters" },
    { icon: <TrendingUp size={16} />, label: "Fast Turnaround" },
    { icon: <Target size={16} />, label: "Perfect Match" },
    { icon: <Award size={16} />, label: "Quality Assured" },
];

const stats = [
    { number: "15k+", label: "Placements" },
    { number: "5k+", label: "Clients" },
    { number: "48hrs", label: "Avg Response" },
];

/* ── Decorative floating shapes ── */
const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

        {/* ── Large glowing blobs ── */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(115,0,255,0.35), transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)", filter: "blur(80px)", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, rgba(207,192,255,0.15), transparent 70%)", filter: "blur(50px)", animationDelay: "1s" }} />

        {/* ── Floating balloons (filled circles) ── */}
        <div className="absolute top-[12%] left-[8%] w-14 h-14 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #7300ff, #a855f7)", opacity: 0.6, animationDelay: "0s" }} />
        <div className="absolute top-[28%] left-[72%] w-9 h-9 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #cfc0ff, #7300ff)", opacity: 0.5, animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] left-[15%] w-7 h-7 rounded-full animate-float-up-slow"
            style={{ background: "linear-gradient(135deg, #a855f7, #2c1361)", opacity: 0.55, animationDelay: "0.8s" }} />
        <div className="absolute bottom-[35%] right-[10%] w-12 h-12 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #cfc0ff, #a855f7)", opacity: 0.45, animationDelay: "3s" }} />
        <div className="absolute top-[65%] left-[45%] w-6 h-6 rounded-full animate-float-up-slow"
            style={{ background: "linear-gradient(135deg, #7300ff, #cfc0ff)", opacity: 0.4, animationDelay: "2s" }} />
        <div className="absolute top-[8%] right-[20%] w-5 h-5 rounded-full animate-float-up"
            style={{ background: "#cfc0ff", opacity: 0.5, animationDelay: "4s" }} />

        {/* ── Hollow rings ── */}
        <div className="absolute top-[18%] right-[8%] w-20 h-20 rounded-full border-2 border-[#cfc0ff]/30 animate-float-up-slow"
            style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[12%] left-[30%] w-28 h-28 rounded-full border border-[#a855f7]/25 animate-sway"
            style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[50%] right-[25%] w-16 h-16 rounded-full border-2 border-white/15 animate-float-up"
            style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[5%] left-[35%] w-10 h-10 rounded-full border border-[#7300ff]/40 animate-float-up-slow"
            style={{ animationDelay: "3.5s" }} />

        {/* ── Rotating geometric shapes (squares / diamonds) ── */}
        <div className="absolute top-[38%] left-[5%] w-8 h-8 animate-spin-slow"
            style={{ background: "linear-gradient(45deg, #7300ff, #cfc0ff)", opacity: 0.35, borderRadius: "4px", transform: "rotate(45deg)" }} />
        <div className="absolute bottom-[28%] right-[18%] w-6 h-6 animate-spin-slow"
            style={{ background: "linear-gradient(45deg, #cfc0ff, #a855f7)", opacity: 0.4, borderRadius: "3px", animationDirection: "reverse", transform: "rotate(20deg)" }} />
        <div className="absolute top-[72%] left-[60%] w-5 h-5 animate-spin-slow"
            style={{ background: "rgba(207,192,255,0.4)", borderRadius: "3px", animationDuration: "14s" }} />

        {/* ── Small scattered dots ── */}
        {[
            { top: "22%", left: "22%", delay: "0.4s" },
            { top: "55%", left: "8%", delay: "1.8s" },
            { top: "80%", left: "48%", delay: "2.6s" },
            { top: "15%", left: "58%", delay: "3.2s" },
            { top: "42%", left: "88%", delay: "0.9s" },
            { top: "90%", left: "75%", delay: "2.1s" },
            { top: "32%", left: "48%", delay: "4.4s" },
        ].map((dot, i) => (
            <div key={i}
                className="absolute w-2 h-2 rounded-full animate-float-up"
                style={{
                    top: dot.top, left: dot.left,
                    background: i % 2 === 0 ? "#cfc0ff" : "#a855f7",
                    opacity: 0.5,
                    animationDelay: dot.delay,
                }}
            />
        ))}

        {/* ── Triangle / polygon accent (CSS clip-path) ── */}
        <div className="absolute top-[60%] right-[6%] w-10 h-10 animate-float-up-slow"
            style={{
                background: "linear-gradient(135deg, #7300ff, #cfc0ff)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                opacity: 0.35,
                animationDelay: "1.2s",
            }}
        />
        <div className="absolute bottom-[8%] right-[40%] w-7 h-7 animate-float-up"
            style={{
                background: "rgba(207,192,255,0.4)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                animationDelay: "3.8s",
            }}
        />

        {/* ── Thin drifting lines ── */}
        <div className="absolute top-[45%] left-[38%] w-24 h-px bg-gradient-to-r from-transparent via-[#cfc0ff]/30 to-transparent animate-sway"
            style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[25%] right-[30%] w-16 h-px bg-gradient-to-r from-transparent via-[#a855f7]/25 to-transparent animate-sway"
            style={{ animationDelay: "3s" }} />
    </div>
);

const BannerSection = () => {
    const { openPopup } = usePopup();

    return (
        <div className="bg-[#EFEFEF] py-4 font-montserrat">
            <section
                className="relative w-[95%] lg:w-[89%] mx-auto min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden rounded-2xl px-5 md:px-16 py-12 md:py-24"
                style={{
                    background: "linear-gradient(135deg, #1B084C 0%, #2c1361 50%, #3a0a7a 100%)",
                }}
            >
                {/* Floating decorative shapes */}
                <FloatingShapes />

                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* ── Left content ── */}
                    <div className="space-y-7 text-center md:text-left">
                        {/* Eyebrow */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cfc0ff]"
                        >
                            India's Leading Recruitment & Workforce Solutions
                        </motion.p>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white"
                        >
                            Hire Smarter,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cfc0ff] to-[#a855f7]">
                                Scale Faster
                            </span>{" "}
                            with Talent Across India
                        </motion.h1>

                        {/* Sub-text */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#c4b8e8] text-sm md:text-base font-poppins leading-relaxed max-w-md mx-auto md:mx-0"
                        >
                            We don't just fill roles — we connect you with visionaries who ignite change and drive your business forward.
                        </motion.p>

                        {/* Feature pills */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
                            }}
                            className="flex flex-wrap gap-3 justify-center md:justify-start"
                        >
                            {features.map(({ icon, label }) => (
                                <motion.span
                                    key={label}
                                    variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                                    transition={{ duration: 0.45 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-sm hover:scale-105 transition-transform"
                                >
                                    <span className="text-[#cfc0ff]">{icon}</span>
                                    {label}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex items-center gap-4 flex-wrap justify-center md:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={openPopup}
                                className="flex items-center gap-2 bg-gradient-to-r from-[#2c1361] to-[#7300ff] text-white text-sm font-semibold px-7 py-3 rounded-full border-2 border-[#cfc0ff] shadow-lg hover:shadow-purple-500/30 transition-shadow"
                            >
                                Hire Now
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                                    <ArrowUpRight size={14} />
                                </div>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open("https://calendly.com/jobsterritory/30min", "_blank")}
                                className="flex items-center gap-2 bg-transparent text-white text-sm font-semibold px-7 py-3 rounded-full border-2 border-white/30 hover:border-[#cfc0ff] hover:bg-white/10 transition-all"
                            >
                                Book a call
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* ── Right: Image + Stats ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex flex-col items-center gap-6"
                    >
                        {/* Glass card + image */}
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-3 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl" />
                            <img
                                src="/images/bannerteam.png"
                                alt="Our Team"
                                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl border-2 border-white/20 outline outline-2 outline-offset-8 outline-[#cfc0ff]/30"
                            />
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            {stats.map(({ number, label }) => (
                                <div
                                    key={label}
                                    className="flex-1 text-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/20 rounded-2xl px-4 py-4"
                                >
                                    <div className="text-2xl font-extrabold text-white font-montserrat">{number}</div>
                                    <div className="text-xs font-medium text-[#c4b8e8] font-poppins mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default BannerSection;
