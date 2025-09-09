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
          {" "}
          {val ? val.replace(/<[^>]+>/g, "").slice(0, 100) + "..." : "-"}{" "}
        </span>
      ),
    },
    { key: "slug", label: "Slug" },
    {
      key: "createdAt",
      label: "Created At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
    {
      key: "updatedAt",
      label: "Updated At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
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
    {
      key: "images.logo.filename",
      label: "Logo",
      render: (val) => (
        <img src={val} alt="logo" className="w-10 h-10 object-cover rounded" />
      ),
    },
    {
      key: "images.main.filename",
      label: "Main Image",
      render: (val) => (
        <img src={val} alt="main" className="w-20 h-12 object-cover rounded" />
      ),
    },
    {
      key: "postedAt",
      label: "Posted At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
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
    { key: "user", label: "User ID" },
    {
      key: "createdAt",
      label: "Created At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
    {
      key: "updatedAt",
      label: "Updated At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
  ],
  contactus: [
    {
      key: "createdAt",
      label: "Date",
      render: (val) => new Date(val).toLocaleDateString(),
    },
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
    {
      key: "createdAt",
      label: "Date",
      render: (val) => new Date(val).toLocaleDateString(),
    },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "company", label: "Company" },
    { key: "requirement", label: "Requirement" },
    { key: "level", label: "Level" },

    {
      key: "updatedAt",
      label: "Updated At",
      render: (val) => new Date(val).toLocaleDateString(),
    },
  ],
};
const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
export default function OrderTable({ data, type, onDelete, onEdit }) {
  const config = tableConfig[type];

  if (!config) return <p className="p-3 text-center">No config for {type}</p>;
  if (!data || data.length === 0)
    return <p className="p-3 text-center">No data available</p>;

  return (
    <div className="w-full overflow-x-auto h-[71vh]">
      <table className="min-w-full text-left text-sm sm:text-base bg-white">
        <thead className="bg-gray-100">
          <tr>
            {config.map((col) => (
              <th key={col.key} className="p-3 whitespace-nowrap">
                {col.label}
              </th>
            ))}
            <th className="p-3 whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row._id || idx} className="border-b hover:bg-gray-50">
              {config.map((col) => {
                const rawValue = getNestedValue(row, col.key);
                const value = col.render ? col.render(rawValue, row) : rawValue;
                return (
                  <td key={col.key} className="p-3 whitespace-nowrap">
                    {value}
                  </td>
                );
              })}
              <td className="p-3 whitespace-nowrap">
                <button
                  onClick={() => onEdit(row)} // ✅ call parent handler
                  className="text-blue-600 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(row._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

