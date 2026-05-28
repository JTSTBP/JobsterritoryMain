import React from 'react';
import { Users, Zap, Target, Award, ArrowUpRight } from 'lucide-react';
import { usePopup } from "../../contexts/popupcontext";

const FloatingShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* ── Large glowing blobs ── */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, #A86DFF, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, #C9A7FF, transparent 70%)", filter: "blur(80px)", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-pulse-glow"
            style={{ background: "radial-gradient(circle, #DCC7FF, transparent 70%)", filter: "blur(50px)", animationDelay: "1s" }} />

        {/* ── Floating balloons (filled circles) ── */}
        <div className="absolute top-[12%] left-[8%] w-14 h-14 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #A86DFF, #C9A7FF)", opacity: 0.6, animationDelay: "0s" }} />
        <div className="absolute top-[28%] left-[72%] w-9 h-9 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #C9A7FF, #A86DFF)", opacity: 0.5, animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] left-[15%] w-7 h-7 rounded-full animate-float-up-slow"
            style={{ background: "linear-gradient(135deg, #DCC7FF, #A86DFF)", opacity: 0.55, animationDelay: "0.8s" }} />
        <div className="absolute bottom-[35%] right-[10%] w-12 h-12 rounded-full animate-float-up"
            style={{ background: "linear-gradient(135deg, #C9A7FF, #DCC7FF)", opacity: 0.45, animationDelay: "3s" }} />
        <div className="absolute top-[65%] left-[45%] w-6 h-6 rounded-full animate-float-up-slow"
            style={{ background: "linear-gradient(135deg, #D97706, #FDE68A)", opacity: 0.4, animationDelay: "2s" }} />
        <div className="absolute top-[8%] right-[20%] w-5 h-5 rounded-full animate-float-up"
            style={{ background: "#FDE68A", opacity: 0.5, animationDelay: "4s" }} />

        {/* ── Hollow rings ── */}
        <div className="absolute top-[18%] right-[8%] w-20 h-20 rounded-full border-2 border-[#FDE68A]/30 animate-float-up-slow"
            style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[12%] left-[30%] w-28 h-28 rounded-full border border-[#F59E0B]/25 animate-sway"
            style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[50%] right-[25%] w-16 h-16 rounded-full border-2 border-white/15 animate-float-up"
            style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[5%] left-[35%] w-10 h-10 rounded-full border border-[#D97706]/40 animate-float-up-slow"
            style={{ animationDelay: "3.5s" }} />

        {/* ── Rotating geometric shapes (squares / diamonds) ── */}
        <div className="absolute top-[38%] left-[5%] w-8 h-8 animate-spin-slow"
            style={{ background: "linear-gradient(45deg, #D97706, #FDE68A)", opacity: 0.35, borderRadius: "4px", transform: "rotate(45deg)" }} />
        <div className="absolute bottom-[28%] right-[18%] w-6 h-6 animate-spin-slow"
            style={{ background: "linear-gradient(45deg, #FDE68A, #F59E0B)", opacity: 0.4, borderRadius: "3px", animationDirection: "reverse", transform: "rotate(20deg)" }} />
        <div className="absolute top-[72%] left-[60%] w-5 h-5 animate-spin-slow"
            style={{ background: "rgba(253,230,138,0.4)", borderRadius: "3px", animationDuration: "14s" }} />

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
                    background: i % 2 === 0 ? "#E6E1F5" : "#B98DFF",
                    opacity: 0.5,
                    animationDelay: dot.delay,
                }}
            />
        ))}

        {/* ── Triangle / polygon accent (CSS clip-path) ── */}
        <div className="absolute top-[60%] right-[6%] w-10 h-10 animate-float-up-slow"
            style={{
                background: "linear-gradient(135deg, #D97706, #FDE68A)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                opacity: 0.35,
                animationDelay: "1.2s",
            }}
        />
        <div className="absolute bottom-[8%] right-[40%] w-7 h-7 animate-float-up"
            style={{
                background: "rgba(253,230,138,0.4)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                animationDelay: "3.8s",
            }}
        />

        {/* ── Thin drifting lines ── */}
        <div className="absolute top-[45%] left-[38%] w-24 h-px bg-gradient-to-r from-transparent via-[#C9A7FF]/30 to-transparent animate-sway"
            style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[25%] right-[30%] w-16 h-px bg-gradient-to-r from-transparent via-[#DCC7FF]/25 to-transparent animate-sway"
            style={{ animationDelay: "3s" }} />
    </div>
);

const LandingHero = () => {
  const { openPopup } = usePopup();

  return (
    <div className="relative w-full min-h-screen bg-[#EEF6FF] overflow-hidden font-montserrat flex flex-col justify-center pt-24 pb-12">
      
      {/* Background Floating Shapes */}
      <FloatingShapes />

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col text-white space-y-6 lg:pr-10">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#7C6FA8] uppercase font-semibold">
            India's Leading Recruitment & Workforce Solutions
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-[#2E1363]">
            Hire Smarter, <span className="text-[#B68CFF]">Scale Faster</span> with Talent Across India
          </h1>
          
          <p className="text-[#6F6690] text-sm md:text-base max-w-[90%] leading-relaxed pt-2">
            We don't just fill roles — we connect you with visionaries who ignite change and drive your business forward.
          </p>
          
          {/* Features / Pills */}
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white">
              <Users size={14} className="text-white" /> Expert Recruiters
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white">
              <Zap size={14} className="text-white" /> Fast Turnaround
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white">
              <Target size={14} className="text-white" /> Perfect Match
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white">
              <Award size={14} className="text-white" /> Quality Assured
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-4">
            <button
              onClick={openPopup}
              className="flex items-center gap-2 bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white px-7 py-3 rounded-full font-medium text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Hire Now <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => window.open("https://calendly.com/jobsterritory/30min", "_blank")}
              className="flex items-center gap-2 bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white px-7 py-3 rounded-full font-medium text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Right Content / Image */}
        <div className="relative w-full h-full flex justify-center lg:justify-end mt-12 lg:mt-0 pt-6 lg:pt-0">
          {/* Dark box background */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[95%] h-[115%] bg-[#E6E1F5] z-0 hidden lg:block rounded-xl shadow-xl"></div>
          
          <img 
            src="images/newhero.png" 
            alt="Team Working" 
            className="relative z-10 w-full max-w-lg lg:max-w-[34rem] object-cover shadow-2xl rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-20 w-full max-w-[85rem] mx-auto px-6 md:px-12 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 lg:w-[50%] lg:ml-auto pr-4 lg:pr-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <h3 className="text-2xl md:text-3xl font-bold">15k+</h3>
            <p className="text-[10px] md:text-xs mt-2 uppercase tracking-wider text-center">Placements</p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <h3 className="text-2xl md:text-3xl font-bold">5k+</h3>
            <p className="text-[10px] md:text-xs mt-2 uppercase tracking-wider text-center">Companies</p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-gradient-to-r from-[#3F1388] to-[#5A1FC8] border border-[#A855F7] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <h3 className="text-2xl md:text-3xl font-bold">48hrs</h3>
            <p className="text-[10px] md:text-xs mt-2 uppercase tracking-wider text-center">Avg Response</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
