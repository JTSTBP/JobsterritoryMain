export default function Stats() {
  const stats = [
    { number: "15000+", label: "Successful Hires" },
    { number: "100%", label: "Service Commitment" },
    { number: "500+", label: "Leadership Roles Closed" },
    { number: "20+", label: "Locations Covered" },
  ];

  return (
    <section className="w-full flex justify-center py-12 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 bg-white rounded-2xl shadow border border-gray-200 px-6 md:px-12 py-8 w-full max-w-5xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex-1 text-center ${
              index !== stats.length - 1 ? "md:border-r border-gray-300" : ""
            } px-4`}
          >
            <h2 className="text-3xl font-bold text-purple-600">
              {item.number}
            </h2>
            <p className="text-gray-800 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
