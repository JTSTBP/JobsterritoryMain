import { BarChart3, Users, TrendingUp, Clock } from "lucide-react";

export default function AboutJobsTerritory() {
  const stats = [
    {
      icon: <BarChart3 size={40} />,
      value: "5000+",
      label: "Companies Served",
    },
    {
      icon: <Users size={40} />,
      value: "15000+",
      label: "Successful Placements",
    },
    {
      icon: <TrendingUp size={40} />,
      value: "95%",
      label: "Client Retention",
    },
    {
      icon: <Clock size={40} />,
      value: "48hrs",
      label: "Average Response",
    },
  ];

  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 font-montserrat"
          style={{ color: "#1B084C" }}
        >
          About Jobs Territory
        </h2>

        {/* Description */}
        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
          Jobs Territory is India's leading recruitment agency, specializing in
          connecting exceptional talent with outstanding opportunities. With
          over a decade of experience, we've helped thousands of companies build
          their dream teams.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#DAD4FF] rounded-full w-48 h-48 flex flex-col justify-center items-center mx-auto shadow hover:shadow-lg transition border-[#573BFF]"
            >
              <div style={{ color: "#6A1FFF" }}>{item.icon}</div>
              <h3
                className="text-2xl font-bold mt-2"
                style={{ color: "#6A1FFF" }}
              >
                {item.value}
              </h3>
              <p className="text-gray-800 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
