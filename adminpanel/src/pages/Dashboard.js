
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import OrderTable from "../components/ordertable";
import EditModal from "../components/editmode"; // ✅ new import
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [selected, setSelected] = useState("blogs");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [search, setSearch] = useState("");

  // ✅ new states for edit
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData([]);
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/admin/${selected.toLowerCase()}`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (selected) fetchData();
  }, [selected]);

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/admin/${selected.toLowerCase()}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );

      if (res.ok) {
        setData((prev) => prev.filter((item) => item._id !== id));
        alert("Item deleted successfully ✅");
      } else {
        const err = await res.json();
        alert(err.message || "Failed to delete item ❌");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting item ❌");
    }
  };

  // ✅ new handler for edit
  const handleEdit = (row) => {
    setEditingRow(row);
    setShowEditModal(true);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/adminbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row w-[97%] min-h-[97vh] bg-[#EFEFEF]">
        <Sidebar
          selected={selected}
          onSelect={setSelected}
          mobileOpen={mobileSidebar}
          onClose={() => setMobileSidebar(false)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Navbar
            onMenuClick={() => setMobileSidebar(true)}
            onSearch={setSearch}
          />

          <main className="p-4 sm:p-6 flex-1 overflow-x-auto bg-[#efefef00]">
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 capitalize">
              {selected}
            </h2>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => navigate(`/admin/${selected}/add`)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                + Add {selected}
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="ml-3 text-blue-600 font-medium">
                  Loading {selected}...
                </span>
              </div>
            ) : (
              <>
                <OrderTable
                  data={filteredData}
                  type={selected}
                  onDelete={handleDelete}
                  onEdit={handleEdit} // ✅ pass edit handler
                />
              </>
            )}
          </main>
        </div>
      </div>

      {/* ✅ Edit Modal rendered here */}
      {showEditModal && (
        <EditModal
          row={editingRow}
          type={selected}
          onClose={() => setShowEditModal(false)}
          onSave={(updatedRow) =>
            setData((prev) =>
              prev.map((item) =>
                item._id === updatedRow._id ? updatedRow : item
              )
            )
          }
        />
      )}
    </div>
  );
}
