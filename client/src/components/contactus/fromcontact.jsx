

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    Jobtitle: "",
    linkdin: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/addcontact`,
        formData
      );
      alert(res.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        Jobtitle: "",
        linkdin: "",
        message: "",
        agree: false,
      }); // Show success message
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/50 p-6 md:p-10 font-poppins">
      <form onSubmit={handleSubmit} className="w-full">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B084C] mb-3">Send us a Message</h2>
          <p className="text-gray-500 text-lg">
            We’d love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* First & Last Name */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9999999999"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
          />
        </div>

        {/* Company name */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
          />
        </div>

        {/* Job Title */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">Job Title</label>
          <input
            type="text"
            name="Jobtitle"
            value={formData.Jobtitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-[#1B084C]/80 mb-2">
            LinkedIn URL
          </label>
          <input
            type="text"
            name="linkdin"
            value={formData.linkdin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/..."
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5500FE]/20 focus:border-[#5500FE] transition-all"
          />
          <p className="text-xs text-gray-400 mt-2">
            By submitting this form you agree to be contacted by Jobs Territory via SMS/Email.
          </p>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-10">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-5 h-5 border-gray-300 rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <label className="ml-3 text-sm text-gray-600">
            You agree to our friendly{" "}
            <a href="/privacypolicy" className="text-[#5500FE] font-semibold hover:underline">
              privacy policy
            </a>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
