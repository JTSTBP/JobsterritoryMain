
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import HireSection from "../components/commonsections/ready";
import { industriesData } from "../constants/industriesData";
import { ArrowLeft } from "lucide-react";
import RelatedLogos from "../components/industry/RelatedLogos";
import RelatedCaseStudies from "../components/industry/RelatedCaseStudies";

const IndustryDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [industry, setIndustry] = useState(null);

    useEffect(() => {
        // Find industry by slug
        const found = industriesData.find((item) => item.slug === slug);
        if (found) {
            setIndustry(found);
        } else {
            // Fetch from backend
            const fetchIndustry = async () => {
                try {
                    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                    if (res.ok) {
                        const data = await res.json();
                        const dynamicFound = data.find(item => item.slug === slug);
                        if (dynamicFound) {
                            setIndustry(dynamicFound);
                        }
                    }
                } catch (err) {
                    console.error("Error fetching industry:", err);
                }
            };
            fetchIndustry();
        }
    }, [slug, navigate]);

    if (!industry) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    // Helper to render challenge/solution items which can be strings or objects
    const renderItems = (items) => {
        if (!items) return null;
        return items.map((item, idx) => {
            const isObject = typeof item === 'object' && item !== null;
            const title = isObject ? item.title : item;
            const description = isObject ? item.description : null;

            return (
                <li key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">
                    <p className="font-bold text-gray-800">{title}</p>
                    {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
                </li>
            );
        });
    };

    return (
        <>
            <Navbar />
            <div className="bg-[#EFEFEF] min-h-screen font-poppins text-[#1B084C]">

                {/* Header / Hero */}
                <div
                    className="relative min-h-[450px] md:h-[60vh] w-full overflow-hidden bg-gray-200"
                    style={{
                        backgroundImage: `url(${industry.banner || (industry.bg ? (industry.bg.startsWith('bg') ? '' : `/${industry.bg}`) : '')})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    {/* Gradient Overlay - Darker for better text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#1B084C] via-transparent to-black/30`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <button
                            onClick={() => navigate("/industries-we-serve")}
                            className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors duration-200 z-20"
                        >
                            <ArrowLeft size={18} /> <span className="hidden md:inline text-sm md:text-base">Back to Industries</span>
                        </button>

                        <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-white/20 mb-4 md:mb-6 group transition-all duration-500 hover:scale-110">
                            <img
                                src={industry.img}
                                alt={industry.title}
                                className="w-24 h-24 md:w-48 md:h-48 object-contain transition-transform duration-500 animate-float"
                            />
                        </div>

                        <h1 className="text-3xl md:text-7xl font-bold font-montserrat mb-3 md:mb-4 text-white drop-shadow-2xl px-4">
                            {industry.title}
                        </h1>
                        <p className="text-base md:text-2xl max-w-3xl text-gray-200 font-light drop-shadow-lg px-6">
                            {industry.description}
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-16">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-montserrat">Overview</h2>
                        <div
                            className="text-lg leading-relaxed text-gray-700 prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: industry.longDescription }}
                        />

                        {industry.placements && (
                            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm inline-block">
                                <span className="block text-4xl font-bold text-purple-600 mb-1">{industry.placements}</span>
                                <span className="text-gray-600 font-medium">Successful Placements</span>
                            </div>
                        )}
                    </div>

                    {/* Challenges & Solutions Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Challenges */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                                Industry Challenges
                            </h2>
                            <ul className="space-y-4">
                                {renderItems(industry.challenges)}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                                Our Solutions
                            </h2>
                            <ul className="space-y-4">
                                {renderItems(industry.solutions)}
                            </ul>
                        </div>
                    </div>

                    {/* Related Content */}
                    <div className="max-w-6xl mx-auto px-6">
                        <RelatedLogos industry={industry.title} />
                        <RelatedCaseStudies industry={industry.title} />
                    </div>

                </div>

                {/* CTA Section */}
                <HireSection
                    title={`Ready to Transform Your ${industry.title} Hiring?`}
                    highlight=""
                    description="Let our expert recruiters help you implement these strategies and find the perfect talent for your organization."
                    buttonText="Start Hiring Now"
                    buttontext2="Schedule Consultation"
                    backgroundImage="/images/trasfrom.png"
                />

            </div>
            <Footer />
        </>
    );
};

export default IndustryDetail;
