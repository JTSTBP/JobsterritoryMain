import React, { useEffect } from "react";

const ThankYouPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => onClose(), 3000); // auto close in 3s
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);
  console.log(isOpen,"isopen")

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-sm text-center relative animate-fade-in">
        <h2 className="text-lg sm:text-xl font-semibold text-[#1B084C] mb-2">
          🎉 Thanks for subscribing Josterritory!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          📩 Your mail is received. We’ll get back to you soon.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPopup;
