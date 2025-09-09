export default function HowItWorks() {
  const steps = [
    {
      icon: "/images/cas1.png", // Replace with actual SVG if needed
      title: "Share JD ",
      description:
        "We align on role scorecards, must-haves, and nice-to-haves.",
    },
    {
      icon: "/images/cas2.png",
      title: "Get Profiles (72 hrs)",
      description: "Pre-screened candidates delivered to your inbox and ATS.",
    },
    {
      icon: "/images/cas3.png",
      title: "Interview & Select",
      description:
        "We manage scheduling, feedback, and next steps end-to-end.  ",
    },
    {
      icon: "/images/cas4.png",
      title: "Closures Unlimited  ",
      description: "Keep your pipeline full until every seat is closed.",
    },
  ];

  return (
    <div>
      <section className="bg-[#D5CDFF] py-12 px-6 text-[#1B084C]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <h1 className="  text-3xl sm:text-4xl font-bold font-montserrat">
              HOW RAAS WORKS
            </h1>
            <p className="font-semibold">
              Our rapid, precision driven hiring process delivers the right
              talent exactly when you need it — perfectly aligned to your
              culture and goals — saving you weeks of effort and driving results
              from day one.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-purple-200 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
              >
                <div className=" mb-4">
                  <img className="w-[4rem]" src={step.icon} />
                </div>
                <h3 className="text-lg text-2xl font-semibold  mb-2">
                  {step.title}
                </h3>
                <p className=" text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      {/* <section className="py-16 bg-gray-50 text-[#1B084C]" id="pricing">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-10 font-montserrat">
            Simple, Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="bg-white rounded-2xl shadow p-8 ">
              <h3 className="text-xl font-semibold mb-4 ">RAAS Unlimited</h3>
              <p className="text-2xl font-bold mb-4 text-[#6A1FFF]">
                <span className="text-[#6A1FFF]">✔</span> ₹2,00,000 / month
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> 2 recruiters + 1
                  account manager
                </li>
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> Unlimited roles &
                  closures
                </li>
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> Pre-screened
                  profiles in 72 hrs
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                Book a Discovery Call
              </button>
            </div>

          
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-xl font-semibold mb-4 ">
                Custom RAAS Enterprise
              </h3>
              <p className="text-2xl font-bold mb-4 text-[#6A1FFF]">
                ₹3–5L / month
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> 3–5 recruiters for
                  larger teams
                </li>
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> Priority SLAs
                </li>
                <li>
                  {" "}
                  <span className="text-[#6A1FFF]">✔</span> Advanced reporting
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
