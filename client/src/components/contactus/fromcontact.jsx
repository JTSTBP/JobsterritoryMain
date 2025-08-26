// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <section className="bg-white py-12 px-6 flex justify-center text-[#1B084C] font-poppins">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl w-full bg-white rounded-lg mb-[5rem]"
//       >
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
//         <p className="text-center  mb-10">
//           Get in touch, we’d love to hear from you. Please fill out this form.
//         </p>

//         {/* First & Last Name */}
//         <div className="grid md:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium  mb-1">
//               First Name*
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               required
//               className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Last Name*</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               required
//               className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">Email*</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@company.com"
//             required
//             className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Phone Number */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="In +91 9999999999"
//             className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Company name */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">
//             Company Name
//           </label>
//           <input
//             type="text"
//             name="companyname"
//             value={formData.companyname}
//             onChange={handleChange}
//             placeholder="Company Name"
//             className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Job Title */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">Job Title</label>
//           <input
//             type="text"
//             name="Jobtitle"
//             value={formData.Jobtitle}
//             onChange={handleChange}
//             placeholder="Job Title"
//             className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Message
//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">Message*</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Leave us a message"
//             required
//             rows="4"
//             className="w-full border border-purple-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           ></textarea>
//         </div> */}

//         <div className="mb-6">
//           <label className="block text-sm font-medium  mb-1">
//             By providing phone number and submitting this form you are consuming
//             to be contacted by Job Territiory , Inc through SMS message
//           </label>
//           <input
//             type="text"
//             name="linkdin"
//             value={formData.linkdin}
//             onChange={handleChange}
//             placeholder="Linkdin URL"
//             className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Checkbox */}
//         <div className="flex items-center mb-10">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//             className="w-4 h-4  border-gray-300 rounded focus:ring-purple-500"
//           />
//           <label className="ml-2 text-sm ">
//             You agree to our friendly{" "}
//             <a href="#" className=" hover:underline">
//               privacy policy
//             </a>
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-[50%] mx-auto block bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
//         >
//          Contact With Us
//         </button>
//       </form>
//     </section>
//   );
// }

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
    <section className="bg-white py-12 px-6 flex justify-center text-[#1B084C] font-poppins">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white rounded-lg mb-[5rem]"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center  mb-10">
          Get in touch, we’d love to hear from you. Please fill out this form.
        </p>

        {/* First & Last Name */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium  mb-1">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
            className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="In +91 9999999999"
            className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Company name */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Job Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">Job Title</label>
          <input
            type="text"
            name="Jobtitle"
            value={formData.Jobtitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message
        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Leave us a message"
            required
            rows="4"
            className="w-full border border-purple-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div> */}

        <div className="mb-6">
          <label className="block text-sm font-medium  mb-1">
            By providing phone number and submitting this form you are consuming
            to be contacted by Job Territiory , Inc through SMS message
          </label>
          <input
            type="text"
            name="linkdin"
            value={formData.linkdin}
            onChange={handleChange}
            placeholder="Linkdin URL"
            className="w-full border border-purple-400 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-10">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4  border-gray-300 rounded focus:ring-purple-500"
          />
          <label className="ml-2 text-sm ">
            You agree to our friendly{" "}
            <a href="#" className=" hover:underline">
              privacy policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-[50%] mx-auto block bg-gradient-to-r from-[#2D274B] to-[#5500FE] text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
        >
          Contact With Us
        </button>
      </form>
    </section>
  );
}
