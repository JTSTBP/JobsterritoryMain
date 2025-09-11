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
      logo: "/images/casimg9.png",
      tags: [
        {
          text: "Quick Commerce",
          position:
            "absolute top-[2rem] left-[-7%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Zepto",
          position:
            "absolute top-[27%] right-0 bg-purple-900 text-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Our Story",
          position:
            "absolute bottom-0 left-[20%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
      ],
      title: "Zepto",
      sections: [
        {
          icon: "⚙",
          heading: "Challenge",
          description: (
            <>
              "Zepto faced the challenge of filling <strong>25 </strong>
              positions within 20 days to meet aggressive expansion goals in a
              competitive quick-commerce industry."
            </>
          ),
        },
        {
          icon: "💡",
          heading: "Solution",
          description: (
            <>
              "Leveraged an extensive database of pre-vetted candidates and
              implemented a multi-channel sourcing strategy, including targeted
              job postings, professional network outreach, and referrals."
            </>
          ),
        },
      ],
      results: [
        "Positions Filled in 18 Days",
        "Quality Hires",
        "Seamless Onboarding",
      ],
      testimonial:
        '"Jobs Territory exceeded our expectations by helping us fill 25 critical positions in less than 20 days. Their proactive approach, attention to detail, and seamless coordination were instrumental in meeting our expansion goals. We couldn’t have done it without them!"',
      name: "HR Head, Zepto",
    },
    {
      logo: "/images/pagar.png",
      tags: [
        {
          text: "Workforce Management",
          position:
            "absolute top-[2rem] left-[-7%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "PagarBook",
          position:
            "absolute top-[27%] right-0 bg-purple-900 text-white px-3 py-1 shadow-md rounded text-base",
        },
        {
          text: "Our Story",
          position:
            "absolute bottom-0 left-[20%] bg-white px-3 py-1 shadow-md rounded text-base",
        },
      ],
      title: "PagarBook",
      sections: [
        {
          icon: "⚙",
          heading: "Challenge",
          description: (
            <>
              "Required <strong>81+</strong> professionals across sales,
              customer support, operations, and tech departments."
            </>
          ),
        },
        {
          icon: "💡",
          heading: "Solution",
          description: (
            <>
              "Identified and engaged candidates from fintech, SaaS, and
              customer success backgrounds.",
            </>
          ),
        },
      ],
      results: [
        "81+ Positions Filled",
        "High-Quality Hires",
        "Enhanced Efficiency",
      ],
      testimonial:
        '"Jobs Territory helped us onboard 81+ skilled professionals efficiently, ensuring a seamless hiring process. Their expertise in volume hiring made a significant impact on our company’s growth. Highly recommended!"',
      name: "-HR Manager, PagarBook",
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
            className="text-[#1B084C] bg-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
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
