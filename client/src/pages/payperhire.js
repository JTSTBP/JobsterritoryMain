import React, { useState } from "react";
import Navbar from "../components/home/Navbar";
import Bannersection from "../components/commonsections/bannersection";
import ModernBanner from "../components/commonsections/ModernBanner";
import WhyChooseIndustriesWeHire from "../components/PayPerHire/whychoose";
import IndustriesWeHireProcess from "../components/PayPerHire/process";
import Footer from "../components/home/footer";
import FAQSection from "../components/home/faqs";
import BlogsSection from "../components/commonsections/staticblogs";
import StaticCaestudies from "../components/commonsections/casestdiesstatic";
import IndustriesGrid from "../components/home/industriesgrid";
import { industriesData } from "../constants/industriesData";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../contexts/popupcontext";

const faqData = [
  {
    question: "What industries does Jobs Territory specialize in?",
    icon: "/images/f1.png",
    answer: "We work across a wide range of industries including IT & Technology, BFSI & Fintech, Healthcare & Life Sciences, Manufacturing & Engineering, Retail & E-commerce, Logistics & Supply Chain, GCCs, and high-growth startups.",
  },
  {
    question: "Do you offer industry-specific recruitment solutions?",
    icon: "/images/f2.png",
    answer: "Yes. Our hiring approach is tailored to each industry’s talent requirements, role complexity, and market dynamics. This ensures faster hiring and better candidate fit.",
  },
  {
    question: "Can you support both permanent and contract hiring across industries?",
    icon: "/images/f3.png",
    answer: "Absolutely. We provide permanent hiring, contract staffing, and workforce solutions depending on business needs, scale, and project requirements across industries.",
  },
  {
    question: "Do you handle pan-India hiring?",
    icon: "/images/f4.png",
    answer: "Yes. We support hiring across major cities and regions in India, backed by a strong pan-India talent network and local market understanding.",
  },
  {
    question: "What company sizes do you work with?",
    icon: "/images/f5.png",
    answer: "We work with startups, SMEs, large enterprises, and Global Capability Centers. Our solutions scale based on the size, growth stage, and hiring volume of the organization.",
  },
  {
    question: "How do you ensure candidate quality for different industries?",
    icon: "/images/f6.png",
    answer: "We combine industry-specific screening, role-aligned assessments, and experience-based shortlisting to ensure candidates meet both technical and cultural expectations.",
  },
  {
    question: "Can you support bulk or high-volume hiring?",
    icon: "/images/f7.png",
    answer: "Yes. We have dedicated processes and teams for bulk and volume hiring, especially for industries like manufacturing, logistics, retail, and GCC operations.",
  },
  {
    question: "How do we get started with Jobs Territory?",
    icon: "/images/f8.png",
    answer: "You can reach out through our contact form or speak directly with our team. We’ll understand your industry, roles, and hiring goals before recommending the right solution.",
  },
];
const blogs = [
  {
    id: 1,
    title: "Why Sector-Specific Recruitment is the Key to Scaling Fast",
    slug: "sector-specific-recruitment-scaling-fast",
    image: "/images/blogsimg1.png",
  },
  {
    id: 2,
    title: "Cutting Hiring Costs: The Power of Success-Based Models",
    slug: "cutting-hiring-costs-success-based-models",
    image: "/images/blogsh1.png",
    bg: "#1B084C",
  },
  {
    id: 3,
    title: "Mastering the Talent War: Insights from 25+ Industry Sectors",
    slug: "mastering-talent-war-industry-insights",
    image: "/images/blogimg1.png",
  },
  {
    id: 4,
    title: "The Future of Workforce Solutions in India's Growth Economy",
    slug: "future-workforce-solutions-india-growth",
    image: "/images/blogsh2.png",
    bg: "#1B084C",
  },
  {
    id: 5,
    title: "How to Build a High-Performance Team Without the Overhead",
    slug: "build-high-performance-team-no-overhead",
    image: "/images/blogimg2.png",
  },
  {
    id: 6,
    title: "Diversity & Inclusion: Strengthening Industries Through Inclusive Hiring",
    slug: "diversity-inclusion-strengthening-industries",
    image: "/images/blogsh3.png",
    bg: "#1B084C",
  },
];


const industries = [
  {
    title: "Practo",
    description:
      "How Jobs Territory Helped Practo Hire 42 Healthcare Professionals in Just 2 Months (2021)",
    placements: "2000+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg1.jpg",
    slug: "practo",
  },
  {
    title: "Vogo",
    description:
      "How Jobs Territory Helped Vogo Hire 50+ Customer Support Team Members in 2 Months",
    placements: "800+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg4.jpg",
    slug: "vogo",
  },
  {
    title: "Unacademy",
    description:
      "How Jobs Territory Helped Unacademy Close 84 Business Development Positions in February 2022",
    placements: "700+",
    placements: "1500+",
    bg: "images/bg2.png",
    text: "text-[#FFFFFF]",
    slug: "unacademy",
    img: "/images/casimg7.png",
  },
  {
    title: "Medvarsity",
    description:
      "How Jobs Territory Helped Medvarsity Hire 60+ Academic Counselors in Just 3 Months (2021)",
    placements: "1000+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg2.png",
    slug: "medvarsity",
  },
  {
    title: "PagarBook",
    description:
      "How Jobs Territory Helped PagarBook Hire 81+ Professionals to Power Rapid Expansion",
    placements: "1200+",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg5.jpg",
    slug: "pagarbook",
  },

  {
    title: "Brandstudio",
    description:
      "How Jobs Territory Helped Brandstudio Hire 28+ Professionals to Power Creative Growth",
    placements: "1500+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg8.jpg",
    slug: "brandstudio",
  },
  {
    title: "Urban Ladder",
    description:
      "How Jobs Territory Helped Urban Ladder Hire 25+ Retail and Customer Support Professionals",
    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    large: true,
    img: "/images/casimg3.jpg",
    slug: "urban-ladder",
  },
  {
    title: "FloBiz",
    description:
      "How Jobs Territory Helped FloBiz Hire 150+ Business Development Executives in FY 2021-2022",
    placements: "500+",
    bg: "images/bg4.png",
    text: "text-[#1B084C]",
    img: "/images/casimg6.png",
    slug: "flobiz",
  },
  {
    title: "Zepto",
    description:
      "How Jobs Territory Helped Zepto Close 25 Super Store Manager Positions in Less Than 20 Days",
    placements: "500+",

    bg: "images/bg1.png",
    text: "text-[#FFFFFF]",
    img: "/images/casimg9.png",
    slug: "zepto",
  },
];

const PayperHire = () => {
  const navigate = useNavigate();
  const { openPopup } = usePopup();
  return (
    <div>
      <Navbar />
      <ModernBanner
        heading="Industries We Hire"
        paragraph="Dominate your sector with elite talent. We provide specialized recruitment and workforce solutions across 25+ key industries in India."
        primaryButtonText="Get Started"
        onPrimaryButtonClick={() => navigate("/contactus")}
        industries={[
          { label: "Logistics", img: "/images/logis.png" },
          { label: "Healthcare", img: "/images/health.png" },
          { label: "Technology", img: "/images/infor.png" },
          { label: "Media", img: "/images/media.png" },
          { label: "Finance", img: "/images/bussi.png" },
          { label: "Energy", img: "/images/chemi.png" },
          { label: "Transport", img: "/images/trans.png" },
          { label: "Agriculture", img: "/images/agri.png" },
          { label: "Education", img: "/images/edu.png" }
        ]}
      />
      <WhyChooseIndustriesWeHire />
      <IndustriesWeHireProcess />

      <IndustriesGrid
        industries={industriesData.slice(0, 8)}
        title="Our Sector Expertise"
        description="Agile, industry-specific recruitment solutions that bridge the gap between niche talent requirements and high-growth ambitions."
        showViewAll={true}
        variant="modern"
      />

      <StaticCaestudies industries={industries} separate="true" />
      <BlogsSection blogs={blogs} />
      <FAQSection faqData={faqData} />
      <Footer />
    </div>
  );
};

export default PayperHire;
