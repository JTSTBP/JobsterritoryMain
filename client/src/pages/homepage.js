import React, { useEffect, useState } from "react";
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
import IndustryCTA from "../components/home/industrycta";

import Hero from "../components/home/hero";
import { usePopup } from "../contexts/popupcontext";
import { useLocation, useNavigate } from "react-router-dom";
import BannerSection from "../components/home/bannersection";

const Homepage = () => {
  const { openPopup } = usePopup();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Delay ensures testimonials section is rendered first
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // 300–400ms delay works best
    }
  }, [location]);
  const [dynamicIndustries, setDynamicIndustries] = useState([]);

  useEffect(() => {
    const fetchDynamicIndustries = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
        if (res.ok) {
          const data = await res.json();
          setDynamicIndustries(data);
        }
      } catch (err) {
        console.error("Error fetching industries:", err);
      }
    };
    fetchDynamicIndustries();
  }, []);
  // ... (rest of imports and code above remains, I will target the Return statement area primarily)

  // Actually, I should use 2 replace calls if I can't match the whole block easily.
  // One for Import, one for Section.
  // replace_file_content only does ONE contiguous block.
  // So I'll use multi_replace_file_content.


  const staticIndustries = [
    {
      title: "Technology & Startups",
      description:
        "Software engineers, product managers, data scientists, and tech leaders driving innovation.",
      placements: "2000+",
      bg: "images/bg1.png",
      text: "text-[#FFFFFF]",
      slug: "information-technology",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Medical experts, innovators, and compliance leaders making quality care accessible.",
      placements: "800+",
      bg: "images/bg4.png",
      text: "text-[#1B084C]",
      slug: "healthcare",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "E-Commerce & Retail",
      description:
        "Digital marketing, operations, supply chain, and customer experience professionals.",
      placements: "1500+",
      bg: "images/bg2.png",
      text: "text-[#FFFFFF]",
      slug: "retail",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Banking & Financial Services",
      description:
        "Banking, insurance, fintech, and investment professionals who drive stability and growth.",
      placements: "1000+",
      bg: "images/bg5.png",
      text: "text-[#1B084C]",
      slug: "finance",
      img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Media & Creative",
      description:
        "Content creators, marketers, and storytellers who inspire audiences worldwide.",
      placements: "1500+",
      bg: "images/bg8.png",
      text: "text-[#1B084C]",
      slug: "media-entertainment",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Professionals ensuring your operations run on time, on budget, and without disruption.",
      placements: "700+",
      bg: "images/bg7.png",
      large: true,
      text: "text-[#FFFFFF]",
      slug: "logistics-supply-chain",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real Estate",
      description:
        "Strategic leaders in development, sales, marketing, and investment delivering measurable returns.",
      placements: "500+",
      bg: "images/bg8.png",
      text: "text-[#1B084C]",
      slug: "real-estate",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Renewable Energy",
      description:
        "Visionary leaders in solar, wind, and clean energy driving sustainability and measurable impact.",
      placements: "500+",
      bg: "images/bg6.png",
      text: "text-[#FFFFFF]",
      slug: "energy",
      img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const allIndustries = [...staticIndustries, ...dynamicIndustries];


  const faqData = [
    // {
    //   question: "How does Recruitment as a service (RAAS) work?",
    //   icon: "/images/f1.png",
    //   answer:
    //     "Recruitment as a Service (RaaS) provides on-demand hiring support with flexible pricing and dedicated recruiting experts.",
    // },
    // {
    //   question: "What is Pay Per Hire and how does pricing work?",
    //   icon: "/images/f2.png",
    //   answer:
    //     "Pay Per Hire allows you to pay only for successful placements. Pricing is based on the role and level of expertise required.",
    // },
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
      {/* <HeroSection /> */}
      {/* <Hero /> */}
      <BannerSection />
      <ClientLogos />
      {/* <Services /> */}
      <Testimonial />
      <IndustriesGrid industries={allIndustries} />

      <FAQSection faqData={faqData} />


      <Footer />
    </div >
  );
};

export default Homepage;
