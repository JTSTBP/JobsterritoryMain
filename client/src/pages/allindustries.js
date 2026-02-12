
import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import IndustriesGrid from "../components/home/industriesgrid";
import { industriesData } from "../constants/industriesData";
// We can reuse the IndustriesGrid component but pass the full data
// Or if we need a different layout, we can create a custom grid here.
// IndustriesGrid seems to handle layout well, let's reuse it.

const AllIndustries = () => {
    const [dynamicIndustries, setDynamicIndustries] = React.useState([]);

    React.useEffect(() => {
        const fetchDynamic = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                if (res.ok) {
                    const data = await res.json();
                    setDynamicIndustries(data);
                }
            } catch (err) {
                console.error("Error fetching industries:", err);
            }
        };
        fetchDynamic();
    }, []);

    const allIndustries = [...industriesData, ...dynamicIndustries];

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-poppins">
            <Navbar />

            {/* Sophisticated Header Section */}
            <div className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center relative">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>

                    <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] text-purple-600 uppercase bg-purple-50 rounded-full border border-purple-100 shadow-sm">
                        Global Talent Network
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold text-[#1B084C] mb-6 font-montserrat tracking-tight">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Serve</span>
                    </h1>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>

                    <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                        Expert recruitment solutions spanning 25+ major sectors. Bridging the gap between niche talent and high-growth organizational ambitions.
                    </p>
                </div>
            </div>

            <div className="pb-20">
                <IndustriesGrid
                    industries={allIndustries}
                    separate="false"
                    variant="elegant"
                    title="" // Removing title from inner grid as we have a header now
                    description=""
                />
            </div>
            <Footer />
        </div>
    );
};

export default AllIndustries;
