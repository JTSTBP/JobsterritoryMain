import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../contexts/popupcontext";

const SuccessStories = () => {
  // const [openTestimonial, setOpenTestimonial] = useState(null);

  // const toggleTestimonial = (index) => {
  //   setOpenTestimonial(openTestimonial === index ? null : index);
  // };
  const { openPopup } = usePopup();
  const navigate = useNavigate();

  const stories = [
    {
      logo: "/images/unac.png",
      tags: [
        {
          text: "Academic",
          position:
            "absolute top-[2rem] left-[-7%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Unacademy",
          position:
            "absolute top-[27%] right-0 bg-purple-900 text-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Our Story",
          position:
            "absolute bottom-0 left-[20%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
      ],
      title: "Unacademy",
      sections: [
        {
          icon: "⚙",
          heading: "Challenge",
          description: (
            <>
              "Unacademy needed a strong Biz Dev team to boost subscriptions and
              drive growth."
            </>
          ),
        },
        {
          icon: "💡",
          heading: "Solution",
          description: (
            <>
              "In Feb 2022, Unacademy aimed to hire <strong>84 BDEs</strong>{" "}
              quickly, needing strong communicators with sales skills. The large
              scale and tight timeline called for expert recruitment support.",
            </>
          ),
        },
      ],
      results: [
        "Targeted Sourcing Strategy",
        "Screening & Selection",
        "Seamless Coordination",
        "Optimized Time-to-Hire",
      ],
      testimonial:
        '"The quality of candidates and speed of delivery exceeded our expectations. Jobs Territory truly understands executive search and brought us top talent faster than we imagined." ',
      name: "— Regional Head – Talent Acquisition, Unacademy",
    },
    {
      logo: "/images/neuron.png",
      tags: [
        {
          text: "Manufacturing & Engineering",
          position:
            "absolute top-[2rem] left-[-7%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Neuron",
          position:
            "absolute top-[27%] right-0 bg-purple-900 text-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Our Story",
          position:
            "absolute bottom-0 left-[20%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
      ],
      title: "Neuron Energy",
      sections: [
        {
          icon: "⚙",
          heading: "Challenge",
          description: (
            <>
              "Neuron Energy needed <strong>5+</strong> quick hires in sales,
              ops, and tech—seeking candidates who drive innovation and
              efficiency under a tight timeline."
            </>
          ),
        },
        {
          icon: "💡",
          heading: "Solution",
          description: (
            <>
              "Sourced industry-specific talent, screened for expertise and fit,
              and ensured fast, smooth onboarding."
            </>
          ),
        },
      ],
      results: [
        "Successful Hiring",
        "High-Quality Matches",
        "Strengthened Workforce",
      ],
      testimonial:
        '"Jobs Territory delivered exactly what we needed — skilled professionals who could hit the ground running. The entire process was smooth, transparent, and incredibly fast."',
      name: "— HR Head, Neuron Energy",
    },
    {
      logo: "/images/flobiz.png",
      tags: [
        {
          text: "Financial Technology",
          position:
            "absolute top-[2rem] left-[-7%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "FloBiz",
          position:
            "absolute top-[27%] right-0 bg-purple-900 text-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Our Story",
          position:
            "absolute bottom-0 left-[20%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
      ],
      title: "FloBiz",
      sections: [
        {
          icon: "⚙",
          heading: "Challenge",
          description: (
            <>
              "FloBiz needed <strong>150+ BDEs</strong> in 2021–22 with strong
              SME knowledge and sales skills, requiring a strategic hiring
              partner."
            </>
          ),
        },
        {
          icon: "💡",
          heading: "Solution",
          description: (
            <>
              "Aligned with FloBiz on BDE needs, built a strong talent pipeline,
              screened for sales and SME fit, and ensured fast, tech-enabled
              hiring.",
            </>
          ),
        },
      ],
      results: [
        "150+ Hires in FY 2021-2022",
        "High-Quality Talent",
        "Improved Recruitment Efficiency",
        "Offer Acceptance",
      ],
      testimonial:
        '"From understanding our business needs to delivering exceptional talent, Jobs Territory was a true partner in our hiring journey. Their expertise saved us both time and effort."',
      name: "— Talent Acquisition Manager, FloBiz",
    },
  ];

  return (
    <div>
      <div className="bg-[#f8f8ff] py-12 lg:px-20 font-poppins text-[#1B084C]">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 160, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat inline-block pb-2">
            Success Stories
          </h1>
          <p className="mt-2">
            Real companies. Real transformations.
            <br className="hidden md:block" /> We’ve helped countless businesses
            hire smarter, scale faster, and achieve more.
          </p>
        </motion.div>

        {/* Stories */}
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row flex-wrap items-center justify-evenly md:items-start gap-12 py-10 px-4 border-b border-[#D5CDFF]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div
              className="relative flex-shrink-0 font-montserrat"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-purple-200 flex items-center justify-center">
                <img
                  src={story.logo}
                  alt={story.title}
                  className="w-40 md:w-96"
                />
              </div>
              {story.tags.map((tag, idx) => (
                <span key={idx} className={tag.position}>
                  {tag.text}
                </span>
              ))}
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="flex-1 max-w-full md:max-w-[50%]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                {story.title}
              </h1>

              {/* Challenge + Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {story.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      <span className="text-xl">{section.icon}</span>
                      {section.heading}
                    </h4>
                    <p className="text-gray-700 mt-2">{section.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Results */}
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">☑</span> Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  {story.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      className=" px-4 py-3 rounded-lg shadow-sm border border-[#D5CEFF]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {result}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div
                className="text-left mt-10 cursor-pointer"
                // onClick={() => toggleTestimonial(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Client Testimonial</h4>
                  <motion.span
                    className={`inline-block text-gray-500 text-xl transition-transform duration-300 
                     
                      `}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <IoIosArrowDown />
                  </motion.span>
                </div>

                <motion.p
                  className="mt-4 text-gray-700 italic"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {story.testimonial}
                  <br />
                  <strong>{story.name}</strong>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() => navigate("/casestudies")}
            className=" bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm"
          >
            Explore more
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div
          className="text-white relative overflow-hidden py-16"
          style={{
            backgroundImage: `url('/images/trasfrom.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-2xl mb-4 font-montserrat">
            Ready to Write Your{" "}
            <span className="font-bold">Success Story?</span>
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto font-poppins">
            Join hundreds of companies who have transformed their hiring process
            with Jobs Territory
          </p>
          <motion.button
            onClick={openPopup}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#1B084C] bg-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Zap size={20} />
            <span>Start Your Journey</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessStories;
