import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/herosection";
import ClientLogos from "../components/home/clientslogo";
import Services from "../components/home/ourservices";
import SuccessStories from "../components/home/successstories";
import Testimonial from "../components/home/testimonial";
import IndustriesGrid from "../components/home/industriesgrid";

import Footer from "../components/home/footer";
import FAQSection from "../components/home/faqs";

import { motion, AnimatePresence } from "framer-motion";
import BlogsSection from "../components/commonsections/staticblogs";
import Hero from "../components/home/hero";

const Homepage = ({ openPopup }) => {
  const industries = [
    {
      title: "Technology & Startups",
      description:
        "Software engineers, product managers, data scientists, and tech leaders. 2,000+ placements and counting.",
      placements: "2000+",
      bg: "images/bg1.png",
      text: "text-[#FFFFFF]",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Medical experts, innovators, and compliance leaders making quality care accessible.",
      placements: "800+",
      bg: "images/bg4.png",
      text: "text-[#1B084C]",
    },
    {
      title: "E-Commerce & Retail",
      description:
        "Digital marketing, operations, supply chain, and customer experience professionals.",
      placements: "1500+",
      bg: "images/bg2.png",
      text: "text-[#FFFFFF]",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Banking, insurance, fintech, and investment professionals who drive stability and growth.",
      placements: "1000+",
      bg: "images/bg5.png",
      text: "text-[#1B084C]",
    },
    {
      title: "Engineering & Manufacturing",
      description:
        "Mechanical, electrical, industrial engineers, and production managers who optimize operations.",
      placements: "1200+",
      bg: "images/bg3.png",
      text: "text-[#1B084C]",
    },

    {
      title: "Media & Creative",
      description:
        "Content creators, marketers, and storytellers who inspire audiences.",
      placements: "1500+",
      bg: "images/bg6.png",
      text: "text-[#FFFFFF]",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Professionals ensuring your operations run on time, on budget, and without disruption.",
      placements: "700+",
      bg: "images/bg7.png",
      large: true,
      text: "text-[#FFFFFF]",
    },
    {
      title: "Real Estate",
      description:
        "Strategic leaders in development, sales, marketing, and investment who deliver measurable returns.",
      placements: "500+",
      bg: "images/bg8.png",
      text: "text-[#1B084C]",
    },
  ];
  const blogs = [
    {
      id: 1,
      title: "how-to-attract-and-retain-top-c-suite-talent",
      image: "/images/blogsimg1.png",
    },
    {
      id: 2,
      title: "importance-of-executive-search-for-c-suite-ro",
      image: "/images/blogsimg.png",
      bg: "#1B084C",
    },
    {
      id: 3,
      title: "c-suite-hiring-trends-in-tech-healthcare",
      image: "/images/blogimg1.png",
    },
    {
      id: 4,
      title: "importance-of-executive-search-for-c-suite-ro",
      image: "/images/blogsh1.png",
      bg: "#1B084C",
    },
    {
      id: 5,
      title: "how-to-attract-and-retain-top-c-suite-talent",
      image: "/images/blogimg2.png",
    },
    {
      id: 6,
      title: "importance-of-executive-search-for-c-suite-ro",
      image: "/images/blogsh2.png",
      bg: "#1B084C",
    },

    {
      id: 7,
      title: "pay-per-hire-a-fix-for-costly-hiring",
      image: "/images/blogsimg1.png",
    },
    {
      id: 8,
      title: "pay-per-hire-smarter-hiring-better-roi",
      image: "/images/blogsh3.png",
      bg: "#1B084C",
    },
    {
      id: 9,
      title: "fast-hiring-no-upfront-fees",
      image: "/images/blogimg1.png",
    },
    {
      id: 10,
      title: "pay-per-hire-trend-or-future-of-hiring",
      image: "/images/blogsh1.png",
      bg: "#1B084C",
    },
    {
      id: 11,
      title: "is-pay-per-hire-changing-recruitment-forever",
      image: "/images/blogimg2.png",
    },
    {
      id: 12,
      title: "how-pay-per-hire-can-cut-hiring-costs-by-50percent",
      image: "/images/blogsh2.png",
      bg: "#1B084C",
    },
  ];

  const faqData = [
    {
      question: "How does Recruitment as a service (RAAS) work?",
      icon: "/images/f1.png",
      answer:
        "Recruitment as a Service (RaaS) provides on-demand hiring support with flexible pricing and dedicated recruiting experts.",
    },
    {
      question: "What is Pay Per Hire and how does pricing work?",
      icon: "/images/f2.png",
      answer:
        "Pay Per Hire allows you to pay only for successful placements. Pricing is based on the role and level of expertise required.",
    },
    {
      question: "What type of industries do you serve?",
      icon: "/images/f3.png",
      answer:
        "We serve multiple industries including IT, Healthcare, Finance, Manufacturing, and more.",
    },
    {
      question: "How fast is your hiring turnaround time?",
      icon: "/images/f4.png",
      answer:
        "Our average hiring turnaround time is 2–4 weeks depending on the role and complexity.",
    },
    {
      question: "How do you ensure candidate quality and cultural fit?",
      icon: "/images/f5.png",
      answer:
        "We conduct multiple interview rounds, skills assessments, and cultural fit analysis to ensure quality hires.",
    },
    {
      question: "How do I get started with Jobs Territory?",
      icon: "/images/f6.png",
      answer:
        "Simply contact us, share your hiring needs, and our team will onboard you within 24 hours.",
    },
    {
      question: "What guarantees do you provide?",
      icon: "/images/f7.png",
      answer:
        "We provide replacement guarantees for a set period in case the hired candidate leaves early.",
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <Hero /> */}
      <ClientLogos />
      <Services />
      <SuccessStories />
      <Testimonial />
      <IndustriesGrid industries={industries} />

      <BlogsSection blogs={blogs} />
      <FAQSection faqData={faqData} />

      {/* Bottom CTA Section */}
      <section
        className="relative bg-cover bg-center text-center bg-[#EFEFEF]"
        style={{
          backgroundImage: "url('/images/footbg.png')",
          backgroundPosition: "unset",
        }}
      >
        <div className="py-24 px-4 relative overflow-hidden">
          {/* Animated BG Elements */}
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
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-8 w-6 h-6 bg-white/10 rounded-full"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light text-white mb-4 font-montserrat"
            >
              Still Have <span className="font-bold">Questions?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8"
            >
              Our recruitment experts are here to help. Get in touch for a
              personalized consultation about your hiring needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4 font-montserrat"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1B084C] font-medium py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
              >
                Contact experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1B084C] font-medium py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
              >
                Schedule call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
