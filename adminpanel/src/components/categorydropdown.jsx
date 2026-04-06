import { useState, useEffect, useRef } from "react";
import { industries as staticIndustries } from "../config/dropdownOptions";
import { Search, ChevronDown } from "lucide-react";

export const staticCategories = [
    "Recruitment",
    "HR Trends",
    "Industry Insights",
    "Technology",
    "Career Tips",
    "Funding",
];

export default function CategoryDropdown({ value, onChange, className = "" }) {
    const [allCategories, setAllCategories] = useState([...staticCategories, ...staticIndustries]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const fetchDynamicIndustries = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                if (res.ok) {
                    const data = await res.json();
                    const dynamicTitles = data.map(item => item.title);
                    const merged = [...new Set([...staticCategories, ...staticIndustries, ...dynamicTitles])];
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
                className="flex items-center justify-between border border-gray-300 rounded px-2 py-1 text-sm bg-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={value ? "text-gray-900 truncate pr-2 max-w-full" : "text-gray-500"}>
                    {value || "Select Category"}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
            </div>

            {isOpen && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 flex flex-col overflow-hidden min-w-[200px]">
                    <div className="p-2 border-b flex items-center gap-2 sticky top-0 bg-white shadow-sm">
                        <Search className="w-4 h-4 text-gray-400 shrink-0" />
                        <input
                            type="text"
                            className="flex-1 outline-none text-sm min-w-0 bg-transparent"
                            placeholder="Search category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            onKeyDown={(e) => e.stopPropagation()}
                            autoFocus
                        />
                    </div>
                    <div className="overflow-y-auto w-full max-h-48">
                        <div
                            className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer text-gray-500 font-medium"
                            onClick={() => {
                                onChange("");
                                setIsOpen(false);
                            }}
                        >
                            None (Clear Selection)
                        </div>
                        {filteredCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ${value === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
                                onClick={() => {
                                    onChange(category);
                                    setIsOpen(false);
                                    setSearchTerm("");
                                }}
                            >
                                {category}
                            </div>
                        ))}
                        {filteredCategories.length === 0 && (
                            <div className="px-3 py-2 text-sm text-gray-500 text-center italic">No categories found.</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
