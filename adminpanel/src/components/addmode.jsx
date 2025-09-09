import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion"; // ✨ Smooth animations

const tableConfig = {
  blogs: [
    { key: "_id", label: "ID" },
    {
      key: "heading",
      label: "Heading",
      render: (val) => (
        <span className="block max-w-[200px] truncate">{val}</span>
      ),
    },

    {
      key: "banner",
      label: "Banner",
      render: (val, row) => (
        <img
          src={val}
          alt={row.heading}
          className="w-20 h-12 object-cover rounded"
        />
      ),
    },
    {
      key: "desc",
      label: "Description",
      render: (val) => (
        <span className="block max-w-[250px] truncate">
          {val ? val.replace(/<[^>]+>/g, "").slice(0, 100) + "..." : "-"}
        </span>
      ),
    },

    { key: "slug", label: "Slug" },

    { key: "schedulepost", label: "Schedule Post", type: "date" },
  ],
  logos: [
    { key: "_id", label: "ID" },
    { key: "heading", label: "Heading" },
    {
      key: "banner",
      label: "Banner",
      render: (val, row) => (
        <img
          src={val}
          alt={row.heading}
          className="w-20 h-12 object-cover rounded"
        />
      ),
    },
   
  ],

  casestudies: [
    { key: "_id", label: "ID" },
    { key: "heading", label: "Heading" },
    { key: "subtitle", label: "Subtitle" },

    // ✅ Images
    {
      key: "images.logo.filename",
      label: "Logo",
      render: (val) => (
        <img src={val} alt="logo" className="w-10 h-10 object-cover rounded" />
      ),
    },
   
    // ✅ New structured fields
    { key: "clientBackground", label: "Client Background" },

    // Arrays → handled as repeatable inputs
    { key: "challenge", label: "Challenges (Array)" },
    { key: "solution", label: "Solutions (Array)" },
    { key: "resultsAchieved", label: "Results Achieved (Array)" },

    // Object → can hold multiple sub-fields
    { key: "clientTestimonial", label: "Client Testimonial" },
    { key: "slug", label: "Slug" },
  ],

  testimonials: [
    { key: "_id", label: "ID" },
    { key: "heading", label: "Heading" },
    {
      key: "banner",
      label: "Banner",
      render: (val, row) => (
        <img
          src={val}
          alt={row.heading}
          className="w-20 h-12 object-cover rounded"
        />
      ),
    },
    {
      key: "message",
      label: "Message",
      render: (val) => (val ? val.slice(0, 100) + "..." : "-"),
    },
  ],

  contactus: [
    { key: "_id", label: "ID" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "company", label: "Company" },
    { key: "jobTitle", label: "Job Title" },
    { key: "linkdin", label: "Linkdin Url" },
    { key: "message", label: "Message" },
  ],
  recruiters: [
    { key: "_id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "company", label: "Company" },
    { key: "requirement", label: "Requirement" },
    { key: "level", label: "Level" },
  ],
};

export default function AddPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const fields = tableConfig[type] || [];

  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState({});

  const handleChange = (e, key) => {
    const { value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({ ...formData, [key]: file });
      setImagePreview({
        ...imagePreview,
        [key]: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [key]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();

      // Loop through formData
      for (const key in formData) {
        const value = formData[key];

        if (value instanceof File) {
          // ✅ File
          formPayload.append(key, value);
        } else if (Array.isArray(value)) {
          // ✅ Array
          if (value.length > 0 && typeof value[0] === "object") {
            // Array of objects → stringify whole array
            formPayload.append(key, JSON.stringify(value));
          } else {
            // Array of strings/numbers → append individually
            value.forEach((v) => formPayload.append(`${key}[]`, v));
          }
        } else if (typeof value === "object" && value !== null) {
          // ✅ Single object → stringify
          formPayload.append(key, JSON.stringify(value));
        } else {
          // ✅ Normal string/number
          formPayload.append(key, value);
        }
      }

console.log(formPayload)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/${type}`,
        {
          method: "POST",
          body: formPayload,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      toast.success(`${type} added successfully!`);
      navigate(`/`);
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side → Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
        >
          <h2 className="text-xl font-bold mb-6 capitalize text-gray-800 border-b pb-3">
            Add {type}
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-5">
            {fields.map(
              ({ key, label, type }) =>
                key !== "_id" &&
                key !== "createdAt" &&
                key !== "updatedAt" && (
                  <div key={key} className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold text-gray-600">
                      {label}
                    </label>

                    {/* Images */}
                    {key === "banner" ||
                    key.includes("image") ||
                    key.includes("logo") ? (
                      <div className="flex flex-col">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleChange(e, key)}
                          className="border p-2 rounded-md bg-gray-50 text-sm"
                        />
                        {imagePreview[key] && (
                          <img
                            src={imagePreview[key]}
                            alt="preview"
                            className="mt-2 w-32 h-20 object-cover rounded-md border"
                          />
                        )}
                      </div>
                    ) : /* Arrays (challenge, solution, resultsAchieved) */
                    key === "challenge" ||
                      key === "solution" ||
                      key === "resultsAchieved" ? (
                      <div className="flex flex-col gap-4">
                        {(formData[key] || []).map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-2 border p-3 rounded-md bg-gray-50"
                          >
                            <input
                              type="text"
                              value={item.icon || ""}
                              onChange={(e) => {
                                const arr = [...(formData[key] || [])];
                                arr[i] = { ...arr[i], icon: e.target.value };
                                setFormData({ ...formData, [key]: arr });
                              }}
                              className="border p-2 rounded-md text-sm"
                              placeholder="Icon (optional)"
                            />
                            <input
                              type="text"
                              value={item.title || ""}
                              onChange={(e) => {
                                const arr = [...(formData[key] || [])];
                                arr[i] = { ...arr[i], title: e.target.value };
                                setFormData({ ...formData, [key]: arr });
                              }}
                              className="border p-2 rounded-md text-sm"
                              placeholder="Title"
                            />
                            <textarea
                              rows="2"
                              value={item.description || ""}
                              onChange={(e) => {
                                const arr = [...(formData[key] || [])];
                                arr[i] = {
                                  ...arr[i],
                                  description: e.target.value,
                                };
                                setFormData({ ...formData, [key]: arr });
                              }}
                              className="border p-2 rounded-md text-sm"
                              placeholder="Description"
                            />

                            {/* Remove button */}
                            <button
                              type="button"
                              className="px-2 bg-red-500 text-white rounded mt-2"
                              onClick={() => {
                                const arr = [...(formData[key] || [])];
                                arr.splice(i, 1);
                                setFormData({ ...formData, [key]: arr });
                              }}
                            >
                              ✕ Remove
                            </button>
                          </div>
                        ))}

                        {/* Add button */}
                        <button
                          type="button"
                          className="px-3 py-1 bg-green-500 text-white rounded text-sm mt-2"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              [key]: [
                                ...(formData[key] || []),
                                { icon: "", title: "", description: "" },
                              ],
                            })
                          }
                        >
                          ➕ Add {label}
                        </button>
                      </div>
                    ) : /* Object (clientTestimonial) */
                    key === "clientTestimonial" ? (
                      <div className="grid gap-2">
                        <input
                          type="text"
                          placeholder="Name"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [key]: {
                                ...(formData[key] || {}),
                                name: e.target.value,
                              },
                            })
                          }
                          className="border p-2 rounded-md text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Designation"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [key]: {
                                ...(formData[key] || {}),
                                designation: e.target.value,
                              },
                            })
                          }
                          className="border p-2 rounded-md text-sm"
                        />
                        <textarea
                          rows="3"
                          placeholder="Testimonial message"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [key]: {
                                ...(formData[key] || {}),
                                message: e.target.value,
                              },
                            })
                          }
                          className="border p-2 rounded-md text-sm"
                        />
                      </div>
                    ) : /* Long text fields */
                    key === "desc" ||
                      key === "message" ||
                      key === "clientBackground" ? (
                      <textarea
                        name={key}
                        rows="3"
                        onChange={(e) => handleChange(e, key)}
                        className="border p-2 rounded-md bg-gray-50 text-sm focus:ring-1 focus:ring-green-500"
                        placeholder={`Enter ${label}`}
                      />
                    ) : (
                      /* Default input */
                      <input
                        type={type || "text"}
                        name={key}
                        onChange={(e) => handleChange(e, key)}
                        className="border p-2 rounded-md bg-gray-50 text-sm focus:ring-1 focus:ring-green-500"
                        placeholder={`Enter ${label}`}
                      />
                    )}
                  </div>
                )
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => navigate(`/admin/${type}`)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-600 text-white text-sm font-semibold rounded-md hover:bg-green-700 shadow-sm"
              >
                Save
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right side → Live Preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
        >
          <h2 className="text-lg font-bold mb-4 text-gray-800 border-b pb-2">
            👀 Live Preview
          </h2>

          <div className="bg-gray-50 rounded-lg shadow-inner p-5 space-y-4">
            {/* Banner priority (if exists) */}
            {imagePreview.banner && (
              <img
                src={imagePreview.banner}
                alt="banner"
                className="w-full h-40 object-cover rounded-lg border mb-3"
              />
            )}

            {/* Loop through all fields dynamically */}
            <div className="space-y-3">
              {fields
                .filter(
                  (f) =>
                    f.key !== "_id" &&
                    f.key !== "createdAt" &&
                    f.key !== "updatedAt"
                )
                .map(({ key, label }) => (
                  <div key={key}>
                    {key === "heading" ? (
                      <h3 className="text-xl font-semibold text-gray-800">
                        {formData[key]}
                      </h3>
                    ) : key === "subtitle" ? (
                      <h4 className="text-md text-gray-600 italic">
                        {formData[key]}
                      </h4>
                    ) : key === "desc" ||
                      key === "message" ||
                      key === "clientBackground" ? (
                      <p className="text-gray-700">{formData[key]}</p>
                    ) : key === "challenge" ||
                      key === "solution" ||
                      key === "resultsAchieved" ? (
                      <div className="space-y-2">
                        {(formData[key] || []).map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2 border rounded-md bg-gray-50 shadow-sm"
                          >
                            {item.icon && (
                              <span className="inline-block mr-2 text-gray-500">
                                {item.icon}
                              </span>
                            )}
                            {item.title && (
                              <h4 className="font-semibold text-gray-800">
                                {item.title}
                              </h4>
                            )}
                            {item.description && (
                              <p className="text-gray-600 text-sm">
                                {item.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : key === "clientTestimonial" ? (
                      formData.clientTestimonial && (
                        <div className="p-3 border rounded-md bg-gray-50">
                          <p className="font-semibold">
                            {formData.clientTestimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formData.clientTestimonial.designation}
                          </p>
                          <p className="italic text-gray-700 mt-1">
                            "{formData.clientTestimonial.message}"
                          </p>
                        </div>
                      )
                    ) : key.includes("image") || key.includes("logo") ? (
                      imagePreview[key] && (
                        <img
                          src={imagePreview[key]}
                          alt={label}
                          className="w-24 h-16 object-cover rounded-md border"
                        />
                      )
                    ) : key === "banner" ? null : (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">{label}: </span>
                        {formData[key] || "-"}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
