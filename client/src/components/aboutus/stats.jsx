export default function Stats({ stats }) {
 

  return (
    <section className=" flex justify-center py-12 px-6">
      <div className=" flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5  rounded-2xl shadow border border-[#1B084C] px-6 md:px-12 py-8 w-full max-w-5xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex-1 text-center ${
              index !== stats.length - 1 ? "md:border-r border-[#1B084C]" : ""
            } px-4`}
          >
            <h2 className="text-3xl font-bold text-[#6A1FFF]">{item.number}</h2>
            <p className="text-[#1B084C] mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
