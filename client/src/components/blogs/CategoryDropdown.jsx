import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown } from "lucide-react";
import axios from "axios";

// This matches the static list used in the admin panel
export const staticCategories = [
    "Recruitment",
    "HR Trends",
    "Industry Insights",
    "Technology",
    "Career Tips",
    "Funding",
];

export const staticIndustries = [
    "Information Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Hospitality",
    "Real Estate",
    "Automotive",
    "Telecommunications",
    "Energy",
    "Logistics & Supply Chain",
    "E-commerce",
    "Marketing & Advertising",
    "Construction",
    "Pharmaceuticals",
    "Media & Entertainment",
    "Insurance",
    "Legal Services",
    "Human Resources",
    "Banking",
    "Food & Beverage",
    "Aerospace & Defense",
    "Agriculture",
    "Chemicals",
    "Consulting",
    "Gaming",
    "Biotechnology",
    "Non-Profit",
];

export default function CategoryDropdown({ value, onChange, className = "" }) {
    const [allCategories, setAllCategories] = useState(["All", ...staticCategories, ...staticIndustries]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchDynamicIndustries = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                if (res.data) {
                    const dynamicTitles = res.data.map(item => item.title);
                    // Combine All, static, and dynamic industries, ensuring uniqueness
                    const merged = [...new Set(["All", ...staticCategories, ...staticIndustries, ...dynamicTitles])];
                    setAllCategories(merged);
                }
            } catch (err) {
                console.error("Error fetching dynamic industries for categories:", err);
            }
        };
        fetchDynamicIndustries();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCategories = allCategories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`relative flex flex-col ${className}`} ref={dropdownRef}>
            <div
                className="flex items-center justify-between border border-gray-300 rounded-xl py-2.5 px-4 bg-white cursor-pointer shadow-sm hover:border-purple-400 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={value && value !== "All" ? "text-gray-900 truncate pr-2 max-w-full font-medium" : "text-gray-500"}>
                    {value === "All" || !value ? "All Categories" : value}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
            </div>

            {isOpen && (
                <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-72 flex flex-col overflow-hidden min-w-[220px]">
                    <div className="p-3 border-b flex items-center gap-2 sticky top-0 bg-gray-50 shadow-sm">
                        <Search className="w-4 h-4 text-gray-400 shrink-0" />
                        <input
                            type="text"
                            className="flex-1 outline-none text-sm min-w-0 bg-transparent border-none focus:ring-0"
                            placeholder="Search category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                            autoFocus
                        />
                    </div>
                    <div className="overflow-y-auto w-full max-h-56 scrollbar-thin scrollbar-thumb-purple-200">
                        {filteredCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`px-4 py-3 text-sm transition-colors hover:bg-purple-50 cursor-pointer ${value === category || (category === "All" && (!value || value === "All")) ? 'bg-purple-100 text-purple-700 font-bold' : 'text-gray-700'}`}
                                onClick={() => {
                                    onChange(category);
                                    setIsOpen(false);
                                    setSearchTerm("");
                                }}
                            >
                                {category === "All" ? "All Categories" : category}
                            </div>
                        ))}
                        {filteredCategories.length === 0 && (
                            <div className="px-4 py-4 text-sm text-gray-400 text-center italic">No matches found.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
