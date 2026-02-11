import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCard = ({ icon, text, position, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className={`absolute ${position} bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-purple-50 hover:shadow-xl transition-shadow`}
    >
        <div className="bg-purple-100 p-2 rounded-full">
            {icon}
        </div>
        <span className="text-[#1B084C] font-bold text-sm whitespace-nowrap">{text}</span>
    </motion.div>
);

const MobileCard = ({ icon, text }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center gap-2 border border-purple-50">
        <div className="bg-purple-100 p-2 rounded-full text-[#5500FE]">
            {icon}
        </div>
        <span className="text-[#1B084C] font-bold text-sm">{text}</span>
    </div>
);

const IndustryCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full py-16 md:py-32 overflow-hidden bg-[#EFEFEF] font-poppins">

            {/* Background Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] border border-purple-300/80 rounded-full absolute"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="w-[600px] h-[600px] md:w-[850px] md:h-[850px] border border-purple-300/60 rounded-full absolute"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="w-[750px] h-[750px] md:w-[1050px] md:h-[1050px] border border-purple-300/60 rounded-full absolute"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Center Content */}
                <div className="max-w-3xl mx-auto text-center relative z-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B084C] mb-6 font-montserrat">
                        Don’t See Your Industry?
                    </h2>
                    <p className="text-gray-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        No matter your sector, we can find the right people to drive your business forward. Let’s talk about your hiring needs.
                    </p>
                    <button
                        onClick={() => navigate('/contactus')}
                        className="bg-[#1B084C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Floating Info Boxes (Desktop) */}
                <div className="hidden xl:block">
                    {/* Top Left */}
                    <FloatingCard
                        icon={<Briefcase className="text-[#5500FE]" size={20} />}
                        text="35+ Industries Served"
                        position="top-[15%] left-[10%]"
                        delay={0.2}
                    />

                    {/* Bottom Left */}
                    <FloatingCard
                        icon={<Users className="text-[#5500FE]" size={20} />}
                        text="7000+ Total Placements"
                        position="bottom-[15%] left-[10%]"
                        delay={0.4}
                    />

                    {/* Top Right */}
                    <FloatingCard
                        icon={<CheckCircle className="text-[#5500FE]" size={20} />}
                        text="95% Success Rate"
                        position="top-[15%] right-[10%]"
                        delay={0.3}
                    />

                    {/* Bottom Right */}
                    <FloatingCard
                        icon={<Clock className="text-[#5500FE]" size={20} />}
                        text="24hrs Response Time"
                        position="bottom-[15%] right-[10%]"
                        delay={0.5}
                    />
                </div>

                {/* Mobile/Tablet Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 xl:hidden">
                    <MobileCard icon={<Briefcase size={20} />} text="35+ Industries" />
                    <MobileCard icon={<Users size={20} />} text="7000+ Placements" />
                    <MobileCard icon={<CheckCircle size={20} />} text="95% Success" />
                    <MobileCard icon={<Clock size={20} />} text="24h Response" />
                </div>

            </div>
        </section>
    );
};

export default IndustryCTA;
