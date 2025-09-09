

import { X } from "lucide-react";

export default function Sidebar({ selected, onSelect, mobileOpen, onClose }) {
  const items = [
    { title: "Blogs", key: "blogs" },
    { title: "Case Studies", key: "casestudies" },
    { title: "Testimonials", key: "testimonials" },
    { title: "Logos", key: "logos" },
    { title: "Contact Us", key: "contactus" },
    { title: "Recruiter Requests", key: "recruiters" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white shadow-md p-4 flex-col">
        <div className="mb-6">
          <img
            src="/images/logo.png"
            alt="Jobsterritory Logo"
            className="h-10 object-contain"
          />
        </div>
        <nav className="space-y-4">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className={`w-full text-left ${
                selected === item.key
                  ? "text-red-500 font-semibold"
                  : "text-gray-700 hover:text-red-500"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={onClose}
          ></div>

          {/* Sidebar content */}
          <aside className="relative w-64 bg-white shadow-md p-4 flex flex-col z-50">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="mb-6">
              <img
                src="/images/logo.png"
                alt="Jobsterritory Logo"
                className="h-8 object-contain"
              />
            </div>

            <nav className="space-y-4">
              {items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onSelect(item.key);
                    onClose();
                  }}
                  className={`w-full text-left ${
                    selected === item.key
                      ? "text-red-500 font-semibold"
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
