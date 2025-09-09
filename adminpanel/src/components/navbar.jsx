
import { useState } from "react";
import { ChevronDown, Settings, Menu } from "lucide-react";

export default function Navbar({ onMenuClick, onSearch }) {
  const [open, setOpen] = useState(false);

   const handleLogout = () => {
     // 🔹 Clear login info from localStorage
     localStorage.removeItem("isadmin");
     localStorage.removeItem("adminToken");

     // 🔹 Redirect to login page
     window.location.href = "/login";
   };

  return (
    <div className="w-full bg-white shadow-sm px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)} // 🔹 call parent
          className="w-full sm:w-48 border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Right: Settings + Profile */}
      <div className="flex items-center gap-3 relative">
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2"
        >
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-700">
            Admin
          </span>
          <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:inline" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-[-70px] sm:right-0 top-[25px]  mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
            <a
              href="#profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
