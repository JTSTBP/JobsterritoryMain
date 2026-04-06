import { useState } from "react";
import ReactQuill from "react-quill";
import IndustryDropdown from "./industrydropdown";
import CategoryDropdown from "./categorydropdown";
import "react-quill/dist/quill.snow.css";

export default function EditModal({ row, type, onClose, onSave }) {
  const htmlToText = (html) => {
    if (!html) return "";
    try {
      const clean = html.replace(/\\r\\n/g, " "); // handle escaped line breaks
      const doc = new DOMParser().parseFromString(clean, "text/html");
      return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
    } catch {
      // fallback: strip tags
      return html
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
  };

  const [formData, setFormData] = useState(() => {
    const cleaned = { ...row };
    if ((type === "logos" || type === "casestudies") && !cleaned.industry) {
      cleaned.industry = "";
    }
    return cleaned;
  });

  const handleArrayChange = (key, index, subKey, value) => {
    const currentArray = [...(formData[key] || [])];
    currentArray[index] = { ...currentArray[index], [subKey]: value };
    setFormData({ ...formData, [key]: currentArray });
  };

  const addArrayItem = (key, newItem) => {
    const currentArray = formData[key] || [];
    setFormData({ ...formData, [key]: [...currentArray, newItem] });
  };

  const removeArrayItem = (key, index) => {
    const currentArray = formData[key] || [];
    setFormData({ ...formData, [key]: currentArray.filter((_, i) => i !== index) });
  };

  const [imagePreview, setImagePreview] = useState({});

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [key]: file });
      setImagePreview({ ...imagePreview, [key]: URL.createObjectURL(file) });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const formPayload = new FormData();

      for (const key in formData) {
        const value = formData[key];

        if (value instanceof File) {
          formPayload.append(key, value);
        } else if (Array.isArray(value)) {
          formPayload.append(key, JSON.stringify(value));
        } else if (typeof value === "object" && value !== null) {
          formPayload.append(key, JSON.stringify(value));
        } else {
          formPayload.append(key, value || "");
        }
      }

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/${type}/${row._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: formPayload,
        }
      );
      if (res.ok) {
        const updated = await res.json();
        onSave(updated);
        onClose();
      } else {
        const errData = await res.json();
        alert(`Update failed: ${errData.message || "Unknown error"} ❌`);
      }
    } catch (err) {
      console.error(err);
      alert("Error updating ❌");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl my-8 flex flex-col max-h-[90vh]">
        {/* Sticky Header */}
        <div className="flex justify-between items-center p-6 border-b bg-white rounded-t-lg sticky top-0 z-10">
          <h2 className="text-2xl font-semibold capitalize">Edit {type}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-bold text-xl p-2"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData).map((key) => {
              if (key === "_id" || key === "createdAt" || key === "updatedAt" || key === "__v" || key.includes(".")) return null;
              // If it's the images object, we'll handle its subfields like logo and main
              if (key === "images" || (type === "casestudies" && key === "images")) {
                return (
                  <div key={key} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded-md bg-gray-50 shadow-inner">
                    <h3 className="md:col-span-2 text-md font-semibold border-b pb-2">Images</h3>
                    {["logo", "main"].map((subKey) => (
                      <div key={subKey} className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-sm border">
                        <label className="text-sm font-medium capitalize">{subKey} Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, `images.${subKey}.filename`)}
                          className="text-xs"
                        />
                        {(imagePreview[`images.${subKey}.filename`] || formData.images?.[subKey]?.filename) && (
                          <img
                            src={imagePreview[`images.${subKey}.filename`] || formData.images?.[subKey]?.filename}
                            alt={subKey}
                            className="w-20 h-12 object-cover rounded border"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              const isDate = key === "schedulepost" || key === "postedAt";
              const isLongText = key === "desc" || key === "message" || key === "clientBackground";
              const isArray = Array.isArray(formData[key]) || key === "challenges" || key === "solutions" || key === "placements_old";
              const isObject = typeof formData[key] === "object" && formData[key] !== null && !isArray;
              const isImage = key === "banner" || key === "img" || key.toLowerCase().includes("logo") || key.toLowerCase().includes("image") || key.toLowerCase().includes("img");

              return (
                <div key={key} className={`flex flex-col ${isLongText || isArray || isObject || isImage ? "md:col-span-2" : ""}`}>
                  <label className="text-sm font-medium mb-1 capitalize">{key}</label>
                  {isLongText ? (
                    <div className="quill-editor">
                      <ReactQuill
                        theme="snow"
                        value={formData[key] || ""}
                        onChange={(value) => setFormData({ ...formData, [key]: value })}
                        className="bg-white rounded"
                      />
                    </div>
                  ) : isImage ? (
                    <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-sm border">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, key)}
                        className="text-xs"
                      />
                      {(imagePreview[key] || formData[key]) && (
                        <img
                          src={imagePreview[key] || formData[key]}
                          alt={key}
                          className="w-32 h-20 object-cover rounded border"
                        />
                      )}
                    </div>
                  ) : isArray ? (
                    <div className="space-y-4 border p-4 rounded-md bg-gray-50 shadow-inner">
                      {Array.isArray(formData[key]) && formData[key].map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-sm border">
                          {Object.keys(item).filter(k => k !== '_id').map(subKey => (
                            <div key={subKey} className="flex flex-col">
                              <label className="text-xs text-gray-500 capitalize">{subKey}</label>
                              {subKey === "description" ? (
                                <textarea
                                  value={item[subKey] || ""}
                                  onChange={(e) => handleArrayChange(key, index, subKey, e.target.value)}
                                  className="border p-1 rounded text-sm w-full"
                                  rows={2}
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={item[subKey] || ""}
                                  onChange={(e) => handleArrayChange(key, index, subKey, e.target.value)}
                                  className="border p-1 rounded text-sm w-full"
                                />
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => removeArrayItem(key, index)}
                            className="text-red-500 text-xs font-bold self-end hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addArrayItem(key, { title: "", description: "", icon: "" })}
                        className="w-full py-2 border-2 border-dashed border-green-400 text-green-600 rounded-md text-sm font-semibold hover:bg-green-100 transition"
                      >
                        + Add Item
                      </button>
                    </div>
                  ) : key === "category" ? (
                    <CategoryDropdown
                      value={formData[key] || ""}
                      onChange={(val) => setFormData({ ...formData, [key]: val })}
                    />
                  ) : key === "industry" ? (
                    <IndustryDropdown
                      value={formData[key] || ""}
                      onChange={(val) => setFormData({ ...formData, [key]: val })}
                    />
                  ) : isObject ? (
                    <div className="grid grid-cols-1 gap-3 border p-4 rounded-md bg-gray-50 shadow-inner">
                      {Object.keys(formData[key]).filter(k => k !== '_id').map(subKey => (
                        <div key={subKey} className="flex flex-col">
                          <label className="text-xs text-gray-500 capitalize">{subKey}</label>
                          {subKey === "quote" ? (
                            <textarea
                              value={formData[key][subKey] || ""}
                              onChange={(e) => setFormData({ ...formData, [key]: { ...formData[key], [subKey]: e.target.value } })}
                              className="border p-1 rounded text-sm w-full bg-white"
                              rows={3}
                            />
                          ) : (
                            <input
                              type="text"
                              value={formData[key][subKey] || ""}
                              onChange={(e) => setFormData({ ...formData, [key]: { ...formData[key], [subKey]: e.target.value } })}
                              className="border p-1 rounded text-sm w-full bg-white"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={isDate ? "date" : "text"}
                      name={key}
                      value={isDate && formData[key] ? new Date(formData[key]).toISOString().split('T')[0] : (formData[key] || "")}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="p-6 flex justify-end gap-4 border-t bg-gray-50 rounded-b-lg sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
