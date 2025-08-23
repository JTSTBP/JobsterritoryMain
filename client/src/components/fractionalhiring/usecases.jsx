
import { motion } from "framer-motion";
import { Zap, Shield } from "lucide-react";

export default function ProjectBasedWorkCard() {
const cards = [
  {
    icon: <img className="w-[3rem]" src="/images/cas1.png" />,
    title: "Mission-Critical Projects",
    description:
      "Leaders who’ve launched products, led transformations, and delivered cost-cutting models.",
    points: ["Fast and at scale"],
  },
  {
    icon: <img className="w-[3rem]" src="/images/cas2.png" />,
    title: "Seasonal High-Impact",
    description: "Peak season specialists handling campaigns and compliance.",
    points: [
      "Holiday blitz campaigns",
      "Tax-season compliance",
      "Deployed in under 15 days",
    ],
  },
  {
    icon: <img className="w-[3rem]" src="/images/cas3.png" />,
    title: "Elite Specialist Roles",
    description: "Niche expertise in critical areas delivered by top leaders.",
    points: [
      "Cybersecurity",
      "Compliance",
      "High-profile events",
      "Former CXOs",
      "Award-winning leaders",
    ],
  },
  {
    icon: <img className="w-[3rem]" src="/images/cas4.png" />,
    title: "Interim Leadership",
    description: "Immediate authority to stabilize and drive performance.",
    points: ["CTOs", "Department heads", "Project leads"],
  },
  {
    icon: <img className="w-[3rem]" src="/images/cas5.png" />,
    title: "Risk-Free Trials",
    description: "Prove fit and ROI before committing.",
    points: ["90-day leadership trials", "82% convert to full-time"],
  },
  {
    icon: <img className="w-[3rem]" src="/images/cas6.png" />,
    title: "Rapid Scaling",
    description: "Build teams instantly to seize opportunities.",
    points: [
      "Emergency teams in 72 hours",
      "Project task forces",
      "Beat competitors to market",
    ],
  },
];


    return (
      <div>
        <section className="bg-[#D7CCF5] py-12 px-4 text-[#1B084C]">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold  font-museo">
              Perfect Use Cases
            </h1>
            <p className=" mt-2">Where We Give You the Edge</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#EAE6FA] rounded-2xl p-6 border border-[#D3CCF5] text-left"
                >
                  <div>{card.icon}</div>
                  <h2 className="text-lg font-semibold  mt-3">{card.title}</h2>
                  <p className="text-sm  mt-2 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm  list-disc list-inside">
                    {card.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}
