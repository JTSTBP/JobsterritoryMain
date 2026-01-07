import { useState } from "react";

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
    // We keep the original values, but for representation in simple inputs, 
    // we might want to clean some, but stripping everything is bad for descriptions.
    return cleaned;
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/${type}/${row._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        const updated = await res.json();
        onSave(updated);
        onClose();
      } else {
        alert("Update failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating ❌");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold capitalize">Edit {type}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-bold text-xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => {
            if (key === "_id" || key === "createdAt" || key === "updatedAt" || key === "__v") return null;

            const isDate = key === "schedulepost" || key === "postedAt";
            const isLongText = key === "desc" || key === "message" || key === "clientBackground";

            return (
              <div key={key} className={`flex flex-col ${isLongText ? "md:col-span-2" : ""}`}>
                <label className="text-sm font-medium mb-1 capitalize">{key}</label>
                {isLongText ? (
                  <textarea
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleChange}
                    rows={5}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
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

        <div className="mt-6 flex justify-end gap-4">
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
