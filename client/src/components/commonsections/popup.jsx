


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const RecruiterPopup = ({ isOpen, onClose }) => {
  // Prevent background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirement: "",
    level: "",
  });

  const [loading, setLoading] = useState(false);


  if (!isOpen) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
 

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/add-recruiter-request`,
        formData
      );

      if (res.status === 200) {
        toast.success("✅ Request submitted successfully!");
   
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          requirement: "",
          level: "",
        });
        setTimeout(() => {
          onClose();
     
        }, 2000);
      }
    } catch (error) {
      toast.error("Error submitting recruiter request");
      console.error("Error submitting recruiter request:", error);
    
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm text-[#1B084C]">
      <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 md:p-12 w-[90%] max-w-3xl relative transform transition-all duration-300 ease-out scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="flex-1 border border-indigo-900 rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              required
              className="flex-1 border border-indigo-900 rounded-md px-4 py-2"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Work Email*"
            required
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Website*"
            required
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="What are you looking for?"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            placeholder="Please specify the position level"
            className="w-full border border-indigo-900 rounded-md px-4 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1B084C] text-white py-2 rounded-md hover:bg-indigo-800 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Get a Dedicated Recruiter"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterPopup;
