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
    question: "What is Industries We Hire recruitment?",
    icon: "/images/f1.png",
    answer:
      "Industries We Hire is a traditional recruitment model where you only pay once we successfully fill a position with the right candidate.",
  },
  {
    question: "How does Jobs Territory’s Industries We Hire service work?",
    icon: "/images/f2.png",
    answer:
      "We source, screen, and present qualified candidates. Once you select and onboard a candidate, you pay the agreed placement fee.",
  },
  {
    question: "What types of roles can I hire under Industries We Hire?",
    icon: "/images/f3.png",
    answer:
      "From entry-level to leadership roles across industries like e-commerce, FMCG, fashion, healthcare, and more.",
  },
  {
    question: "Is there a guarantee period for new hires?",
    icon: "/images/f4.png",
    answer:
      "Yes, we offer a replacement guarantee within a specific time frame if the candidate leaves or doesn’t perform as expected.",
  },
  {
    question: "What makes Industries We Hire cost-effective?",
    icon: "/images/f5.png",
    answer:
      "You only pay when the role is filled, ensuring no upfront costs and zero risk.",
  },
  {
    question: "How fast can Jobs Territory fill a role under this model?",
    icon: "/images/f6.png",
    answer:
      "Depending on the role and industry, we usually close positions within 7–15 business days.",
  },
  {
    question: "Can I hire multiple roles at the same time?",
    icon: "/images/f7.png",
    answer: "Absolutely, we support bulk hiring needs for growing companies.",
  },
  {
    question: "What if I don’t like the candidates presented?",
    icon: "/images/f1.png",
    answer:
      "We continue sourcing until we find candidates that match your expectations.",
  },
  {
    question: "Do you support niche or specialized roles under Industries We Hire?",
    icon: "/images/f2.png",
    answer:
      "Yes, our team has expertise in closing highly specialized and leadership positions.",
  },
  {
    question: "Why choose Jobs Territory for Industries We Hire?",
    icon: "/images/f3.png",
    answer:
      "We combine speed, industry expertise, and DEI-focused recruitment to deliver the right talent without compromise.",
  },
];
const blogs = [
  {
    id: 1,
    title: "Industries we hire a fix for costly hiring",
    slug: "industries-we-hire-a-fix-for-costly-hiring",
    image: "/images/blogsimg1.png",
  },
  {
    id: 2,
    title: "Industries we hire smarter hiring better ROI",
    slug: "industries-we-hire-smarter-hiring-better-roi",
    image: "/images/blogsh1.png",
    bg: "#1B084C",
  },
  {
    id: 3,
    title: "Fast hiring no upfront fees",
    slug: "fast-hiring-no-upfront-fees",
    image: "/images/blogimg1.png",
  },
  {
    id: 4,
    title: "Industries we hire trend or future of hiring",
    slug: "industries-we-hire-trend-or-future-of-hiring",
    image: "/images/blogsh2.png",
    bg: "#1B084C",
  },
  {
    id: 5,
    title: "Is industries we hire changing recruitment forever",
    slug: "is-industries-we-hire-changing-recruitment-forever",
    image: "/images/blogimg2.png",
  },
  {
    id: 6,
    title: "How industries we hire can cut hiring costs by 50 percent",
    slug: "how-industries-we-hire-can-cut-hiring-costs-by-50-percent",
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
        paragraph="Recruitment and workforce solutions across key industries in India."
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
        title="Our Services"
        description="Comprehensive recruitment solutions for various industries, delivering the right talent for your specific needs."
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
