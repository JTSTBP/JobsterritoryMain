
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RelatedCaseStudies = ({ industry }) => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                if (res.data) {
                    // Filter case studies where the industry matches
                    const filtered = res.data.filter(
                        (item) => item.industry === industry
                    );
                    // Limit to 3 for the "Related" section
                    setCaseStudies(filtered.slice(0, 3));
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
                Success Stories in {industry}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study) => (
                    <div
                        key={study._id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer border border-gray-100"
                        onClick={() => navigate(`/casestudy/${study.slug}`)}
                    >
                        {/* Logo Area */}
                        <div className="h-40 flex items-center justify-center bg-gray-50 p-4 border-b border-gray-100">
                            {study?.images?.logo?.filename ? (
                                <img
                                    src={study.images.logo.filename}
                                    alt={study.heading}
                                    className="h-24 w-auto object-contain"
                                />
                            ) : (
                                <span className="text-gray-400">No Logo</span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="font-semibold text-lg mb-2 text-[#1B084C] line-clamp-2">
                                {study.title || study.heading}
                            </h3>
                            <p className="text-sm text-purple-600 font-medium mb-2">{study.subtitle}</p>
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {textPreview(study.clientBackground)}
                            </p>

                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                                <span>Read Case Study →</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedCaseStudies;
