import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "#" },
  ];

  const miditems = [
    { name: "Home", path: "/" },

    // { name: "Hire Now", path: "/ContactUs" },
    // { name: "Raas", path: "#" },
  ];

  return (
    <nav className="bg-[#EFEFEF] border-b border-gray-200 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 whitespace-nowrap">
          {/* logo */}
          <a href="https://www.jobsterritory.com/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-36 sm:w-30 lg:w-40 h-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center ">
            <img src="/images/rec1.png" className="h-10" alt="rec-left" />
            <div className="flex items-center bg-white h-10 px-4 space-x-6">
              {menuItems.map((it) =>
                it.name === "Resources" ? (
                  <div key={it.path} className="relative">
                    <button
                      onClick={() => setShowResources(!showResources)}
                      className="text-[#2F1656] text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap hover:underline px-2 py-1"
                    >
                      {it.name}
                    </button>
                    {showResources && (
                      <div className="absolute mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                        <a
                          href="https://www.jobsterritory.com/CaseStudies"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Case Studies
                        </a>
                        <a
                          href="https://www.jobsterritory.com/Blog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          Blogs
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={it.path}
                    href={`https://www.jobsterritory.com${it.path}`}
                    className="whitespace-nowrap"
                  >
                    <span className="text-[#2F1656] text-xs sm:text-sm md:text-base cursor-pointer hover:underline">
                      {it.name}
                    </span>
                  </a>
                )
              )}
            </div>
            <img src="/images/rec2.png" className="h-10" alt="rec-right" />
          </div>

          {/* Tablet Menu */}
          {/* <div className="hidden md:block lg:hidden text-[12px]">
            <div className="flex">
              <img src="/images/rec1.png" className="h-10" alt="rec-left" />
              <div className="flex bg-white items-center gap-5">
                {miditems.map((it) =>
                  it.name === "Resources" ? (
                    <div key={it.path} className="relative">
                      <button
                        onClick={() => setShowResources(!showResources)}
                        className="text-[#2F1656] cursor-pointer whitespace-nowrap hover:underline px-2 py-1"
                      >
                        {it.name}
                      </button>
                      {showResources && (
                        <div className="absolute mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                          <a
                            href="https://www.jobsterritory.com/CaseStudies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            Case Studies
                          </a>
                          <a
                            href="https://www.jobsterritory.com/Blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-gray-200"
                          >
                            Blogs
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={it.path}
                      href={`https://www.jobsterritory.com${it.path}`}
                      className="whitespace-nowrap"
                    >
                      <span className="text-[#2F1656] cursor-pointer hover:underline">
                        {it.name}
                      </span>
                    </a>
                  )
                )}
              </div>
              <img src="/images/rec2.png" className="h-10" alt="rec-right" />
            </div>
          </div> */}

          {/* Desktop CTA Buttons */}
          {/* <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <a
                href="https://www.jobsterritory.com/ContactUs"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-[#1B084C] hover:text-gray-900 transition-colors duration-200 text-sm font-medium w-40 h-10 rounded-[112px] flex items-center justify-center px-4 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/navrec4.png')",
                }}
              >
                Hire Now
              </a>
              <div className="absolute right-0 top-1/2 w-6 h-[5px] bg-white transform translate-x-full -translate-y-1/2"></div>
            </div>
            <div className="bg-white p-2 rounded-full">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Raas
              </a>
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-[#6213FF]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50 absolute top-16 left-0 w-full shadow-md z-[60]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {miditems.slice(0, 4).map((item) => (
                <a
                  key={item.name}
                  href={`https://www.jobsterritory.com${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowResources(!showResources)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md text-sm font-medium"
                >
                  Resources
                </button>
                {showResources && (
                  <div className="ml-4 border-l border-gray-200 pl-4">
                    <a
                      href="https://www.jobsterritory.com/CaseStudies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Case Studies
                    </a>
                    <a
                      href="https://www.jobsterritory.com/Blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm"
                    >
                      Blogs
                    </a>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                <a
                  href="https://www.jobsterritory.com/ContactUs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 text-sm font-medium"
                >
                  Contact Us
                </a>
                <div className="px-3">
                  <a
                    href="https://www.jobsterritory.com/HireNow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
