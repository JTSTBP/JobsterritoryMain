import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Crown,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";

const Services = () => {
  const cardData = [
    {
      // you can use emoji or image path
      heading: "RAAS — Recruitment as a Service",
      description:
        "Your business deserves more than a recruiter. It deserves a dedicated partner who understands your goals, culture, and vision.",
      points: [
        "Custom Hiring  ",
        "Industry Expertise  ",
        "Scalable Solutions  ",
      ],
      buttonText: "Learn More",
      image: "/images/vec1.png",
      icon: "/images/icon1.png",
      href: "https://raasjobsterritory.com/",
    },
    {
      // you can use emoji or image path
      heading: "Pay Per Hire",
      description: "Hire with confidence—only pay when we deliver results.",
      points: [
        "No Upfront Costs  ",
        "Pay for Results ",
        "Scale on Demand  ",
        "Quality Guarantee  ",
      ],
      buttonText: "Learn More",
      image: "/images/vec2.png",
      icon: "/images/icon2.png",
      href: "/Payperhire",
    },
    {
      // you can use emoji or image path
      heading: "Fractional Hiring",
      description:
        "Leadership on your terms. Access experienced executives—only when you need them.",
      points: [
        "Executive Search Expertise ",
        "Leadership Assessment  ",
        "Confidential Process ",
        "Global Network  ",
      ],
      buttonText: "Learn More",
      image: "/images/vec3.png",
      icon: "/images/icon3.png",
      href: "/FractionHiring",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <section id="services" className=" bg-[#EFEFEF] text-[#1B084C] ">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 "
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

          <h2 className="text-3xl font-bold font-playfair mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto font-poppins">
            Comprehensive recruitment solutions designed to meet your unique
            hiring needs and drive business growth
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // className="flex justify-center flex-wrap items-start gap-8   bg-[#EFEFEF] items-stretch"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch justify-items-center"
      >
        {cardData.map((item, index) => (
          <motion.a
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] 
   p-6 md:p-7 lg:p-8 overflow-hidden rounded-2xl shadow-lg flex flex-col h-full font-poppins"
            style={{
              backgroundImage: "url('/images/oursersam.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 4px 6px -4px rgba(0,0,0,0.1)",
            }}
            href={item.href}
          >
            {/* Card Content */}
            <div className="relative text-[#1B084C] flex flex-col justify-between flex-grow my-[2px] mx-[20px]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-6 h-6 object-contain"
                  />
                  <h2 className="text-xl font-semibold font-playfair">
                    {item.heading}
                  </h2>
                </div>
                <p className="text-sm mb-4">{item.description}</p>

                <div className="space-y-2 mb-6">
                  {item.points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle size={18} className="text-[#6A1FFF]" />
                      {point}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-between px-4 py-2 rounded-full 
                 bg-gradient-to-r from-[#2D274B] to-[#5500FE] hover:bg-purple-700 text-white font-medium"
              >
                {item.buttonText}
                <span className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              </motion.button>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div
          className="  text-white relative overflow-hidden py-16"
          style={{
            backgroundImage: `url('/images/trasfrom.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full"
          />

          <h3 className="text-2xl  mb-4 font-playfair">
            Ready to Transform
            <span className="font-bold"> Your Hiring Process?</span>
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto font-poppins">
            The right hire can rewrite your company’s future. Let’s find the
            people who will take your business to the next level.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-[#1B084C] bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Zap size={20} />
            <span>Get Started Today</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
