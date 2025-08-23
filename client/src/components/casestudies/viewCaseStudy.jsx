import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

export default function CaseStudyDetails() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/casestudy/${slug}`)
      .then((res) => res.json())
      .then((data) => setCaseStudy(data))
      .catch((err) => console.error("Error fetching case study:", err));
  }, [slug]);

  if (!caseStudy) {
    return <div className="p-12 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-12 p-12 bg-white">
      {/* Left Card */}
      <div className="md:w-2/4 lg:w-1/4 w-full rounded-2xl shadow-lg p-8 bg-gradient-to-b from-purple-100 to-purple-300 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={caseStudy.images?.logo?.filename}
            alt={caseStudy.heading}
            className="w-38 h-38 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-900 mb-3">
          {caseStudy.heading}
        </h1>
        <p className="text-base font-medium text-purple-800 mb-8 leading-relaxed">
          {caseStudy.subtitle}
        </p>

        {/* Case Study Sections */}
        <div className="text-left mb-8">
          <p className="font-semibold text-base text-purple-800 mb-3">
            IN THIS CASE STUDY:
          </p>
          <ul className="space-y-2 text-base text-purple-900">
            <li className="bg-purple-200 px-3 py-1 rounded-lg inline-block">
              About {caseStudy.heading}
            </li>
            <li>The Challenge</li>
            <li>Job Territory’s Solution</li>
            <li>Results and Impact</li>
            <li>Testimonial</li>
          </ul>
        </div>

        {/* Testimonial */}
        <div className="text-base text-purple-900 italic leading-relaxed">
          {caseStudy.clientTestimonial?.quote}
        </div>
        <p className="text-sm mt-3 font-semibold text-purple-900">
          {caseStudy.clientTestimonial?.author}
        </p>
      </div>

      {/* Right Card */}
      <div className="md:w-2/4 w-full bg-white shadow-lg rounded-2xl p-8 space-y-10">
        {/* Client Background */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Client Background
          </h2>
          <p className="text-base text-gray-700 mt-3 leading-relaxed">
            {caseStudy.clientBackground}
          </p>
        </div>

        {/* Challenge */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Challenge
          </h2>
          <div className="space-y-4 mt-3 text-base text-gray-700">
            {caseStudy.challenge?.map((item) => (
              <div key={item._id}>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Solution Provided by Jobs Territory
          </h2>
          <div className="space-y-4 mt-3 text-base text-gray-700">
            {caseStudy.solution?.map((item) => (
              <div key={item._id}>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="flex items-center gap-2 font-bold text-purple-700 text-xl">
            <Circle className="w-4 h-4 fill-purple-700 text-purple-700" />
            Results Achieved
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
            {caseStudy.resultsAchieved?.map((res) => (
              <div
                key={res._id}
                className="bg-purple-100 rounded-lg p-4 text-center"
              >
                <p className="text-lg font-bold text-purple-800">{res.title}</p>
                <p className="text-sm text-gray-700 mt-1">{res.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
