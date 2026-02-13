
import React, { useEffect, useState } from "react";
import axios from "axios";

const RelatedLogos = ({ industry }) => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [matchType, setMatchType] = useState("exact"); // "exact", "keyword", or "fallback"

    // Generate industry keywords for intelligent matching
    const getIndustryKeywords = (industryName) => {
        if (!industryName) return [];

        const keywords = [industryName.toLowerCase()];

        // Add common keyword mappings
        const keywordMap = {
            "it services": ["it", "information technology", "software", "technology", "tech", "digital", "cloud", "saas"],
            "healthcare": ["health", "medical", "hospital", "clinic", "pharmaceutical", "pharma", "doctor", "patient"],
            "banking": ["bank", "finance", "financial", "fintech", "insurance", "lending", "credit"],
            "manufacturing": ["manufacture", "production", "industrial", "factory", "automotive", "engineering"],
            "retail": ["retail", "ecommerce", "e-commerce", "shopping", "consumer", "store"],
            "education": ["education", "learning", "school", "university", "college", "training", "academic"],
            "logistics": ["logistics", "supply chain", "transportation", "shipping", "delivery", "warehouse"],
            "telecommunications": ["telecom", "communication", "network", "mobile", "broadband", "connectivity"],
            "hospitality": ["hotel", "restaurant", "travel", "tourism", "hospitality", "food service"],
            "real estate": ["real estate", "property", "construction", "building", "housing"],
        };

        const lowerIndustry = industryName.toLowerCase();
        for (const [key, values] of Object.entries(keywordMap)) {
            if (lowerIndustry.includes(key) || key.includes(lowerIndustry)) {
                keywords.push(...values);
                break;
            }
        }

        keywords.push(...industryName.toLowerCase().split(/[\s&-]+/));
        return [...new Set(keywords)];
    };

    // Check if logo matches keywords
    const matchesKeywords = (logo, keywords) => {
        const searchText = (logo.heading || "").toLowerCase();
        return keywords.some(keyword => searchText.includes(keyword));
    };

    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/getlogos`
                );
                if (res.data && res.data.length > 0) {
                    // Step 1: Try exact industry match
                    const exactMatches = res.data.filter(
                        (item) => item.industry && item.industry.toLowerCase() === industry.toLowerCase()
                    );

                    if (exactMatches.length >= 5) {
                        setLogos(exactMatches);
                        setMatchType("exact");
                    } else {
                        // Step 2: Try keyword-based matching
                        const keywords = getIndustryKeywords(industry);
                        const keywordMatches = res.data.filter(
                            logo => matchesKeywords(logo, keywords)
                        );

                        if (keywordMatches.length > 0) {
                            // Combine exact matches with keyword matches
                            const combined = [...exactMatches];
                            keywordMatches.forEach(match => {
                                if (!combined.find(c => c._id === match._id)) {
                                    combined.push(match);
                                }
                            });
                            setLogos(combined);
                            setMatchType(exactMatches.length > 0 ? "exact" : "keyword");
                        } else {
                            // Step 3: Fallback to all logos (limit to 15 for visual balance)
                            setLogos(res.data.slice(0, 15));
                            setMatchType("fallback");
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching related logos:", error);
            } finally {
                setLoading(false);
            }
        };

        if (industry) {
            fetchLogos();
        }
    }, [industry]);

    if (loading || logos.length === 0) {
        return null; // Don't show section if no logos found
    }

    return (
        <div className="mb-16 mt-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                {matchType === "exact" ? `Trusted by Leaders in ${industry}` :
                    matchType === "keyword" ? `Related Industry Leaders` :
                        `Trusted by Industry Leaders`}
            </h2>

            {/* Premium Logo Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-white to-blue-50 p-1">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 opacity-20 blur-xl"></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-inner">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>

                    {/* Logos Grid */}
                    <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                        {logos.map((item, index) => (
                            <div
                                key={index}
                                className="group w-full flex justify-center p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-md"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="relative">
                                    <img
                                        src={item.banner}
                                        alt={item.heading || "Client Logo"}
                                        className="max-h-20 max-w-[140px] object-contain grayscale-[60%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 drop-shadow-sm"
                                    />
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-blue-400/0 to-indigo-400/0 group-hover:from-purple-400/10 group-hover:via-blue-400/10 group-hover:to-indigo-400/10 rounded-lg blur-xl transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8 pt-6 border-t border-purple-100 flex items-center justify-center gap-6 flex-wrap">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">{logos.length}+ Trusted Partners</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="font-medium">Industry Leaders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedLogos;
