
import React, { useEffect, useState } from "react";
import axios from "axios";

const RelatedLogos = ({ industry }) => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/getlogos`
                );
                if (res.data && res.data.length > 0) {
                    // Filter logos where the industry matches the current industry
                    // Note: The DB field is likely 'industry' based on admin panel config
                    const filtered = res.data.filter(
                        (item) => item.industry === industry
                    );
                    setLogos(filtered);
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
        <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                Trusted by Leaders in {industry}
            </h2>

            {/* Simple Grid Layout for Related Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center bg-white p-8 rounded-xl shadow-sm">
                {logos.map((item, index) => (
                    <div key={index} className="w-full flex justify-center">
                        <img
                            src={item.banner}
                            alt={item.heading || "Client Logo"}
                            className="max-h-20 max-w-[150px] object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedLogos;
