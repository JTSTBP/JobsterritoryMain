import { useState, useEffect } from "react";
import { industries as staticIndustries } from "../config/dropdownOptions";

export default function IndustryDropdown({ value, onChange, className = "" }) {
    const [allIndustries, setAllIndustries] = useState(staticIndustries);

    useEffect(() => {
        const fetchDynamicIndustries = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                if (res.ok) {
                    const data = await res.json();
                    // Extract titles from dynamic industries and merge with static list, removing duplicates
                    const dynamicTitles = data.map(item => item.title);
                    const merged = [...new Set([...staticIndustries, ...dynamicTitles])];
                    setAllIndustries(merged);
                }
            } catch (err) {
                console.error("Error fetching dynamic industries:", err);
            }
        };
        fetchDynamicIndustries();
    }, []);

    return (
        <div className={`flex flex-col ${className}`}>
            <select
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
                <option value="">Select Industry</option>
                {allIndustries.map((industry, index) => (
                    <option key={index} value={industry}>
                        {industry}
                    </option>
                ))}
            </select>
        </div>
    );
}
