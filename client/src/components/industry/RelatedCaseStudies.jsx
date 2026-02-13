
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RelatedCaseStudies = ({ industry }) => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [matchType, setMatchType] = useState("exact"); // "exact", "keyword", or "fallback"
    const navigate = useNavigate();

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

        // Check if industry matches any known mappings
        const lowerIndustry = industryName.toLowerCase();
        for (const [key, values] of Object.entries(keywordMap)) {
            if (lowerIndustry.includes(key) || key.includes(lowerIndustry)) {
                keywords.push(...values);
                break;
            }
        }

        // Split multi-word industries
        keywords.push(...industryName.toLowerCase().split(/[\s&-]+/));

        return [...new Set(keywords)]; // Remove duplicates
    };

    // Calculate relevance score for a case study
    const calculateScore = (study, keywords) => {
        let score = 0;
        const searchableText = [
            study.heading || "",
            study.subtitle || "",
            study.clientBackground || "",
            ...(study.challenge || []).map(c => `${c.title} ${c.description}`),
            ...(study.solution || []).map(s => `${s.title} ${s.description}`),
        ].join(" ").toLowerCase();

        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, "gi");
            const matches = searchableText.match(regex);
            if (matches) {
                score += matches.length;
            }
        });

        return score;
    };

    // Helper: short text
    const textPreview = (text, len = 100) => {
        if (!text) return "";
        const clean = text.replace(/<[^>]+>/g, " "); // strip HTML tags
        return clean.length > len ? clean.slice(0, len) + "…" : clean;
    };

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/getcasestudies`
                );
                if (res.data && res.data.length > 0) {
                    // Step 1: Try exact industry match
                    const exactMatches = res.data.filter(
                        (item) => item.industry && item.industry.toLowerCase() === industry.toLowerCase()
                    );

                    if (exactMatches.length >= 3) {
                        setCaseStudies(exactMatches.slice(0, 3));
                        setMatchType("exact");
                    } else {
                        // Step 2: Try keyword-based matching
                        const keywords = getIndustryKeywords(industry);
                        const scoredStudies = res.data
                            .map(study => ({
                                ...study,
                                score: calculateScore(study, keywords)
                            }))
                            .filter(study => study.score > 0)
                            .sort((a, b) => b.score - a.score);

                        if (scoredStudies.length > 0) {
                            // Combine exact matches with keyword matches
                            const combined = [...exactMatches];
                            scoredStudies.forEach(scored => {
                                if (!combined.find(c => c._id === scored._id) && combined.length < 3) {
                                    combined.push(scored);
                                }
                            });
                            setCaseStudies(combined.slice(0, 3));
                            setMatchType(exactMatches.length > 0 ? "exact" : "keyword");
                        } else {
                            // Step 3: Fallback to most recent case studies
                            setCaseStudies(res.data.slice(0, 3));
                            setMatchType("fallback");
                        }
                    }
                }
            } catch (err) {
                console.error("Error fetching related case studies:", err);
            } finally {
                setLoading(false);
            }
        };

        if (industry) {
            fetchStudies();
        }
    }, [industry]);

    if (loading || caseStudies.length === 0) {
        return null;
    }

    return (
        <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {matchType === "exact" ? `Success Stories in ${industry}` :
                    matchType === "keyword" ? `Related Success Stories` :
                        `Featured Success Stories`}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                    <div
                        key={study._id}
                        className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-purple-100 transform hover:-translate-y-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => navigate(`/casestudy/${study.slug}`)}
                    >
                        {/* Gradient Accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

                        {/* Logo Area with Gradient Background */}
                        <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-6 overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>

                            {study?.images?.logo?.filename ? (
                                <img
                                    src={study.images.logo.filename}
                                    alt={study.heading}
                                    className="relative z-10 h-28 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">{study.heading?.[0] || "?"}</span>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 relative">
                            <h3 className="font-bold text-xl mb-3 text-[#1B084C] line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                                {study.title || study.heading}
                            </h3>
                            <p className="text-sm text-purple-600 font-semibold mb-3 uppercase tracking-wide">{study.subtitle}</p>
                            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                {textPreview(study.clientBackground)}
                            </p>

                            {/* CTA */}
                            <div className="mt-5 pt-5 border-t border-purple-100 flex items-center justify-between">
                                <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors">Read Full Story</span>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedCaseStudies;
