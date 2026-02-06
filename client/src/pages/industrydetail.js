
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
            // Handle not found - maybe redirect to industries list or show error
            // navigate("/industries"); 
        }
    }, [slug, navigate]);

    if (!industry) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="bg-[#EFEFEF] min-h-screen font-poppins text-[#1B084C]">

                {/* Header / Hero */}
                <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.text === 'text-[#FFFFFF]' ? 'from-[#1B084C] to-[#2D274B]' : 'from-gray-200 to-white'} opacity-90`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <button
                            onClick={() => navigate("/industries")}
                            className={`absolute top-8 left-8 flex items-center gap-2 font-semibold hover:underline ${industry.text === 'text-[#FFFFFF]' ? 'text-white' : 'text-[#1B084C]'}`}
                        >
                            <ArrowLeft size={20} /> Back to Industries
                        </button>

                        <img src={industry.img} alt={industry.title} className="w-24 h-24 mb-4 object-contain" />
                        <h1 className={`text-4xl md:text-6xl font-bold font-montserrat mb-4 ${industry.text === 'text-[#FFFFFF]' ? 'text-white' : 'text-[#1B084C]'}`}>
                            {industry.title}
                        </h1>
                        <p className={`text-lg md:text-xl max-w-2xl ${industry.text === 'text-[#FFFFFF]' ? 'text-gray-200' : 'text-gray-600'}`}>
                            {industry.description}
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-6 py-16">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-montserrat">Overview</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {industry.longDescription}
                        </p>

                        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm inline-block">
                            <span className="block text-4xl font-bold text-purple-600 mb-1">{industry.placements}</span>
                            <span className="text-gray-600 font-medium">Successful Placements</span>
                        </div>
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
                                {industry.challenges?.map((challenge, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                                        <p className="font-medium text-gray-800">{challenge}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                                Our Solutions
                            </h2>
                            <ul className="space-y-4">
                                {industry.solutions?.map((solution, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                                        <p className="font-medium text-gray-800">{solution}</p>
                                    </li>
                                ))}
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
