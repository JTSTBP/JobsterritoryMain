import { industries } from "../config/dropdownOptions";

export default function IndustryDropdown({ value, onChange, className = "" }) {
    return (
        <div className={`flex flex-col ${className}`}>
            <select
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
                <option value="">Select Industry</option>
                {industries.map((industry, index) => (
                    <option key={index} value={industry}>
                        {industry}
                    </option>
                ))}
            </select>
        </div>
    );
}
